## 
- odd 奇数
- even 偶数
- 数列 
	- body>*:nth-child(3n+1) {
	background: green;
}
- 选择符之间加不加空格意义不同

## 伪类
- E:nth-child()
	- E元素父级下的第几个子元素,并且元素的类型还得是E
    
	- `body *:nth-child(4) {
	    	background: red;
	    }或
	    body :nth-child(4) {
	    	background: red;
		｝`
		- 所有元素父级下第四个子元素

	代码
	
		<!DOCTYPE html>
		<html>
		<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
		p,
		h3 {
			font: 14px/30px "微软雅黑";
			border: 1px solid #000;
		}
		body *:nth-child(4) {
			background: red;
		}
		body :nth-child(4) {
			background: red;
		}
		</style>
		</head>
		<body>
		<p>p标签</p>
		<h3>h标签</h3>
		<h3>h标签</h3>
		<p>p标签</p>
		<p>p标签</p>
		<h3>h标签</h3>
		<h3>h标签</h3>
		<h3>h标签</h3>
		<p>p标签</p>
		<div>
			<p>p标签</p>
			<h3>h标签</h3>
			<h3>h标签</h3>
			<p>p标签</p>
			<p>p标签</p>
			<h3>h标签</h3>
		</div>
		</body>
		</html>
- E：nth-last-child()
	- E元素父级下的倒数第几个子元素,并且元素的类型还得是E
- E：first-child
	- E元素父级下的第1个子元素,并且元素的类型还得是E
- E：last-child
	- E元素父级下的最后1个子元素,并且元素的类型还得是E

Demo

	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="UTF-8">
	<title></title>
	<style>
	p,
	h3 {
		font: 14px/30px "微软雅黑";
		border: 1px solid #000;
	}
	body>*:first-child {
		background: red;
	}
	body>*:last-child {
		background: green;
	}
	</style>
	</head>
	<body>
	<p>p标签</p>
	<h3>h标签</h3>
	<h3>h标签</h3>
	<p>p标签</p>
	<p>p标签</p>
	<h3>h标签</h3>
	<h3>h标签</h3>
	<h3>h标签</h3>
	<p>p标签</p>
	</body>
	</html>

- E:nth-of-type() 
	- 找到E元素父级下的第几个E类型的元素
- E:nth-last-of-type
- E:first-of-type
- E:last-of-type
- E:only-child E元素是他的父级下唯一的子元素
- E:only-of-type 匹配同类型中的唯一的一个同级兄弟元素E
- E:empty E元素是个空标签
- E:target 表示当前的URL片段的元素类型，这个元素必须是E
- E::selection 设置文本选中的背景和文字颜色
- E:not(S) 匹配不含有s选择符的元素E。
- input:focus 获得焦点
- input:enabled 可选的控件
- input:disabled 不可选的控件
- input:checked 选中的单选或复选框

## 关系选择器
- `>` 只找第一层子元素

	body>*:nth-child(4) {
		background: red;
	}
- `+` 选择紧贴在E元素之后F元素，元素E与F必须同属一个父级。
- `~` 选择E元素后面的所有兄弟元素F，元素E与F必须同属一个父级。

## 伪对象选择器
- E:first-letter
- E:first-line

Demo

	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="UTF-8">
	<title></title>
	<style>
	p {
		width: 300px;
		border: 1px solid #000;
		line-height: 30px;
	}
	p:first-letter {
		font-size: 40px;
		vertical-align: text-top;
	}
	p:first-line {
		font-weight: bold;
	}
	</style>
	</head>
	<body>
		<p>文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1文字1</p>
	</body>
	</html>

## 属性选择器
- e[attr] 找到所有具有attr属性的E类型元素
- e[attr = "value"] 找到所有具有attr属性的E类型元素,并且attr的属性值是 value
- E[attr~="value"]指定属性名，并且具有属性值，此属性值是一个词列表，并且以空格隔开，其中词列表中包含了一个value词，而且等号前面的“〜”不能不写
- E[attr^="value"]指定了属性名，并且有属性值，属性值是以value开头的
- E[attr$="value"]指定了属性名，并且有属性值，而且属性值是以value结束的
- E[attr*="value"]指定了属性名，并且有属性值，而且属值中包含了value
- E[attr|="value"]指定了属性名，并且属性值是value或者以“value-”开头的值（比如说zh-cn）