---
title: 使用swiftype来实现站内搜索
date: 2017-07-01 00:50:18
categories: 建站
tags: 
	- hexo
	- swiftype
	- Material
	- 网站模块
---
# 网站内部搜索
我使用的是Material主题，已经内置了google,swiftype,local三种搜索系统。根据自己的需要配置就行了。**但有点要注意，三种设置并不是在同一配置文件中进行设置（小心了）**

## Google
如果调用 Google 搜索引擎进行搜索。在 **主题配置文件** 中找到

    search: 
		use: 
将它的值改为 google 即可。可能还有一项，不必管它

## 本地搜索
如果使用本地搜索，就需要安装 *hexo-generator-search* 插件:
    
	$ npm install hexo-generator-search --save
然后在 **站点配置文件** 中添加
	
	search:
		path: search.xml
		field: all
## Swiftype
使用Swiftype的话，需要[注册Swiftype](https://swiftype.com/)，然后在 **主题配置文件** 中找到

    search: 
		use: 
将它的值改为swiftype,并填入注册配置时得到的swiftype_key。在你 Swiftype Install Code 时，会生成一些代码，有一行代码 _st('install','*****','2.0.0')，其中 ***** 即为 swiftype_key。

Swiftype可以设置在其他位置，可以自己看一些[官方文档](https://swiftype.com/documentation/)和博客，有兴趣自己找吧

> 其中，我在部署swiftype时误以为要和本地搜索一起配置，所以就出现了一些错误：

	FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
	ReferenceError: ejs:16
	    14|       </categories>
	    15| <% } -%>
	 >> 16| <% if(post.tags&&post.tags.length>0){ -%>
	    17|       <tags>
	    18| <% post.tags.each(function (tag) { -%>
	    19|         <tag><%= tag.name %></tag>
	
	post is not defined
	    at eval (eval at <anonymous> (F:\web\node_modules\ejs\lib\ejs.js:242:14), <anonymous>:30:1443)
	    at Query.forEach (F:\web\node_modules\warehouse\lib\query.js:42:5)
	    at eval (eval at <anonymous> (F:\web\node_modules\ejs\lib\ejs.js:242:14), <anonymous>:30:1257)
	    at eval (eval at <anonymous> (F:\web\node_modules\ejs\lib\ejs.js:242:14), <anonymous>:30:1677)
	    at F:\web\node_modules\ejs\lib\ejs.js:255:15
	    at Hexo.module.exports (F:\web\node_modules\hexo-generator-searchdb\lib\xml_generator.js:40:13)
	    at Hexo.tryCatcher (F:\web\node_modules\bluebird\js\release\util.js:16:23)
	    at Hexo.<anonymous> (F:\web\node_modules\bluebird\js\release\method.js:15:34)
	    at F:\web\node_modules\hexo\lib\hexo\index.js:340:24
	    at tryCatcher (F:\web\node_modules\bluebird\js\release\util.js:16:23)
	    at MappingPromiseArray._promiseFulfilled (F:\web\node_modules\bluebird\js\release\map.js:61:38)
	    at MappingPromiseArray.PromiseArray._iterate (F:\web\node_modules\bluebird\js\release\promise_array.js:114:31)
	    at MappingPromiseArray.init (F:\web\node_modules\bluebird\js\release\promise_array.js:78:10)
	    at MappingPromiseArray._asyncInit (F:\web\node_modules\bluebird\js\release\map.js:30:10)
	    at Async._drainQueue (F:\web\node_modules\bluebird\js\release\async.js:138:12)
	    at Async._drainQueues (F:\web\node_modules\bluebird\js\release\async.js:143:10)
	    at Immediate.Async.drainQueues (F:\web\node_modules\bluebird\js\release\async.js:17:14)
	    at runCallback (timers.js:672:20)
	    at tryOnImmediate (timers.js:645:5)
	    at processImmediate [as _immediateCallback] (timers.js:617:5)
> 似乎是引用错误（[这里有文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)），可能就是两个文件的搜索设置有问题，我重新清理，二者分别解析后是没问题的，所以，我又重新看主题文档，才弄清楚。。。。。其实，我开始认为本地搜索，不是在本地页面搜索吗？所以，我把这两个设置搞在了一起，才有了这么蠢的错误。