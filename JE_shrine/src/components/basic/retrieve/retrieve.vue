<template>
  <el-container> 
   <el-header id="retrieveHeader">
       <div >     
           <search></search>
        </div> 
   </el-header> 
   <el-main> 
    <row> 
     <i-col span="16"> 
      <card v-for="tiem in showData.data" :key="tiem.id" class="card" > 
          <div @click="searchScore(tiem.id)">
       <row> 
        <i-col span="7"> 
         <p class="cadImg"> <img :src="tiem.cover" /></p> 
        </i-col> 
        <i-col span="16" > 
         <p id="cadTitel">{{tiem.title}}</p> 
         <p>
          <el-tag v-for="tag in tiem.tags" :key="tag" class="cadTag" >
           {{tag}}
          </el-tag></p> 
         <el-row type="flex" class="row-bg" justify="space-around" id="cardInfo"> 
          <el-col :span="3">
           <icon type="eye"></icon>{{tiem.views}}
          </el-col> 
          <el-col :span="12">
           <icon type="ios-person"></icon>{{tiem.userId}}
          </el-col> 
          <el-col :span="3">
           ???
          </el-col> 
         </el-row> 
        </i-col> 
       </row> 
          </div>
      </card> 
     </i-col> 
     <i-col span="8">
      col-12
     </i-col> 
    </row> 
   </el-main> 
  </el-container> 
</template>
<script type="text/ecmascript-6">
import search from 'components/home/search/search.vue'
export default {
  data() {
    return {
        showData : {}
    };
  },
  components: {
    search  
  },
  methods: {
    getdata() {
      return {
        total: 1,
        data: [
          {
            id: "591111111111111119a21d1e8d861c",
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
                url:
                  "http://tieba.baidu.com/home/main?un=FREEDOM54&ie=utf-8&fr=pb"
              }
            ],
            createDt: 1509326787,
            updateDt: 1509326787,
            userId: "59f48847e549a20f73d009e9",
            status: 2,
            views: 10
          },
           {
            id: "59f123123123e8d861c",
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
                url:
                  "http://tieba.baidu.com/home/main?un=FREEDOM54&ie=utf-8&fr=pb"
              }
            ],
            createDt: 1509326787,
            updateDt: 1509326787,
            userId: "59f48847e549a20f73d009e9",
            status: 0,
            views: 8
          },
           {
            id: "59f33333333333333d1e8d861c",
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
                url:
                  "http://tieba.baidu.com/home/main?un=FREEDOM54&ie=utf-8&fr=pb"
              }
            ],
            createDt: 1509326787,
            updateDt: 1509326787,
            userId: "59f48847e549a20f73d009e9",
            status: 0,
            views: 2
          },
        ]
      };
    },
     searchScore(id){
        //  console.log("ssss")
            console.log(id)
           
            this.$router.push({name: 'score', params: { scorename:id}})
        }
  },
  created() {
      console.log(this.$route.params.keyword)
      this.showData = this.getdata();
      
  },
 
};
</script>
<style lang="scss" scoped>
$--main-font-color: #888;
$--special-font-color: #666;
$--button-color:#8ebebc;
$--classification-color: #f1f5f5;
$--tspectrum-color: #ecf1f1;
$--donation-color: #e8edec;
$--about-color:#dce3e2;
#retrieveHeader{
    padding-top:20px;
    height: 120px !important;
    background: #666;
}
.cadImg{
    width: 80%;
    height: 110px;
    overflow: hidden;
}
.cadImg img{
    width: 100%;
    height: auto;
}
.card{
    margin-bottom: 5px;
}
#cardInfo{
    color: $--main-font-color;
    
    margin-top: 20px;
}
#cardInfo i{
    color: $--special-font-color;
    margin-right: 5px;
    font-size: 19px;
    vertical-align:bottom;
}
#cardInfo div{
    vertical-align: bottom;
    font-size: 14px;
}
#cadTitel {
    // border-bottom: 1px solid;
    margin-bottom:5px; 
    font-size: 23px;
}
.cadTag {
    margin-right: 5px;
}

</style>
