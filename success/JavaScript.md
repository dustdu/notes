---
title: javascript基础，需要注意的问题
date: 2017-07-03 14:38:26
tags:
    - javascript
categories: javascript
thumbnail: 
---
## 注意
- JS本身严格区分大小写

## javascript(JS)的组成?
- DOM 文档对象模型
- BOM 浏览器对象模型
- ECMAScript 

## javascript(JS)在页面中处理了什么事情?
- 特效交互
- 数据交互
- 逻辑操作

## 常见特效的原理
- 通过js修改元素的css样式，来操作元素的变化

## js可以写在哪
- 写在写标签内部，行间事件(不允许使用)
- 写在页面内部专门的script标签中
- 写在专门的js文件中(注意文件的后缀名是.js)，通过script标签的src引入文件

## 一组元素(元素集合，类数组)
- 不能直接操作
- 元素哪怕只有1个，他也是一组元素
- 元素在操作的时候，可以使用下标
- 如果需要知道这组元素有几个，可以使用 length属性

## 调试
- alert() 弹出对话框 接受的是个字符串
- console对象中的方法
	- console.log() 打印控制台
	- console.dir() 显示一个对象所有的属性和方法（已经不是标准方法）
	- [还有很多](https://developer.mozilla.org/en-US/docs/Web/API/console)

## 属性操作
- 属性读操作 (获取元素的属性值)
	- 输出类名class 不能用class，用className(输出id,用id)
	- style 操作的是元素的行间样式（不建议使用）
	- 获取src时候，获取到的是绝对路径
	- 获取background这类复合样式的时候,firefox下可以获取到复合样式中的所有样式而chrome下获取到的只是我们写了的样式
	- 设置了十六进制颜色，但是获取的时候，获取到的是rgb颜色
	- 遇到"-",去掉"-"首字母大写

- 属性的写操作 (修改元素的属性值)
	- 把等号右侧的值赋给左侧
	- cssText 获取style中所有内容
		- 直接修改cssText会覆盖，style中的所有内容，如果不想覆盖之前的所有内容，可以直接写 style，或者用 +=
	- cssText = "" 可以直接清除所有的行间样式
	- innerHTML 元素的内容	
		- 从元素的开标签到闭合标签之间的所有内容,包括元素中包含的子元素
		- 直接设置元素的innerHTML，或替换掉之前的所有内容,如果不想替换只是添加内容用 +=
		- 操作元素的innerHTML后，子元素的JS事件失效
	- 自定义属性
		- 对象本身不具备的属性
		- 索引值

## 变量命名
- 可以使用字母、数字、$、_、
- 不能以数字开头
- 以驼峰命名
- 常量：全部大写、用_隔开
- 关键字和保留字不能用于命名
- 变量在命名时最好带有含义
- 注意不能使用关键字和保留字
- [http://blog.csdn.net/itpinpai/article/details/70313755](http://blog.csdn.net/itpinpai/article/details/70313755)

## if判断语句
- 同一位置
- . 

		if(布尔值true或false){
				为true时要执行的语句
			} else {
				为false时要执行的语句
			}

- 成立做某件事，不成立啥都不做

		f(a + b < 0) {
			alert(true);
		}

- 条件成立就执行里边的内容，下边 `else if` 就不会在执行，不成立，就查看本条

		if(a + b < 1){
			alert(1);
		} else if(a + b < 2) {
			alert(2);
		} else if(a + b < 3) {
			alert(3);
		}

- .

		if(a + b < 1){
			alert(1);
		} else if(a + b < 2) {
			alert(2);
		} else if(a + b < 3) {
			alert(3);
		} else {
			alert("都不成立");
		}


- 可以为函数自定义条件

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
			//alert(!is);  ! 取反 true 变成false false变成true
			btn.onclick = function(){
				if(is) {
					alert("正确");	
				} else {
					alert("错误");
				}	 
				is = !is;
			};
		};
		</script>
		</head>
		<body>
			<input type="button" id="btn" value="按钮">
		</body>
		</html>

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	.wrap {
		width: 140px;
		margin: 0 auto;
		border: 1px solid #000;
	}
	h3 {
		margin: 0;
		font: 16px/36px "宋体";
		background: #f1f1f1;
		text-align: center;
	}	
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: none; 
	}
	li {
		font: 14px/26px "宋体";
		border-top: 1px solid #ccc;
		text-indent: 10px;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		var wrap = document.querySelector('.wrap');
		var ul = document.querySelector('ul');
		wrap.onclick = function(){
			/*
				点击第一次style（行间样式）中，没有写任何内容，所有获取到的就是空的,所以第一次判断的结果就是false
			*/
			alert(ul.style.display);
			if(ul.style.display == "none") {
				ul.style.display = "block";
			} else {
				ul.style.display = "none";
			}
		};
	};
	</script>
	</head>
	<body>
	<div class="wrap">
		<h3>请选择内容</h3>
		<ul>
			<li>请选择内容</li>
			<li>妙味课堂</li>
			<li>妙味食堂</li>
			<li>妙味澡堂</li>	
		</ul>
	</div>
	</body>
	</html>

## for 循环
	for(var i = 0; i < 5; i++) {
		alert(i);
	}
- 当我们需要同时处理一组数据或元素的时候，就需要使用循环

		1.起始值
		2.判断条件
		3.执行语句
		4.自增

- 循环在页面加载完成之后，就执行了
- 循环变量在for循环结束之后，一样调用，不过调用的值是for不符合条件之后的值(i=.length)
- 当变量的判断条件永远成立的时候，这个循序就会变成一个死循环

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	#box{
		margin: 40px auto;
		position: relative;
		width: 500px;
		height: 500px;
		border: 1px solid #000;
	}	
	#box div {
		position: absolute;
		width: 100px;
		height: 100px;
		background: red;
		font-size: 50px;
		color: #fff;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		var box = document.querySelector('#box');
		var inner = "";
		var t = -1;
		var l = -1;
		var dis = 1;
		var w = 100;
		var h = 100;
		for(var i = 0;i < 5;i++) {
			if(l >= 2) { //拐点 设置元素在哪转弯
				dis = -dis;
			}
			l += dis;
			t++;
			inner += '<div style="left:'+(l*w)+'px;top:'+(t*h)+'px;">'+i+'</div>';
		}
		box.innerHTML = inner;	
	};
	</script>
	</head>
	<body>
	<div id="box"></div>	
	</body>
	</html>

## 开关 `var isOrder = false;`
	- 判断条件不足时可以自定义条件
	- isOrder 开关或者说自定义的条件 为true   false 