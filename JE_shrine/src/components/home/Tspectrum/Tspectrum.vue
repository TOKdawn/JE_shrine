<template>
  <div id="tspectrum">
    <h1>转谱器</h1>
    <el-container>

      <el-header> 
     <el-button-group class="buttenBar">
       <router-link to= "/step"><el-button type="primary" >逐步转调</el-button></router-link>
       <router-link to= "/once"><el-button type="primary" >直接转调</el-button></router-link>
       <router-link to= "/bd"> <el-button type="primary" >双谱转换</el-button></router-link>
      </el-button-group>
    </el-header>
</el-container>
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
  text-align: center;
}
      

</style>
