## 定义变量，判断，进行循环

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	.wrap {
		width: 400px;
		margin: 0 auto;
		text-align: center;
	}
	#img {
		position: relative;
	}	
	#img img {
		vertical-align: top;
		width: 400px;
		height: 300px;
	}
	</style>	
	<script type="text/javascript">
	window.onload = function(){
		// 获取
		var imgWrap = document.querySelector('#img');
		var img = imgWrap.querySelector('img');
		var prev = imgWrap.querySelector('input[value="prev"]');
		var next = imgWrap.querySelector('input[value="next"]');
		var nub = 1;
		prev.onclick = function() {
			nub--;
			if(nub < 1) {
				nub = 5;
			}
			img.src = "img/0" + nub + ".jpg";
		};
		next.onclick = function() {
			nub++;
			if(nub > 5) {
				nub = 1;
			}
			img.src = "img/0" + nub + ".jpg";
		};
	};	
	</script>
	</head>
	<body>
	<div class="wrap">
		<input type="button" value="顺序切换" id="btn1">
		<input type="button" value="循环切换" id="btn2">
		<div id="img">
			<img src="img/01.jpg">
			<input type="button" value="prev">
			<input type="button" value="next">
		</div>
	</div>
	</body>
	</html>

## 自定义开关
- 条件不足时

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	window.onload = function() {
		var btn = document.querySelector('#btn');
		var is = true; /*  默认是true*/
		btn.onclick = function(){
			if(is == true) {
				alert("正确");	
				is = false; /* 为true的时候，就改成false，下次就会走else */
			} else {
				alert("错误");
				is = true; /* 为false的时候，就改成true，下次就会走if */
			}	 
		};
	};
	</script>
	</head>
	<body>
		<input type="button" id="btn" value="按钮">
	</body>
	</html>

## 当前事件发生时，之前事件消失
### 定点清除
- 点击之后，清除上次选中的，然后在给当前选中的加上选中状态

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		.active {
			background: red;
		}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		var input = document.querySelectorAll('input');
		/*
			点击之后，清除上次选中的，然后在给当前选中的加上选中状态
		*/
		var now = 0; // 记录选中的是第几个
		for(var i = 0; i < input.length; i++){
			input[i].index = i; //添加索引
			input[i].onclick = function(){
				input[now].className = ""; //清除上次选中的
				this.className = "active";//给当前加上选中样式
				now = this.index; //记录现在选中
			};
		}
	};
	</script>
	</head>
	<body>
	<input type="button" class="active" value="按钮">
	<input type="button" value="按钮">
	<input type="button" value="按钮">
	<input type="button" value="按钮">
	<input type="button" value="按钮">
	</body>
	</html>

### 大清洗
- 先重置样式，在为当前事件添加效果

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	#list {
		width: 300px;
		margin: 30px auto;
		padding: 0;
		list-style: none;
	}
	#list li {
		float: left;
		margin: 5px;
		width: 90px;
		height: 90px;
		background: red;
		color: #fff;
		font-size: 50px;
		line-height: 90px;
		text-align: center;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		var list = document.querySelector('#list');
		var lis = list.querySelectorAll('li');
		for(var i = 0; i < lis.length; i++) {
			lis[i].onclick = function(){
				// 每次点击之后，就把所有的lis的样式都清除
				for(i = 0; i < lis.length; i++){
					lis[i].style.cssText = "";
				}
				// 然后再给当前点击的元素加上样式
				this.style.background = "blue";
			};
		}
	};
	</script>
	</head>
	<body>
	<ul id="list">
		<li style="background:blue;">1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
		<li>6</li>
		<li>7</li>
		<li>8</li>
		<li>9</li>
	</ul>	
	</body>
	</html>

### 清除当前之外
- 判断当前事件，清除其他元素

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	#list {
		width: 300px;
		margin: 30px auto;
		padding: 0;
		list-style: none;
	}
	#list li {
		float: left;
		margin: 5px;
		width: 90px;
		height: 90px;
		background: red;
		color: #fff;
		font-size: 50px;
		line-height: 90px;
		text-align: center;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		var list = document.querySelector('#list');
		var lis = list.querySelectorAll('li');
		for(var i = 0; i < lis.length; i++) {
			lis[i].onclick = function(){
				for(var i = 0; i < lis.length; i++){
					// this当前被点击元素
					// 如果lis[i]和this相等，说明lis[i]就是我们点击的this
					if(lis[i] == this){
						alert(i);
						lis[i].style.background = "blue";
					} else {
						lis[i].style.background = "";
					}
				}
			};
		}
	};
	</script>
	</head>
	<body>
	<ul id="list">
		<li style="background:blue;">1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
		<li>6</li>
		<li>7</li>
		<li>8</li>
		<li>9</li>
	</ul>	
	</body>
	</html>

