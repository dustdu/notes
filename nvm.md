## nvm下载地址：https://github.com/coreybutler/nvm-windows/releases
我下载的是nvm-setup.zip，直接安装，可以选择安装路径

## nvm常用命令

- nvm install latest //安装最新版本的node.js；node -v 查看node.js的版本号
- nvm list  //列出所有已经安装的node.js版本号
- nvm use [版本号] //使用哪一个版本的node.js；使用哪一个版本第二步的path下的nodejs快捷方式就指向哪个版本的nodejs模块
- nvm node_mirror [url] //设置node下载源,不写url设置回默认，默认是https://nodejs.org/dist/
- nvm npm_mirror [url] //设置npm下载源,不写url设置回默认，默认是https://github.com/npm/npm/archive/
- nvm install <version> [arch] //安装指定版本的node.js，version可通过上面的地址查看，acrh系统多少位(32或者64，不写默认64)