<template>
    <div>
      <div id="lgmainBody">
        <span class="logo">JE</span>
        <div id="lgtable">
        <Tabs value="login"  type="line" id="yexy"  @on-click="clickTab">
        <TabPane label="登录" name="login" ></TabPane>
        <TabPane label="注册" name="regist" ></TabPane>
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
          }
        },
        methods: {
          clickTab(name){
            switch (name){
              case 'login': 
                 this.$router.push({path: '/basic/loginbasic/login'})
                break
              case 'regist':
                this.$router.push({path: '/basic/loginbasic/registered'})
                break
            }
          }
        }
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
  font-size: 90px;
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
