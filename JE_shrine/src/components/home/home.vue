<template>
  <div id="zzz">
    <sidebar></sidebar>
    <wrapper></wrapper>
  </div>
</template>

<script>
  import wrapper from 'components/home/wrapper/wrapper.vue'// 主内容框架
  import sidebar from 'components/home/sidebar/sidebar.vue'// 侧边栏
  export default {
    components: {
      sidebar,
      wrapper
    }
  }
</script>

<style scoped>
  @import '../../static/basic.css';
  /* Basic */
  #zzz {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
