<template>
  <div id="tspectrum">
    <h1>转谱器</h1>
    <el-row type="flex" class="row-bg buttenBar" justify="space-around " :gutter="2">
        <el-col :span="6" :offset="10" ><el-button type="primary">逐步转调</el-button></el-col>
        <el-col :span="6" :offset="0"><el-button type="primary">直接转调</el-button></el-col>
        <el-col :span="6" :offset="0"><el-button type="primary">双谱转换</el-button></el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
// import Transcore from 'je-transcore'
export default {
  
}
</script>

<style lang="scss">
$--background-color:#ecf1f1;
#tspectrum h1{
      color: #555;
      font-size: 2.8em;
      padding-top: 20px;
      background-color: $--background-color;
}

#tspectrum{
      text-align: center;
      width: 100%;
      padding: 30px 8% 30px 8%;
      font-size: 14px;
      line-height: 1.3em;
}
.buttenBar{
  margin-top: 30px;
  width: 71%;
  
}
      

</style>
