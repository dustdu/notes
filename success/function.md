---
title: function
date: 2017-07-04 18:15:53
tags:
    - function
    - javascript
categories: javascript
thumbnail: 
---
## 函数
- function 功能方法 把一个个零散的代码和数据，组合成一个完整的方法.

## 函数声明
- 有名字的函数

		function name() {
			要执行的内容;
		}

- 匿名函数

		function(){
			要执行的内容;
		}

## 函数调用:
- 事件调用:
	- 不加括号
- 直接调用：
	- 添加括号
- 匿名函数自执行 
	- (函数)();
	- !函数();
	- ~函数();
	- +函数();
	- -函数();
- 什么时候加括号，什么时候不加括号:
	- 当浏览器读到这行代码的时候，就执行需要给函数调用加();
	- 当某种特定的条件下才执行，不需要加();

Demo 

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	/* 定义函数 */
	function fn() {
		alert(1);
	}	
	var fn2 = function(){
		alert(2);
	}
	fn2();
	/* 函数调用 */
	fn(); //直接调用
	document.onclick = fn2; //事件调用
	document.onclick();
	document.onclick();
	</script>
	</head>
	<body>
		
	</body>
	</html>

## 传参
	function fn(a形参){
		alert(a参数使用);
	}
	fn(实参);
- 函数的参数：
	- 形参：  形式上的参数(函数定义的时候)
		- 在定义函数的小括号中，多个参数以逗号分开
		- 只能在函数的内部使用
	- 实参：  实际传入的参数(函数调用的时候)
		- 调用函数时传入，多个参数以逗号分开
- 函数拥有多个参数，注意在使用的时候，形参和实参要一一对应;
- 参数其实就相当于 函数的局部变量
- 只定义形参不传实参的话， 参数就是undefined
- arguments 不定参 函数所有参数的集合 通常用在函数的参数个数不固定
	- 获取其中一个参数：下标
	- 获取参数的总个数：length

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	/*
		arguments 不定参
			通常用在函数的参数个数不固定
			arguments 函数参数的集合
				使用arguments的其中一位，使用下标
				length			
	*/
	function fn(){
		var nub = 0;
		for(var i = 0; i < arguments.length; i++){
			nub += arguments[i];
		}
		alert(nub);
	}	
	fn(1,2,3);
	/*
	写一个函数，可以传递N个参数，把参数的差,求出来.第0个参数是 被减的数
	*/
	fn(1,2,3);
	function fn(){
		var nub = arguments[0];
		for(var i = 1; i < arguments.length; i++){
			nub -= arguments[i];
		}
		alert(nub);
	}
	</script>
	</head>
	<body>
		
	</body>
	</html>

## 函数返回值（return）
- 每个函数中都可以存储数据，存储的数据，可以在函数执行完成之后拿到 
- return 函数返回值 (函数执行完成之后，返回的数据)
	 - 只能在函数中使用
	 - 方便函数复用
	 - return后面跟的值为函数执行后的返回值
	 - 每个函数都有返回值，如果我们没有定义 返回值就是 undefined
	 - 函数中 return后边的内容 不会被执行(在函数执行时，会把return后边的数据返回，然后函数执行到此结束)

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	function a() {
		var nub = 10;
		return nub;
	
		alert(nub*nub);
	}
	var b = a();
	alert(b);
	</script>
	</head>
	<body>
		
	</body>
	</html>