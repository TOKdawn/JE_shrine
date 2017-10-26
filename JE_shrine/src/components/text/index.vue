<template>
  <div>
    测试页面
    {{text}}
    vvv
  </div>
</template>
<script type="text/ecmascript-6">
  import store from '../../vuex/'
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
    }
  }
</script>
<style>

</style>
