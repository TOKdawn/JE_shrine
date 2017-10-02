<template>
  <div id="app">
   <sidebar></sidebar>
   <wrapper></wrapper>
  </div>
</template>

<script>
import wrapper from './components/wrapper/wrapper.vue'// 主内容框架
import sidebar from 'components/sidebar/sidebar.vue'// 侧边栏
export default {
  components: {
    sidebar,
    wrapper 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
