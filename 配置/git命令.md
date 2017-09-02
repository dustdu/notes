## 大概流程
1. 首次使用，进行配置
    - git config --global user.username 'dustdu'
    - git config --global user.email 'wlikangw@gmail.com'
2. 从线上仓库中克隆到本地
    - git clone 仓库的地址
    - 将本地的仓库和远程的仓库进行关联
		- git remote add origin 仓库的地址
3. 创建分支
    - git branch 分支名称
4. 查看分支
    - git branch
5. 切换分支
    - git checkout 分支名称
    - git checkout -b 分支名称 新建并切换到分支
6. 查看当前分支情况
    - git status
7. 提交到本地缓存
    - git add 要提交的文件   . 表示所有可以提交的文件
8. 确认提交
    - git commit -m '提交说明'
    - -m不能省
9. 合并分支
    - git merge 分支名称
10. 删除分支
    - git branch -d 分支名称  删除分支
	- git branch -D 分支名称  强制删除分支
11. 提交远程
    - git push origin master<分支名称>
12. 从远程更新
	- git pull origin master<分支名称>

## 从本地创建仓库
1. 初始化 git 仓库 
	- git init  
2. 查看状态 
	- git status  
3. 把a.md文件添加到本地Git仓库
	- git add a.md  
4. 设置下自己的用户名与邮箱
	- git config —global user.name "JasonLi"
	- git config —global user.email "lijingxuan92@126.com"  
5. 正式提交文件
	- git commit -m ‘first commit’  <br>-m 代表是提交信息
6. 查看所有产生的 commit 记录
	- git log  
7. 把本地 test 项目与 GitHub 上的 test 项目进行关联（切换到 test 目录）
	- git remote add origin git@github.com:JasonLi-cn/test.git  
	- （查看我们当前项目有哪些远程仓库）
	- git remote -v  
8. 向远程仓库进行代码提交（前提是你已经配置好公钥和密钥，配置方法见第三部分）
	- git push origin master  
	- 提交时，可能出现的问题：
	
			$ git push origin master  
			To github.com:JasonLi-cn/test.git  
			 ! [rejected]        master -> master (fetch first)  
			error: failed to push some refs to 'git@github.com:JasonLi-cn/test.git'  
			hint: Updates were rejected because the remote contains work that you do  
			hint: not have locally. This is usually caused by another repository pushing  
			hint: to the same ref. You may want to first integrate the remote changes  
			hint: (e.g., 'git pull ...') before pushing again.  
			hint: See the 'Note about fast-forwards' in 'git push --help' for details.  
	- 说明在远程仓库中存在本地仓库没有的文件，所以需要先pull操作
	- git pull origin master  
	- 此时可能会遇到的问题：
	
			$ git pull origin master  
			From github.com:JasonLi-cn/test  
			 * branch            master     -> FETCH_HEAD  
			fatal: refusing to merge unrelated histories  
	- 解决方法：
	- git pull origin master --allow-unrelated-histories  
	- 然后就可以 push了！！！ 

## 命令
- git add
	- `git add <path>`表示 add to index only files created or modified and not those deleted 
	- 通常是通过git add `<path>`的形式把我们`<path>`添加到索引库中，`<path>`可以是文件也可以是目录。
	- git不仅能判断出`<path>`中，修改（不包括已删除）的文件，还能判断出新添的文件，并把它们的信息添加到索引库中。
	- git add -u
		- git add -u 表示 add to index only files modified or deleted and not those created 
		- `git add -u [<path>]`: 把`<path>`中所有tracked文件中被修改过或已删除文件的信息添加到索引库。它不会处理untracted的文件。
		- 省略`<path>`表示.,即当前目录。
	- git add -A
		- `git add -A: [<path>]`表示把`<path>`中所有tracked文件中被修改过或已删除文件和所有untracted的文件信息添加到索引库。
		- 省略`<path>`表示.,即当前目录。
	- git add -i
		- 可以通过`git add -i [<path>]`命令查看`<path>`中被所有修改过或已删除文件但没有提交的文件，
		- 并通过其revert子命令可以查看`<path>`中所有untracted的文件，同时进入一个子命令系统。

|命令|作用|
|---|---|
|git diff|
|git merge aaa | 把aaa分支的代码合并过来(当前所在分枝，比如master)
|git tag v1.0|  加版本号  
|git tag | 查看版本号  
|git checkout v1.0 | 切换到版本v1.0
|git config --lis|查看git配置

## 回撤
- Git reset [HEAD/commitid] 使用HEAD或者commitid覆盖Index，不影响Head和WorkDir，如果是在commit之后执行这个操作相当于同时撤销了commit和add操作 
- git reset [HEAD/commitid] – file 针对某个文件使用HEAD或者commitid覆盖Index，不影响Head和WorkDir
- git reset –soft HEAD^ 重置HEAD到上一版本，即撤销commit操作，不影响index和workdir。 
- git reset –soft HEAD^1 ^后面的数字表示恢复到哪个父提交的版本，一个提交可能会对应多个父提交，用于指定回到哪个 
- git reset –soft commitid 后面添加comiit_id指明回退到哪个版本
- git reset –hard HEAD^ 重置head到上一版本，会覆盖index， –hard会使head、index、workdir都重置回之前的版本，远程服务器上不会变，如果希望远程服务器上也回到上一版本的话，就使用一下git push –force。 
- git reset –hard HEAD^1 ^后面的数字表示恢复到哪个父提交的版本，一个提交可能会对应多个父提交，用于指定回到哪个 
- git reset –hard commitid 用commit_id指定回到哪次 commit
- git revert commitid 使用某一次提交覆盖当前，已达到恢复到某次的效果。revert之后执行一次git push同步到server。
- git reset 简单暴力的将版本置回到某个版本，现在有过a、b、c、d四次提交，提交顺序为a、b、c、d，现在为d。使用git reset恢复到a之后，看git log，就只剩下a了，b、c、d都不见了。使用git revert恢复到a之后，看git log，会发现a、b、c、d都在，多了e操作，e操作为“revert a”。 