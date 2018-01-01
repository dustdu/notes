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