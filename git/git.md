- 在中文情况下 Git status是 “\344\272\247\345\223\201\351\234\200\346\261\202” 差不多这样的。
	- 解决这个问题方法是： `git config --global core.quotepath false`
- --
- git 错误 fatal: Not a valid object name: 'master'.想新建立一个分支时出现这错误。
	- 要先commit一次才会真正建立master分支，此时就可以新建立分支了。。
- --
- 错误

		fatal: Unable to create 'D:/AppServ/www/speedy/.git/index.lock': File exists.
		Another git process seems to be running in this repository, e.g.
		an editor opened by 'git commit'. Please make sure all processes
		are terminated then try again. If it still fails, a git process
		may have crashed in this repository earlier:
		remove the file manually to continue.
	- 删除文件.git / index.lock。可以使用此命令：`rm .git/index.lock`
- --
- 在使用git的时候，每次执行

    `#git add "目录"`

    `git add .`

	都会提示这样一个警告消息：

	 `warning: LF will be replaced by CRLF in XXXXXXXXXXXXXX.`

	按照这样设置就没有问题了:

	 `git config core.autocrlf false`

	这样设置git的配置后在执行add操作就没有问题了。
- --
- 更改git默认编辑器
	- 首先， 我的 sublime text 的完整路径为： F：\Program Files\Sublime Text 3\sublime text.exe (注意 sublime text.exe 名字中没有下划线)
	- 接下来是步骤: 
		1. 将 F：\Program Files\Sublime Text 3\ 添加到 环境变量 中；（之后可能需要重启电脑使更改生效） 
		2. 打开 Git，设置 sublime text 为默认的编辑器， 使用如下命令：git config --global core.editor “‘sublime text.exe’ -w”
			- 此处注意：如果路径中有空格， 需要用 单引号 括起来， 如上面的 'sublime text.exe' ;
			- -w 表示 ask git to wait for you to finish typing the message in the text editor
- --
- fatal: fatal: sha1 file '<stdout>' write error: Broken pipe The remote end hung up unexpectedly
	- 可能是数据传输出问题，多试一下
