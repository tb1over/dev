# Git学习
# 一、本地仓库

## 1. git init
```shell
mkdir learngit
cd mkdir
git init    //在当前目录中初始化空的仓库
```
## 2. git add filename
```shell
touch readme.txt
git add readme.txt
```
## 3. git commit -m "log info"
```shell
git commit -m "wrote a readme file"
```

## 4. git status
```shell
1）修改readme.txt内容，git status 查看工作区状态，显示有没有加入暂存区的文件；
2）使用git diff 查看修改内容；
3）
git add readme.txt
git commit -m "log"
之后git status 显示干净的工作区状态
```
## 5. git diff

## 6. 关于版本回退
#### 6.1 git log
可以使用git log 查看提交更新记录,输出如下：
需要关注的是第一列commit id
```shell
commit 2d9076287ca1a3eddeed038edd33ecdce7bf6345
Author: tb1over <nxsfcc@gmail.com>
Date:   Tue Oct 24 23:08:51 2017 +0800

    add GPL

commit 1d25949da4ca40628075d9a48b58e4543d66b885
Author: tb1over <nxsfcc@gmail.com>
Date:   Tue Oct 24 22:52:27 2017 +0800

    add distributed

commit afbac9d685b4e333c169d1013f9b7fa71dae7932
Author: tb1over <nxsfcc@gmail.com>
Date:   Tue Oct 24 22:47:43 2017 +0800

    wrote a readme file
```
**想要回退到其中一个版本，需要知道当前的版本,在Git中,用HEAD表示当前版本，上一个版本用HEAD^,上上一个版本用HEAD^^,往上100个版本用HEAD~100.**
```shell
git reset --hard HEAD^
```
#### 6.2 git reset --hard commit_id
现在想从'add GPL'版本回退到'add distributed'，使用如下命令
```shell
git reset --hard HEAD^  //回退到上一个版本，即'distributed'

git log
commit 1d25949da4ca40628075d9a48b58e4543d66b885
Author: tb1over <nxsfcc@gmail.com>
Date:   Tue Oct 24 22:52:27 2017 +0800

    add distributed

commit afbac9d685b4e333c169d1013f9b7fa71dae7932
Author: tb1over <nxsfcc@gmail.com>
Date:   Tue Oct 24 22:47:43 2017 +0800

    wrote a readme file
```
#### 6.3 git reflog
现在又想回到'add GPL'版本的时候怎么办，需要知道'add GPL'版本的commit id,这时，可以通过git reflog查看每一次的命令.
```shell
git reflog
1d25949 HEAD@{0}: reset: moving to HEAD^
2d90762 HEAD@{1}: commit: add GPL
1d25949 HEAD@{2}: commit: add distributed
afbac9d HEAD@{3}: commit (initial): wrote a readme file
```
这时，在输出中发现了'add GPL'提交时的commit id，则使用下列命令：
``` shell
git reset --hard 2d90762
HEAD 现在位于 2d90762 add GPL
```
#### 6.4 总结
- HEAD指向的版本是当前版本，因此，Git允许在版本历史中穿梭，使用命令：git reset --hard commit_id
- 穿梭前，用git log命令可以查看提交历史，以便确定回退到那个版本
- 重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本

## 7.工作区与暂存区
#### 7.1 工作区(working directory)
就是普通的工作目录,比如~/learngit
#### 7.2 版本库(repository)
在工作区有一个隐藏目录.git，这个目录就是Git的版本库
Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支master，以及指向master的一个指针HEAD。

