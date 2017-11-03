<template>
  <div id="text">
    <zheader></zheader>
    测试页面
    {{text}}
    vvv
  </div>
</template>
<script>
  import store from '../../vuex/'
  import zheader from '../header/header'
  export default{
    data() {
      return {
        text: 'hh'
      }
    },
    created() {
      console.log(store.state.userdata)
        if (store.state.userdata.role === 0) {
          console.log('cread')
        this.text = '用户未登录'
      }
    },
    components: {
      zheader
    }
  }
</script>
<style lang="scss">
#text{
  color: #666;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
</style>
