<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import NProgress from 'nprogress'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
        rules2: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'}
            // { validator: validaePass }
          ],
          checkPass: [
            {required: true, message: '请输入密码', trigger: 'blur'}
            // { validator: validaePass2 }
          ]
        },
        checked: true
      }
    },
    computed: {
      ...mapGetters([
        'menuitems',
        'isLoadRoutes'
        // ...
      ])
    },
    methods: {
      handleReset2 () {
        this.$refs.ruleForm2.resetFields()
      },
      handleSubmit2 (ev) {
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            this.logining = true
            NProgress.start()
            let loginParams = {loginName: this.ruleForm2.account, password: this.ruleForm2.checkPass}
            this.$http.post('/api/privilege/user/login', loginParams).then(resp => {
              this.logining = false
              NProgress.done()
              let {message, data} = resp.data

              if (message === 'fail') {
                this.$notify({
                  title: '错误',
                  message: message,
                  type: 'error'
                })
              } else {
                window.sessionStorage.setItem('user', JSON.stringify(data.user))
                window.sessionStorage.setItem('permission', JSON.stringify(data.permission))
                this.addMenu(data.permission)
                if (!this.isLoadRoutes) {
                  this.$router.addRoutes(this.menuitems)
                  this.loadRoutes()
                }
                this.$router.push('/system/office')
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },

      ...mapActions([
        'addMenu',
        'loadRoutes'
      ])
    }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    margin: 180px auto;
    border: 2px solid #8492A6;
    width: 350px;
    padding: 35px 35px 15px 35px;

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .remember {
    margin: 0px 0px 35px 0px;
  }

  }
</style>
