<template>
    <div id="score">
           <div>
           <el-row id="father">
            <el-col :span="10" id="score_other"> 
              <img src="http://7xs2gj.com1.z0.glb.clouddn.com/ldtz.jpg-t" class="csore_img">
               
                <div class="score_infor">
                <p class="score_album">专辑: {{score.album}}</p>     
                <p class="score_author"> 作者:{{score.author}}</p> 
                <p class="score_singer"> 演唱:{{score.singer}}</p>
                </div>
                <div class="author_infor">

                </div>
              <div class="title_infor">
                <p class="score_album">专辑: {{score.album}}</p>     
                <p class="score_author"> 作者:{{score.author}}</p> 
                <p class="score_singer"> 演唱:{{score.singer}}</p>
                </div>
                <div class="show_infor">

                </div>
              </el-col>
            <el-col :span="14" id="score_main">
              <h1 class="csore_title">{{score.title}}</h1>
            
           <p class="score_content">      
          前奏
          5B5D6B 6B7D9B10B9D9B8D</br>
          7D8D9B 9B9D10B9D8D10D10B</br>
          7D8D9B 7D9B10B11D11B10D10B9D</br>
          7D8D9B 9B9D10B10D10B9D10B</br>
          5B5D6B 6B6B8B8D5D6B5D</br>
          3D4D5B 5B5B4D5B7B5D5D</br>
          5B5D6B 6B6B8B8D5D6B5D</br>
          5B5B6B5D4D3D</br>
          7D 7D7D8D7B7B6D6D7B
          7B7B(7D)7D7B6B6B6D </br>      
           副歌：6B6B7B6D6B5D5D5D
          6D6D7B 7B7B7D 7D7D9B9D8D 
            </br> 副歌：5D5D6B 6B6B6D 6D7D

          7D(6D7B)7D (6D7B) 7D(6D7B)7D</br>
          7D(8B8B)8D8D7D7D(7B6D7B6D)6B6B</br>

          (5B)6B(6D6D6B7B) 7D7D(7B)8D  </br> 副歌：4D(5B)5D5D(5B)6B  (6D6D)6B(6D)
          (8B)8D8D7D7D(7B6D7B7B)    </br>    
          (6B6D7B)
          7D(6D7B)7D (6D7B) 7D(6D7B)7D</br>
          7D(8B8B)8D8D7D7D(7B)6B9D9D(9B)8D(9B) </br>  

          (6D6D)7D(7B) 6B6B (7B)8D(7B)7D</br>
          (8B)8D7D(7B7B6D)     </br>   副歌：7D(7B6D)6B6B(5B)  
          (8B)8D7D(7B7B)7D       </br> 副歌：7D(7B6D)6B6B(6D)</br>
          ---------------------------------------------------------------</br>
          (2D3B)3D(3B2D)4D(4B)</br>
          (6D7B)7D(7B6D)6B5D(6D)7D8D (7B6D)6B
          (5B 6D7B)7D(8B)8D7D(7B6D8B8B)8D
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
    this.score = {
      id: "59f67fc3e549a21d1e8d861c",
      title: "旅の途中",
      alias: ["人在旅途"],
      album: "旅の途中",
      author: "小峰公子",
      composer: "吉良知彦",
      singer: "清浦夏实",
      content: "(6)(#6)1(#6)1(6)(5)(4)",
      cover: "http://7xs2gj.com1.z0.glb.clouddn.com/ldtz.jpg-t",
      tags: ["狼与香辛料", "狼と香辛料"],
      references: [
        {
          name: "FREEDOM54",
          url: "http://tieba.baidu.com/home/main?un=FREEDOM54&ie=utf-8&fr=pb"
        }
      ],
      createDt: 1509326787,
      updateDt: 1509326787,
      userId: "59f48847e549a20f73d009e9",
      status: 0,
      views: 0
    };
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

  text-align: center;
}
#score_other {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
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
  background-color: yellowgreen;
margin-left: 9%;
margin-top: 7%;

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
  background-color: yellowgreen;
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
</style>
