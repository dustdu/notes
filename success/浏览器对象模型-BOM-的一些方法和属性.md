---
title: 浏览器对象模型(BOM)的一些方法和属性
date: 2017-06-27 10:03:21
categories: javascript
tags: 
    - javascript
    - BOM
---
## window对象
- 表示浏览器中打开的窗口
- 如果文档包含框架（frame 或 iframe 标签），浏览器会为 HTML 文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。
- 没有应用于 window 对象的公开标准，不过所有浏览器都支持该对象。

### Window 对象集合
|集合|	描述|
|---|---|
|frames[]	|返回窗口中所有命名的框架。<br>该集合是 Window 对象的数组，每个 Window 对象在窗口中含有一个框架或 `<iframe>`。属性 frames.length 存放数组 frames[] 中含有的元素个数。注意，frames[] 数组中引用的框架可能还包括框架，它们自己也具有 frames[] 数组。

### Window 对象属性
|属性|	描述|
|---|---|
|closed|	返回窗口是否已被关闭。|
|defaultStatus|	设置或返回窗口状态栏中的默认文本。|
|document|	对 Document 对象的只读引用。请参阅 Document 对象。|
|history|	对 History 对象的只读引用。请参数 History 对象。|
|innerheight|	返回窗口的文档显示区的高度。|
|innerwidth	|返回窗口的文档显示区的宽度。|
|length	|设置或返回窗口中的框架数量。|
|location	|用于窗口或框架的 Location 对象。请参阅 Location 对象。|
|name|	设置或返回窗口的名称。|
|Navigator|	对 Navigator 对象的只读引用。请参数 Navigator 对象。|
|opener|	返回对创建此窗口的窗口的引用。|
|outerheight|	返回窗口的外部高度。|
|outerwidth	|返回窗口的外部宽度。|
|pageXOffset|	设置或返回当前页面相对于窗口显示区左上角的 X 位置。|
|pageYOffset|	设置或返回当前页面相对于窗口显示区左上角的 Y 位置。|
|parent|	返回父窗口。|
|Screen|	对 Screen 对象的只读引用。请参数 Screen 对象。|
|self|	返回对当前窗口的引用。等价于 Window 属性。|
|status|	设置窗口状态栏的文本。|
|top|	返回最顶层的先辈窗口。|
|window	|window 属性等价于 self 属性，它包含了对窗口自身的引用。|
|screenLeft <br> screenTop <br> screenX <br> screenY	|	只读整数。声明了窗口的左上角在屏幕上的的 x 坐标和 y 坐标。IE、Safari 和 Opera 支持 screenLeft 和 screenTop，而 Firefox 和 Safari 支持 screenX 和 screenY。

### Window 对象方法
|方法|	描述|
|---|---|
|alert()	|显示带有一段消息和一个确认按钮的警告框。|
|blur()	|把键盘焦点从顶层窗口移开。|
|clearInterval()|	取消由 setInterval() 设置的 timeout。|
|clearTimeout()|	取消由 setTimeout() 方法设置的 timeout。|
|close()	|关闭浏览器窗口。|
|confirm()	|显示带有一段消息以及确认按钮和取消按钮的对话框。|
|createPopup()|	创建一个 pop-up 窗口。|
|focus()|	把键盘焦点给予一个窗口。|
|moveBy()|	可相对窗口的当前坐标把它移动指定的像素。|
|moveTo()	|把窗口的左上角移动到一个指定的坐标。|
|open()|	打开一个新的浏览器窗口或查找一个已命名的窗口。|
|print()|	打印当前窗口的内容。|
|prompt()	|显示可提示用户输入的对话框。|
|resizeBy()	|按照指定的像素调整窗口的大小。|
|resizeTo()	|把窗口的大小调整到指定的宽度和高度。|
|scrollBy()|	按照指定的像素值来滚动内容。|
|scrollTo()|	把内容滚动到指定的坐标。|
|setInterval()	|按照指定的周期（以毫秒计）来调用函数或计算表达式。|
|setTimeout()|	在指定的毫秒数后调用函数或计算表达式。|

