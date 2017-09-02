## 各文件信息
- _config.yml：网站的 配置 信息，您可以在此配置大部分的参数。
- package.json：应用程序的信息。
- scaffolds：md模版文件夹。当您新建文章时，Hexo会根据scaffold 来建立文件。
- source：资源文件夹是存放用户资源的地方。除 posts文件夹之外，开头命名为 (下划线)的文件/文件夹和隐藏的文件将会被忽略。Markdown和HTML文件会被解析并放到public文件夹，而其他文件会被拷贝过去。
- themes：主题 文件夹。Hexo会根据主题来生成静态页面。

## 注意
- yml对格式要求严格
	- 属性有多个值
	
			skip_render:
			 - test.html
			 - test/*

## 创建自定义侧边栏入口
- 主题中pages设置
	- 用于设置独立页面的入口，默认为空。填写条目后独立页面入口将显示在：侧边栏的下拉菜单中。(Scheme Paradox)

			pages:
			    name:
			        link: "hexo目录下的source文件夹内的自定义文件夹（/文件夹）"
			        icon: person
			        divider: false
		- Name 是该独立页面的名称，请自行修改。
		- link 的参数为相对路径，对应 hexo 目录下的 source 文件夹内的相应文件夹。
		- icon 的参数为自定义的 Material 图标，可用图标可在 Material icons 查询。
		- divider 设置成 true 后会在该条目底部增加一条分割线
	- 在次文件夹中要有一个名字是index的md文件或者html文件
	- 如果是html文件，开头要加
		- 第一种
		
				---
				layout: false
				---
			- 如果网页引用了 css 或 js ，这些 css 和 js 必须使用外链
			- 如果引用图片，可以在网页目录下建立 img 文件夹，可以直接引用图片，不必再去创建外链
		- 第二种
			- 使用编辑器打开 Hexo 目录下的_config.yml文件，找到skip_render
		- skip_render一般有以下四种常用参数：
			- 跳过source目录下的 test.html: skip_render: test.html
			- 跳过source目录下 test 文件夹内所有文件：skip_render: test/*
			- 跳过source目录下 test 文件夹内所有文件包括子文件夹以及子文件夹内的文件：skip_render: test/**
			- 跳过多个路径：
			
					skip_render:
					 - test.html
					 - test/*
		- _config.yml对格式要求严格，注意填写参数时的格式，添加完成后便不会渲染指定文件/文件夹。
		- 如果网页引用了 css 或 js ，并将整个网页目录设置为跳过渲染，则不必再为 css 和 js 创建外链，可以直接引用
	
### _config.yml的功能

	# Hexo Configuration Hexo配置文件
	## Docs: https://hexo.io/docs/configuration.html
	## Source: https://github.com/hexojs/hexo/
	
	
	# 网站信息
	#标题
	title: 
	#副标题
	subtitle: 
	#网站描述
	description: 
	#作者昵称
	author: 
	#网站语言，默认英语，设置简体汉语
	language: 
	
	#时区，默认电脑时区
	#timezone: 
	timezone: Asia/Shanghai
	
	
	# 网址设置
	#如果网站是放在子目录中，将url设置成'http://yoursite.com/child'，将root设置成'/child/'
	## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
	#网址
	url: http://zhangxuezhi.com
	#网站根目录。如果网站是放在子目录中，将root设置成'子目录名'
	root: /
	#文章链接地址格式 。即文章存放的目录。
	permalink: :year/:month/:day/:title/
	permalink_defaults:
	
	
	# 目录设置
	#资源文件夹，放在里面的文件会上传到github中
	source_dir: source
	#公共文件夹，存放生成的静态文件
	public_dir: public
	#标签文件夹，默认是tags。实际存放在source/tags中。
	tag_dir: tags
	rss_dir: rss
	#档案文件夹，默认是archives。
	archive_dir: archives
	#分类文件夹，默认是categories。实际存放在source/categories中。
	category_dir: categories
	#代码文件夹，默认是downloads/code
	code_dir: downloads/code
	#国际化文件夹，默认跟language相同
	i18n_dir: :lang
	#不需要渲染的文件夹或文件夹,放在[]中
	# 这两个文件是百度和google的站长验证文件，不能渲染，否则会改变内容，不能验证过
	skip_render: [baidu_verify_R9MZjdMkXT.html, google0f8fac7da2b48ef8.html, README.md, 模板.md]
	
	
	# 写作选项
	# 新建博文（帖子）的默认名称
	# File name of new posts
	new_post_name: :title.md 
	#默认布局模板是post，而不是draft和page
	default_layout: post
	#是否将标题转换成标题形式（首字母大写）
	titlecase: false # Transform title into titlecase
	#在新标签页面中打开网页
	external_link: true # Open external links in new tab
	filename_case: 0
	#是否渲染草稿
	render_drafts: false
	#启动 Asset 文件夹
	post_asset_folder: false
	#把链接改为与根目录的相对位址
	relative_link: false
	#显示未来的文章
	future: true
	#代码块的设置
	highlight:
	  enable: true          #  使用代码高亮
	  line_number: true # 显示行号
	  auto_detect: true  # 自动检测语言
	  tab_replace:
	
	
	# 分类和标签
	# 默认分类
	default_category: uncategorized
	#分类别名
	category_map:
	#标签别名
	tag_map:
	
	
	# 日期和时间格式
	#Hexo 使用 Moment.js 来解析和显示时间。
	## You can customize the date format as defined in
	## http://momentjs.com/docs/#/displaying/format/
	date_format: YYYY-MM-DD
	time_format: HH:mm:ss
	
	
	# 分页配置
	# ---------------下面选项需要对应插件的支持---------------
	# npm install hexo-generator-index --save
	# npm install hexo-generator-archive --save
	# npm install hexo-generator-category --save
	# npm install hexo-generator-tag --save
	## Set per_page to 0 to disable pagination
	#每页显示的文章量 
	#per_page: 20
	#首页的分页设置
	index_generator:
	  per_page: 5
	#归档页的分页设置
	archive_generator:
	  per_page: 30
	  yearly: true
	  monthly: true
	#标签页的分页设置
	tag_generator:
	  per_page: 20
	
	#分页路径，在public中可以看到
	#pagination_dir: page
	
	
	# Extensions 拓展插件配置
	## Plugins: https://hexo.io/plugins/
	plugins: 
	baidusitemap: 
	  path: baidusitemap.xml
	
	
	# 配置RSS
	feed: 
	  #feed 类型 (atom/rss2)
	  type: atom   
	  #rss 路径
	  path: atom.xml  
	  #在 rss 中最多生成的文章数(0显示所有)
	  limit: 0
	
	
	
	# 自定义站点内容搜索
	# 需要先安装插件：
	# npm install hexo-generator-search --save
	search:
	  path: search.xml
	  # 如只想索引文章，可设置为post
	  field: all 
	
	# 主题配置
	## Themes: https://hexo.io/themes/
	#theme: false #禁用主题
	#theme: landscape
	theme: next
	
	
	# 部署配置
	## Docs: https://hexo.io/docs/deployment.html
	deploy:
	  type: git
	  #repo: https://github.com/xuezhisd/xuezhisd.github.io.git
	  repo: 
	    # 部署到github
	    github: git@github.com:xuezhisd/xuezhisd.github.io.git,master
	    # 部署到coding.net。取消注释，可同时部署
	    #coding: git@git.coding.net:xuezhisd/blog.git,coding-pages
	  #type: baidu_url_submitter

## 插件
- npm install 插件 --save（--save，表示依赖项。）

### RSS订阅插件
- hexo-generator-feed
- 在帖子的front-matter，可以选择添加一个description设置来编写该帖子的摘要。否则摘要将默认为摘录或帖子的前140个字符。

### 二维码
- 用于在文章页中显示二维码，扫描二维码即可直接打开文章。
- 需要 hexo-helper-qrcode 支持，使用 npm install hexo-helper-qrcode --save 进行安装。

## 错误  


如发生报错： ERROR Process failed: layout/.DS_Store , 那么进入主题里面layout和_partial目录下，使用删除命令：

rm-rf.DS_Store

ERROR Plugin load failed: hexo-server

原因：

Besides,utilities are separated into a standalone module.hexo.util is not reachable anymore.

解决方法，执行命令：

sudo npm install hexo-server

执行命令hexo server，提示：Usage: hexo ....

原因：

我认为是没有生成本地服务

解决方法，执行命令：

npm install hexo-server --save

提示：hexo-server@0.1.2 node_modules/hexo-server

....

表示成功了参考

这个时候再执行：

hexo-server

得到:

INFOHexois running at http://0.0.0.0:4000/.PressCtrl+C to stop.

这个时候再点击http://0.0.0.0:4000，正常情况下应该是最原始的画面，但是我看到的是：

白板和Cannot GET / 几个字

原因：

由于2.6以后就更新了，我们需要手动配置些东西，我们需要输入下面三行命令：

npm install hexo-renderer-ejs --save

npm install hexo-renderer-stylus --save

npm install hexo-renderer-marked --save

这个时候再重新生成静态文件，命令：

hexo generate（或hexo g）

启动本地服务器：

hexo server（或hexo s）

再，点击网址http://0.0.0.0:4000OK终于可以看到属于你自己的blog啦，😄，虽然很简陋，但好歹有了一个属于自己的小窝了。参考链接，本地已经简单的设置好了，但是现在域名和服务器都是基于自己的电脑，接下来需要跟github进行关联。