### 覆盖样式，之后单独添加样式

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	#wrap {
		width: 500px;
		height: 500px;
		position: relative;
		font: 16px/50px "微软雅黑";
		text-align: center;
		margin: 50px auto;
	}
	#wrap div {
		cursor: pointer;
	}
	</style>
	</head>
	<body>
		<input type="button" name="" value="创建">
		<div id="wrap">
		</div>
	<script type="text/javascript">
		var wrap = document.getElementById('wrap');
		var button = document.querySelector('input[type="button"]');
		var divBox = wrap.getElementsByTagName('div');
		button.onclick = function(){
			var divCon = "";
			for (var i = 0; i < 10; i++) {
				for (var j = 0; j < 10; j++) {
					divCon += '<div style="position:absolute;top:' + i*50 + 'px;left:' + j*50 + 'px;box-sizing:border-box;width: 50px;height: 50px;border: 1px solid #ccc;background: #31CD9C;">' + ((i*10) + j) + '</div>';
				}
			}
			wrap.innerHTML = divCon;
			for (var i = 0; i < divBox.length; i++) {
				divBox[i].onclick = function(){
					for (var i = 0; i < divBox.length; i++) {
						divBox[i].style.background = '#31CD9C';
					}
					this.style.background = 'green';
				};
			}
		};
	</script>
	</body>
	</html>

