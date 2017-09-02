---
title: VSCode使用以及遇到的问题
date: 2017-06-27 02:06:16
update: 2017-08-19 20:40:26
categories: 软件应用
tags: 
    - VSCode
    - 插件
---
## VSCode插件
### Open in Browser （在浏览器中查看）

### vscode-icons （图标）

### Seti-theme （主题）

### HTML CSS Support 
- 让HTML标签上写class智能提示当前项目所支持的样式

### HTML Snippets
- 超级使用且初级的H5代码片段以及提示

### Debugger for Chrome 
- 让vscode映射chrome的debug功能，静态页面都可以用vscode来打断点调试、配饰稍微复杂一点

### Auto Rename Tag
- 修改html标签，自动帮你完成尾部闭合标签的同步修改，和webstorm一样。

### beautify
- 这款类似于vscode里格式化代码的功能

### HTMLHint
- html代码检测

### Bracket Pair Colorizer
- 让括号拥有独立的颜色，易于区分。可以配合任意主题使用。

### vetur
- 语法高亮、智能感知、Emmet等

### AutoFileName
- 这个插件使得开发者在 require 本地文件时支持基于输入的文件路径的智能补全。

### Path Intellisence
- 智能路径提示。当你想引入一个js文件、css文件时，它会帮你智能提示路径。

### VS Color Picker
- 调色板

### Quick links

### FileNameComplete

### ESLint
- ESLint 安装后不能直接使用，需要一些环境和配置：
	- 需要全局的 ESLint , 如果没有安装可以使用 npm install -g eslint 来安装。
	- vue文件是类 HTML 的文件，为了支持对 vue 文件的 ESLint ，需要 eslint-plugin-html 这个插件。可以使用 npm install -g eslint-plugin-html 来安装
	- 安装了 HTML 插件后，还需要在 vscode 中配置下 ESLint：

			"eslint.validate": [
		        "javascript",
		        "javascriptreact",
		        "html",
		        "vue"
		    ],
		    "eslint.options": {
		        "plugins": ["html"]
		    },
	- 最后在项目根目录下创建 .eslintrc.json , 如果还没创建，还可以使用下面快捷命令来创建：
		
			eslint:create '.eslintrc.json' File

### Output Colorizer
- 输出提示的文字颜色有一些变化，方便获取关键信息

### vetur + vue + Vue 2 Snippets + Vue TypeScript Snippets
- vue插件全家桶

### VSCode Great Icons
- 目录树图标

### vscode-fileheader
- 头注释

### filesize 
- 左下角显示文件大小

### markdownlint
- markdown 语法提示器

### Quokka.js
- 以即时显示js和ts的运行结果

### Easy Sass
- 解析sass

### Hopscotch

### JavaScript (ES6) snippets

### CSS Peek
- 可以追踪至样式表中 CSS 类和 ids 定义的地方。
- 在 HTML 文件中右键单击选择器，选择“ Go to Definition 和 Peek definition ”选项

## 遇到问题
### outFiles属性
- 使用默认launch.json调试vue，开启服务报错->设置”outFiles“属性可能会有帮助。
- 版本：1.15.1
- 使用cmd开启服务正常
- 判断是launch配置问题
