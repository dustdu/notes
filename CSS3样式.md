## box-sizing 盒模型设置
- border-box 设置为怪异盒模型
- content-box 设置为标准盒模型

## border-radius 圆角
- number
	- x半径/y半径（多个圆角，/线之前全部为x半径，后为y半径）
	
			#box {
				width: 200px;
				height: 300px;
				border: 1px solid #000;
				border-radius: 101px/151px;
			}
	- 多值
		- 左上右下  右上左下 
		- 左上 右上左下 右下 
		- 左上 右上 右下 左下
		
				#box {
					width: 200px;
					height: 300px;
					border: 1px solid #000;
					/* border-radius: 10px 20px; */
					/* border-radius: 10px 20px 30px; */
					border-radius: 10px 20px 30px 40px;
				}

	- x y不同多值
			
			#box {
				width: 200px;
				height: 300px;
				border: 1px solid #000;
				border-radius: 10px 20px 30px 40px/20px 40px 60px 80px;
			}
- 百分比 
	- x半径根据元素的宽度计算
	- y半径根据元素的高度计算
- 单个圆角
	- border-top-left-radius
	- border-top-right-radius
	- border-bottom-right-radius
	- border-bottom-left-radius 

## 盒模型阴影 box-shadow
	- 值
		- inset (可选参数)加了就是内阴影，不加就是外阴影
		- x 
		- y
		- 阴影半径 （可选）
		- 扩展半径 (可选参数) 在元素大小的基础上，扩展一个距离然后开始模糊消失
		- 阴影颜色
- 同一个元素可以拥有多层阴影，每层阴影之间用","隔开,但最好不要加太多层，性能比较差（可以根据这些设置单边阴影）
	
	Demo
	
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<style type="text/css">
				#box {
					margin: 150px auto 0;
					width: 100px;
					height: 100px;
					background: #ccc;
					box-shadow: 0 0 10px green, inset 0 0 10px yellow; 
				}
			</style>
		</head>
		<body>
		<div id="box"></div>
		</body>
		</html>

## 文字阴影 text-shadow
	 值
		- x
		- y
		- 阴影半径 (可选)
		- 阴影颜色
- 同一个元素可以拥有多层阴影，每层阴影之间用","隔开,但最好不要加太多层，性能比较差

	Demo
	
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<style type="text/css">
				h1 {
					text-align: center;
					font: bold 100px/200px "微软雅黑";
					color: #fff;
					text-shadow: 5px 5px 10px #000, 5px 5px 10px red;
				}
			</style>
		</head>
		<body>
			<h1>妙味课堂</h1>
		</body>
		</html>

## color: rgba(255, 0, 0, .5); 字体颜色
	- 值
		- R： 红色值。正整数 | 百分数 
		- G： 绿色值。正整数 | 百分数 
		- B： 蓝色值。正整数 | 百分数 
		- A： Alpha透明度。取值0 1之间。

	Demo
	
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<style type="text/css">
				h1 {
					text-align: center;
					font: bold 100px/200px "微软雅黑";
					color: rgba(255, 255, 0, .5);
					text-shadow: 5px 5px 10px #000, 5px 5px 10px red;
				}
			</style>
		</head>
		<body>
			<h1>妙味课堂</h1>
		</body>
		</html>

## transition (css3) 过渡
- transition-duration 过渡时间 （s||ms） 1s = 1000ms
- transition-property 过渡样式(需要过渡的css属性)
	- all||none|attr
	- 过渡只支持加给数值类的样式