#### window.open(URL,name,features,replace)
<table><tr><td>参数</td><td>说明</td></tr><tr><td>URL</td><td>可选。一个可选的字符串，声明了要在新窗口中显示的文档的 URL。如果省略了这个参数，或者它的值是空字符串，那么新窗口就不会显示任何文档。</td></tr><tr><td>name</td><td>可选。一个可选的字符串，该字符串是一个由逗号分隔的特征列表，其中包括数字、字母和下划线，该字符声明了新窗口的名称。这个名称可以用作标记'<'a'>'和'<'form'>'的属性 target 的值。如果该参数指定了一个已经存在的窗口，那么 open() 方法就不再创建一个新窗口，而只是返回对指定窗口的引用。在这种情况下，features 将被忽略。支持以下值：		<ul>			<li>_blank - URL加载到一个新的窗口。这是默认</li>			<li>_parent - URL加载到父框架</li>			<li>_self - URL替换当前页面</li>			<li>_top - URL替换任何可加载的框架集</li>			<li><i>name</i> - 窗口名称</li>		</ul>		</td></tr><tr><td>features</td><td>可选。一个可选的字符串，声明了新窗口要显示的标准浏览器的特征。如果省略该参数，新窗口将具有所有标准特征。在窗口特征这个表格中，我们对该字符串的格式进行了详细的说明。支持以下值：		<table><tr><td>         channelmode=yes|no|1|0</td><td>         是否要在影院模式显示 window。默认是没有的。仅限IE浏览器</td></tr><tr><td>         directories=yes|no|1|0</td><td>         是否添加目录按钮。默认是肯定的。仅限IE浏览器</td></tr><tr><td>         fullscreen=yes|no|1|0</td><td>         浏览器是否显示全屏模式。默认是没有的。在全屏模式下的 window，还必须在影院模式。仅限IE浏览器</td></tr><tr><td>         height=pixels</td><td>         窗口的高度。最小.值为100</td></tr><tr><td>         left=pixels</td><td>         该窗口的左侧位置</td></tr><tr><td>         location=yes|no|1|0</td><td>         是否显示地址字段.默认值是yes</td></tr><tr><td>         menubar=yes|no|1|0</td><td>         是否显示菜单栏.默认值是yes</td></tr><tr><td>         resizable=yes|no|1|0</td><td>         是否可调整窗口大小.默认值是yes</td></tr><tr><td>         scrollbars=yes|no|1|0</td><td>         是否显示滚动条.默认值是yes</td></tr><tr><td>         status=yes|no|1|0</td><td>         是否要添加一个状态栏.默认值是yes</td></tr><tr><td>         titlebar=yes|no|1|0</td><td>         是否显示标题栏.被忽略，除非调用HTML应用程序或一个值得信赖的对话框.默认值是yes</td></tr><tr><td>         toolbar=yes|no|1|0</td><td>         是否显示浏览器工具栏.默认值是yes</td></tr><tr><td>         top=pixels</td><td>         窗口顶部的位置.仅限IE浏览器</td></tr><tr><td>         width=pixels</td><td>         窗口的宽度.最小.值为100</td></tr></table>	</td>	</tr>	<tr>	<td>replace</td>	<td>一个可选的布尔值。规定了装载到窗口的 URL 是在窗口的浏览历史中创建一个新条目，还是替换浏览历史中的当前条目。支持下面的值：		<ul>	<li>true - URL 替换浏览历史中的当前条目。</li>			<li>false - URL 在浏览历史中创建新的条目。</li>	</ul>	</td></tr></table>

#### window.close()
- 用于关闭浏览器窗口。
- 将关闭有 window 指定的顶层浏览器窗口。某个窗口可以通过调用 self.close() 或只调用 close() 来关闭其自身。
只有通过 JavaScript 代码打开的窗口才能够由 JavaScript 代码关闭。

## Navigator 对象 
- 包含有关浏览器的信息。
- 没有应用于 navigator 对象的公开标准，不过所有浏览器都支持该对象。

