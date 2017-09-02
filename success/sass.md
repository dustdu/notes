---
title: sass的安装
date: 2017-07-19 22:25:25
tags:
	- sass
    - css
categories: css
thumbnail: 
---
## sass安装
1. 安装ruby，[windows下载地址](https://rubyinstaller.org/downloads/)，由于网络原因可能会下载不了。安装时勾选Add Ruby executables to your PATH，把他加入到环境变量，免得以后出现问题。mac自带有ruby
2. 检测一下ruby版本，看是否安装完成
		
		ruby -v
3. 由于网络原因，gem源中断经常出现。我们就需要更换gem源。淘宝的镜像不再维护，使用 Ruby China 镜像，地址：https://gems.ruby-china.org/
	1. Ruby China建议使用比较新的 RubyGems 版本，建议 2.6.x 以上。

			gem update --system # 这里请翻墙一下
			gem -v

	2. 接着更换源
		
			gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/

	3. 查看源，是否只剩我们设置的源
			
			gem sources -l

	4. 成功就会打印出设置的源
	
			https://gems.ruby-china.org

4. Ruby自带一个叫做RubyGems的系统，就是刚才更换的gem源，用来安装基于Ruby的软件。我们安装Sass和Compass就是使用这个系统。
	1. 安装分别输入以下命令(如mac安装遇到权限问题需加 sudo gem install sass)
	
			gem install sass
			gem install compass
	2. 安装过程中，你会看到类似下面的输出，说明安装成功：
	
			Fetching: sass-3.x.x.gem (100%)
			Successfully installed sass-3.x.x
			Parsing documentation for sass-3.x.x
			Installing ri documentation for sass-3.x.x
			Done installing documentation for sass after 6 secon
			1 gem installed
	3. 安装完成之后，可以通过运行类似下面的命令来确认应用已经正确地安装到了电脑中：

			sass -v
	4. 打印版本号说明成功

5. 下面是sass常用更新、查看版本、sass命令帮助等命令，对于其他应用的操作也是类似：

		//更新sass
		gem update sass
		
		//查看sass版本
		sass -v
		
		//查看sass帮助
		sass -h

6. 编译sass
> 编译sass有很多不同方式，sass官网就列出很多种，有命令行编译模式、sublime插件SASS-Build、编译软件koala、前端自动化软件codekit、Grunt打造前端自动化工作流grunt-sass、Gulp打造前端自动化工作流gulp-ruby-sass等。

## 参考
> https://www.sass.hk/install/  
> https://gems.ruby-china.org/