- transition-delay 延迟时间（s||ms）
- transition-timing-function 动画形式
	- ease
	- ease-out
	- eaase-in
	- ease-in-out
	- linear
	- step-start： 等同于 steps(1, start) 
	- step-end： 等同于 steps(1, end) 
	- steps(<integer>[, [ start | end ] ]?)： 接受两个参数的步进函数。第一个参数必须为正整数，指定函数的步数。第二个参数取值可以是start或end，指定每一步的值发生变化的时间点。第二个参数是可选的，默认值为end。
	- cubic-bezier(.19,1.55,.66,-0.31) 【四个值在0-1之间】
	- [http://cubic-bezier.com](http://cubic-bezier.com)

## transform 变换
- transform 后写先执行
- transform 不脱离文档流，不改变元素的文档流大小

### transform-style (3d空间,元素在做3D变换的时候，是否保留子元素的3D变换)  
- flat(默认值) 平面空间 不保留子元素的3d效果
- preserve-3d 3D空间 保留子元素的3d效果
- 当父级元素与子元素都有3D变换，需要加，不然会没有效果

### perspective 景深(透视)
- 指定观察者距离「z=0」平面的距离，为元素及其内容应用透视变换。不允许负值
- 景深加给变换元素的父级
- 距离越远，元素变化感觉不明显

### backface-visibility 元素背面
- visible： 指定元素背面可见，允许显示正面的镜像。 
- hidden： 指定元素背面不可见
- 决定一个元素背面面向用户时是否可见，需要直接在该元素上定义

### perspective-origin 景深原点(center center) 视线方向
- 百分比： 用百分比指定透视点坐标值，相对于元素宽度。可以为负值。 
- 长度： 用长度值指定透视点坐标值。可以为负值。
- x y
	- x 
	
			left： 指定透视点的横坐标为left 
			center： 指定透视点的横坐标为center 
			right： 指定透视点的横坐标为right 
	- y
	
			top： 指定透视点的纵坐标为top 
			center： 指定透视点的纵坐标为center 
			bottom： 指定透视点的纵坐标为bottom 
### rotate 旋转
- transform: 
	- 2d
		- rotate（）
		- 指定对象的2D rotation（2D旋转），需先有 <' transform-origin '> 属性的定义
	- 3d
		- rotateX（） X轴上旋转
		- rotateY（） Y轴上旋转
		- rotateZ（） Z轴上旋转
		- rotate3d（x,y,z,角度）
			- x：是一个0到１之间的数值，主要用来描述元素围绕X轴旋转的矢量值；
			- y：是一个0到１之间的数值，主要用来描述元素围绕Y轴旋转的矢量值；
			- z：是一个0到１之间的数值，主要用来描述元素围绕Z轴旋转的矢量值；
			- a：是一个角度值，主要用来指定元素在3D空间旋转的角度，如果其值为正值，元素顺时针旋转，反之元素逆时针旋转。
- (deg) 角度
- turn  圈数
- rad   弧度
	- 1rad = 180/π*1deg	
	- 1deg = π/180*1rad
	- sin = 直角三角函数中，对边/斜边
	- cos = 直角三角函数中，邻边/斜边
	- tan = 直角三角函数中，对边/邻边
	- 斜边*斜边 =  对边*对边 + 邻边*邻边;

### 浏览器前缀：
	-webkit-  chrome和safari
	-moz- 火狐
	-ms- IE
	-o-	opera

### scale 缩放 (倍数)
- scale()
	- 指定对象的2D scale（2D缩放）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认取第一个参数的值 
- scaleX（）X方向上
- scaleY（）Y方向上
- scaleZ（）Z方向上
- scaleX3d

### transform-origin 变换原点设置
- 默认值：center center 0
- transform-origin z轴的设置，在ios下有兼容问题

### skew 斜切 (deg)拉伸
- skew(x,y) 
	- 指定对象skew transformation（斜切扭曲）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0 
- skewX()X方向上
- skewY()Y方向上

### translate

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	#box {
		margin: 50px auto;
		width: 100px;
		border: 1px solid #000;
		padding: 100px;	
	}	
	.div {
		width: 100px;
		height: 100px;
		background: red;
		font-size: 80px;
		transition: 2s;
	}
	#box:hover #div {
		transform: translate(100px,100px);
	}
	</style>
	</head>
	<body>
	<div id="box">
		<div class="div" id="div">上</div>
		<div class="div">下</div>
	</div>
	</body>
	</html> 

- translate(x,y) 
	- 指定对象的2D translation（2D平移）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0 
- 当父元素设置了filter和opacity,再设置translate无效
- translateX（）
- translateY（）	
- translateZ（）
- translate3d（）

