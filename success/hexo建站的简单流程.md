---
title: hexo建站的一些流程记录
date: 2017-06-25 21:36:17
categories: 建站
tags: 
	- 建站
	- hexo
	- git
thumbnail: /img/tipimg/hexo.png
---
# hexo的简单介绍
Hexo 使用 Markdown（或其他渲染引擎）解析文章，配合上github和coding或其他类似产品建立网站，在安装前，电脑中要安装下列应用程序：

- Node.js
- Git

之后使用使用 npm安装hexo:

	npm install -g hexo-cli
升级hexo:

	npm update hexo -g  
有些命令可以简写成首字母，[可参考](http://sd)

## 创建hexo
- hexo init 文件夹 #初始化，可以直接在空白文件夹建立
- cd 文件夹
- npm install

## 部署到Github
部署到Github前需要配置_config.yml文件，在hexo根目录下，可以看一下hexo文件的介绍，找到下面的内容并配置

	# Deployment
	## Docs: http://hexo.io/docs/deployment.html
	deploy:
	  type: git 
	  repository: https://github.com/Your_Github_Account/yoursite.github.io.git
	  branch: master
- 有的介绍是github，可能会遇到 ERROR Deployer not found: github  的错误，那是因为HEXO更新到3.0之后，deploy的type 的github需要改成Git  或者运行 
		
		npm install hexo-deployer-git --save

## 新建文章
- hexo new [layout] <title> #新建文章（md）
- hexo new page"pageName" #新建页面（html）
	- 如果不想文章被处理，可以将 Front-Matter(文章头部）中的layout: 设为 false 。
	- 将储存到 source/_posts 文件夹。
	- 布局（layout），有 post、page 和 draft，默认为 post，可以通过修改 _config.yml 中的 default_layout 参数来指定默认布局。

### Front-Matter
	---
	layout	布局 #可以省略
	title: title #文章标题（新建文章时标题和文件名一样，在这可以改）
	date: 2013/7/13 20:46:25 #新建文章时间
	updated: 更新日期	#可以省略
	comments: true	#开启文章的评论功能	可以省略 默认true
	categories: 建站 #文章目录 可以省略
	tags: #文章标签 可以省略
	     - 标签1
	     - 标签2
	description: #文章描述 可以省略
	permalink	覆盖文章网址 #可以省略 这个我没了解
	thumbnail: 图片地址 #我用的主题用于设置文章缩略图，主题文档中有关于缩略图设置描述 （官网案例中的代码在图片地址后有!blogthumbnail这段代码，不知道有何用，我加上去有BUG）
	---
- tags和categories是不一样的，categories会出现在侧边栏形成文件夹，tags只是文章的不同标签 

## 解析部署文章
- hexo clean #一般先清一下
- hexo generate #生成静态页面至public目录
	- hexo generate --watch #监视文件变动
- hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
	- hexo server -i 192.168.1.1 #自定义 IP
	- hexo server -s #静态模式
	- hexo s -p 端口
		- hexo安装没错，也能成功运行，启动也没错，但不能访问页面。
			- 电脑端口被占用了。（可能你的电脑安装了福昕阅读器，他占用4000端口，很不幸，我就安装了它）要改下端口   
		- 想要README.md文件不被渲染，在博客根目录下的配置文件_config.yml中配置一下"skip_render"选项就行了，将不需要渲染的文件名称加入其选项下就行了。
		
			    skip_render: README.md
- hexo deploy #将.deploy目录部署到GitHub
- hexo help # 查看帮助
- hexo version #查看Hexo的版本

## 结束
- 到这里，一个基本的以hexo为模版的网站就建好了，也可以设置一些其他的使网站更加个性化。找一些喜欢的主题，或者自己的Demo都可以放上来，那就要对hexo有更详细的了解了。。。
- 想到一点，有时候出现一些错误找不到原因，可能就是_config.yml文件或者其他配置文件出错了，yml文件的格式要求还是很严格的，一不小心就出错。