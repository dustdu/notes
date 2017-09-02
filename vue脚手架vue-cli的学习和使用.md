---
title: Vue脚手架Vue-cli的学习和使用
date: 2017-08-19 10:29:51
tags:
---
> vue-cli 的脚手架项目模板有browserify 和 webpack , 现在自己在用的是webpack , 官网给出了两个模板： webpack-simple 和 webpack 两种。两种的区别在于webpack-simple 没有包括Eslint 检查功能等等功能，普通项目基本用webpack-simple 就足够了.

 

搭建官方项目模板步骤： 

　　1、npm install  vue-cli (安装vue-cli )  有的时候有看到其它两种写法:  --save-dev 和 --save的写法。这两个有一定的区别，我们都知道package.json  中有一个 “dependencies” 和 “devDependencies” 的。dependencies 是用在开发完上线模式的，就是有些东西你上线以后还需要依赖的，比如juqery , 我们这里的vue 和 babel-runtime（Babel 转码器 可以将ES6 转为ES5 ）， 而devDependencies 则是在开发模式执行的，比如我们如果需要安装一个node-sass 等等。有的时候看到package.json中安装的模块版本号前面有一个波浪线。例如: ~1.2.3 这里表示安装1.2.x以上版本。但是不安装1.3以上。

　　2、vue init webpack-simple yourdemoname  下载一个webpack-simple项目，这里的webpack-simple 是固定的，也就是官网的项目模板。youdemoname 这个是你自己项目的名字。 执行这个步骤以后。就会弹出询问 “项目名称..项目描述“等等问题 直接按照提示操作。这个时候对应的项目目录下就出现刚刚建立的项目了。

　　3、我们还需要把项目的依赖下载下来。使用命令:  cd youdemoname 然后执行npm install 就可以了，这个时候你的项目中有多了一个node_modules 目录

　　4、使用"npm - run - dev" 命令来运行项目 "npm-run-bulid" 来执行发布，会自动生成dist文件