## 索引 （自定义元素的属性，为一组元素建立索引）
- 自定义属性:
	1. 对象本身不具备的属性（不是标准中规定的属性，而是我们自己设置的）
	2. 索引值: 在事件中，需要知道当前元素是一组元素中第几个的时候，使用索引值

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	.list {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.list li {
		margin: 10px;
		float: left;
		width: 100px;
		height: 100px;
		background: Red;
		color: #fff;
		font-size: 20px;
	}	
	</style>
	<script type="text/javascript">
	// 点击li 获取li是这一组中的 第几个
	window.onload = function(){
		var lis = document.querySelectorAll('.list li');
		/*
			lis[0].id = 0;
			lis[1].id = 1;
			lis[2].id = 2;
		*/
		for(var i = 0; i < lis.length; i++){
			lis[i].index = i;
			/*
				定义一个元素本来不存在属性，自定义属性
	
				索引值,需要先设置，才会有
			*/
			lis[i].onclick = function(){
				alert(this.index);
			};
		}
	};
	</script>
	</head>
	<body>
	<ul class="list">
		<li>第一个li</li>
		<li>第二个li</li>
		<li>第三个li</li>
		<li>第四个li</li>
		<li>第五个li</li>	
	</ul>
	</body>
	</html>

## 选项卡嵌套滚动

Demo

	<!DOCTYPE html >
	<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>无标题文档</title>
	<style type="text/css">
	li{
		list-style: none;
		cursor: pointer;	
	}
	ul{
		margin: 0;
		padding: 0;
	}
	#box{
		border: 5px solid #E7E7E7;
		height:400px;
		width: 800px;
		overflow: hidden;
		margin: 0 auto;
	}
	#box>ul{
		width:100px;
		height: 100%;
		float: left;
	}
	#box>ul li{
		line-height: 99px;
		text-align: center;
		background-color: #000;
		border-bottom: 1px solid #E7E7E7;
		color:white;
	}
	#box>ul .active{
		background-color: red;
		color:black;
	}
	#box div{
		float: left;
		width: 700px;
		height: 100%;
		position: relative;
		display: none;
	}
	#box img{
		width: 100%;
		height: 100%;
	}
	#box div ul{
		position: absolute;
		bottom: 0;
		left: 0;
	}
	#box div li{
		float: left;
		border-right: 1px solid white;
		background-color: black;
		opacity: .7;
		line-height: 30px;
		margin-right: -1px;
		color:white;
		text-align: center;
	}
	#box div .active{
		background-color: #EF3163;
	}
	#box img {
		display:  none;
	}
	</style>
	<script type="text/javascript">
	var now = 0;//大选项卡当前是这一组的第几个
	var subNow = 0;// 小选项卡当前是这一组的第几个
	
	window.onload = function(){
		var box = document.getElementById("box");
		var nav = box.getElementsByTagName('ul')[0];
		var navs = nav.getElementsByTagName('li') 
		var cons = box.getElementsByTagName('div'); 
		var btns = document.querySelector('input');
			// subNow++;
			// if(subNow >= 这组的长度){
			// 	now++； 
			// 	subNow = 0;
			// } 
		btns.onclick = function(){
			var subNavs = cons[now].getElementsByTagName("li");
			var subCons = cons[now].getElementsByTagName("img");
			subNow++;
			if(subNow >= subNavs.length){
				now++; 
				// 过界处理
				now = now%navs.length;
				// now已经切换到了下一组，但是上边获取元素的时候，获取的还是刚刚的一组，所以要根据now重新获取一下
				subNavs = cons[now].getElementsByTagName("li");
				subCons = cons[now].getElementsByTagName("img");
				for(var i = 0; i < navs.length; i++){
					navs[i].className = "";
					cons[i].style.display = "none";
				}
				navs[now].className = "active";
				cons[now].style.display = "block";
				//开始把大选项卡 的样式切换过来
				subNow = 0;
			} 
			console.log(subNavs);
			for(var i = 0; i < subNavs.length; i++){
				subCons[i].style.display = "none";
				subNavs[i].className = "";
			}
			subCons[subNow].style.display = "block";
			subNavs[subNow].className = "active";
		};
		tab(navs,cons);
		/*
			点击一次：
				小选项 + 1
			    当小选项走完一组，大选项切换	
		*/
		for(var i = 0; i < cons.length; i++){
			var subNavs = cons[i].getElementsByTagName("li");
			var subCons = cons[i].getElementsByTagName("img");
			subTab(subNavs,subCons);
		}
	};
	function tab(navs,cons){
		for(var i = 0; i < navs.length; i++){
			navs[i].index = i;
			navs[i].onmouseover = function(){
				for(var i = 0; i < navs.length;i++){
					navs[i].className = "";
					cons[i].style.display = "none";
				}
				now = this.index;
				navs[this.index].className = "active";
				cons[this.index].style.display = "block";
				/*
					1) 从this.index上 知道大的第几项是选中的,找到这组下边小导航
					2) 循环所有的小导航，如果第i个的class是选中的，说明当前小导航选中是第i个
				*/
				var subNavs = cons[this.index].getElementsByTagName("li");
				for(var i = 0; i < subNavs.length; i++){
					if(subNavs[i].className == "active"){
						subNow = i;
					}
				}
			};
		}
	}
	// subtab 小选项卡
	function subTab(navs,cons){
		for(var i = 0; i < navs.length; i++){
			navs[i].index = i;
			navs[i].onmouseover = function(){
				for(var i = 0; i < navs.length;i++){
					navs[i].className = "";
					cons[i].style.display = "none";
				}
				subNow = this.index;
				navs[this.index].className = "active";
				cons[this.index].style.display = "block";
			};
		}
	}
	
	</script>
	</head>
	<body>
	<input type="button" value="下一步">
	<div id="box">
	  <ul class="navs">
	    <li class="active">暖色调</li>
	    <li>金色夕阳</li>
	    <li>灰色格调</li>
	    <li>baby</li>
	  </ul>
	  <div style="display: block;">
	    <img src="images/img1.gif" style="display: block">
	    <img src="images/img2.gif">
	    <img src="images/img3.gif">
	    <img src="images/img4.gif">
	    <ul>
	      <li style="width:175px;" class="active">暖色键盘</li>
	      <li style="width:175px;">惬意时光</li>
	      <li style="width:175px;">午后</li>
	      <li style="width:175px;">一杯苦咖啡</li>
	    </ul>
	  </div>
	  <div>
	    <img src="images/img5.gif" style="display: block;">
	    <img src="images/img6.gif">
	    <ul>
	      <li style="width:350px;" class="active">街边夕阳</li>
	      <li style="width:350px;">金色稻草</li></ul>
	  </div>
	  <div>
	    <img src="images/img7.gif" style="display: block">
	    <img src="images/img8.gif">
	    <img src="images/img9.gif">
	    <img src="images/img10.gif">
	    <ul>
	      <li style="width:175px;" class="active">灰色通讯</li>
	      <li style="width:175px;">咖啡'配'饼干</li>
	      <li style="width:175px;">孤单键盘</li>
	      <li style="width:175px;">枯树</li></ul>
	  </div>
	  <div>
	    <img src="images/img11.gif" style="display: block">
	    <img src="images/img12.gif">
	    <ul>
	      <li style="width:350px;" class="active">baby素材一</li>
	      <li style="width:350px;">baby素材二</li></ul>
	  </div>
	</div>	
	</body>
	</html>

