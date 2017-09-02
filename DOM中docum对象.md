## document 对象
- Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问。
### document.write（）
- 方法可向文档写入 HTML 表达式或 JavaScript 代码。
可列出多个参数(exp1,exp2,exp3,...) ，它们将按顺序被追加到文档中。
- 根据 DOM 标准，该方法只接受单个字符串作为参数。不过根据经验，write() 可接受任何多个参数。
- 通常按照两种的方式使用 write() 方法：一是在使用该方在文档中输出 HTML，另一种是在调用该方法的的窗口之外的窗口、框架中产生新文档。在第二种情况中，请务必使用 close() 方法来关闭文档。

## 获取元素
- 获取单个元素
	- `document.getElementById('idName');` 获取Id
		- 只能从document中获取
	- `parentNode.querySelector('Css Selector');`
		- 接收一个css选择器(通配，群组，包含，id，类……等等)
		- 如果这个选择器对应的是一组元素，就只找第0个
- 获取一组元素
	- `parentNode.querySelectorAll`('css 选择器'); 
		- 获取元素下的某个类型的元素
		- 获取的结果是一组元素(元素集合)
		- 一组元素不能在js直接操作,需要添加下标
		- 一组元素不能直接操作,如果想操作一组元素可以使用循环
	- `parentNode.getElementsByTagName("标签名");`
		- 获取元素下的某个类型的标签
		- 获取之后再有请求会再次从新获取
		- 获取的结果是  一组元素(元素集合)
	- `parentNode.getElementsByClassName("class名");`
		- 获取元素下的某个类型的class
		- 获取的结果是一组元素(元素集合)
	- 获取样式
		- 计算后样式只能获取 不能设置
		- `getComputedStyle(el)['style']`;标准下获取计算后样式 (函数)
		- `el.currentStyle['style']`;IE下获取计算后样式 (元素上属性)
		- currentStyle 不可以获取复合样式
		- 获取bacngroundImage获取到的是绝对路径
		- transform通过计算后样式 只能获取到矩阵
	
		Demo
	
			<!DOCTYPE html>
			<html lang="en">
			<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<style type="text/css">
			body {
				perspective: 400px;
			}
			#box {
				margin: 100px auto;
				width: 100px;
				height: 100px;
				background: red;
				transform: rotateX(60deg);
			}	
			</style>
			<script type="text/javascript">
			function getStyle(el,attr){
				if(el.currentStyle){
					return	el.currentStyle[attr];
				}
				return getComputedStyle(el)[attr];
			}
			window.onload = function(){
				var btn = document.querySelector('input');
				var box = document.querySelector('#box');
				btn.onclick = function(){
					//console.log(getStyle(box,"transform"));
					console.log(getStyle(box,"transform"));
					console.log(box.style.transform);
			
					/*
						transform通过计算后样式 只能获取到矩阵
					*/
				};
			};
			</script>
			</head>
			<body>	
			<input type="button" value="获取transform的值">
			<div id="box" style="transform: rotateX(60deg);"></div>
			</body>
			</html>
- 尽量不要使用或者减少使用dom的操作，性能不太好
- node.parentNode  父节点 
- node.offsetParent 定位父级
- node.firstElementChild（获取node中第一个子节点）
- node.lastElementChild（获取node中最后一个子节点）
- node.children 子元素 (不是标准中的操作)
- box.childNodes 子节点
- node.nextElementSibling 下一个兄弟元素(node.nextSibling 下一个兄弟节点，包括文本节点)
- node.previousElementSibling 上一个兄弟元素 (node.previousSibling 上一个兄弟节点，包括文本节点)
- document.createElement(tagName)
	- 通过标签名的形式创建一个元素
	- 元素创建完，不添加到页面中的话，看不到它
- parent.appendChild(el);
	- 在parent里追加一个子元素el，（把el添加到parent的最末尾）
	- 如果操作的是一个已经存在页面中的元素，会把元素从原来的父级下，直接剪切过来
- parentNode.insertBefore(childNode1,childNode2)
	- 往一个节点的指定子节点前边插入一个节点,如上：childNode1插入到childNode2前边；
	- 如果操作的是一个已经存在页面中的元素，会把元素从原来的父级下，直接剪切过来
	- 如果childNode2不存在，childNode1放到最后
- parentNode.removeChild(childNodes)
	- 从一个节点中删除指定的子节点。
	- 返回值：被删除的这个节点
- offset:
	- el.offsetWidth/offsetHeight  可视宽/高 
		- width + padding + border
	- el.offsetTop/offsetLeft 
		- 和定位父级之间的距离
