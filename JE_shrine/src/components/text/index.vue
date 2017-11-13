<template>
  <div id="text">
    <zheader></zheader>
  </div>
</template>
<script>
  // import store from '../../vuex/'
  import zheader from '../basic/header/header'
  export default{
    data() {
      return {
        text: 'hh'
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
