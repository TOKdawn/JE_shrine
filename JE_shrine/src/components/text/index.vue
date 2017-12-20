<template>
  <div id="text">
    <zheader></zheader>
    <div class="textclass"> asdsadasdasdasdasdsasa</div>
  </div>
</template>
<script>
  // import store from '../../vuex/'
  import zheader from '../basic/header/header'
  import $ from 'jquery'
 

  export default{
    data() {
      return {
        text: 'hh'
      }
    }, 
    components: {
      zheader
    },created () {
      console.log($)
       $('#text').css('background-color','red')
       console.log($('.textclass'))
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