## 图片无缝滚动

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	ul,
	ol {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.wrap {
		margin: 100px auto;
		position: relative;
		width: 200px;
		height: 200px;
	}	
	.over {
		position: relative;
		width: 200px;
		height: 200px;
		overflow: hidden;
	}
	.list {
		position: absolute;
		left: 0;
		top: 0;
	}
	.list li {
		float: left;
		box-sizing: border-box;
		width: 200px;
		height: 200px;
		border: 2px solid #000;
		font: 100px/198px Arial;
		text-align: center;
	}
	.navs {
		position: absolute;
		left: 0;
		right: 0;
		bottom: -30px;
		text-align: center;
	}
	.navs li {
		display: inline-block;
		width: 24px;
		height: 24px;
		background: #ccc;
		color: #000;
		font: 14px/24px "宋体";
	}
	.navs .active {
		background: #000;
		color: #fff;
	}
	.btns {
		position: absolute;
		top: -30px;
		width: 30px;
		height: 30px;
		background: #000;
		color: #fff;
		font: 12px/30px "宋体";
		text-align: center;
	}
	#prev {
		left: 0;
	}
	#next {
		right: 0;
	}
	</style>
	<script type="text/javascript" src="startmove.js"></script>
	<script type="text/javascript">
	window.onload = function(){
		var wrap = document.querySelector('.wrap');
		var list = document.querySelector('.list');
		var pics = document.querySelectorAll('.list li');
		var liw = css(pics[0],"width");
		var navs = document.querySelectorAll('.navs li');
		var next = document.querySelector('#next');
		var now = 0;
		css(list,"width",pics.length*liw);
		for(var i = 0; i < navs.length; i++){
			navs[i].index = i;
			navs[i].onmouseover = function(){
				// 归位至第一组
				/*
					当now已经走到第二组了，鼠标移入之后，瞬间归位至第一组，然后在执行动画
				*/
				if(now >= navs.length ){
					now = now%navs.length;
					css(list,"left",-now*liw);
				}
	
				for(var i = 0; i < navs.length; i++){
					navs[i].className = "";
				}
				this.className = "active";
				now = this.index;
				startMove({
					el:list,
					type: "easeOut",
					time: 500,
					target: {
						left: -this.index*liw
					}
				});
			};
		}
		prev.onclick = function(){
			//如果是第一组的第0张，用户再点击就会出去，所以在第一组的第0张时，瞬间切换的到第二组的第0张
			if(now == 0){
				now = pics.length-1;
				css(list,"left",-now*liw);
			}
			now--;
			for(var i = 0; i < navs.length; i++){
				navs[i].className = "";
			}
			navs[now%navs.length].className = "active";
			startMove({
				el:list,
				type: "easeOut",
				time: 2000,
				target: {
					left: -now*liw
				}
			});
		};
		next.onclick = function(){
			//给最后再复制一个第0张,当用户切换到第二个第0张(也就是最后一张)，瞬间切换会第一个0张
			if(now >= pics.length-1){
				now = 0;
				css(list,"left",0);
			}
			now++;
			for(var i = 0; i < navs.length; i++){
				navs[i].className = "";
			}
			navs[now%navs.length].className = "active";
			startMove({
				el:list,
				type: "easeOut",
				time: 2000,
				target: {
					left: -now*liw
				}
			});
		};
		autoPlay();
		function autoPlay(){
			timer = setInterval(next.onclick,2000);
		}
		wrap.onmouseover = function(){
			clearInterval(timer);
		};
		wrap.onmouseout = autoPlay;
	};
	</script>
	</head>
	<body>
	<div class="wrap">
		<div class="over">
			<ul class="list">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
				<li>1</li>
			</ul>
		</div>	
		<ol class="navs">
			<li class="active">1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
		</ol>
		<a href="javascript:;" class="btns" id="prev">prev</a>
		<a href="javascript:;" class="btns" id="next">next</a>
	</div>	
	</body>
	</html>