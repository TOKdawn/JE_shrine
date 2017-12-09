<template>
<el-menu
  :router = "true"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#222729"
  text-color="#fff"
  active-text-color="#d95e76">
<el-row :gutter="10">
  <el-col :xs="4" :sm="4" :md="6" :lg="6" :xl="6">logo</el-col>
  <el-col :xs="14" :sm="14" :md="12" :lg="12" :xl="12" >
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="24">
    <el-menu-item index="/" id="nav">主页</el-menu-item>
    <el-menu-item index="/">Justyc_eternal</el-menu-item>
  <el-submenu index="/">
    <template slot="title">分类</template>
    <el-menu-item index="2-1">新番曲谱</el-menu-item>
    <el-menu-item index="2-2">热门标签</el-menu-item>
    <el-menu-item index="2-3">搜索热榜</el-menu-item>
  </el-submenu>
  <el-menu-item index="/">小工具</el-menu-item>
</el-col>
</el-row>
  </el-col>
  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
       <router-link to="/basic/loginbasic" class="profilepic2 "><img :src="src" width="100%" height="100%" /></router-link>
    </a>
       <div id="zzcontribute"> 投稿 </div>
    </el-col>
</el-row>
</el-menu>
</template>
<script type="text/ecmascript-6">
    export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '',
        src: require('./Akkarin.jpg')
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style lang="scss">
$--element-pink: #d95e76;
#nav{
    background-color: #0a0;
}
.el-menu-item{
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing:3px
}
.el-submenu__title{
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing:3px
}
.el-menu-demo{
  border: 0px !important;
}

  .profilepic2 {
    display: block;
    border: 1px solid #fff;
    border-radius: 300px;
    width: 56px;
    height: 56px;
    margin: .1em;
    position: relative;
    overflow: hidden;
    background: #88acdb;
    -webkit-transition: all .2s ease-in;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    text-align: center;
    float: right;
    right: 125px;
  }
  #zzcontribute {
    background-color: $--element-pink;
    color: #eee;
    width: 80px;
    height: 70px;
    position: absolute;
    bottom: -10px;
    right: 15px;
    font-size: 25px;
    text-align: center;
    line-height: 70px;
    transition: right 0.2s;
    border-bottom-right-radius: 5px; 
    border-bottom-left-radius: 5px;
  }
  #zzcontribute::after {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.2s;
    border-radius: 5px;
    content: '';
    background-color: rgba(255, 255, 255, 0.2);
    bottom: 0px;
    display: none;
    right: 0px;
  }
  
  #zzcontribute:hover::after {
    display: block;
  }
</style>