### Navigator对象 属性
|属性|	描述
|:-----------:|:----------:|
|appCodeName|	返回浏览器的代码名。
|appMinorVersion	|返回浏览器的次级版本。
|appName	|返回浏览器的名称。
|appVersion	|返回浏览器的平台和版本信息。
|browserLanguage	|返回当前浏览器的语言。
|cookieEnabled|	返回指明浏览器中是否启用 cookie 的布尔值。
|cpuClass|	返回浏览器系统的 CPU 等级。
|onLine	|返回指明系统是否处于脱机模式的布尔值。
|platform	|返回运行浏览器的操作系统平台。
|systemLanguage	|返回 OS 使用的默认语言。
|userAgent	|返回由客户机发送服务器的 user-agent 头部的值。
|userLanguage|	返回 OS 的自然语言设置。

### Navigator 对象方法
|方法|	描述
|----|----|
|javaEnabled()|	规定浏览器是否启用 Java。
|taintEnabled()|	规定浏览器是否启用数据污点 (data tainting)。

### Navigator 对象集合
|集合  |	描述
|------|---|
|plugins[]|	返回对文档中所有嵌入式对象的引用。该集合是一个 Plugin 对象的数组，其中的元素代表浏览器已经安装的插件。Plug-in 对象提供的是有关插件的信息，其中包括它所支持的 MIME 类型的列表。虽然 plugins[] 数组是由 IE 4 定义的，但是在 IE 4 中它却总是空的，因为 IE 4 不支持插件和 Plugin 对象。 

## Location 对象
- 包含有关当前 URL 的信息。
- Location 对象是 Window 对象的一个部分，可通过 window.location 属性来访问。
- 存储在 Window 对象的 Location 属性中，表示那个窗口中当前显示的文档的 Web 地址。它的 href 属性存放的是文档的完整 URL，其他属性则分别描述了 URL 的各个部分。

### Location 对象属性
|属性|	描述|
|---|-----|
|hash|	设置或返回从井号 (#) 开始的 URL（锚）。|
|host|	设置或返回主机名和当前 URL 的端口号。|
|hostname|	设置或返回当前 URL 的主机名。|
|href|	设置或返回完整的 URL。|
|pathname|	设置或返回当前 URL 的路径部分。|
|port|	设置或返回当前 URL 的端口号。|
|protocol|	设置或返回当前 URL 的协议。|
|search|	设置或返回从问号 (?) 开始的 URL（查询部分）。|

### Location 对象方法
|属性|	描述|
|---|----|
|assign()|	加载新的文档。|
|reload()|	重新加载当前文档。|
|replace()|	用新的文档替换当前文档。|

## Screen 对象
- Screen 对象包含有关客户端显示屏幕的信息。
- 每个 Window 对象的 screen 属性都引用一个 Screen 对象。
- 没有应用于 screen 对象的公开标准，不过所有浏览器都支持该对象。

### Screen 对象属性
|属性|	描述|
|---|---|
|availHeight|	返回显示屏幕的高度 (除 Windows 任务栏之外)。|
|availWidth	|返回显示屏幕的宽度 (除 Windows 任务栏之外)。|
|bufferDepth|	设置或返回调色板的比特深度。|
|colorDepth	|返回目标设备或缓冲器上的调色板的比特深度。|
|deviceXDPI	|返回显示屏幕的每英寸水平点数。|
|deviceYDPI	|返回显示屏幕的每英寸垂直点数。|
|fontSmoothingEnabled	|返回用户是否在显示控制面板中启用了字体平滑。|
|logicalXDPI|	返回显示屏幕每英寸的水平方向的常规点数。|
|logicalYDPI|	返回显示屏幕每英寸的垂直方向的常规点数。|
|pixelDepth|	返回显示屏幕的颜色分辨率（比特每像素）。|
|updateInterval|	设置或返回屏幕的刷新率。|
|width	|返回显示器屏幕的宽度。|
|height|	返回显示屏幕的高度。|

## History 对象
- 包含用户（在浏览器窗口中）访问过的 URL。
- 是 window 对象的一部分，可通过 window.history 属性对其进行访问。
- 没有应用于 History 对象的公开标准，不过所有浏览器都支持该对象。

### History 对象属性
|属性|	描述|
|---|---|
|length	|返回浏览器历史列表中的 URL 数量。|

### History 对象方法
|方法|	描述|
|---|---|
|back()|	加载 history 列表中的前一个 URL。|
|forward()|	加载 history 列表中的下一个 URL。|
|go()|	加载 history 列表中的某个具体页面。|

