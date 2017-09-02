## 滑动门
### 滑动门导航背景
- 背景实现的代码嵌套方式
		
	Demo
	
		<!DOCTYPE html>
		<html lang="en">
		<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<style type="text/css">
		body {
			margin: 0;
			background: #23232f;
		}	
		.nav {
			margin: 30px;
			float: left;
			background: #0f0f14;
		}
		.navL {
			float: left;
			background: url(img/navL.gif) no-repeat;
		}
		.navR {
			float: left;
			padding: 4px 4px 0 3px;
			background: url(img/navR.gif) no-repeat right 0;
		}
		.nav a {
			margin-left: 1px;
			float: left;
			background: url(img/btn3L.png) no-repeat;
		}
		.nav span {
			float: left;
			background: url(img/btnR.png) no-repeat right 0;
			padding: 0 15px;
			font: 12px/23px "宋体";
			color: #fff;
		}
		.nav a:hover {
			background-image: url(img/btnHL.gif);
		}
		.nav a:hover span {
			background-image: url(img/btnHR.gif);
		}
		</style>
		</head>
		<body>
		<nav class="nav">
			<div class="navL">
				<div class="navR">
					<a href="#">
						<span>首页</span>
					</a>
					<a href="#">
						<span>妙味课堂</span>
					</a>
					<a href="#">
						<span>关于我们</span>
					</a>
					<a href="#">
						<span>加入MiaoV</span>
					</a>
				</div>
			</div>
		</nav>
		</body>
		</html>
### 怪异导航

	Demo
	
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<style type="text/css">
				.nav {
					margin: 30px;
				}
				.nav a {
					float: left;
					padding: 0 15px;
					margin: 0 15px;
					font: bold 14px/40px "宋体";
					color: #fff;
					text-decoration: none;
					background: url(img2/nav.png) repeat-x;
					position: relative;
				}
				.nav span {
					position: absolute;
					top: 0;
					width: 28px;
					height: 40px;
				}
				.navL {
					left: -28px;
					background: url('img2/navL.png');
				}
				.navR {
					right: -28px;
					background: url('img2/navR.png');
				}
				.nav a:hover {
					color: #000;
					background-image: url(img2/navH.png)
				}
				.nav a:hover .navL {
					background-image: url('img2/navHL.png')
				}
				.nav a:hover .navR {
					background-image: url('img2/navHR.png')
				}
			</style>
		</head>
		<body>
		<nav class="nav">
			<a href="#">首页<span class="navR"></span></a>
			<a href="#"><span class="navL"></span>关于我们<span class="navR"></span></a>
			<a href="#"><span class="navL"></span>妙味课堂<span class="navR"></span></a>
			<a href="#"><span class="navL"></span>有木有</a>
		</nav>
		</body>
		</html>

