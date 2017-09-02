##兼容性
> 由于代码写的不规范，或者不正确导致的错误，这就叫错误，不叫兼容性。

> 当我们学了一段正确的代码，但是在不同浏览器下，产生一些不正确的解析，这叫做兼容性问题

> http://www.wolege.com/98.html

- 怪异盒模型：在老版本IE下，不设置文档声明，页面就会陷入怪异盒模型解析
	- 标准盒模型:
		- width/height = content;
		- 可视宽/高 =  content + padding + border;
	- 怪异盒模型
		- width/height = 可视宽/高;
		- content = width - padding - border; 
- 在IE6下，子元素宽高超出父级的宽高，可以把父级设置好的宽高撑开.（占位宽 = content + padding + border + margin;）
- 在IE6下，块属性元素的高度小于19px的时候，高度会按照19px来处理.
	- 解决办法：overflow:hidden;
- 在chrome下，文字大小小于12px的时候，会被当做12px来处理.
	- 解决办法: 用图片代替;
- 在IE6下，1px的点线会显示成虚线.
	- 解决办法: 用图片代替;
- 在IE6下给边框加transparent的时候，border-style最好设置成虚线
- 在IE6，7下，不支持给块标签加inline-block;
	- 解决办法:在inline-block下，添加以下代码
	
			- *display:inline;
			- *zoom:1;(zoom 非标准样式)
	
		- IE6，7下给元素添加zoom 元素会支持宽高
		- *style 这条只在IE7及IE7之前的IE浏览器识别
- 在老版本浏览器中不支持HTML5标签，对这些标签用JS进行新建
	- 可以使用[[js脚本](html5shiv.min.js)](F:\学习练习\笔记\html5shiv.min.js)
- 伪类的兼容性
	- IE6下只支持 link visited hover active 这四个伪类，且只支持添加给a标签
	- IE7下只支持 link visited hover active
	- 解决办法：用JS定义
- haslayout IE渲染引擎中的一个属性,用来调节元素的渲染模式,当我们把这个属性设置为true的话，这个元素就跟根据自身的内容大小或者父级的大小，来重新计算自己的宽高.（IE6 7）
	- 具有haslayout
		- body and html
		- table, tr, th, td
		- img
		- hr
		- input, button, file, select, textarea, fieldset
		- marquee
		- frameset, frame, iframe
		- objects, applets, embed
	- 触发hasLayout的样式：
		- display: inline-block
		- height: (任何值除了auto)
		- float: (left 或 right)
		- position: absolute
		- width: (任何值除了auto)
		- writing-mode: tb-rl
		- zoom: (除 normal 外任意值)
	- 在IE6，7下浮动元素的父级设置了固定宽度的话，不需要清浮动
	- 完整清浮动方法

			.clearFix {
				zoom: 1;
			}
			.clearFix:after {
				content: "";
				clear: both;
				display: block;
			}
- 在IE6下，父级有边框的话，可能会造成子元素的margin失效
	- 解决办法:触发haslayout;
- 浮动的一些写法问题
	- 多个元素需要在行显示，最好给这行都加上浮动
	- 元素浮动之后，如果宽度可以固定，一定记得设置固定宽度
	- 如果宽度需要内容撑开，就给它里边的块元素都加上浮动
- 浮动的兼容问题
	- IE6下双边距BUG
		- 在IE6下，块元素浮动有横向的margin，横向的margin值会被放大成两倍
		- 解决办法: display:inline;
		- margin-left 一行元素左侧第一个元素有双边距
		- margin-right 一行元素右侧第一个元素有双边距
	- 在IE6下，一行元素的宽度之和 和 父级的宽度相差超过3px，则最后一行元素的下margin失效
		- 解决办法：无
	- 在IE6下，元素的宽度，和父级宽度相差 小于3px，并且两个浮动之后之间有注释或者内嵌元素，元素内容会被复制
		- 解决办法：可以用div把注释或者内嵌元素包起来
	
		Demo
		
			<!DOCTYPE html>
			<html lang="en">
			<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<style type="text/css">
			.box {
				width: 400px;
			}
			.left {
				float: left;
			}
			.right {
				float: right;
				width: 398px;
			}
			</style>
			</head>
			<body>
				<div class="box">
					<div class="left"></div>
					<!-- IE6下文字溢出BUG --><span></span>
					<div class="right">&darr;这是多出来的一只猪</div>
				</div>
			</body>
			</html>	
	- 在IE6，7下li本身没有加浮动，但是li的内容都浮动了，或者有两个以上的浮动,li下边就会有几个px的间隙。
		- 解决办法:
			- 给li加浮动
			- 给li加vertical-align: top;

		Demo
		
			<!DOCTYPE html>
			<html lang="en">
			<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<style type="text/css">
			.list {
				width: 200px;
				margin: 0;
				padding: 0;
				list-style: none;
			}
			.list li {
				height: 30px;
				border: 1px solid #000;
				line-height: 30px;
				vertical-align: top;
			}
			.list a {
				float: left;
			}
			
			.list span {
				float: right;
			}
			</style>
			</head>
			<body>
			<ul class="list">
				<li>
					<a href="#">左侧</a>
					<span>右侧</span>
				</li>
				<li>
					<a href="#">左侧</a>
					<span>右侧</span>
				</li>
				<li>
					<a href="#">左侧</a>
					<span>右侧</span>
				</li>
			</ul>
			</body>
			</html>