![](https://www.liaoxuefeng.com/files/attachments/001384907702917346729e9afbf4127b6dfbae9207af016000/0)

Git添加文件的时候，经过两步:
- git add 其实将文件添加到了暂存区
- git commit 提交更改，将暂存区所有内容提交到当前分支

## 8. 撤销修改
#### 8.1 情况1：修改没有放到暂存区(丢弃工作区的修改)
修改了文件readme.txt，但是还没有执行git add 命令。
这时只需要撤销对readme.txt的修改，然后执行下列命令:
```shell
git checkout -- readme.txt
```
**命令git checkout -- readme.txt意思就是，把readme.txt文件在工作区的修改全部撤销**
#### 8.2 情况2：修改已经放在暂存区

例如：目前readme.txt文件内容为：
```shell
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
My stupid boss still prefers SVN.
```
执行
```shell
git add readme.txt  //加入暂存区
```
执行
```shell
git status
``` 
查看状态, 如下输出：
```shell
位于分支 master
要提交的变更：
  （使用 "git reset HEAD <文件>..." 以取消暂存）

	修改：     readme.txt
```
上述输出提示使用git reset HEAD readme.txt取消暂存.恢复到第一种情况.

执行
```shell
git reset HEAD readme.txt
```
再执行
```shell
git status
```
输出：
```shell
位于分支 master
尚未暂存以备提交的变更：
  （使用 "git add <文件>..." 更新要提交的内容）
  （使用 "git checkout -- <文件>..." 丢弃工作区的改动）

	修改：     readme.txt

修改尚未加入提交（使用 "git add" 和/或 "git commit -a"）
```
以上输出表明，已经将提交到暂存区的修改撤销，恢复到第一种情况。

执行
```bash
git checkout -- readme.txt

git status
位于分支 master
无文件要提交，干净的工作区
```
#### 8.3 已经commit到版本库中
已经执行了git add 与git commit命令，将修改commit到了对应分支中，此时撤销修改使用版本回退功能(第6小节)
#### 8.4 小结
- 当改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。
- 当不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD file(回到上一次commit后的状态)，就回到了场景1，第二步按场景1操作。
- 已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库

## 9. 删除文件
在Git中，删除也是一种修改
```bash
git add test.txt
git commit -m "add test.txt"
[master 4bef388] add test.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test.txt
```
```bash
rm test.txt
```
这时，工作区和版本库不一致,git status 查看
```bash
git status
位于分支 master
尚未暂存以备提交的变更：
  （使用 "git add/rm <文件>..." 更新要提交的内容）
  （使用 "git checkout -- <文件>..." 丢弃工作区的改动）

	删除：     test.txt

修改尚未加入提交（使用 "git add" 和/或 "git commit -a"）
```
两个情况：
- 确实要从版本库中删除该文件
```bash
git rm test.txt
rm 'test.txt'

git commit -m "remove test.txt"
[master de4c338] remove test.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 test.txt
```
- 删错了,需要恢复
这时只是在工作区中删除，不着急，在版本库中，再checkout出来即可
```bash
git checkout -- test.txt
```
**git checkout其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。**

# 二、远程仓库
## 1. GitHub
https://github.com/ ,提供免费远程仓库服务。可以自行注册账户。本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，所以，需要一点设置：
- 创建SSH Key
```bash
ssh-keygen -t rsa -C "youremail@example.com"
```
上述代码会在~/.ssh目录中生成id_rsa和id_rsa.pub文件，就是SSH Key的密钥对,其中id_rsa为私钥，不能泄露，id_rsa.pub为公钥
- 登陆GitHub，打开“Account settings”，“SSH Keys”页面：

然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容

GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。

## 2.添加远程仓库
- 登录GitHub,右上角找到"New Repository"
- 在"Repository name" 填入仓库名称:"learngit"
- "Create Repository"创建成功

目前GitHub上这个仓库learngit还是空的,现在就可以将本地仓库推送到远程仓库
```bash
git remote add origin git@github.com:michaelliao/learngit.git
//远程库的名字叫做origin
```
接下来,就可以把本地库的所有内容推送到远程库上:
```bash
git push -u origin master
// git push命令把当前分支master推送到远程仓库
由于远程仓库为空，第一次推送,加上-u参数
```
之后再提交到远程仓库，只需
```bash
git push origin master //把本地master分支推送到GitHub
```

#### 小结
- 要关联一个远程库，使用命令git remote add origin git@server-name:path/repo-name.git；

- 关联后，使用命令git push -u origin master第一次推送master分支的所有内容；

- 此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改；

## 3.创建与合并分支
每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即master分支。HEAD严格来说不是指向提交，而是指向master，master才是指向提交的，所以，HEAD指向的就是当前分支。
一开始的时候，master分支是一条线，Git用master指向最新的提交，再用HEAD指向master，就能确定当前分支，以及当前分支的提交点：

![](https://www.liaoxuefeng.com/files/attachments/0013849087937492135fbf4bbd24dfcbc18349a8a59d36d000/0)

每次提交，master分支都会向前移动一步.
- 查看分支：
    git branch
- 创建分支：
    git branch <name>
- 切换分支：
    git checkout <name>
- 创建+切换分支:
    git checkout -b <name>
- 合并某分支到当前分支:
    git merge <name>
- 删除分支:
    git branch -d <name>

## git push origin master

## git clone address
## git pull
