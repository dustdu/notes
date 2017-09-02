---
title: 对Object.defineProperty方法的学习和理解
date: 2017-08-19 00:48:50
categories: javascript
tags: 
    - javascript
    - ECMAScript
    - Object
---
## [Object.defineProperty（）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#语法)
Object.defineProperty() 此方法会对对象的属性进行 定义/修改，并返回这个对象。

- Object.defineProperty(obj, prop, descriptor)
	- obj  
	被操作的目标对象
	- prop  
	目标对象需要定义或修改的属性的名称。
	- descriptor  
	对将被定义或修改的属性的特性（目标的属性描述符）。

- 我们一般是通过赋值来为对象添加/修改属性，属性值可以被改变，也可以被删除

		let obj = {x:10};
		obj.y = 20;
        obj.x = 100;
        obj.x = 'abc';
		delete obj.x;

	但是Object.defineProperty() 则允许改变这些属性的默认设置。有数据描述符和存取描述符两种主要形式。描述符必须是这两种形式之一；不能同时是两者。（待完善）

	- 数据描述符是一个拥有可写或不可写值的属性。当修改或定义对象的某个属性的时候，给这个属性添加一些特性
			
			let obj = {x:10};
			Object.defineProperty(obj, 'y', {
		        configurable: false,    //设置是否可删除
				enumerable: true,//设置是否可枚举
				writable: true,//设置是否可被赋值运算
		        value: 100//不设置，默认为 undefined
		    });

	- 存取描述符是由一对 getter-setter 函数功能来描述的属性。get或set不是必须成对出现
		
			let obj = {x:10};
			let y = 100;
	        Object.defineProperty(obj, 'y', {
	            get() {
	                //给属性提供 getter，没有getter则为 undefined。当obj的y属性被调用的时候触发，该方法的返回值将作为被调用获取的结果
	                console.log('get');
	                return y;
	            },
	            set(value) {
	                //给属性提供 setter，没有setter则为 undefined。当obj的y属性被设置的时候触发,接受唯一参数，此参数为被设置的值，并将该参数的新值分配给该属性。
	                console.log('set', value);
	                y = value;
	            }
	        })
	
	        console.log(obj.y);
	        obj.y = 1;
	        console.log(obj.y);

## 数据双向绑定
利用Object.defineProperty() 的存取描述符可以实现数据的双向绑定

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>Title</title>
	</head>
	<body>
	    <input type="text" id="age">
	    <h1></h1>
	    <script>
	        var ageElement = document.querySelector('#age');
	        var h1Element = document.querySelector('h1');
	        let obj = {};
	        Object.defineProperty(obj, 'age', {
	            get() {
	
	            },
	            set(value) {
	                ageElement.value = value;
	                h1Element.innerHTML = value;
	            }
	        })
	        obj.age = 10;
	        ageElement.oninput = function() {
	            obj.age = this.value;
	        }
	    </script>
	</body>
	</html>