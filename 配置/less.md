## 变量:
- 变量: 存储数据的容器，数据本身可以修改
- 声明：@变量名称:变量的值;
- 使用：
	- 属性值中：@变量名称
	- 选择器名中：@{变量名称}	
	- 属性名中：@{变量名称}
	- 在路径中使用：@{变量名称} **注意加引号
	- 在变量值中使用：@变量名称
	- 在变量名中使用：@变量名称

Demo

	@w: 100px;
	@b: box;
	@bg: background;
	@url: "../image/";
	@w2: @w*2;
	@box: red;
	#box {
		width: @w;
		height: @w;
		@{bg}: @@b;
	}
	.@{b}{
		width: @w2;
		height: @w;
		@{bg}: url("@{url}png2.png");
	}
	.@{b}1{
		width: @w*2;
		height: @w*2;
		background: red;
	}
	.@{b}2{
		width: @w*2;
		height: @w*2;
		background: red;
	}

## 运算的使用
- 运算时的单位识别
	- 如果运算符的左右两侧都有单位，
		- 加减除法识别的是运算符左侧的单位
		- 乘法识别的是运算符右侧的单位

- 变量重名之后，后边会覆盖前边的
- @w2:100;
  @rem2:64;
	`#box {
		width: @w2+@rem2+px; 这样写在单位和值之间用空格,尽量在变量中添加单位
	}`

## 作用域
@w: 100px;
.box {
	@w: 200px; 写在{}之间 叫做局部变量，只可以在{}之间起作用
	width: @w;
}
#box {
	width: @w;
}

## less中的嵌套
	#box {
		@w: 100px;
		width: @w;
		height: 100px;
		li{
			@w: 200px;
			width: @w;
		}
		div {
			width: @w;
		}
		a {
			color: red;
			&:hover { // & 上一级
				color: blue;
			}
		}
	}

输出

	#box {
	  width: 100px;
	  height: 100px;
	}
	#box li {
	  width: 200px;
	}
	#box div {
	  width: 100px;
	}
	#box a {
	  color: red;
	}
	#box a:hover {
	  color: blue;
	}

## 混合
	.border {
		background: red;
		border: 2px solid #000;
	}
	#box {
		width: 100px;
		height: 100px;
		.border;
	}
	.div {
		width: 200px;
		height: 200px;
		.border;
	}

输出

	.border {
	  background: red;
	  border: 2px solid #000;
	}
	#box {
	  width: 100px;
	  height: 100px;
	  background: red;
	  border: 2px solid #000;
	}
	.div {
	  width: 200px;
	  height: 200px;
	  background: red;
	  border: 2px solid #000;
	}

- 混合中避免编译 加（）

##  利用原子类和嵌套来添加样式
	.fl() {
		float:left;
	}
	.fr() {
		float:right;
	}
	.mt10(){
		margin-top: 10px;
	}
	.mt20(){
		margin-top: 20px;
	}
	.mt30(){
		margin-top: 30px;
	}
	.border1() {
		border: 2px solid #000;	
	}
	.border2() {
		border: 2px solid #ccc;	
	}
	.bR10() {
		border-radius: 10px;
	}
	.bR20() {
		border-radius: 20px;
	}
	.col1() {
		.fl;
		width: 10%;
	} 
	.col2() {
		.fl;
		width: 20%;
	} 
	.col3() {
		.fl;
		width: 30%;
	} 
	.col4() {
		.fl;
		width: 40%;
	} 
	
	#box {
		.col4;
		.border2;
		.bR20;
		.mt10;
	}