### matrix 矩阵			
	matrix2d 矩阵(1, 0, 0, 1, 0, 0) (a,b,c,d,e,f)
	
	translateX: 
		e = e + x;
	translateY:
		f = f + y;
	
	scaleX:
		a = a*x;
		c = c*x;
		e = e*x;
	scaleY:
		b = b*y;
		d = d*y;
		f = f*y;
	skewX:
		c = Math.tan(x*Math.PI/180)

	skewY:
		b = Math.tan(x*Math.PI/180)	

	rotate:
		a = Math.cos(deg*Math.PI/180)
		b = Math.sin(deg*Math.PI/180)
		c = -Math.sin(deg*Math.PI/180)
		d = Math.cos(deg*Math.PI/180)

### IE下矩阵
- `filter:progid:DXImageTransform.Microsoft.Matrix( M11= 1, M12= 0, M21= 0 , M22=1,SizingMethod='auto expand');`
- IE下的矩阵没有E和F两个参数 M11==a; M12==c; M21==b; M22==d

## background-clip 背景裁切

- background-clip 决定元素的背景，显示在元素的哪些区域里(border以内，padding以内，content以内)
- 相关属性值
	- border-box （默认值）元素背景显示在border及border以里
	- padding-box 元素背景显示在padding及padding以里
	- content-box 只有content区域显示元素背景
	- -webkit-text  只有文字显示元素背景
		- -webkit-text是webkit内核的浏览器的私有属性，只有在webkit内核的浏览器中才支持
		- -webkit-text新版本的webkit内核的浏览器已经不支持了，可以写成 -webkit-background-clip: text

Demo
		
	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	#box {
		width: 300px;
		height: 300px;
		border: 50px solid rgba(0, 0, 0, .3);
		padding: 50px;
		background: url(img/timg.jpg);
		background-clip: content-box;
	}
	</style>
	</head>
	<body>
	<div id="box"></div>
	</body>
	</html>

## background-origin 背景的原点设置

背景的原点也就是background-position的 0 0 点，或者说left top的位置，默认是在 元素padding区域的左上角。

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	#box {
		width: 300px;
		height: 300px;
		border: 50px solid rgba(0, 0, 0, .3);
		padding: 50px;
		background: url(img/timg.jpg);
		background-clip: content-box;
		background-origin: content-box;
	}
	</style>
	</head>
	<body>
	<div id="box"></div>
	</body>
	</html>

### background-origin的相关属性值

- border-box：background-position的 0 0点 从元素border的左上角开始计算
- padding-box: background-position的 0 0点 从元素padding的左上角开始计算,也是默认值
- content-box:  background-position的 0 0点 从元素padding的左上角开始计算
 
## 元素多背景图设置

- 在css3，支持给同一个元素添加多张背景图，每张背景图之间需要用","隔开
- 当元素拥有多张背景图时，先写的在上边，后加的图片在下边
- 在集合写法中，如果只设置一项border-box的话，浏览器默认会把background-origin和background-clip都设置为border-box
- 在集合写法中，background-origin和background-clip要做不同的设置，先写background-origin的值，再写裁切的值
- 多背景时，如果要添加背景颜色，背景颜色写在最后边

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<style type="text/css">
			#box {
				width: 700px;
				height: 200px;
				border: 100px solid rgba(0, 0, 0, 0);
				padding: 100px;
				background: url(img/timg2.jpg) no-repeat padding-box, url(img/timg3.jpg) no-repeat border-box padding-box;
			}
		</style>
	</head>
	<body>
	<div id="box"></div>
	</body>
	</html>

## background-size 背景图大小设置

- 语法：background-size：图片的宽度 图片的高度 
- 接受的值得类型
	- 具体数值
	- 百分比
		- 宽度的百分比根据元素的宽度计算
		- 高度的百分比根据元素的高度计算
	- 关键字
		- cover	根据元素宽度等比缩放图片，优先铺满整个元素，但是图片可能会显示不全
		- contain 根据元素宽度等比缩放图片，优先显示完整图片，但是元素可能会铺不满
		- auto 设置宽度，高度设置auto的话，高度会随着宽度等比缩放，设置高度，宽度设置auto的话，宽度会随着高度等比缩放

## linear-gradient 线性渐变

