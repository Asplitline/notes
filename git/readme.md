# git

![05](readme_image/05-1608907955424.png)

| git仓库          | 暂存区             | 工作目录            |
| ---------------- | ------------------ | ------------------- |
| 用于存放提交记录 | 临时存放被修改文件 | 被Git管理的项目目录 |

## git配置

```shell
# 配置提交人姓名
git config --global user.name 提交人姓名
git config --global user.name myqz

# 配置提交人邮箱
git config --global user.email 提交人邮箱 
git config --global user.email ambition292@163.com

# 查看git配置信息
git config --list

# 查看远程仓库别名
git remote -v
```

## git提交

```shell
# 初始化git仓库
git init

# 查看文件状态
git status 

# 追踪文件,提交到暂存区
git add 文件列表
git add readme.md
git add . # 工作目录所有文件添加暂存区

# 向仓库中提交代码
git commit -m 提交信息  
git commit -m 添加readme

# 合并 add + commit
git commit -a -m 提交信息
# 查看提交记录
git log` 

# 添加readme.md
# 创建readme.md 向其中插入 "first"
echo "first" > readme.md

# 删除文件 当前分支
git rm -r 文件名

```

## git撤销

 ```shell
# 用暂存区文件 >>覆盖>> 工作目录文件
git checkout 文件
  
# 将文件从暂存区中删除
# 工作目录中文件还存在
git rm --cached 文件

# 将git仓库中指定的更新记录恢复出来，并且覆盖暂存区和工作目录
# 版本回退 git log 查看commitID -> 注意版本从高到低
git rest --hard commitID
 ```

##  git分支

**主分支**（master）：第一次向 git 仓库中提交更新记录时**自动产生的一个分支**。

**开发分支**（develop）：作为开发的分支，**基于 master 分支创建**。

**功能分支**（feature）：作为开发具体功能的分支，**基于开发分支创建**

**功能分支 -> 开发分支 -> 主分支**

### 分支命令

 ```shell
# 查看分支
git branch 

# 创建分支
git branch 分支名称

# 切换分支
git checkout 分支名称` 

# 合并分支
git merge 来源分支 

# 删除分支（分支被合并后才允许删除） 强制删除
git branch -d 分支名称

git branch -a # 查看远端分支
git branch -v # 显示分支提交信息
#checkout远程的dev分支，在本地起名为dev分支，并切换到本地的dev分支
git checkout -b dev origin/dev
 ```

### 暂时保存

暂时提取分支上所有的改动并存储，让开发人员得到一个干净的工作副本，临时转向其他工作。

- 存储临时改动：`git stash`
- 恢复改动：`git stash pop`

> 先提交到缓存区，才可以stash
>
> 在恢复的时候注意当前分支是否为当初保存的分支

# github

 ```shell
#  推送仓库
git push 远程仓库地址 分支名称
git push 远程仓库地址别名 分支名称 #需先取别名
git push # 需先记住地址
# 取别名
git remote add 远程仓库地址别名 远程仓库地址
# 记住地址
git push -u 远程仓库地址别名 分支名称
# -u 记住推送地址及分支，下次推送只需要输入git push即可
 ```

   