- 定位的兼容性
	- 在IE6下，当浮动元素和绝对定位元素，是同级关系的话(并且浮动元素的占位宽度和父级小于3px)，绝对定位元素会消失掉
		- 解决办法:把绝对定位元素单独包起来
	- 在IE6下，父级的宽高是奇数的话，元素的right值和bottom值会有1px的偏差.
		- 解决办法: 无;
	- 在IE6，7下，子元素有相对定位的话，父级的overflow包不住它
		- 解决办法: 给父级也加相对定位;
	- IE6不支持固定定位
	- 在IE8及IE8之前的IE浏览器，不支持opacity。但标准浏览器不支持此方法
		- 解决办法: 
			- opacity: .4;
			- filter: alpha(opacity = 40);
- 表格的兼容性
	- 在IE6，7下，不支持border-spacing这条样式
		- 解决办法:
			1. border-collapse: collapse;
			2. cellspacing
	- 在IE6，7下输入类型表单控件上下各有1px的间隙
		- 解决办法： 给控件加浮动
	- 在IE6,输入类型表单控件border:none;无效
		- 解决办法:
			1. border:0;
			2. 重置input的背景
	- 在IE6，7下，输入类型的表单控件，输入文字的时候，背景图会随着文字一块移动
		- 解决办法:背景图加给父级
- css_hack
	- \0  IE8，IE9，IE10，IE11  
	- \9  IE10及IE10之前的IE浏览器
	- *,+  IE7及IE7之前的IE浏览器
	- _  IE6及IE6之前的IE浏览器
- expression css行为

	Demo
	
		<!DOCTYPE html>
		<html>
		<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			#box {
				position: fixed;
				_position: absolute;
				left: 100px;
				top: 100px;
				_top: expression(eval(document.documentElement.scrollTop + 100)); 
				width: 100px;
				height: 100px;
				background: red;
			}
			.div {
				height: 400px;
				border: 3px solid #000;
				font-size: 100px;
			}
		</style>
		</head>
		<body>
		<div id="box"></div>
		<div class="div">1</div>
		<div class="div">2</div>
		<div class="div">3</div>
		<div class="div">4</div>
		</body>
		</html>
- 条件注释语句: 符合条件之后，
浏览器会把对应的注释中的内容解析出来
	- 只在IE9及IE9之前的IE浏览器支持
	- 语句
	
			<!--[if IE]> 
			这是IE
			<![endif]-->
			<!--[if IE 9]> 
			9
			<![endif]-->
			<!--[if IE 8]> 
			8
			<![endif]-->
			<!--[if IE 7]> 
			7
			<![endif]-->
			<!--[if IE 6]> 
			6
			<![endif]-->
			<!--[if lte IE 7]>
				小于等于IE7 
			<![endif]--> 
			<!--[if gte IE 7]> 
				大于等于IE7 
			<![endif]--> 
			<![if !IE]> 
			非IE9及IE9之前的IE
			<![endif]> 
- png问题
	- IE6不支持PNG24的透明度
	- 方法一
	
			<!DOCTYPE html>
			<html lang="en">
			<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<style type="text/css">
				body {
					background: #000;
				} 
				.box {
					width: 400px;
					height: 400px;
					background: url(img/img.png);
					_background: none;
					_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="img/img.png",sizingMethod='crop');
				}
			</style>
			</head>
			<body>
			<img src="img/img.png" />
			<div class="box"></div>
			</body>
			</html>
	- 方法二
	
			<script type="text/javascript" src="DD_belatedPNG_0.0.8a.js"></script>
			<script type="text/javascript">
				// DD_belatedPNG.fix('img');
				// DD_belatedPNG.fix('.box');
				DD_belatedPNG.fix('.box,img');
			</script>
- @import 
	- 不推荐使用
	- 在样式表中引入新的样式表
	- 没有并发加载
	- @import url(index.css)
	- @import 必须写在样式表的最前边
- !important 提升样式优先级
	- background: red !important;
	  background: yellow;
	- 在IE6下，如果在!important下边再加一条同样的样式，会破坏掉!important，然后按照默认的优先级顺序显示
- 在IE6下，通过margin负值，使元素移出父级的区域，会被父级截掉
	- 解决办法：给元素加相对定位