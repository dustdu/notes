---
title: 移动端事件的一些知识点
date: 2017-07-4 21:45:36
categories: javascript
tags: 
	- javascript
	- 移动端事件
thumbnail: /img/tipimg/131027d490f3ee0d188d637cb7f4688728c7a90531088-2OIhaJ_fw658.jpg
---
# 移动端事件
- 在模拟器下，用事件绑定的方式添加touch事件，时好时坏,但是在真机上没有问题,最好用事件监听来添加事件

## 阻止默认事件
- 在webkit的模拟器下，目前已经不支持直接给document设置阻止默认事件,但是真机没有问题
- 阻止默认事件可以解决：
	- 在IOS10之后，viewport中的禁止用户缩放和最大缩放比例失效
	- 鼠标事件，在移动端会有点透问题 
	- 在ios下会有系统默认的回弹(橡皮筋效果)
	- 滑动卡顿
- 阻止默认事件会引起的问题:
	- 阻止文字的选中
	- 阻止所有的系统菜单 
		- 比如图片操作
		- window.open(this.src);
	- 阻止页面默认的系统滚动条
	- 阻止页面上所有的链接跳转
		- 链接可以在touchend中 自己添加跳转
		- `window.open(this.href);`
	- 阻止页面上的表单控件获得焦点 
		- input 可以在touchstart，手动让他获得焦点
	- 为了阻止默认事件后不推荐：**给单个控件添加阻止冒泡**	

## touch事件: 
- 在移动端也支持mouse事件

### touchEvent
- changedTouches 触发当前事件的手指列表，获取时是数组
	- clientX/clientY 相对于可视区的手指坐标
	- pageX/pageY 相对于整个文档的手指坐标
- targetTouches 当前元素上的手指列表，获取时是数组
- touches 当前屏幕上的手指列表，获取时是数组

### touchstart 手指触碰  
- mousedown 
	- 在元素中按下 
	- 在移动端也支持mouse事件,但是mouse事件的执行，会有300ms左右的延迟
	- 事件点透:
		- 手指按下之后，会先执行touch事件，然后记录点击的坐标，300ms之后，在该坐标上查找元素，如果元素有鼠标事件就执行.
		解决办法：preventDefault();

### touchmove 手指触碰元素之后，在屏幕中移动	
- mousemove 在元素中移动

### touchend 手指触碰元素之后,在屏幕中抬起	
- mouseup 在元素中抬起 

## gesture 多指事件 只在ios上可用
- gesturestart 	当前事件触发时，屏幕上有两根或者两根以上的手指
- gesturechange 触发了gesturestart 之后， 手指坐标发生变化
	- e.scale  当前两根手指之间的距离和start时手指之间的距离的比值
	- e.rotation 当前两根手指 和 start时，的选中夹角
- gestureend  触发了gesturestart 之后，手指抬起

## 两个元素碰撞判定
Demo

	function getCollide(el,elO) {
	    var elcon = el.getBoundingClientRect();
	    var elOcon = elO.getBoundingClientRect();
	    if (elcon.left > elOcon.right
	    ||elcon.right < elOcon.left
	    ||elcon.top > elOcon.bottom
	    ||elcon.bottom < elOcon.top) {
	        return false;
	    }else{
	        return true;
	    }
	}

## 利用canvas渲染图片，提高性能
Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	body {
		background: #ccc;
	}
	canvas {
		display: block;
		background: #fff;	
	}
	</style>
	</head>
	<body>
	<canvas width="400" height="400" id="c"></canvas>
	<script type="text/javascript">
	(function(){
		var c = document.querySelector('#c');
		var cxt = c.getContext("2d");
		//cxt.drawImage(img,x,y,w,h);绘制图片
		var img = new Image();
		img.src = "pics/1.jpg";
		img.onload = function(){	
			cxt.drawImage(img,0,-200,200,800);//drawIamge必须在图片加载完之后使用
		};	
	})();	
	</script>	
	</body>
	</html>