## css精灵
Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
		}
		a {
			text-decoration: none;
		}
		body {
			background: #eaeaea;
		}
		.clearFix {
			zoom: 1;
		}
		.clearFix:after {
			content: "";
			display: block;
			clear: both;
		}
		.list {
			width: 289px;
			margin: 30px auto;
			overflow: hidden;
		}
		.list ul {
			margin: 0 -1px -1px 0;
		}
		.list li {
			float: left;
			width: 71px;
			margin: 0 1px 1px 0;
			background: #fff;
		}
		.list a {
			position: relative;
			display: block;
			padding-top: 33px;
			font: 12px/34px "宋体";
			text-align: center;
			color: #666;
		}
		.list span {
			position: absolute;
			left: 24px;
			top: 12px;
			width: 24px;
			height: 25px;
			background: url(img/icons.jpg) no-repeat;
		}
		.list .ico1 {
			background-position: 0 0;
		}
		.list .ico2 {
			background-position: -24px 0;
		}
		.list .ico3 {
			background-position: -48px 0;
		}
		.list .ico4 {
			background-position: -72px 0;
		}
		.list .ico5 {
			background-position: -96px 0;
		}
		.list .ico6 {
			background-position: -120px 0;
		}
		.list .ico7 {
			background-position: 0 -25px;
		}
	</style>
	</head>
	<body>
	<div class="list">
		<ul class="clearFix">
			<li>
				<a href="#">
					<span class="ico1"></span>
					充话费
				</a>
			</li>
			<li>
				<a href="#">
					<span class="ico2"></span>
					送的
				</a>
			</li>
			<li>
				<a href="#">
					<span class="ico3"></span>
					充话费
				</a>
			</li>
			<li>
				<a href="#">
					<span class="ico4"></span>
					送的
				</a>
			</li>
			<li>
				<a href="#">
					<span class="ico5"></span>
					充话费
				</a>
			</li>
			<li>
				<a href="#">
					<span class="ico6"></span>
					送的
				</a>
			</li>
			<li>
				<a href="#">
					<span class="ico7"></span>
					充话费
				</a>
			</li>
			<li>
				<a href="#">
					<span class="ico8"></span>
					送的
				</a>
			</li>
			<li>
				<a href="#">
					<span class="ico9"></span>
					充话费
				</a>
			</li>
			<li>
				<a href="#">
					<span class="ico10"></span>
					送的
				</a>
			</li>
			<li>
				<a href="#">
					<span class="ico11"></span>
					充话费
				</a>
			</li>
			<li>
				<a href="#">
					<span class="ico12"></span>
					送的
				</a>
			</li>
		</ul>
	</div>	
	</body>
	</html>

## 文字超出显示省略号
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

## 文字颜色动态渐变
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<style type="text/css">
			body {
				background: #000;
			}
			h1 {
				margin: 100px auto;
				width: 711px;
				font: 100px/1 "微软雅黑";
				color: rgba(255, 255, 255, .3);
				background: 
				    linear-gradient(
					120deg,
					rgba(255, 255, 255, 0) 0,
					rgba(255, 255, 255, 0) 100px,
					rgba(255, 255, 255, 1) 200px,
					rgba(255, 255, 255, 1) 260px,
					rgba(255, 255, 255, 0) 360px
					)
					no-repeat -400px 0;
				-webkit-background-clip: text;	
				transition: 5s;
			}
			h1:hover {
				background-position: 700px 0;
			}
		</style>
	</head>
	<body>
		<h1>妙味课堂MiaoV</h1>
	</body>
	</html>

## 单边框阴影
- 阴影便宜单独设置

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<style type="text/css">
			#box {
				margin: 100px auto;
				width: 100px;
				height: 100px;
				border: 2px solid red;
				box-shadow: 
					inset 0 -10px 10px -10px #000,
					inset 10px 0 10px -10px #000,
					inset -10px 0 10px -10px #000;
			}
		</style>
	</head>
	<body>
		<div id="box"></div>
	</body>
	</html>

## 单选框和复选框美化
- CSS3和选择器的应用

### 简单单选框代码

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title></title>
	<style type="text/css">
	input {
		display: none;
	}
	.wrap {
		width: 100px;
		height: 40px;
		border: 1px solid #000;
	}
	label {
		float: left;
		position: relative;
		width: 30px;
		height: 40px;
		padding-left: 20px;
		text-align: center;
		line-height: 40px;
	}
	label:before {
		content: "";
		position: absolute;
		left: 0;
		top: 10px;
		box-sizing: border-box;
		width: 20px;
		height: 20px;
		border: 1px solid #000;
		border-radius: 50%;
		padding: 4px;
		background-clip: content-box;
	}
	input:checked+label:before {
		background-color: #f60;
	}
	</style>
	</head>
	<body>
	<form>
	<div class="wrap">
		<input type="radio" name="radio" id="radio1">
		<label for="radio1">男</label>
		<input type="radio" name="radio" id="radio2">
		<label for="radio2">女</label>
	</div>	
	</form>
	</body>
	</html>

