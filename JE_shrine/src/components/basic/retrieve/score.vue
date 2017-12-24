<template>
    <div id="score">
           <div>
           <el-row id="father">
            <el-col :span="10" id="score_other"> 
              <img src="http://7xs2gj.com1.z0.glb.clouddn.com/ldtz.jpg-t" class="csore_img">
               
                <div class="score_infor"> 
                 <div class="score_author">
                <p class="score_auth"> 作者:{{score.author}}</p> 
                <p class="score_auth"> 演唱:{{score.singer}}</p>
                 </div>
                </div>
                <div class="author_infor">

                </div>
              <div class="title_infor">
                 <p>
          <el-tag v-for="tag in score.tags" :key="tag" class="cadTag"  >
           {{tag}}
          </el-tag></p> 
                </div>
                <div class="show_infor">

                </div>
              </el-col>
            <el-col :span="14" id="score_main">
              <h1 class="csore_title">{{score.title}}</h1>
            
           <p class="score_content">      
             {{score.content}}
           </p>
        </el-col>
          </el-row>
          </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      score: {}
    };
  },
  created() {
      console.log('/api/suggest?term='+this.$route.params.scorename)
      let _this = this;
      this.$axios.get('/api/music/'+this.$route.params.scorename)
      .then((res)=>{
        _this.score = res.data
        console.log(_this.score)
      })
  }
};
</script>
<style scoped>
#score {
  width: 100%;
  min-width: 840px;
  background: url(./img/bg.jpg) 0 0 /100% 100% no-repeat;
  padding-top: 100px;
  padding-bottom: 100px;
  height: auto;
  color: #888;
}
#score > div {
  width: 1440px;
  display: block;
  right: 0px;
  left: 0px;
  margin: auto;
}
@media screen and (max-width: 1480px) {
  #score > div {
    width: 1240px;
    display: block;
    right: 0px;
    left: 0px;
    margin: auto;
  }
}
@media screen and (max-width: 1280px) {
  #score > div {
    width: 1040px;
    display: block;
    right: 0px;
    left: 0px;
    margin: auto;
  }
}
@media screen and (max-width: 1040px) {
  #score > div {
    width: 840px;
    display: block;
    right: 0px;
    left: 0px;
    margin: auto;
  }
}

#score_main {
  background-color: rgba(255, 255, 255, 0.9);
  height: 800px;
  text-align: center;
  color: #666
}
#score_other {
  background-color: rgba(0, 0, 0, 0.7);
  height: 800px;
  display: inline-block;
}

.score_content {
  font-size: 19px;
  line-height: 25px;
  padding: 40px;
}
.csore_img {
  margin: 40px auto 0px auto;
  display: block;
}
.csore_title {
  width: 100%;
  margin-top: 40px;
  font-size: 28px;
  text-align: center;
}
.score_infor{
  height:0;
width:39.5%;
padding-bottom:39.5%;
  background-color: rgba(77, 208, 225, .8);
margin-left: 9%;
margin-top: 7%;
font-size: 20px;
}
.author_infor{
   height:0;
width:39.5%;
padding-bottom:39.5%;
  background-color: salmon;
  margin-left: 50.5%;
  margin-top: -35.5%;

}
.title_infor{
  height:0;
width:39.5%;
padding-bottom:39.5%;
  background-color: rgba(255,283,88,0.8);
margin-left: 9%;
margin-top: -2%;

}
.show_infor{
   height:0;
width:39.5%;
padding-bottom:39.5%;
  background-color: salmon;
  margin-left: 50.5%;
  margin-top: -35.5%;
}
.container{
  display: inline;
}
.score_author{
  padding: 30px 20px;
  line-height: 35px;
  font-size: 23px;
  color: #666;
  
  font-weight: 45000
  }
  .cadTag{
    background-color:#5d4037;
    color: #fff;
    margin: 20px 30px;
    font-size: 18px;
  }
</style>
