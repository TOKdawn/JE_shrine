<template>
    <div>
      <div id="lgmainBody">
        <span class="logo">JE</span>
        <div id="lgtable">
        <Tabs value="name1"  type="line" id="yexy">
        <TabPane label="登录" name="name1" on-click="gologin"></TabPane>
        <TabPane label="注册" name="name2" on-click="goregistered"></TabPane>
        </Tabs>
        </div>
      <router-view></router-view>
      </div>
    </div>
</template>
<script >
    /* eslint-disable no-new */
  export default {
        date() {
          return {
            userName: '',
            userPwd: '',
            nickName: ''
          }
        },
        methods: {
          gologin: function() {
            this.$router.push({path: 'basic/loginbasic/login'})
          },
          goregistered: function() {
            console.log('reeee')
            this.$router.push({path: 'basic/loginbasic/registered'})
          }
        }
    // metgods: {
    //       login() {
    //         if (this.userName && this.userPwd) {
    //           axios.post("/users/login", {
    //             userName: this.useerName,
    //             userPwd: this.userPwd
    //           }).then((res) => {
    //             if(res.data.status === '0') {
    //               this.loginModalFlag = false
    //               this.showLogin = false
    //               this.nickName = res.data.result.userName
    //             } else {
    //               this.errorTip = true
    //             }
    //           })
    //         } else {
    //           this.errorTip = true
    //         }
    //       },
    //       loginOut() {
    //         axios.post ("/user/loginOut").then ((res) => {
    //           if(res.data.status === '0') {
    //             this.showLogin = true
    //             this.nickName = ''
    //           }
    //         })
    //       }
    // }
  }
</script>
<style lang="scss">
$--main-color: #409eff;
#lgmainBody{
  display: block;
  left: 0;
  right: 0;
  padding: 30px 0 100px;
  min-height: 590px;
  text-align:center;
  vertical-align: middle;
  white-space: normal;
  width: 350px;
  margin: auto;
  // background-color: #a0a;
}
#lgmainBody .logo{
  font-size: 30px;
  color: $--main-color;
}
#lgtable{
  color: $--main-color;
  width: 184px;
  display: block;
  margin: auto;
  font-size: 18px;
   padding-left: 16px;
  font-weight: 20;
}
#yexy div{
  border-color: transparent;
}
#yexy .ivu-tabs-nav-container{
  font-size: 18px;
  font-weight: 20;
}
#lgtable::after {
    content: "";
    background-color:transparent !important; 
}

</style>
