# HTML5（方便开发人员,亲和移动端）
- data-name="val" 自定义属性 
- el.dataset.name 获取data自定义属性
- el.dataset.name = "val" 设置data自定义属性
- contenteditable 属性，直接写在标签里 可以让用户更该内容

## form表单(提交的时候会做自动的格式验证)

### 控件
- email: 邮箱`<input type="" name="">`
- tel: 电话`<input type="tel" name="">`
- search: 搜索框`<input type="search" name="">`
- range: 数值选择器(`<input type="range" name="" min="0" max="1" step=".01">`)
	- min 最小值
	- max 最大值
	- step 步数（数值间隔）
- number : 数字`<input type="number" name="" min="0" max="100" step="1" value="20">`
	- min 最小值
	- max 最大值
	- step 步数（数值间隔）
- color : 取色器`<input type="color" name="info">`
- datetime-local: 日期及时间`<input type="datetime-local" name="info">`
- date：日期`<input type="date" name="info2">`
- time: 时间`<input type="time" name="info3">`
- month: 月份`<input type="month" name="info4">`
- week: 第几周`<input type="week" name="info5">`
- datalist: 定义input可能出现的值(通过list的属性把input和datalist关联起来,list中写的是datalist的Id)

		<input type="text" name="info" list="list">
		<datalist id="list">
			<option>html</option>
			<option>xhtml</option>
			<option>xml</option>
			<option>css</option>
			<option>css3</option>
		</datalist>
- progress 进度条`<progress value="10" max="100" min="0" name="info2"></progress>`

### 属性
- placeholder 提示信息
	- 点击后会消失
	- 设置提示信息的样式
	
			::-webkit-input-placeholder  webkit
			::-moz-placeholder 新版本火狐
			:-ms-input-placeholder IE10+

- required 设置该项为必填项
- autocomplete 是否记录用户输入的值（on||off）

代码

	<input type="text" name="user" placeholder="请输入您的用户名" required autocomplete="off" autofocus>
- pattern 正则校验
	- `<input type="tel" pattern="^1[3|4|5|7|8][0-9]\d{8}$" required placeholder="请输入11位的手机号码">`
- formaction 在submit 定义一个新的提交地址
- formnovalidate 取消验证

代码

	`<input type="submit" value="保存草稿" formaction="http://www.baidu.com" formnovalidate>`

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	body {
		margin: 0;
		background: #f1f1f1;
	}
	form {
		margin: 50px auto;
		padding: 40px;
		width: 200px;
		background: #fff;
		border-radius: 30px;
		box-shadow: 0 0 10px rgba(0, 0, 0, .2)
	}
	input {
		margin: 0;
		padding: 0;
		display: block;
		outline: none;
	}
	input[type = "text"],
	input[type = "email"],
	input[type = "password"] {
		margin-top: 10px;
		box-sizing: border-box; 
		width: 100%;
		height: 36px;
		border: none;
		padding: 3px 10px;
		font: 14px/30px "微软雅黑";
		background: #ccc;
		text-align: center;
	}
	input[type = "email"] {
		margin: 0;
		border-radius: 16px 16px 0 0;
	}
	input[type = "password"]:nth-last-child(2) {
		border-radius: 0 0 16px 16px;
	}
	input[type = "submit"] {
		margin: 10px auto 0;
		border: none;
		width: 100%;
		height: 36px;
		background: #77c8ed;
		border-radius: 16px;
	}
	/* input-placeholder  */
	input::-webkit-input-placeholder {
		color: red;
	}
	input::-moz-placeholder {
		color: red;
	}
	input:-ms-input-placeholder {
		color: red;
	}
	/*
		设置提示信息的样式
		::-webkit-input-placeholder  webkit
		::-moz-placeholder 新版本火狐
		:-ms-input-placeholder IE10+
	*/
	</style>
	</head>
	<body>
	<form action="#">
		<input type="email" value="" placeholder="请输入邮箱">
		<input type="text" value="" placeholder="请输入用户名">
		<input type="password" value="" placeholder="请输入密码">
		<input type="password" value="" placeholder="确认密码">
		<input type="submit" value="提交">
	</form>
	</body>
	</html>

### 表单相关伪类
- input:focus 获得焦点
- input:enabled 可选的控件
- input:disabled 不可选的控件
- input:checked 选中的单选或复选框