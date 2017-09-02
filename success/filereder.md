---
title: FileReader的用法
date: 2017-07-3 22:18:15
categories: javascript
tags: 
    - javascript
    - 数据上传
    - html5
thumbnail: /img/tipimg/FileReader.PNG
---
# File API ---> FileReader
## 添加文件
- change时input加了一个files集合，包含file对象，每个file对象对应着一个文件。并且都有name,size,type,lastModifiedDate只读属性.
- 可根据这些属性验证判断文件。

## FileReader对象
- 使用的是一种异步文件读取机制，读取的是文件系统
- 有四种读取方法，结果存储在FileReader的result属性中
	- readAsText（file,encoding）：有两个参数，中第二个参数是文本的编码方式，默认值为 UTF-8，可省略。将文件以文本方式读取，读取的结果即是这个文本文件中的内容。
	- readAsBinaryString（file）：将文件读取为二进制字符串，通常我们将它传送到后端，后端可以通过这段字符串存储文件。
	- readAsDataURL（file）：将文件读取为一段以 data: 开头的字符串，字符串的实质就是 Data URL，Data URL是一种将小文件直接嵌入文档的方案。这里的小文件通常是指图像与 html 等格式的文件。
	- readAsArrayBuffer(file)：读取文件并将一个包含文件内容的ArrayBuffer保存在result属性中
	- abort() 中止该读取操作
- result 读取到的文件内容.这个属性只在读取操作完成之后才有效,并且数据的格式取决于读取操作是由哪个方法发起的. 只读.