- el.getBoundingClientRect()
	- 获取元素的盒模型信息
	 
	- 返回值对象

			  {
				left 元素左侧相对于可视区左侧的距离
				top 元素顶部相对于可视区顶部的距离
				right 元素右侧相对于可视区左侧的距离
				bottom 元素底部相对于可视区顶部的距离
				width 可视宽度
				height 可视高度
			  }
- .clientWidth
	- height + padding	
- .clientHeight
	- width + padding
- .clientTop
	- 元素的上边框宽度
- .clientLeft
	- 元素的左边框宽度
- ECMA获取不到在行间写的自定义属性
- DOM可以
- node.getAttribute(attr)
	- 获取元素指定属性名的属性值
- node.setAttribute(attr,value)
	- 设置元素指定属性名的属性值
- node.removeAttribute(attr)
	- 删除元素指定属性
	- 特点：
		- 可以操作行间自定义的属性
		- 可以获取src、href等的相对地址
- data- 在行间添加为元素添加自定义属性
	- dataset 操作自定义属性
- parentNode.replaceChild(node,childNode)
	- node用来替换的节点，childNodes被替换的子节点
	- 两个参数都必须写。
- node.cloneNode(boolean)
	- 克隆一个节点
	- true：克隆元素和元素包含的子孙节点
	- flase：克隆元素但不包含元素的子孙节点

## 表格、表单操作

### 表格
- .tHead 获取thead
- .tFoot 获取tfoot
- .tBodies[0]获取tbody 注意table可以拥有多个tbody，所有获取到的是一组
- .rows获取 tr 注意获取到的是一组
- .cells获取单元格 th,td 注意获取到的是一组 单元格要在row里边获取

### 表单
- input
	- text/radio/checkbox
- select
- textarea
- 统一使用node.value获取值
- 获取 radio/checkbox 是否选中---checked
- onchange  输入类型表单控件value发生变化
	- 表单元素的onchange:
		1. 在单选和复选框,检测checked值是否发生变化(检测是否勾选或取消勾选)
		2. 在其他表单控件中，检测value值发生变化;
	- 表单控件（input，textarea，select）：
		- 要获取他们的值，获取的是value
- oninput 正在输入时
- onfocus 当元素获得焦点时
- onblur 当元素失去焦点的时候
- .focus() 使元素获得焦点
- .blur() 使元素失去焦点
- onsubmit 表单提交的时候
- .submit() 提交这个表单
- onreset 表单重置的时候
- .reset() 重置这个表单
- .select();选中input或textarea中的内容。
	
***
## scrollTop 页面头部被隐藏的高度 滚动条距离
1. document.documentElement.scrollTop chrome下无效
1. document.documentElement.scrollLeft chrome下无效
1. document.body.scrollTop 火狐下无效  IE整体不识别
1. document.body.scrollLeft 火狐下无效  IE整体不识别
1. window.scrollY IE整体不识别
1. window.scrollX IE整体不识别
1. window.pageYOffset IE8及以下不识别
1. window.pageXOffset IE8及以下不识别

	- IE9-IE11不识别 2,3
	- IE8一下只识别 1


- 加给元素：
	offsetLeft(距离定位父级的距离)/offsetTop(距离定位父级的距离)/offsetWidth(可视宽度)/offsetHeight(可视高度)
	clientLeft(左边框宽度)/clientTop(上边框宽度)/clientWidth(width+padding)/clientHeight(height+padding)	
	getBoundingClientRect() 返回值对象 
		left (元素左侧相对于可视区左上角的距离)
		right(元素右侧相对于可视区左上角的距离) 
		top (元素上边相对于可视区左上角的距离)
		bottom (元素底部相对于可视区左上角的距离)
		width (可视宽度)
		height (可视高度)
	scollTop(纵向滚动距离)/scollLeft(横向滚动距离)/scollWidth(内容宽度)/scollHeight(内容高度)

- 获取可视区宽高:	
	window.innerWidth/window.innerHeight
	document.documentElement.clientWidth/document.documentElement.clientHeight

- 屏幕宽度:
	window.screen.width,window.screen.height

- 获取文档宽高:
	document.body.clientWidth/document.body.clientHeight
	document.documentElement.scrollHeight/document.documentElement.scrollWidth
	document.body.scrollHeight/document.body.scrollWidth

- 获取滚动条距离：
	document.body.scrollTop/document.body.scrollLeft
	window.scrollY/window.scrollX
	document.documentElement.scrollTop/document.documentElement.scrollLeft	
	window.pageYOffset/window.pageXOffset

---

classList className的列表
		add()
		remove()
		contains();
		length
		value
		item()