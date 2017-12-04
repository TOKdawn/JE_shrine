<template>
    <div id="wrapper">
        <!-- Intro -->
        <section id="intro">
             <!-- <scrollbg></scrollbg> -->
             <div class="home_img">
                 <img :src="home_img" >
              <div id="intro_inner">
                    <h1 id="intro_title"><span class="special">MoeJE</span>☆自由神社</h1>
                    <div id="intro_infor">{{infor}}</div>
                </div>
                <div id="search">
                 <el-row :gutter="12" >
                      <el-col :span="11"> <el-autocomplete
                                        v-model="state4"
                                        :fetch-suggestions="querySearchAsync"
                                         placeholder="请输入曲谱名或标签"
                                         @select="handleSelect"
                                         style="width:100%"
                                         ></el-autocomplete>
                     </el-col>
                    <el-col :span="2"> <el-button type="primary" icon="el-icon-search" @click = "searchKeyword">搜索</el-button></el-col>
                 </el-row>
                </div>
            </div>         
        </section>
        <!-- One -->
        <section id="one" class="wrapper style2 spotlights ">
        <classification></classification>
        </section>

        <!-- Two -->
        <section id="two" class="wrapper  fade-up ">
            <tspectrum></tspectrum>
        </section>

        <!-- Three -->
        <section id="three" class="wrapper  fade-up ">
            <donation :donation="donationSeller" ></donation>
        </section>
        <section id="four" class="wrapper  fade-up ">
           <about></about>
        </section>
        <footer class="footer">
            <div>
                Copyright ©2017 <a href="//www.moeje.org">www.moeje.org</a> Powered By <a href="//github.com/TOKdawn">DawninShadow</a> Version 1.0.0 
            </div>
        </footer>
    </div>
</template>

<script type="text/ecmascript-6">
 /* eslint-disable no-new */
// import WOW from 'js/wow.min.js'
import scrollbg from 'components/home/scrollbg/scrollbg.vue'
import tspectrum from 'components/home/Tspectrum/Tspectrum.vue'
import donation from 'components/home/donation/donation.vue'
import about from 'components/home/about/about.vue'
import classification from 'components/home/classification/classification.vue'
export default {
    data() {
        return {
            restaurants: [],
            state4: '', // 用户输入的关键字
            timeout:  null,
            title: 'MoeJE☆自由神社',
            infor: 'JE吧曲库,自由神社,你要的谱子这里都有,',
            donationSeller: {},
            home_img: require('./pic01.jpg'),
            keyWordList :[
                {
                    keyword: '我们的战场',
                    type: '1'
                },{
                    keyword: '东方',
                    type: '2'
                },{
                    keyword: '黄油飞',
                    type: '1'
                },{
                    keyword: '残酷天使纲领',
                    type: '1'
                }
            ]
        }
    },
    components: {
        scrollbg,
        tspectrum,
        donation,
        about,
        classification
    },
    methods :{
        searchKeyword(){
            var goSrc = '/retrieve/:'+this.state4
            if(this.state4 != '')
            this.$router.push({name: 'retrieve', params: { keyword:this.state4}})
        },
        loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      querySearchAsync(queryString, cb) { // cd是回调函数
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 500);
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
    },
  created() {
       this.restaurants = this.loadAll()
        this.donationSeller = {
                'data': [{
                    'num': '1',
                    'name': '过来米米亚',
                    'money': '16.00',
                    'time': '20170723 201425'
                }, {
                    'num': '2',
                    'name': '过来米米亚',
                    'money': '16.00',
                    'time': '20170723 201425'
                }, {
                    'num': '3',
                    'name': '过来米米亚',
                    'money': '16.00',
                    'time': '20170723 201425'
                }, {
                    'num': '4',
                    'name': '过来米米亚',
                    'money': '16.00',
                    'time': '20170723 201425'
                }, {
                    'num': '5',
                    'name': '过来米米亚',
                    'money': '16.00',
                    'time': '20170723 201425'
                }, {
                    'num': '6',
                    'name': '过来米米亚',
                    'money': '16.00',
                    'time': '20170723 201425'
                }]
         }
  }
}
</script>


<style lang='scss'>
$--main-font-color: #888;
$--special-font-color: #666;
$--button-color:#8ebebc;
$--classification-color: #f1f5f5;
$--tspectrum-color: #ecf1f1;
$--donation-color: #e8edec;
$--about-color:#dce3e2;
body {
    font-family: "微软雅黑","Helvetic", "SimHei", "Sans", "SimSun", "微软正黑体", "新细明体", "Arial";
}
.footer{
    background: #acb3b2;
    line-height: 1.5em;
    font-size:.8em;
    padding: 3px;
    color: #888;
}
.footer a{
    color:#999;
}
.home_img{
    position: absolute;
    top: 0px;
    padding: 0 10% 0 10%;
    width: 100%;
    text-align: center;
}
.home_img img{
    width: 100%;
}
#intro_inner {
    position: relative;
    width: auto;
    font-family: "微软正黑体", "新细明体", "Helvetic", "SimHei", "Sans", "SimSun", "Arial";
    color: $--main-font-color;
    margin-top: 2em;
}
.special{
    color:$--special-font-color;
}
#intro_inner h1 {
    font-family: inherit;
    font-size: 3em;
    margin: 0;
}
#intro_inner div {
    margin-top: 1em;
    font-size: 1.25em;
    color: $--main-font-color;
    line-height: 1.5em;
    /* background-color: #8c9eff; */
}
#search{
 margin-top: 2em;
 padding-left:30%;
 font-size: auto;
 text-align: center;
}
#search button{
   background-color: $--button-color;
   border-color: $--button-color;
}
#intro{
    background-color: #fff;
    box-shadow: inset 0 1px 0 0 rgba(0,0,0,0.05), inset 0 0.1em 0.1em 0 rgba(0,0,0,0.02);
}
#one{
  background-color: $--classification-color;
  color: #fff;
  box-shadow: inset 0 1px 0 0 rgba(0,0,0,0.05), inset 0 0.1em 0.1em 0 rgba(0,0,0,0.02);
}
#two{
 
  background-color: $--tspectrum-color;
  box-shadow: inset 0 1px 0 0 rgba(0,0,0,0.05), inset 0 0.1em 0.1em 0 rgba(0,0,0,0.02);
}
#three{
  color: #fff;
  background-color: $--donation-color;
  box-shadow: inset 0 1px 0 0 rgba(0,0,0,0.05), inset 0 0.1em 0.1em 0 rgba(0,0,0,0.02);
}
#four{
    background-color: $--about-color;
}
#intro {
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    min-height: 100vh;
    position: relative;
}

#wrapper {
    position: relative;
    margin-left: 23em;
    height: 100vh;
    vertical-align: baseline;
    box-sizing: border-box;
}
#sidebar+#wrapper {
    margin-left: 18em;
}
.spotlights>section {
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-direction: row;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    min-height: 22.5em;
}
@media screen and (max-width: 1280px) {
    #wrapper {
        position: relative;
        margin-left: 0;
        padding-top: 4.5em;
        height: 100vh;
        vertical-align: baseline;
        box-sizing: border-box;
    }
     #sidebar+#wrapper {
        margin-left: 0;
        padding-top: 3.5em;
    }
}

@media screen and (max-width: 736px) {
    #wrapper {
        padding-top: 0;
    }
     #sidebar+#wrapper {
        padding-top: 0;
    }
}
</style>
