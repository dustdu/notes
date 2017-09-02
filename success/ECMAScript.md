---
title: ECMAScript的数据和运算
date: 2017-07-1 21:16:21
categories: javascript
tags: 
	- javascript
	- ECMAScript
	- js数据类型
thumbnail: /img/tipimg/ECMAScript.jpg
---
## 数据类型
1. 标准划分
	- 基本类型: number/string/boolean/undefined/null
	- 对象类型（复合类型）:object(包含Array)
2. typeof(运算符,查看数据类型)
	- number:
		- Number.POSITIVE_INFINITY 正无穷
		- Number.NEGATIVE_INFINITY 负无穷
		- 从负无穷到正无穷的数字以及NaN
		- NaN(not a Number): 非数字 类型number
			1. NaN不等于任何东西，并且不等于它自己,不能比较
			2. 检测一个内容是否是NaN的时候，可以使用isNaN();
			3. 数据类型：number
			4. isNaN() return: true/false, isNaN隐式调用了number
				- isNaN(要检测的内容) 如果转化结果是一个数字就返回false，如果不是一个数字就返回true ，isNaN会进行隐式类型转换，转换所调用的方法是Number
	- string:
		- 包含在引号''中的一串字符
	- undefine:
		- 无定义
	- boolean:
		- true、false
	- object:
		- Array、object、Element对象、null
			- null：空对象 （null不能进行属性操作）数据类型: object
				- 空数组不等于空对象	
	- function 	

## 强制类型转换
### 强制转换为数字（返回值都是一个数字）
- parseInt(要转换的内容)、
	- 从左向右一位位转换，碰到一位非数字，就把之前的内容提取出来，如果第0位就是非数字，结果NaN
- parseFloat(要转换的内容)
	- 从左向右一位位转换，碰到一位非数字（可以匹配一个小数点），就把之前的内容提取出来，如果第0位就是非数字，结果NaN
- Number(要转换的内容):
	- 先看完整个内容，然后整体去转换数字
		- true 1/false 0；
		- 空数组 0 ([] 0)
		- 空数组只有一位的时候，会用这位去转换,并且只转换数字和字符串，其他的都是NaN (["2"] 转换数组的第0位)
		- 数组有多位，只会被转换成NaN ([2,3] 转换NaN)

### 强制转换为字符串
1. 要转换的内容.toString()
2. String(要转换的内容)

### 强制转换为布尔值
- Boolean(要转换的内容);	
	1. 真: true、非0数字、非空对象、非空字符串
	2. 假: false、NaN、0、null、空字符串、undefined

## 隐式类型转换
- 浏览器自己进行转换,其他类型转换成数字，主要调去Number

## 运算符
### 赋值运算符
	=、+=(a += b  --- a = a + b)、-=、*=、/=、%=

### 算术运算符
- +、++
	- 只有加号左右两侧是数字的情况才会执行加法运算,如果有一侧是字符串就会执行字符串连接，连接的结果也是字符串
- -、--
- *
- /
- % 取模
	- 这些运算符都是只有数字运算的功能，所以在使用的时候，都会去把其他类型转换成数字
	

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	// "translateX(100px)"
	window.onload = function() { 
		var rotateBtn = document.getElementById("rotateBtn");
		var translateBtn = document.getElementById("translateBtn");
		var box = document.getElementById("box");
		var deg = 0;
		var tX = 0;
		rotateBtn.onclick = function(){
			deg += 5;
			box.style.transform = "rotate(" + deg + "deg) translateX(" + tX + "px)";
		};
		translateBtn.onclick = function(){
			tX += 50;
			box.style.transform = "rotate(" + deg + "deg) translateX(" + tX + "px)";
		};
		
	}
	</script>
	<style type="text/css">
	#box {
		margin: 100px;
		width: 100px;
		height: 100px;
		background: red;
		transform: rotate(0deg) translateX(0px);
		color: #fff;
		font-size: 30px;
	}
	</style>
	</head>
	<body>
		<input type="button" value="旋转" id="rotateBtn">
		<input type="button" value="位移" id="translateBtn">
		<div id="box">上</div>
	</body>
	</html>

## 关系运算符
	<、>、<=、>=、==、!=、===、!==
- 比较后都会返回布尔值
- == 和 ===，以及	!=和!==的区别
- == 和 != 会进行隐式类型转换，把左右两侧的数据类型转换成一样的之后，再去比较
- ===和!== 进行比较的时候，也会比较数据类型，数据类型不会进行比较，判定两边不相等

## 逻辑运算符
- 返回的结果都是 true和 false
- && 与
	- 当一个条件返回false，就结束运行直接返回false，如果第一条件返回true，那再来看第二个条件，如果第二个条件返回false，整体也为false，如果两个两条件都返回true则返回true
- || 或 
	- 当一个条件返回true，就结束运行，直接返回true，如果第一条件返回false，那再来看第二个条件，如果第二个条件返回true，整体也为true，如果两个两条件都返回false则返回false