### 滑动门单选框代码

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title></title>
	<style type="text/css">
	input {
		display: none;
	}
	.wrap {
		position: relative;
		width: 100px;
		height: 40px;
		border: 1px solid #000;
		padding: 2px;
		background: #f1f1f1;
	}
	label {
		float: left;
		width: 50px;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}
	span {
		position: absolute;
		left: 2px;
		top: 2px;
		width: 50px;
		height: 40px;
		background: red;
		transition: .5s;
	}
	input:nth-of-type(1):checked~span {
		left: 2px;
	}
	input:nth-of-type(2):checked~span {
		left: 52px;
	}
	</style>
	</head>
	<body>
	<form>
	<div class="wrap">
		<input type="radio" name="radio" id="radio1">
		<label for="radio1">男</label>
		<input type="radio" name="radio" id="radio2">
		<label for="radio2">女</label>
		<span></span>
	</div>
	</form>
	</body>
	</html>

### 复选框

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title></title>
	<style type="text/css">
	body {
		background: #000;
	}
	input {
		display: none;
	}
	.wrap {
		position: relative;
		width: 100px;
		height: 40px;
		padding: 2px;
	}
	label {
		display: block;
		margin: 2px auto;
		width: 74px;
		height: 24px;
		border: 3px solid #ccc;
		border-radius: 18px;
		padding: 3px;
		transition: .3s;
	}
	span {
		display: block;
		width: 37px;
		height: 24px;
		background: #fff;
		border-radius: 12px;
		transition: .3s;
	}
	input:checked+label {
		border-color: #13a4e8;
	}
	input:checked+label span{
		background: #13a4e8;
		transform: translateX(37px);
	}
	</style>
	</head>
	<body>
	<form>
	<div class="wrap">
		<input type="checkbox" name="" id="checkbox">
		<label for="checkbox">
			<span></span>
		</label>
	</div>
	</form>
	</body>
	</html>

### 复选框带字

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title></title>
	<style type="text/css">
	body {
		background: #000;
	}
	input {
		display: none;
	}
	.wrap {
		position: relative;
		width: 100px;
		height: 40px;
		padding: 2px;
	}
	label {
		display: block;
		margin: 2px auto;
		width: 74px;
		height: 24px;
		border: 3px solid #ccc;
		border-radius: 18px;
		padding: 3px;
		transition: .3s;
	}
	.textOver {
		display: block;
		width: 37px;
		height: 24px;
		background: #fff;
		border-radius: 12px;
		transition: .3s;
		overflow: hidden;
	}
	.textWrap {
		transition: .3s;
		display: block;
		width: 74px;
		height: 24px;
		color: #000;
	}
	.textWrap em {
		float: left;
		width: 50%;
		font: 12px/24px Arail;
		text-align: center;
	}
	input:checked+label {
		border-color: #13a4e8;
	}
	input:checked+label .textOver{
		background: #13a4e8;
		transform: translateX(37px);
	}
	input:checked+label .textWrap{
		color: #fff;
		transform: translateX(-37px);
	}
	</style>
	</head>
	<body>
	<form>
	<div class="wrap">
		<input type="checkbox" name="" id="checkbox">
		<label for="checkbox">
			<span class="textOver">
				<span class="textWrap">
					<em>off</em>
					<em>on</em>
				</span>
			</span>
		</label>
	</div>	
	</form>
	</body>
	</html>

### 单选框头部

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		nav lable {
			float: left;
		}
		nav span {
			float: left;
			padding: 0 14px;
			background: #ccc;
			border: 1px solid #000;
			font: 14px/30px "宋体";
			margin: 0 -1px;
		}
		nav input {
			display: none;
		}
		nav input:checked + span {
			background: #000;
			color: #fff;
		}
	</style>
	</head>
	<body>
	<nav>
		<label>
			<input type="radio" name="nav">
			<span>首页</span>
		</label>
		<label>
			<input type="radio" name="nav">
			<span>妙味课堂</span>
		</label>
		<label>
			<input type="radio" name="nav">
			<span>css课程</span>
		</label>
		<label>
			<input type="radio" name="nav">
			<span>少年们准备实现</span>
		</label>
	</nav>	
	</body>
	</html>

