# npm记录

## npm源

### 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题

	npm install 包名 --registry=https://registry.npm.taobao.org

## 命令

- 查看全局模块更新

		npm -g outdated

- 更新package.json里的模块

		npm update

- 更新全局模块（2.6.1之后才支持）

		npm update -g

## 报错

- 在下载时报错

		npm ERR! cb() never called!
		npm ERR! This is an error with npm itself. Please report this error at:
		npm ERR!     <https://github.com/npm/npm/issues>

	解决：
		
		npm cache clean --force