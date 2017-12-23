<template>
    <div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline id="logform">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="用户名">    
            </Input>
        </FormItem>
        <FormItem prop="password" id="loginform">
            <Input type="password" v-model="formInline.password" placeholder="密码"> 
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" id="loginbutton">登录</Button>
        </FormItem>
    </Form>
    <div class="logBar">
        <a>忘记密码·</a><a @click="changeicoflag()">社交账户登录</a>
        <div id="logicon" :class="{icomove:icoflag}">
            <i class="ziconfont icon-baidu"></i><i class="ziconfont icon-qq"></i><i class="ziconfont icon-xinlang"></i>
        </div>
    </div>
    </div>
</template>
<script type="text/ecmascript-6">
import store from '@/vuex/index.js'
    export default {
        data () {
            return {
                icoflag: false,
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码最小', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                let _this = this;
                this.$axios.post('/api/login',{
                    username: this.formInline.user,
                    password: this.formInline.password
                }
                ).then(function (response){
                    console.log(response.data)
                    if(response.data.code == 0){
                    var userData={
                        'role':10,
                        'name':response.data.userName
                    }
                    store.commit('login',userData)
                        _this.$router.push('/home')
                    }
                }).catch(function(error){
                    console.log("请求失败")
                })
            }
        }
    }
</script>
<style lang="scss">
$--login-width: 256px;
@keyframes icomove {
      0% {
            -webkit-transform: translate(-5px,0);
            transform: translate(-5px, 0px);
            color:rgba(188,188,188,0);
      }

      100% {
            -webkit-transform: translate(0px, 0px);
            transform: translate(0px, 0px);
            clear: rgba(188,188,188,.8);
      }
}
.ziconfont {
        font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
}
#loginform div input {
    width: $--login-width;
}
#loginbutton {
    width: $--login-width;
    font-size: 15px;
}
.ivu-input{
    width: $--login-width;
}
.logBar{
    display: inline-block;
    text-align: left;
    width: $--login-width;
      vertical-align:top;
      line-height: 24px;
}
.logBar a{
    display: inline-block;
    color: #888;
    font-size: 14px;
    line-height: 24px;
}
.logBar a:hover{
    color: #666;
}
#logicon{
//    -webkit-transform: translate(-10px,0);
//      transform: translate(-10px, 0px);
//     color:rgba(117,117,117,0);
    display: none;
    margin-left: 5px;
    line-height: 24px;
    vertical-align: top;
    color: #888;
    letter-spacing:3px

}
.icomove {
     animation: icomove 1s ;
    -webkit-animation: icomove 1s ;
    display: inline-block !important;
}
#logicon i:hover{
    color: #666;
}
</style>