### 滑动轮播图1

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	body {
		margin: 0;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	img {
		vertical-align: top;
		border: none;
	}
	.tabPic {
		position: relative;
		margin: 50px auto 0;
		width: 1125px;
		height: 352px;
		border: 2px solid #000;
		overflow: hidden;
	}
	.tabPic input {
		display: none;
	}
	.tabPic label {
		position: absolute;
		bottom: 20px;
		width: 14px;
		height: 14px;
		background: #fff;
		border-radius: 50%;
		z-index: 2;
	}	
	.tabPic label:nth-of-type(1) {
		left: 525.5px;
	}
	.tabPic label:nth-of-type(2) {
		left: 545.5px;
	}
	.tabPic label:nth-of-type(3) {
		left: 565.5px;
	}
	.tabPic label:nth-of-type(4) {
		left: 585.5px;
	}
	.tabPic input:checked+label {
		background: #f60;
	}
	.pisList {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
		width: 400%;
		transition: .5s;
	}
	.pisList li {
		float: left;
	}
	.tabPic input:nth-of-type(1):checked ~ ul {
		left: 0;
	}
	.tabPic input:nth-of-type(2):checked ~ ul {
		left: -100%;
	}
	.tabPic input:nth-of-type(3):checked ~ ul {
		left: -200%;
	}
	.tabPic input:nth-of-type(4):checked ~ ul {
		left: -300%;
	}
	</style>
	</head>
	<body>
	<div class="tabPic">
		<input type="radio" checked name="radio" id="radio1">
		<label for="radio1"></label>
		<input type="radio" name="radio" id="radio2">
		<label for="radio2"></label>
		<input type="radio" name="radio" id="radio3">
		<label for="radio3"></label>
		<input type="radio" name="radio" id="radio4">
		<label for="radio4"></label>
		<ul class="pisList">
			<li>
				<a href="#">
					<img src="img/img.jpg">
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/img2.jpg">
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/img3.jpg">
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/img4.jpg">
				</a>
			</li>
		</ul>
	</div>
	</body>
	</html>

### 滑动轮播图2

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	body {
		margin: 0;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	img {
		vertical-align: top;
		border: none;
	}
	.tabPic {
		position: relative;
		margin: 50px auto 0;
		width: 1125px;
		height: 352px;
		border: 2px solid #000;
		overflow: hidden;
	}
	.tabPic input {
		display: none;
	}
	.nav {
		position: absolute;
		left: 522.5px;
		bottom: 20px;
		width: 80px;
	}
	.nav span {
		position: relative;
		z-index: 10;
		float: left;
		margin: 3px;
		width: 14px;
		height: 14px;
		background: red;
		border-radius: 50%;
	}
	.nav a {
		position: absolute;
		left: -522.5px;
		bottom: -20px;
		opacity: 0;
		z-index: 1;
		transition: .4s linear;
	}
	.tabPic input:checked + span {
		background: green;
	}
	.tabPic input:checked ~ a {
		opacity: 1;
		z-index: 2;
	}
	</style>
	</head>
	<body>
	<div class="tabPic">
		<nav class="nav">
			<label>
				<input type="radio" name="radio" checked>
				<span></span>
				<a href="#1">
					<img src="img/img.jpg">
				</a>
			</label>
			<label>
				<input type="radio" name="radio">
				<span></span>
				<a href="#2">
					<img src="img/img2.jpg">
				</a>
			</label>
			<label>
				<input type="radio" name="radio">
				<span></span>
				<a href="#3">
					<img src="img/img3.jpg">
				</a>
			</label>
			<label>
				<input type="radio" name="radio">
				<span></span>
				<a href="#4">
					<img src="img/img4.jpg">
				</a>
			</label>
		</nav>
	</div>
	</body>
	</html>

### 渐变轮播图

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	body {
		margin: 0;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	img {
		vertical-align: top;
		border: none;
	}
	.tabPic {
		position: relative;
		margin: 50px auto 0;
		width: 1125px;
		height: 352px;
		border: 2px solid #000;
		overflow: hidden;
	}
	.tabPic input {
		display: none;
	}
	.tabPic label {
		position: absolute;
		bottom: 20px;
		width: 14px;
		height: 14px;
		background: #fff;
		border-radius: 50%;
		z-index: 10;
	}
	.tabPic label:nth-of-type(1) {
		left: 525.5px;
	}
	.tabPic label:nth-of-type(2) {
		left: 545.5px;
	}
	.tabPic label:nth-of-type(3) {
		left: 565.5px;
	}
	.tabPic label:nth-of-type(4) {
		left: 585.5px;
	}
	.tabPic input:checked+label {
		background: #f60;
	}
	.pisList li {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
		opacity: 0;
		transition: 1s;
	}
	.tabPic input:nth-of-type(1):checked ~ ul li:nth-of-type(1) {
		opacity: 1;
		z-index: 2;
	}
	.tabPic input:nth-of-type(2):checked ~ ul li:nth-of-type(2) {
		opacity: 1;
		z-index: 2;
	}
	.tabPic input:nth-of-type(3):checked ~ ul li:nth-of-type(3) {
		opacity: 1;
		z-index: 2;
	}
	.tabPic input:nth-of-type(4):checked ~ ul li:nth-of-type(4) {
		opacity: 1;
		z-index: 2;
	}
	</style>
	</head>
	<body>
	<div class="tabPic">
		<input type="radio" checked name="radio" id="radio1">
		<label for="radio1"></label>
		<input type="radio" name="radio" id="radio2">
		<label for="radio2"></label>
		<input type="radio" name="radio" id="radio3">
		<label for="radio3"></label>
		<input type="radio" name="radio" id="radio4">
		<label for="radio4"></label>
		<ul class="pisList">
			<li>
				<a href="#1">
					<img src="img/img.jpg">
				</a>
			</li>
			<li>
				<a href="#2">
					<img src="img/img2.jpg">
				</a>
			</li>
			<li>
				<a href="#3">
					<img src="img/img3.jpg">
				</a>
			</li>
			<li>
				<a href="#4">
					<img src="img/img4.jpg">
				</a>
			</li>
		</ul>
	</div>
	</body>
	</html>

### 旋转轮播图

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	body {
		margin: 0;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	img {
		vertical-align: top;
		border: none;
	}
	.tabPic {
		position: relative;
		margin: 50px auto 0;
		width: 1125px;
		height: 352px;
		border: 2px solid #000;
		overflow: hidden;
	}
	.tabPic input {
		display: none;
	}
	.nav {
		position: absolute;
		left: 522.5px;
		bottom: 20px;
		width: 80px;
	}
	.nav span {
		position: relative;
		z-index: 10;
		float: left;
		margin: 3px;
		width: 14px;
		height: 14px;
		background: red;
		border-radius: 50%;
	}
	.nav a {
		position: absolute;
		left: -522.5px;
		bottom: -20px;
		transform-origin: top;
		transform: rotate(180deg);/* 选中的这个input之前所有的 */
		transition: 1s;
	}
	.nav input:checked+label span{
		background: green;
	}
	.nav input:checked~label a { /* 选中的这个input之后所有的 */
		transform: rotate(-180deg);
	}
	.nav input:checked+label a {/* 选中的这个input */
		transform: rotate(0deg);
	}
	</style>
	</head>
	<body>
	<div class="tabPic">
		<nav class="nav">
			<input type="radio" id="radio1" name="radio" checked>
			<label for="radio1">
				<span></span>
				<a href="#0">
					<img src="img/img.jpg">
				</a>
			</label>
			<input type="radio" id="radio2" name="radio">
			<label for="radio2">	
				<span></span>
				<a href="#1">
					<img src="img/img2.jpg">
				</a>
			</label>
			<input type="radio" id="radio3" name="radio">
			<label for="radio3">	
				<span></span>
				<a href="#2">
					<img src="img/img3.jpg">
				</a>
			</label>
			<input type="radio" name="radio" id="radio4">
			<label for="radio4">	
				<span></span>
				<a href="#3">
					<img src="img/img4.jpg">
				</a>
			</label>
		</nav>
	</div>
	</body>
	</html>

## 位置高度的图片剧中
- 为图片新建一个兄弟元素，`vertical-align: middle;`