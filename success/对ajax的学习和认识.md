---
title: 对ajax的学习和认识
date: 2017-08-09 15:48:34
updated: 2017-08-10 11:12:01
tags:
	- ajax
    - javascript
    - XML
categories: 数据处理
thumbnail: 
---
# AJAX
Asynchronous Javascript And XML（异步JavaScript和XML）
## XML 
可扩展标记语言

- 作用：结构化（组织）数据，被设计用来传输和存储数据

## 使用AJAX传输数据的基本步骤
1. 创建ajax对象  
 
		let xhr = new XMLHttpRequest(); 
	但是该对象是有兼容问题，在低版本的ie浏览器中不支持此方法，要使用：  

    	let xhr = new ActiveXObject('Microsoft.XMLHTTP');  
	所以要做兼容：

		let xhr = null;
		if (window.XMLHttpRequest) {
		    xhr = new XMLHttpRequest();
		} else {
		    xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}
2. 配置请求参数  
	get方法：
	
		xhr.open('get', '/checkusername?username=' + this.value, true);
	post方法：
	
		xhr.open('post', '/upload/data', true);
3. 发送请求

		xhr.send();

4. 监听返回
		
		xhr.onload = function() {

       	};
 	onload属性是标准的XMLHttpRequest才有的事件,其他浏览器不支持，这些浏览器支持onreadystatechange：

		xhr.onreadystatechange = function () {
           if (this.readyState == 4) {

           }
       	}
	与onload不同，onreadystatechange是用属性：readyState来控制ajax的工作状态：

		0：初始化
		1：调用send方法后（请求发出以后）
		2：请求已经被接收处理
		3：客户端接收到响应，但是内容还不一定完成了解析
		4：解析完成

5. 传输进度： onprogress 每隔几毫秒触发一次,里面事件对象有数据总大小和已传输大小，e.loaded是已传输数据，e.total是数据总大小

		xhr.onprogress = function (e) {
            console.log(e);
		}	
6. 上传和下载
	- 上传：  
		- 上传对象：xhr.upload 
		
				xhr.upload.onprogress = function (e) {
		            let num = e.loaded/e.total;
		        };
	- 下载：
		- AJAX不能操作文件系统，，，，

## 注意：
- AJAX的responseText属性 : 后端返回（res.send();）的内容会解析成字符串保存到xhr的responseText，所以这个属性下存储的数据类型永远是字符串类型的。要注意后端返回的数据内容以及格式，正确处理JSON与XML。
	- 使用JSON.parse();方法处理JSON格式的数据。
	- 通过xhr对象下responseXML属性去获取值。
responseXML属性会把数据解析成XMLDocument对象返回，对它的操作和Document操作一样。
- AJAX上传数据时要上传二进制数据，但queryString/encodeURI格式都是key=value的组织格式，所以使用formData格式，js提供了一个方法来实现对formdata格式的拼装
	- FormData对象
	
			let fd = new FormData();
		    // 上传的是文件二进制数据，不是文件名
			// uploadfile是文件名，uploadfile.files[i]是文件二进制数据，append（）;方法将二进制数据转化成键值对信息
		    fd.append('uploadfile', uploadfile.files[i]);
		    xhr.send(fd);