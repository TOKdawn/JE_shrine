# JE神社需求文档

### 整体架构

* Vue+node.js
* 数据库为了方便数据迁移保持与WordPress一致(待定)
* element UI

### 主要功能

曲谱查询:
 
	->多分类展示

 	->多关键字查询
 	
 曲谱发布:
 
  	->提交标题/内容/封面/标签
  	
 	->获取用户ID/提交时间
小工具:

	->转谱器
	
	->转调器
用户管理:
	
	->管理员
		->管理曲谱
		->校验曲谱
		->管理分类
	->用户
		->发布曲谱
		->查看收藏
		->查看发布
		->捐助信息
		->评论(待定)
		


##后台
* 数据库: mongoDB 如果服务器内存不允许再考虑Mysql
* 数据信息: 

User	_id: ObjectId	uname: String	password_hash: String	salt: binary	role: int
	Tag	"name": string	"count": intSong	"_id": ObjectId	"title": string	"alias": [string]	"userId": ObjectId	"author": "string"	"album": "string"	"tags": [Tag]	"content": string

