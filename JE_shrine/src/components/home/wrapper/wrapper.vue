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
                <search></search>
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
import search from 'components/home/search/search.vue'
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
                    "value": '我们的战场',
                    type: '1'
                },{
                    "value": '东方',
                    type: '2'
                },{
                    "value": '黄油飞',
                    type: '1'
                },{
                    "value": '残酷天使纲领',
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
        classification,
        search
    },
  
  created() {
        let _this = this;
        this.$axios.get('http://rap2api.taobao.org/app/mock/1162/GET//donationSeller/').then(
            function (response) {
                console.log(this);
                console.log("请求捐赠成功",response.data)
                _this.donationSeller = response.data
            })
            .catch(function (error) {
                console.log("请求2错误: "+error)
            })
  }
}
</script>


<style lang='scss' scoped>
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
#search button{
   background-color: $--button-color;
   border-color: $--button-color;
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
