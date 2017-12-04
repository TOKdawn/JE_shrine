<template>
    <div>
        <Card>
             <p slot="title">标准卡片</p>
             <p>{{$route.params.keyword}}</p>
             <!-- <p>{{$router.params.keyword}}</p> -->
             <p>卡片内容</p>
        </Card>
    </div>
</template>
<script type="text/ecmascript-6">
  export default {
      created(){
        //   console.log($router.)
      }
  }
</script>
<style>

</style>
