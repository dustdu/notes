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

3. 修改Localhost默认端口
	- 打开配置文件httpd.conf，找到 

			Listen 0.0.0.0:80  ipv4
			Listen [::0]:80	ipv6
	修改其端口，如果开多端口，可以模仿上面的多加几个  
	找到ServerName localhost:80;修改端口
	- 打开配置文件httpd-vhosts.conf 修改localhost端口
	> listen端口存在一样，apache开启不了
4. 修改Wamp打开默认页 Localhost 和 PHPMyadmin 的端口
	1. 打开wamp目录下wampmanager.tpl 和 wampmanager.ini文件
	2. 找到
	
			Parameters: "http://localhost/"; Glyph: 5
			Parameters: "http://localhost/phpmyadmin/"; Glyph: 5 
	3. 改成
	
			Parameters: http://localhost:8080/; Glyph: 5
			Parameters: "http://localhost:8080/phpmyadmin/"; Glyph: 5
	改好之后要退出Wamp，重新打开启动配置才会生效。
5. 多站点配置
	1. 打开httpd-vhosts.conf；添加想要添加的根目录及站点

			
			<VirtualHost *:8080>
				ServerName 域名
				ServerAlias 二级域名
				DocumentRoot "H:/"
				<Directory  "H:/">
					Options +Indexes +Includes +FollowSymLinks +MultiViews
					AllowOverride All
					Require all granted
				</Directory>
			</VirtualHost>
		-  servername为站点名
		-  documentroot为站点文件目录
	2. 因为上面的httpd-vhosts.conf文件是扩展文件，打开apache下的httpd.conf文件，查找上面刚刚修改conf文件，有注释#去掉前面的注释#,也可以新建文件.conf文件，然后在httpd.conf中引入 `Include .conf`。在文件中添加网站，同上
	3. 允许站点访问服务器资源。httpd.conf文件，onlineoffline tag下的Require local根据离线和在线自动切换,修改httpd-vhosts.conf下不同站点的Require local为Require all granted。

			此处比较常用的有如下几种：
			Require all denied允许所有否认(拒绝)
			Require all granted允许所有授予
			Require host xxx.com 允许某某某站点
			Require ip 192.168.1 192.168.2 允许这两个IP
			Require local 允许本地(默认配置)
			注意：若有设定在htaccess文件中的也要修改

	4. 设置本机访问这些站点时从本机获取资源，打开c:/windows/system32/drivers/etc/hosts在最后添加
	
			127.0.0.1  站点的域名



- Options +Indexes +FollowSymLinks +Multiviews
	- Indexes 的作用就是当该目录下没有 index.html 文件时，就显示目录结构
		- 要禁止 Apache 显示目录结构列表，将 Option 中的 Indexes 去掉即可。
		- 在Options Indexes FollowSymLinks在Indexes前面加上 – 符号。即： Options -Indexes FollowSymLinks【备注：在Indexes前，加 + 代表允许目录浏览；加 – 代表禁止目录浏览。】