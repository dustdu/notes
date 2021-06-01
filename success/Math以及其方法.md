---
title: Math以及其方法
date: 2017-08-02 17:26:07
tags:
	- Math
    - javascript
    - ECMAScript
categories: javascript
thumbnail: 
---
## math对象
### Math.PI; 圆周率
- var a = Math.PI;
### Math.abs(number) 绝对值
- var b = Math.abs("abs");
### Math.floor(number) 向下取整
- var c = Math.floor(1.22);
### Math.ceil(number);向上取整
- var d = Math.ceil(-1.22);
### Math.round() 四舍五入
- var e = Math.round(1.5);
### toFixed(n) 保留n位小数，返回值string 会四舍五入
- var f = (1.2394).toFixed(2);
### Math.random() 返回 0 1 之间的一个随机小数,不包含1，包含0
- var g = Math.random();
- 随机 0 - n 不包含 n  parseInt(Math.random() * n)

    var a = parseInt(Math.random() * 10);
    console.log(a);
- 随机 0 - n 包含 n  Math.round(Math.random() * n)

    var a = Math.round(Math.random() * 10);
    console.log(a);
- 随机 10 - 100 包含 10 和 100

    var a = Math.round(Math.random() * 90)+10;
    console.log(a);
### Math.max(nub1,nub2)返回两个数中较大的一个
### Math.min(nub1,nub2)返回两个数中较小的一个
### 角度转弧度: Math.PI/180*deg
### Math.sin(弧度) 正弦 直角三角形中，对边和斜边比值

    var a = Math.sin(30/180*Math.PI);
    console.log(a);
### Math.cos(弧度) 余弦 直角三角形中，邻边和斜边比值

    var a = Math.cos(60/180*Math.PI);
    console.log(a);
### Math.tan(弧度) 正切 直角三角形中，对边和邻边比值

    var a = Math.tan(45/180*Math.PI);
    console.log(a);