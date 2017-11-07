<template>
    <div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline id="logform">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">    
            </Input>
        </FormItem>
        <FormItem prop="password" id="loginform">
            <Input type="password" v-model="formInline.password" placeholder="Password"> 
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" id="loginbutton">登录</Button>
        </FormItem>
    </Form>
    <div class="logBar">
        <a>忘记密码·</a><a>社交账户登录</a>
    </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data () {
            return {
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
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!')
                    } else {
                        this.$Message.error('Fail!')
                    }
                })
            }
        }
    }
</script>
<style lang="scss">
$--login-width: 235px;
#loginform div input {
    width: $--login-width;
}
#loginbutton {
    width: $--login-width;
}
.ivu-input{
    width: $--login-width;
}
.logBar{
    display: inline-block;
    text-align: left;
    width: $--login-width;
}
.logBar a{
    display: inline-block;
    color: #888;
    font-size: 13px;
    font-weight:bold;
}
.logBar a:hover{
    color: #666;
}
</style>