- 渐变颜色设置，或者说过渡点,每个点之间用","隔开
linear-gradient(red,blue,yellow)
- 过渡点的位置设置
	- 百分比
	- 具体数值
	- 当两个颜色的过渡点位置是重叠的，颜色和颜色之间就没有过渡，而是直接跳转
- 渐变方向设置
	- 关键字设置起点(需要加各个浏览器的前缀之后，才能被识别)

		Demo
		
			<!DOCTYPE html>
			<html lang="en">
			<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<style type="text/css">
			#box {
				width: 300px;
				height: 400px;
				border: 2px solid #000;
				background: -webkit-linear-gradient(left top,red 0,blue 20%,yellow 50%);
				background: -moz-linear-gradient(left top,red 0,blue 20%,yellow 50%);
				background: -ms-linear-gradient(left top,red 0,blue 20%,yellow 50%);
				background: linear-gradient(left top,red 0,blue 20%,yellow 50%);
			}
			</style>
			</head>
			<body>
			<div id="box"></div>
			</body>
			</html>

	- 角度设置
		- 0deg从下向上渐变
		- 角度增加为顺时针旋转	

		Demo
		
			<!DOCTYPE html>
			<html lang="en">
			<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<style type="text/css">
			#box {
				width: 300px;
				height: 400px;
				border: 2px solid #000;
				/* background: linear-gradient(red 0%,blue 10%,yellow 30%); */
				background: linear-gradient(90deg,red 0,blue 20%,yellow 50%);
			}
			</style>
			</head>
			<body>
			<div id="box"></div>
			</body>
			</html>

- repeating-linear-gradient 重复渐变

	Demo
	
		<!DOCTYPE html>
		<html lang="en">
		<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<style type="text/css">
		#box {
			width: 300px;
			height: 100px;
			border: 2px solid #000;
			background: repeating-linear-gradient(90deg, red 0,red 10px,blue 10px, blue 20px, rgba(0, 0, 0, 0) 20px,rgba(0, 0, 0, 0) 30px);
		}
		</style>
		</head>
		<body>
		<div id="box"></div>
		</body>
		</html>

- 渐变属性 background-image

## radial-gradient 径向渐变
	
- 渐变颜色设置，或者说过渡点,每个点之间用","隔开

- 过渡点的位置设置
	- 百分比
	- 具体数值

		Demo
		
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>Document</title>
				<style type="text/css">
					#box {
						width: 300px;
						height: 300px;
						border: 2px solid #000;
						/* background: radial-gradient(red 10px, blue 20px); */
						background: radial-gradient(red 10%, blue 30%);
					}
				</style>
			</head>
			<body>
				<div id="box"></div>
			</body>
			</html>

	- 当两个颜色的过渡点位置是重叠的，颜色和颜色之间就没有过渡，而是直接跳转

		Demo
		
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>Document</title>
				<style type="text/css">
					#box {
						width: 300px;
						height: 300px;
						border: 2px solid #000;
						background: radial-gradient(
								rgba(0, 0, 0, 0) 30px,
								blue 30px,
								blue 60px,
								rgba(0, 0, 0, 0) 60px
								 );
					}
				</style>
			</head>
			<body>
				<div id="box"></div>
			</body>
			</html>

- 大小设置
	- 具体数值，火狐老版本不支持,以及加了前缀moz依然不支持
	- 最近端，最近角，最远端，最远角，包含或覆盖 closest-side, closest-corner, farthest-side, farthest-corner, contain or cover
	
		Demo
		
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>Document</title>
				<style type="text/css">
					#box {
						width: 300px;
						height: 300px;
						border: 2px solid #000;
						background: radial-gradient(closest-side,blue 10%,red 10%, red 95%,blue 95%);
					}
				</style>
			</head>
			<body>
				<div id="box"></div>
			</body>
			</html>

- 形状设置 ellipse||circle
	- 形状设置和大小只能同时设置一个 	
- 圆心点设置	
	- 必须加前缀才可以设置
	- 关键字
	- 具体数值

	Demo
	
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<style type="text/css">
				#box {
					width: 300px;
					height: 400px;
					border: 2px solid #000;
					background: -webkit-radial-gradient(10px 100px,farthest-corner, red,blue);
					background: -moz-radial-gradient(10px 100px,farthest-corner, red,blue);
					background: -ms-radial-gradient(10px 100px,farthest-corner, red,blue);
				}
			</style>
		</head>
		<body>
			<div id="box"></div>
		</body>
		</html>

