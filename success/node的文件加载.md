---
title: node的文件加载
date: 2017-08-01 18:49:53
tags:
	- node.js
categories: node.js
thumbnail: /img/tipimg/
---
# Node文件的执行
	node 要执行的node文件
如果默认是js，可以省略.js

## Modules(模块化方案)
在node中，为了更方便组织管理和复用我们的代码，node提供一个模块化的方案  
一共有三种不同的模块方案

1. Core Modules
2. File Modules
3. Folders as Modules

### 文件内模块加载
	require('./2.js');
	require('./2');

### 模块数据的访问
模块在被加载后，要访问其中数据有两种方法

- 全局
- 导出  
module.exports / exports

### module
是node中的内置对象，每一个文件（模块）都有一个自己的module对象，在该对象下有很多对于该模块的描述。其中有一个属性 exports，他的值是一个对象，可以通过该对象对应提供访问模块内数据，一个模块中module.exports其实就是这个模块对外的访问接口，可以通过require方法加载一个模块，得到的其实就是该模块对外提供的exports对象

## File Modules
node中规定，一个文件就是一个独立的模块，一个独立的模块有自己独立的作用域，其他文件可以通过require方法进行引入，但是不能直接访问模块内的数据

## Folders as Modules
文件夹模块是按照某种规定的文件组织格式，组织我们的文件代码，（把多个不同的文件按照某种格式组织成一个大的模块），该模块需要放置在一个叫node_modules的目录中，node_modules目下会存放各种文件夹形式的模块，文件夹模块是以文件夹的 形式进行管理和组织的  
文件夹模块的加载，不能在路径前面写./ ../之类的前缀，文件夹模块是不需要指定路径，因为他会按照某种规则进行查找  
在每个module对象下，都有一个paths的属性，该属性是个数组，他的值就是我们文件夹模块的查找规则/路径,找到文件夹模块之后，在里面有package.json文件，里面是对该模块的设置，可以设置默认读取文件

	paths: 
	   [ 'c:\\Users\\likang\\Desktop\\1\\Modules\\node_modules',
	     'c:\\Users\\likang\\Desktop\\1\\node_modules',
	     'c:\\Users\\likang\\Desktop\\node_modules',
	     'c:\\Users\\likang\\node_modules',
	     'c:\\Users\\node_modules',
	     'c:\\node_modules' ] }

## Core Modules
node提供的默认模块，包括File,Net,Http等  
加载方式：require('模块名');
	
	require('fs');

