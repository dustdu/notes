## 引用注意
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！

## 栅格系统
- 栅格布局，设置小尺寸之后，大尺寸会自动继承,设置了大尺寸之后，在小尺寸下样式会无效

### 栅格屏幕分类
超小屏幕
手机 (<768px) xs
小屏幕
平板 (≥768px) sm
中等屏幕
桌面 (≥992px) lg
大屏幕
桌面 (≥1200px) lg

### 列偏移 会影响其他元素
	col-xs-offset-n
	col-sm-offset-n
	col-md-offset-n
	col-lg-offset-n

### 列排序 元素之间不会相互影响
	.col-*-push-*
	.col-*-pull-*

Demo

	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Bootstrap 101 Template</title>
	<style type="text/css">
	div[class |= "col"] {
	  border: 1px solid red;
	}
	span[class |= "col"] {
	  height: 100px;
	  border: 1px solid #000;
	  padding: 0;
	}
	</style>
	</head>
	<body>
	<div class="container-fluid">
		<div class="row">
			<span class="col-xs-4 col-xs-push-8">1</span>
			<span class="col-xs-8 col-xs-pull-4">2</span>
		</div>
	</div>
	</body>
	</html>

##
- text-justify 两端对齐
- 单选、复选不加contral

## 注意
- bootstrap中，并没有把所有的默认样式归0，Bootstrap 将全局 font-size 设置为 14px，line-height 设置为 1.428

## 表格
- .table 给表格加基本样式 (必选)
- .table-striped 隔行变色
- .table-bordered 给每个格子加边框
- .table-hover 给每一行添加hover状态
- .table-condensed 减少每个单元格的padding值

## 情景色
- .active	鼠标悬停在行或单元格上时所设置的颜色
- .success	标识成功或积极的动作
- .info	标识普通的提示信息或动作
- .warning	标识警告或需要用户注意
- .danger	标识危险或潜在的带来负面影响的动作

## 动画帧
	@keyframes name（动画帧的名字） {
		form { 起点
		
		}
		to { 运动到哪
		
		}
	}	

- 多个动画

Demo

	@keyframes 动画帧的名字 {
		0% { 开始
			width: 100px;
			height: 100px;
		}
		开始样式可以不必保持和元素本身样式一致，但我们动画开始时，就是0%的样式开始显示并且开始动画
		50% {
			width: 300px;
			height: 300px;
		}
		100% {//结束
			width: 100px;
			height: 100px;
		}
	}

- animation 写在样式里
	- animation-name 动画帧的名字 (必写)
	- animation-duration 动画总时间 (必写)
	- animation-delay 延迟时间
	- animation-iteration-count 动画次数 (number|infinite无限次)
	- animation-direction 偶数次的动画执行顺序( normal|alternate倒序播放)
	- animation-timing-function 动画形式 (和transition完全一致)
		- ease/ease-out/ease-in/ease-in-out/linear/cubic-bezier()
- nimation-fill-mode : none | forwards | backwards | both;写在样式里
	- forwards 执行到100%的时候，让元素的样式就停留在100%，不要回到计算后样式
	- backwards 一开始就把元素的样式，定在0%上，不要走计算后样式
	- both: forwards backwards;
- 时间写在样式里
- 如果不设置0%，那0%默认就是元素的计算后样式
- 开始样式可以不必保持和元素本身样式一致，但我们动画开始时，就是0%的样式开始显示并且开始动画
- 如果不设置100%，那100%默认就是元素的计算后样式
- 默认情况下动画走完100%，会回到计算后样式
- 动画开始之前，默认一直保持计算后样式

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	@keyframes move {
		0% {
			top: 200px;
			left: 0;
		}
		100% {
			top: 200px;
			left: 500px;
		}
	}
	.box {
		position: absolute;
		left: 0;
		top: 0;
		width: 100px;
		height: 100px;
		background: red;
		animation: 3s 1s move linear;
		animation-fill-mode: both; 
	}
	</style>
	</head>
	<body>
	<div class="box"></div>	
	</body>
	</html>

Demo2

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	@keyframes move {
		0%{
			transform: translate(0);
		}
		18%{
			transform: translate(0);
		}
		20% {
			transform: translate(-200px);
		}
		38% {
			transform: translate(-200px);
		}
		40% {
			transform: translate(-400px);	
		}
		58% {
			transform: translate(-400px);
		}
		60% {
			transform: translate(-600px);
		}
		78% {
			transform: translate(-600px);
		}
		80% {
			transform: translate(-800px);
		}
		98% {
			transform: translate(-800px);
		}
		100% {
			transform: translate(-1000px);
		}
	}
	body {
		margin: 0;
	}	
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	img {
		border: none;
		vertical-align: top;
	}
	.wrap {
		margin: 30px auto;
		width: 200px;
		border: 10px solid #000;
		overflow: hidden;
	}
	.wrap img {
		width: 200px;
	}
	.wrap ul {
		width: 2000px;
		animation: 20s move linear infinite;
		overflow: hidden;
	}
	.wrap li {
		float: left;
	}
	.wrap:hover ul {
		/* 动画暂定 (paused|running) */
		animation-play-state: paused;
	}
	</style>
	</head>
	<body>
	<div class="wrap">
		<ul>
			<li>
				<a href="#">
					<img src="img/1.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/2.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/3.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/4.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/5.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/1.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/2.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/3.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/4.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/5.jpg"/>
				</a>
			</li>
		</ul>
	</div>
	</body>
	</html>

