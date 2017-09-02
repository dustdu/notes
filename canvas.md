# canvas 画布
- 内联块
- 宽高在行间设置，不设置，会有默认值，不同浏览器和分辨率，默认值不同。在css中设置是等比缩放，在移动端要在js里动态设置
- el.getContext('2d');获取2d环境(目前原生只开放了2d接口)
- fillRect(x,y,w,h) 创建实心矩形
- fillStyle 背景颜色
- strokeRect(x,y,w,h) 创建空心心矩形
- strokeStyle 边框颜色
- clearRect(x,y,w,h) 删除图形
- three.js webGL swiper  

## canvas 渲染图片
- el.drawImage(el,x,y,w,h);


- var img = new Image();
	- 创建一个image对象
	- 一般在image onload完成后执行下一步操作，属性可以在之前设置