- ! 否  
	- 取反
- 三目运算
	判断条件?成立执行的语句:不成立执行的语句
	条件成立返回:  成立执行的结果
	条件不成立返回:  不成立执行的结果

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	var a = 10;
	var b = 12;
	var c = a > b ? a : b;
	alert(c);	
	</script>
	</head>
	<body>
		
	</body>
	</html>

## continue 跳出本次循环

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	// continue 跳出本次循环
	for(var i = 0; i < 5; i++){
		if(i == 3){
			continue; //跳出本次循环
		}
		console.log(i);
	}	
	</script>
	</head>
	<body>
		
	</body>
	</html>

## break 终止整个循环
- break 默认只会终止，紧邻的这个循环,如果要终止其他循环，需要给循环起名字

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	/*
	for (var i = 0; i < 5; i++) {
		for(var j = 0; j < 5; j++) {
			if(i == 3&&j==3) {
				break;
			}
			console.log(i,j);
		}
	}*/
	name:for (var i = 0; i < 5; i++) {
		for(var j = 0; j < 5; j++) {
			if(i == 3&&j==3) {
				break name;
			}
			console.log(i,j);
		}
	} 
	</script>
	</head>
	<body>
		
	</body>
	</html>

## 对象
- 对象存储数据，是存在对象的属性中，
	- obj.key = value
- 对象是一种复杂类型的数据，在对象中我们可以存储任意类型的数据
	1. 第一种:属性操作

			读操作  obj.属性名
			写操作  obj.属性名 = 属性值;
					obj.key = val; //键值对

		- 是写死的一个值，不能使用变量， obj.w 这么写就认为在找 obj的w属性。
	2. 第二种:属性操作

			读操作  obj["属性名"]
			写操作  obj["属性名"] = 属性值;
					obj["key"] = val; //键值对
			** 注意第二种操作方法 []写的是一个字符串

		- 接受的是一个字符串，字符串就可以存在变量中，可以直接写obj[变量调用];

## in运算
- 判断对象中是否有这个属性，返回 true 或 false
- ` alert("name" in obj);` obj 有 name属性就返回 true，否则 返回

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	var obj = {};
	obj['name'] = "Leo";
	obj['age'] = 40;
	obj['gender'] = "female";
	obj['width'] = "180px";
	obj['height'] = "180px";
	obj['children'] = ["大明","小明","三明"];
	alert("name" in obj); // obj 有 name属性就返回 true，否则 返回false
	</script>
	</head>
	<body>
		
	</body>
	</html>

## for in
- for in 可以用来循环 对象和数组,不能用来循环一组元素
- for 只能用来循环 数组和类数组(一组元素)
- `for (var s in obj)` 
	- 通过 in 方法，每次循环的时候把 循环变量s 变成obj对应属性名字 

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	var obj = {};
	obj['name'] = "Leo";
	obj['age'] = 40;
	obj['gender'] = "female";
	obj['width'] = "180px";
	obj['height'] = "180px";
	obj['children'] = ["大明","小明","三明"];
	for (var s in obj) { //通过 in 方法，每次循环的时候把 循环变量s 变成obj对应属性名字 
		console.log(s,obj[s])// s的类型是字符串;
	}
	</script>
	</head>
	<body>
		
	</body>
	</html>

## while循环
	起始值
	while(判断条件){
		执行语句;
		自增;
	}

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	var i = 0;
	while(i < 5){
		console.log(i);
		i++;
	}
	</script>
	</head>
	<body>
		
	</body>
	</html>

## switch 
	switch(要判断的内容) {
	
	}
- 穿刺：
	1. case 成立会把他下边所有的代码都执行了，知道遇到break
	2. 如果没有写break的话，就会形成穿刺现象，把下边所有的代码都执行了

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	var a = 15;
	switch(a) {
		case 10: // 当 a == 10
			console.log("我想给大家放天假");
			break; //a == 10的语句结束之后 添加break
		case 15: // 当 a == 15
			console.log("当然我就是想想");
			break;	
		case 20: // 当 a == 20
			console.log("其实我真正想的是带大家出去玩");
			break;
		default: //以上所有的判断都不成立
			console.log("还是写作业吧");
	}	
	</script>
	</head>
	<body>	
	</body>
	</html>

## let
- es6中的，定义变量 可以直接调用i 不兼容

## 传值 传址
- 传值：传递的是具体的数值(对象类型以外的数据) 
- 传址：传递的是在内存中的引用地址 (对象类型的数据)

## json 前后端数据交互中，最常用的数据格式
- JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式
- 一种类似JS中的对象格式的字符串
- 数据以{}或者[]作为起始和结束
- '{}'
- '[]'
- 每个数据使用  键值对形式  key : value
- key必须使用""包含
- 多个值之间使用逗号分隔
- object JSON.parse(JSONString)
	- 把JSONString转换成JS中对象类型	
- string JSON.stringify(object)
	- 把object转成JSON格式的字符串