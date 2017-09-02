/*
init: {
	wrap: el, 滑动区域
	//scroll: el, 移动的元素 (一般移动的元素wrap.chilren[0])
	[dir:('x'|'y')] dir 滑动方向默认为Y默认y
	over: "ease","backOut","none" 超出之后，需要怎么处理(ease：平滑回来，backOut：回弹，none:不允许超出)
	showBar: (true||false) 是否显示滚动条,默认值为true
	start:fn 按下时的回调
	move: fn 移动时的回调
	up: fn 抬起时的回调
	end: fn 动画结束时的回调 
}
*/
function mScroll(init){
	var IN = { //配置参数
		dir: "y",
		over: "backOut",
		showBar: true
	};
	for(var s in init){
		IN[s] = init[s];
	}
	IN.scroll = IN.wrap.children[0];//被滑动的元素
	var startPoint = {};//初始手指位置
	var startElOffset = {};//初始元素位置
	var lastSpeed = 0;
	var lastTime = 0;
	var lastP = {};
	var bar;
	var scale = 1;
	var offMove = true;
	var MaxT = {
		x:0,
		y:0
	};
	var MinT = {
		x:0,
		y:0
	};
	var F = .3;//拉力系数
	var isFrist = true;
	var isMove = {x:false,y:false};//是否是复合我们要求的方向
	var MoveType = "easeOutStrong";//动画形式
	css(IN.scroll,"translateX",0);
	css(IN.scroll,"translateY",0);
	css(IN.scroll,"translateZ",.01);
	
	//不能让内容比父级高度小，会出问题
	IN.scroll.style.minHeight = "100%";
	IN.scroll.style.minWidth = "100%";

	if(IN.showBar){
		bar = document.createElement("div");
		bar.className = "bar";
		if(getComputedStyle(IN.wrap)["position"] == "static"){
			IN.wrap.style.position = "relative";
		}
		bar.style.cssText = "position:absolute;background:rgba(0,0,0,.4);border-radius:3px;transition:.6s opacity;opacity:0;";
		if(IN.dir == "x"){
			bar.style.cssText += "height:6px;left:0;bottom:0;";
			scale = IN.wrap.clientWidth/IN.scroll.offsetWidth;
			bar.style.width = IN.wrap.clientWidth * scale + "px";
		} else {
			bar.style.cssText += "width:6px;right:0;top:0;";
			scale = IN.wrap.clientHeight/IN.scroll.offsetHeight;
			bar.style.height = IN.wrap.clientHeight * scale + "px";
		}
		IN.wrap.appendChild(bar);
	}
	IN.wrap.addEventListener('touchstart', function(e) {
		clearInterval(IN.scroll.timer);
		IN.start&&IN.start();
		var touch = e.changedTouches[0];
		startPoint = {
			x: Math.round(touch.pageX),
			y: Math.round(touch.pageY)
		}
		startElOffset = getScroll(); 
		MinT = {
			x: IN.wrap.clientWidth - IN.scroll.offsetWidth,
			y: IN.wrap.clientHeight - IN.scroll.offsetHeight
		};
		lastSpeed = 0;
		lastTime = Date.now();
		lastP = {x:startPoint.x,y:startPoint.y};
		isFrist = true;
		isMove = {
			x: false,
			y: false
		}
	});
	IN.wrap.addEventListener('touchmove', function(e) {
		if(isMove[(IN.dir == "x"?"y":"x")]){
			return;
		}
		var touch = e.changedTouches[0];
		var nowPoint = {
			x: Math.round(touch.pageX),
			y: Math.round(touch.pageY)
		};
		if(lastP.x == nowPoint.x&&lastP.y == nowPoint.y){
			return;
		}

		var dis = {
			x: nowPoint.x - startPoint.x,
			y: nowPoint.y - startPoint.y
		};
		if(isFrist){
			//第一次移动的时候
			if(Math.abs(dis.x) > Math.abs(dis.y)&&Math.abs(dis.x) > 2){
					isMove.x = true;
					isFrist = false;
					return;
			}
			if(Math.abs(dis.x) < Math.abs(dis.y) && Math.abs(dis.y) > 2 ) {
				isMove.y = true;
				isFrist = false;
				return;
			}
			if(Math.abs(dis.y) > 2 && Math.abs(dis.x) > 2 ) {
				isMove[IN.dir] = true;
				isFrist = false;
				return;
			}
			return;
			//按照我们要求在移动的时候，再去显示滚动条
		}
		if(isMove[IN.dir]){
			bar&&(css(bar,"opacity",100));
		}
		var nowTime = Date.now();
		var traslate = {
			x: dis.x + startElOffset.x,
			y: dis.y + startElOffset.y
		}
		if(IN.over == "none"){
			traslate[IN.dir] = Math.min(traslate[IN.dir],MaxT[IN.dir]); 
			traslate[IN.dir] = Math.max(traslate[IN.dir],MinT[IN.dir]); 
		} else if(IN.over == "ease"||IN.over == "backOut"){
			if(traslate[IN.dir] > MaxT[IN.dir]){
				traslate[IN.dir] *= F;
			} else if(traslate[IN.dir] < MinT[IN.dir]) {
				var over = traslate[IN.dir] - MinT[IN.dir];
				over *= F;
				traslate[IN.dir] = MinT[IN.dir] + over;
			}
		}
		if(IN.dir == "x")
		{
			css(IN.scroll,"translateX",traslate.x);

		} else {
			css(IN.scroll,"translateY",traslate.y);
		}
		bar&&(css(bar,IN.dir == "x"?"left":"top",-traslate[IN.dir]*scale));
		lastSpeed = (nowPoint[IN.dir] - lastP[IN.dir])/(nowTime - lastTime);
		lastTime = nowTime;
		lastP = {
			x: nowPoint.x,
			y: nowPoint.y
		};
		IN.move&&IN.move();
	});
	IN.wrap.addEventListener('touchend', function(e) {
		if(isMove[(IN.dir == "x"?"y":"x")]){
			return;
		}
		if(Date.now()-lastTime > 100){
			lastSpeed = 0;
		}
		lastSpeed = Number(lastSpeed)?lastSpeed:0;
		var time = 220;
		var dis = lastSpeed*time;
		var target = getScroll()[IN.dir] + dis;

		// 目标过界限制
		if(IN.over == "backOut"
		 &&(MaxT[IN.dir] < target||MinT[IN.dir] > target)){
		 	MoveType = "backOut";
		} else {
			MoveType = "easeOutStrong";
		}
		target = Math.min(MaxT[IN.dir],target);
		target = Math.max(MinT[IN.dir],target);
		//重置滑动时间
		time = Math.abs(target - getScroll()[IN.dir])*1.7;

		target = (IN.dir == "x"?{translateX:target}:{translateY:target});

		easeMove({
			el: IN.scroll,
			target:target,
			time:time,
			type: MoveType,
			callBack: function(){
				bar&&(css(bar,"opacity",0));
				IN.end&&IN.end();
			},
			callIn: function(){
				var traslate = getScroll();
				bar&&(css(bar,IN.dir == "x"?"left":"top",-traslate[IN.dir]*scale));
				IN.move&&IN.move();
			}
		});
		IN.up&&IN.up();
		offMove = true;
		isMove = true;
		isFrist = true;
	});
	function getScroll(){ //获取当前的滚动位置
		return {x:css(IN.scroll,"translateX"),y:css(IN.scroll,"translateY")};
	}
}
function easeMove(init){
	if(init.type != "easeOutStrong"){
		startMove(init);
		return;
	}
	var F = .08;
	cancelAnimationFrame(init.el.timer);
	init.el.timer = requestAnimationFrame(move);
	function move(){
		var isOver = true;
		var now = {};
		for( var s in init.target){ 
			var speed = Math.round((init.target[s] - css(init.el,s))*F);
			now[s] = css(init.el,s) + speed;
			if(Math.abs(init.target[s] - now[s])<2){
				now[s] = init.target[s];
			} else {
				isOver = false;
			}
		}
		for(var s in now){
			css(init.el,s,now[s]);
		}
		if(isOver){
			init.callBack&&init.callBack();
		} else {
			init.callIn&&init.callIn();
			init.el.timer = requestAnimationFrame(move);
		}
	}
}