综合案例1

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	ul {
		list-style: none;
	  overflow: hidden;
	  margin-top: 20px;
	}
	li{
	  width: 150px;
	  height: 80px;
	  margin-bottom: 10px;
	  float: left;
	  margin-right: 5px;
	  background: #ace;
	  /*Controls the size*/
	  -webkit-background-size: 20px 20px;
	  -moz-background-size: 20px 20px;
	  background-size: 20px 20px;
	}
	     
	li.gradient1 {
	  background-image: -webkit-gradient(
	    linear,
	    0 100%, 100% 0,
	    color-stop(.25, rgba(255, 255, 255, .2)),
	    color-stop(.25, transparent),
	    color-stop(.5, transparent),
	    color-stop(.5, rgba(255, 255, 255, .2)),
	    color-stop(.75, rgba(255, 255, 255, .2)),
	    color-stop(.75, transparent),
	    to(transparent)
	    );
	  background-image: -moz-linear-gradient(
	    45deg,
	    rgba(255, 255, 255, .2) 25%,
	    transparent 25%,
	    transparent 50%,
	    rgba(255, 255, 255, .2) 50%,
	    rgba(255, 255, 255, .2) 75%,
	    transparent 75%,
	    transparent
	    );
	  background-image: -o-linear-gradient(
	    45deg,
	    rgba(255, 255, 255, .2) 25%,
	    transparent 25%,
	    transparent 50%,
	    rgba(255, 255, 255, .2) 50%,
	    rgba(255, 255, 255, .2) 75%,
	    transparent 75%,
	    transparent
	  );
	  background-image: linear-gradient(
	    45deg,
	    rgba(255, 255, 255, .2) 25%,
	    transparent 25%,
	    transparent 50%,
	    gba(255, 255, 255, .2) 50%,
	    rgba(255, 255, 255, .2) 75%,
	    transparent 75%,
	    transparent
	    );
	}
	 
	li.gradient2 {
	   background-image: -webkit-gradient(linear, 0 0, 100% 100%,
	      color-stop(.25, rgba(255, 255, 255, .2)), color-stop(.25, transparent),
	      color-stop(.5, transparent), color-stop(.5, rgba(255, 255, 255, .2)),
	      color-stop(.75, rgba(255, 255, 255, .2)), color-stop(.75, transparent),
	      to(transparent));
	   background-image: -moz-linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
	      transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
	      transparent 75%, transparent);
	   background-image: -o-linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
	      transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
	      transparent 75%, transparent);
	   background-image: linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
	      transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
	      transparent 75%, transparent);
	}
	     
	li.gradient3 {
	  background-image: -webkit-gradient(linear, 0 0, 0 100%, color-stop(.5, rgba(255, 255, 255, .2)), color-stop(.5, transparent), to(transparent));
	  background-image: -moz-linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
	  background-image: -o-linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
	  background-image: linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
	}
	     
	li.gradient4 {
	  background-image: -webkit-gradient(linear, 0 0, 100% 0, color-stop(.5, rgba(255, 255, 255, .2)), color-stop(.5, transparent), to(transparent));
	  background-image: -moz-linear-gradient(0deg, rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
	  background-image: -o-linear-gradient(0deg, rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
	  background-image: linear-gradient(0deg, rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
	}
	     
	li.gradient5 {
	  background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(.25, #555), color-stop(.25, transparent), to(transparent)),
	      -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, #555), color-stop(.25, transparent), to(transparent)),
	      -webkit-gradient(linear, 0 0, 100% 100%, color-stop(.75, transparent), color-stop(.75, #555)),
	      -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.75, transparent), color-stop(.75, #555));
	  background-image: -moz-linear-gradient(45deg, #555 25%, transparent 25%, transparent),
	     -moz-linear-gradient(-45deg, #555 25%, transparent 25%, transparent),
	     -moz-linear-gradient(45deg, transparent 75%, #555 75%),
	     -moz-linear-gradient(-45deg, transparent 75%, #555 75%);
	  background-image: -o-linear-gradient(45deg, #555 25%, transparent 25%, transparent),
	     -o-linear-gradient(-45deg, #555 25%, transparent 25%, transparent),
	     -o-linear-gradient(45deg, transparent 75%, #555 75%),
	     -o-linear-gradient(-45deg, transparent 75%, #555 75%);
	  background-image: linear-gradient(45deg, #555 25%, transparent 25%, transparent),
	    linear-gradient(-45deg, #555 25%, transparent 25%, transparent),
	    linear-gradient(45deg, transparent 75%, #555 75%),
	    linear-gradient(-45deg, transparent 75%, #555 75%);
	}
	     
	li.gradient6 {
	  background-image: -webkit-gradient(linear, 0 0, 0 100%, color-stop(.5, transparent), color-stop(.5, rgba(200, 0, 0, .5)), to(rgba(200, 0, 0, .5))),
	     -webkit-gradient(linear, 0 0, 100% 0, color-stop(.5, transparent), color-stop(.5, rgba(200, 0, 0, .5)), to(rgba(200, 0, 0, .5)));
	  background-image: -moz-linear-gradient(transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5)),
	     -moz-linear-gradient(0deg, transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5));
	  background-image: -o-linear-gradient(transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5)),
	     -o-linear-gradient(0deg, transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5));
	  background-image: linear-gradient(transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5)),
	     linear-gradient(0deg, transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5));
	}
	</style>
	</head>
	<body>
		<ul>
	   <li class="gradient gradient1"></li>
	   <li class="gradient gradient2"></li>
	   <li class="gradient gradient3"></li>
	   <li class="gradient gradient4"></li>
	   <li class="gradient gradient5"></li>
	   <li class="gradient gradient6"></li>
	</ul>
	</body>
	</html>

综合案例2

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<style type="text/css">
			@keyframes rotate {
				0% {
					transform: rotate(0deg)
				}
				100% {
					transform: rotate(360deg);
				}
			}
			#box {
				width: 200px;
				height: 200px;
				margin: 100px auto;
				background: 
					repeating-linear-gradient(
						45deg,
						rgba(255, 255, 255, 1) 0,
						rgba(255, 255, 255, 1) 10px,
						rgba(255, 255, 255, 0) 10px,
						rgba(255, 255, 255, 0) 20px
					),
					repeating-linear-gradient(
						-45deg,
						rgba(255, 255, 255, 1) 0,
						rgba(255, 255, 255, 1) 10px,
						rgba(255, 255, 255, 0) 10px,
						rgba(255, 255, 255, 0) 20px
					) green
				;
				animation: 5s rotate linear infinite;
			}
		</style>
	</head>
	<body>
		<div id="box"></div>
	</body>
	</html>

## @font-face

	@font-face {
		font-family: "自定义字体名";
		src: url(font/ImpactLabel.ttf);
	}


- @Font-face目前浏览器的兼容性： 
	- Webkit/Safari(3.2+)：TrueType/OpenType TT (.ttf) 、OpenType PS (.otf)； 
	- Opera (10+)： TrueType/OpenType TT (.ttf) 、 OpenType PS (.otf) 、 SVG (.svg)； 
	- Internet Explorer： 自ie4开始，支持EOT格式的字体文件；ie9支持WOFF； 
	- Firefox(3.5+)： TrueType/OpenType TT (.ttf)、 OpenType PS (.otf)、 WOFF (since Firefox 3.6) 
	- Google Chrome：TrueType/OpenType TT (.ttf)、OpenType PS (.otf)、WOFF since version 6 
	- 由上面可以得出：.eot + .ttf /.otf + svg + woff = 所有浏览器的完美支持。

## -webkit-text-stroke 文字描边

	-webkit-text-stroke: 2px red;
- 注意：
	- 书写时必须加前缀
	- 目前只有webkit支持

代码

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	h1 {
		font-size: 100px;
		color: #ccc;
		-webkit-text-stroke: 2px red;
		/* text-shadow: 0 0 1px red; */
	}
	</style>
	</head>
	<body>
	<h1>一个红心献给党</h1>	
	</body>
	</html>

## mask 遮罩

	mask-image
	mask-repeat
	mask-position
代码

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	body {
		margin: 0;
	}
	.wrap {
		margin: 0 auto;
		width: 600px;
		border: 2px solid #000;
	}
	#box {
		-webkit-mask: url(maskImage/mask.png) no-repeat center center;
		cursor: none;
	}
	#box img {
		width: 600px;
		display: block
	}
	</style>
	</head>
	<body>
	<div class="wrap">
		<div id="box">
			<img src="maskImage/timg.jpg">
		</div>
	</div>	
	<script type="text/javascript">
	(function(){
		var box = document.querySelector('#box');
		box.onmousemove = function(e){
			var left = e.clientX - this.offsetLeft;
			var top = e.clientY - this.offsetTop;
			this.style.WebkitMaskPosition = (left-100) +"px "+(top-100)+"px";
		};
	})();	
	</script>
	</body>
	</html>

## 文字排版

- direction: rtl;
	- ltr： 文本流从左到右。
	- rtl： 文本流从右到左。
- unicode-bidi: bidi-override;
	- normal： 对象不打开附加的嵌入层，对于内联元素，隐式重排序跨对象边界进行工作。 
	- embed： 对象打开附加的嵌入层，<' direction '> 属性的值指定嵌入层，在对象内部进行隐式重排序。 
	- bidi-override： 严格按照 <' direction '> 属性的值重排序。忽略隐式双向运算规则。 
- 两项配合使用

代码

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		h1 {
			direction: rtl;
			unicode-bidi: bidi-override;
		}
	</style>
	</head>
	<body>
		<h1>今天中午去吃火锅</h1>
	</body>
	</html>

## border-colors

	#box {
			margin: 50px;
			width: 100px;
			height: 100px;
			border: 5px solid #000;
			-webkit-border-left-colors:  blue yellow pink green;
		}

## border-image 

	border-image 
		border-image-source 图片
		border-image-slice 图片裁切
		border-image-repeat 图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)
- `-webkit-border-image: url(borderImage/bt_blue.png) 0 11;`
- 会根据边框的大小缩放
- (repeat)、铺满(round)或拉伸(stretch 默认值)
- webkit/火狐/IE11+支持，但是除了webkit其他浏览器都不会去铺中间的背景

代码

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	#box {
		width: 100px;
		height: 100px;
		border: 27px solid;
		-webkit-border-image:
			url(borderImage/border.png)
			27 27 repeat round
			;
		border-image:
			url(borderImage/border.png)
			27 27 repeat round
			;
	}
	</style>
	</head>
	<body>
	<div id="box"></div>
	</body>
	</html>

## filter 图片效果

	img {
			width: 300px;
			display: block;
			transition: .5s;
		}
		img:hover {
			filter: drop-shadow(5px 5px 5px #000);
		}
- filter: opacity(.2);
	- 图片透明度
- filter: drop-shadow(5px 5px 5px #000);
	- 图片阴影
- filter: sepia(.5);
	- sepia 照片的怀旧 0 - 1之间的小数
- filter: saturate(2);
	- saturate 饱和度(默认为1)
- filter: hue-rotate(360deg);
	- hue-rotate 色相反转 (单位deg)
- filter: invert(1);
	- invert 反色
- filter: brightness(2);
	- brightness 亮度 默认值为1
- filter: contrast(.1);
	- contrast 对比度 默认值为1
- filter: grayscale(1);
	- grayscale 对比度 默认值为1
- filter: blur(0px);
	- blur模糊

## box-reflect 倒影
- (webkit 私有样式)加-webkit-
- 值

		above 上
		below 下
		left 左
		right 右		
- 距离(可选项)
- 渐变(可选项)

代码

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<style type="text/css">
			.box {
				width: 200px;
				display: block;
				margin: 200px auto;
				-webkit-box-reflect:
				    below 10px 
				    linear-gradient(0deg,rgba(0,0,0,.3) 10%,rgba(0,0,0,0) 50%);
			}
		</style>
	</head>
	<body>
		<img src="img/timg.jpg" class="box">
	</body>
	</html>