## 表单
- 显示方向 加给form
	- 默认垂直显示
	- .form-inline
	- .form-horizontal
- .form-control 
	- 默认宽度 百分之百，所以不要加给单选或者复选
	- 复选框 父级class加.checkbox，父级下在包含label，
		- 单选和复选都写在label里

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta name="viewport" content="width=device-width,user-scalable=no" />
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	</head>
	<body>
	<div class="container">
		<!-- 默认垂直显示、.form-inline、.form-horizontal -->	
		<form class="form-horizontal">
			<div class="form-group">
				<label for="username">用户名:</label>
				<input class="form-control" id="username" type="text" name="">
			</div>
			<div class="form-group">
				<label for="password">密码:</label>
				<input class="form-control" id="password" type="password" name="">
			</div>
			<!--
				.form-control 默认宽度 百分之百，所以不要加给单选或者复选
				复选框 父级class.checkbox，父级下在包含label，
				单选和复选都写在label里
	
			-->
			<div class="checkbox">
				<label>
					<input id="auto" type="checkbox" name="">自动登陆
				</label>
			</div>
		</form>
	</div>	
	</body>
	</html>
- 水平排列的表单，需要用到栅格系统，另外label需要加class .control-label,控件需要专门的用div包起来
- 情景模式：
	- has-error
	- has-success
	- has-warning
	- 情景加给.form-group,会控制它里边的control-label 和 	form-control变颜色
	- 尺寸设置：lg 默认尺寸 和 sm

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta name="viewport" content="width=device-width,user-scalable=no" />
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	</head>
	<body>
	<div class="container">
		<!-- 默认垂直显示、.form-inline、.form-horizontal 
			
			水平排列的表单，需要用到栅格系统，另外label需要加class .control-label,控件需要专门的用div包起来
		-->	
		<form class="form-horizontal">
			<div class="checkbox-inline">
				<label>
					<input type="checkbox" name="">
					1
				</label>
			</div>
			<div class="checkbox-inline">
				<label>
					<input type="checkbox" name="">
					1
				</label>
			</div>
			<div class="checkbox-inline">
				<label>
					<input type="checkbox" name="">
					1
				</label>
			</div>
			<div class="radio">
				<label>
					<input type="radio" name="">
					1
				</label>
			</div>
			<div class="radio">
				<label>
					<input type="radio" name="">
					1
				</label>
			</div>
			<div class="radio-inline">
				<label>
					<input type="radio" name="">
					1
				</label>
			</div>
			<div class="radio-inline">
				<label>
					<input type="radio" name="">
					1
				</label>
			</div>
			<div class="form-group has-error">
				<label>邮箱</label>
				<input type="text" class="form-control input-sm" name="">
			</div>
			<div class="form-group has-error">
				<label class="control-label">邮箱</label>
				<div class="form-control-static">motao@miaov.com</div>
			</div>
			<!--
				情景模式：
					has-error
					has-success
					has-warning
				情景加给.form-group,会控制它里边的control-label 和 	form-control变颜色
	
				尺寸设置：lg 默认尺寸 和 sm
			-->
		</form>
	</div>	
	</body>
	</html>

## 按钮
- 基本类 .btn（所有的按钮都得加）
- 适用元素: a、button、input
- 大小设置: .btn-lg、默认大小、.btn-sm、 .btn-xs 
- 样式及颜色: btn-default btn-primary btn-success btn-info  btn-warning btn-danger btn-link 

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta name="viewport" content="width=device-width,user-scalable=no" />
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	</head>
	<body>
	<!--
		按钮:
			*基本类 .btn（所有的按钮都得加）
			适用元素: a、button、input
			大小设置: .btn-lg、默认大小、.btn-sm、 .btn-xs 
			*样式及颜色: btn-default btn-primary btn-success btn-info  btn-warning btn-danger btn-link 
	-->
	<div class="container">
		<a href="#" class="btn btn-default">按钮</a>
		<a href="#" class="btn btn-primary">按钮</a>
		<a href="#" class="btn btn-success">按钮</a>
		<a href="#" class="btn btn-info">按钮</a>
		<a href="#" class="btn btn-warning">按钮</a>
		<a href="#" class="btn btn-danger">按钮</a>
		<a href="#" class="btn btn-link">按钮</a>
		<hr/>
		<button class="btn btn-primary btn-lg active">按钮</button>
		<input type="button" class="btn btn-primary disabled " value="按钮">
		<input type="submit" class="btn btn-primary btn-sm" value="按钮">
		<input type="reset" class="btn btn-primary btn-xs" value="按钮">
	</div>	
	</body>
	</html>