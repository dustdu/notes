# PHP3
## 自定义网站
1. 更改网站根目录的存放位置，需要更改Apache的httpd.conf文件的两处，打开httpd.conf文件（在X:\wamp\bin\apache\apache2.4.9\conf目录下）：
	1. DocumentRoot "X:/wamp\www" 中"X:/wamp\www"文件夹地址改为你新建的文件夹地址，例如"G:/Demo"
	2. 下面几行<Directory "X:/wamp\www"> 中的"X:/wamp\www"文件夹地址亦改为你新建的文件夹地址，例如"G:/Demo"。
	3. wamp3.0.6新版本的wmapserver中Apache的httpd.conf文件是默认包括了httpd-vhosts.conf（路径：C:\wamp64\bin\apache\apache2.4.18\conf\extra）扩展文件中的一些配置，因此也要将httpd-vhosts.conf扩展文件中的配置项改为自定义的目录：
	4. 重新启动所有服务即可。
2. 左击菜单栏“www 目录”显示的更改，需要更改wamp开发包根目录中的配置文件wampmanager.ini和wampmanager.tpl。
	1. 更改wampmanager.ini文件中[Menu.Left]标记中Type: item; Caption: "www 目录"; Action: shellexecute; FileName: "X:/wamp/www"; 这一句中的Caption值"www 目录"为"Demo目录"，并更改FileName值"X:/wamp/www"为目标文件夹，例如："G:/Demo"即可。
	2. 更改wampmanager.tpl文件中[Menu.Left]标记中Type: item; Caption: "${w_wwwDirectory}"; Action: shellexecute; FileName: "${wwwDir}";这一句中的Caption值 "${w_wwwDirectory}"为 "Demo目录",更改FileName值"${wwwDir}"为"G:\Demo"。
	3. 退出并重新启动所有服务即可。
	- 可能出现乱码 因为文本格式是gbk（ANIS） 可用自带文本编辑器打开
		- > 修改wampmanager.ini文件时：Type: item; Caption: "Demo 目录"; Action: shellexecute; FileName:"E:/Demo";
	> 修改wampmanager.tpl文件时：Type: item; Caption: "${Demo Directory}"; Action: shellexecute; FileName:"E:/DemoDir";
	> 这样就不会出现中文名乱码了；
3. 多站点配置
	1. 首先打开httpd-vhosts.conf；添加想要添加的根目录及站点
		-  servername为站点名
		-  documentroot为站点文件目录
	2. 因为上面的httpd-vhosts.conf文件是扩展文件，默认下不会加载，打开apache下的httpd.conf文件，查找上面刚刚修改conf文件，去掉前面的注释#
	3. 允许站点访问服务器资源。打开Apache->httpd.conf文件，找到onlineoffline tag,修改其后面的Deny from all为Allow from all，同时将Allow from 127.0.0.1修改为注释（前面加‘#’），在2.5版本中，修改httpd-vhosts.conf下不同站点的Require local为Require all granted。

			2.2使用Order Deny / Allow的方式，2.4改用Require
			apache2.2：
			Order deny,allow
			Deny from all
			apache2.4：
			Require all denied
			此处比较常用的有如下几种：
			Require all denied允许所有否认(拒绝)
			Require all granted允许所有授予
			Require host xxx.com 允许某某某站点
			Require ip 192.168.1 192.168.2 允许这两个IP
			Require local 允许本地(默认配置)
			注意：若有设定在htaccess文件中的也要修改

	4. 设置本机访问这些站点时从本机获取资源，打开c:/windows/system32/drivers/etc/hosts在最后添加127.0.0.1  站点的域名
4. 多端口多目录多站点设置
	1. 直接在httpd-vhosts.conf中添加网站 加端口
		
			listen 8080
			<VirtualHost *:8080>
				ServerName 192.168.191.1
				DocumentRoot "H:/"
				<Directory  "H:/">
					Options +Indexes +Includes +FollowSymLinks +MultiViews
					AllowOverride All
					Require all granted
				</Directory>
			</VirtualHost>
	2. 新建文件.conf文件，然后在httpd.conf中引入 `Include .conf`。在文件中添加网站，同上。



- Options +Indexes +FollowSymLinks +Multiviews
	- Indexes 的作用就是当该目录下没有 index.html 文件时，就显示目录结构
		- 要禁止 Apache 显示目录结构列表，将 Option 中的 Indexes 去掉即可。
		- 在Options Indexes FollowSymLinks在Indexes前面加上 – 符号。即： Options -Indexes FollowSymLinks【备注：在Indexes前，加 + 代表允许目录浏览；加 – 代表禁止目录浏览。】