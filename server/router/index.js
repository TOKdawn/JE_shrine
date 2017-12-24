const express = require('express')
const router = express.Router()
const UserDataModel = require('../mongo/model/userModel')
const MusicDataModel = require('../mongo/model/musicModel')

// 密码加密
const bcrypt = require('bcrypt')

// 生成 id
const uuid = require('uuid/v4')
const SALT_WORK_FACTOR = 10

// 用户注册
router.post('/signup', (req, res) => {
    const { signupName, signupPassword } = req.body

    UserDataModel.findOne({ name: signupName }, (err, userInfo) => {
        if (err) {
            console.log(err)
        }
        if (userInfo) {
            res.send({
                code: -1,
                msg: '用户已存在'
            })
            return console.log('用户已存在！')
        }

        let _userData = new UserDataModel({
            username: signupName,
            password: signupPassword,
            role: 10
        });
        // 生成 salt
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            if (err) {
                return console.log(err)
            }
            // 给密码加 salt
            bcrypt.hash(signupPassword, salt, function(err, hash) {
                if (err) {
                    return console.log(err)
                }
                _userData.password = hash
                    // 保存密码
                _userData.save(function(err, results) {
                    if (err) {
                        console.log(err)
                        res.send({
                            code: -1,
                            msg: 'Something error!'
                        })
                    }
                    req.session.isLogin = true
                    req.session.userInfo = {
                        userName: signupName
                    }
                    res.send({
                        code: 0,
                        msg: '注册成功'
                    })
                })
            })
        })
    })
});

// 用户登录
router.post('/login', (req, res) => {
    const { username, password } = req.body
    UserDataModel.findOne({ username: username }, {
        password: 1,
        username: 1
    }, (err, userInfo) => {
        if (err) {
            console.log(err)
        }
        if (!userInfo) {
            res.send({
                code: -1,
                msg: '用户不存在'
            })
            return console.log('用户不存在！')
        }
        userInfo.comparePassword(password, function(err, isMatch) {
            if (err) {
                console.log(err)
            }
            if (isMatch) {
                req.session.isLogin = true
                req.session.userInfo = {
                    userName: userInfo.username
                }
                res.send({
                    code: 0,
                    id: userInfo._id,
                    userName: userInfo.username,
                    role: userInfo.role,
                    msg: '登录成功！'
                })
            } else {
                res.send({
                    code: -2,
                    msg: '密码错误'
                })
            }
        })
    })
});
// 用户登出
router.post('/signout', (req, res) => {
    req.session.isLogin = false
    res.send({
        code: 0,
        msg: '登出成功！'
    })
});
// 查询用户名
router.get('/getUserName', (req, res) => {
    // console.log(req.session);
    if (req.session.isLogin) {
        res.send({
            code: 0,
            userName: req.session.userInfo.userName
        })
    } else {
        res.send({
            code: -1,
            msg: '请登录！'
        })
    }
});

// 获取一个曲谱，成功时返回曲谱，不存在则返回404错误
router.get('/music/:musicid', (req, res) => {
    const { musicid } = req.params

    MusicDataModel.findOne({ _id: musicid }, (err, musicResult) => {
        if (err) {
            console.log(err)
            res.send({
                status: false,
                msg: '查询失败'
            })
        }
        if (musicResult === null) {
            res.send({
                status: false,
                msg: '无数据'
            })
        } else {
            UserDataModel.find({ _id: musicResult.from }, (err, userResult) => {
                if (err) {
                    console.log(err)
                    res.send({
                        status: false,
                        msg: '查询失败'
                    })
                }
                if (userResult === null) {
                    res.send({
                        status: false,
                        msg: '无数据'
                    })
                } else {
                    res.send({
                        id: musicResult._id,
                        title: musicResult.title,
                        author: musicResult.author,
                        singer: musicResult.singer,
                        content: musicResult.content,
                        cover: "http://7xs2gj.com1.z0.glb.clouddn.com/ldtz.jpg-t",
                        tags: musicResult.tags,
                        createDt: musicResult.createAt,
                        updateDt: musicResult.updateAt,
                        userId: userResult._id,
                        status: 0,
                        views: 0
                    })
                }
            })
        }
    })
})

// 获取搜索推荐
router.get('/suggest', (req, res) => {
    const { term } = req.query

    MusicDataModel.find({ title: new RegExp('.*' + term + '.*') }, (err, musicResults) => {
        if (err) {
            console.log(err)
            res.send({
                status: false,
                msg: '查询失败'
            })
        }
        if (musicResults === null) {
            res.send({
                status: false,
                msg: '无数据'
            })
        } else {
            res.send({
                data: musicResults
            })
        }
    })
})

// 上传歌曲
router.post('/music/release', (req, res) => {
    const { title, author, singer, content, tags } = req.body

    if (!req.session.isLogin) {
        res.send({
            code: -1,
            msg: '未登录'
        })
    } else {
        UserDataModel.findOne({ username: req.session.userInfo.userName }, (err, userResult) => {
            if (err) {
                console.log(err)
                res.send({
                    status: false,
                    msg: '查询失败'
                })
            }
            if (userResult === null) {
                res.send({
                    status: false,
                    msg: '无数据'
                })
            } else {
                let _musicData = new MusicDataModel({
                    from: userResult._id,
                    title: title,
                    author: author,
                    singer: singer,
                    content: content,
                    tags: tags
                });

                _musicData.save((err, results) => {
                    if (err) {
                        console.log(err)
                        res.send({
                            code: -1,
                            msg: 'Something error!'
                        })
                    }
                    res.send({
                        code: 0,
                        msg: '录入成功'
                    })
                })


            }
        })
    }

})



module.exports = router