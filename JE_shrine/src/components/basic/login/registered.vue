<template>
  
         <Form ref="registeredData" :model="registeredData" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="registeredData.user" placeholder="用户名">
             
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="registeredData.password" placeholder="密码">
            </Input>
        </FormItem>
        <FormItem prop="rePassword">
            <Input type="rePassword" v-model="registeredData.rePassword" placeholder="重复密码">
            </Input>
        </FormItem>
        <FormItem prop="mail">
            <Input type="mail" v-model="registeredData.mail" placeholder="邮箱">
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" id="registeredButten">注册</Button>
        </FormItem>
    </Form> 

</template>
<script type="text/ecmascript-6">
 export default {
        data () {
            return {
                registeredData: {
                    user: '',
                    password: '',
                    rePassword: '',
                    mail: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码至少六位', trigger: 'blur' }
                    ],
                    rePassword: [{
                        
                    }]
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
#registeredButten {
    width: $--login-width;
    font-size: 15px;
}
</style>
