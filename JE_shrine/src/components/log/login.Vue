<template>
    <div>
      <input type="text" tabindex="1" name="loginname" v-model="userName"
             placeholder="User Name" data-type="loginname"/>
      <input type="password" tabindex="2" name="password" v-model="userPwd"
             class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="Password"
             @keyup.enter="login">
      <a href="javascript:;" class="btn-login" @click="login">登  录</a>
    </div>
</template>
<script >
  export default {
        date() {
          return {
            userName: '',
            userPwd: '',
            nickName: ''
          }
        },
    metgods: {
          login() {
            if(this.userName && this.userPwd) {
              axios.post("/users/login", {
                userName: this.useerName,
                userPwd: this.userPwd
              }).then((res) => {
                if(res.data.status == '0') {
                  this.loginModalFlag = false
                  this.showLogin = false
                  this.nickName = res.data.result.userName
                } else {
                  this.errorTip = true
                }
              })
            } else {
              this.errorTip = true
            }
          },
          loginOut() {
            axios.post("/user/loginOut").then((res) => {
              if(res.data.status == '0') {
                this.showLogin = true
                this.nickName = ''
              }
            })
          }
    }
  }
</script>
<style>

</style>
