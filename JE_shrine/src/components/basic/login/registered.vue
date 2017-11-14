<template>
  
         <Form ref="registeredData" :model="registeredData" :rules="ruleInline" inline id="registeredform">
        <FormItem prop="user">
            <Input type="text" v-model="registeredData.user" placeholder="用户名">
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="registeredData.password" placeholder="密码">
            </Input>
        </FormItem>
        <FormItem prop="rePassword">
            <Input type="password" v-model="registeredData.rePassword" placeholder="重复密码">
            </Input>
        </FormItem>
        <FormItem prop="mail">
            <Input type="text" v-model="registeredData.mail" placeholder="邮箱">
            </Input>
        </FormItem>
        <FormItem >
            <div id="verification">
            <Input type="text" v-model="registeredData.Verification " placeholder="验证码" >
            </Input>
            <img :src="versrc">
            </div>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" id="registeredButten">注册</Button>
        </FormItem>
        <p>点击「注册」按钮，即代表你同意<router-link to="/basic/loginbasic/agreement">《用户协议》</router-link></p>
    </Form> 

</template>
<script type="text/ecmascript-6">
 export default {
        data () {
            return {
                versrc: require('./aer.png'),
                registeredData: {
                    user: '',
                    password: '',
                    rePassword: '',
                    mail: '',
                    verification: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码至少六位', trigger: 'blur' }
                    ],
                    rePassword: [
                        {
                            required: true, message: '请再次输入密码', trigger: 'blur'
                        }, { 
                            type: 'string', min: 6, message: '密码至少六位', trigger: 'blur'
                         }
                    ],
                   mail: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' }
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
$--login-width: 256px;
#registeredform div input {
    width: $--login-width;
}
#registeredform p{
    color:#666;
}
#registeredform p a{
    color: #698ebf;
}
#registeredButten {
    width: $--login-width;
    font-size: 15px;
}
#verification {
    vertical-align: top;
    display: inline-block;
}
#verification div {
    width: auto;
     vertical-align: top;
}
#verification div input {
    width: 128px !important;
}
#verification  img {
    width: 128px !important;
    display: inline-block;
}
</style>
