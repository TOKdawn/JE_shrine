<template>
  <div>
      <zheader></zheader>
       <router-view></router-view>
  </div>
</template>
<script>
import zheader from './header/header.vue'
  export default {
       components: {
         zheader
    }
  }
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
