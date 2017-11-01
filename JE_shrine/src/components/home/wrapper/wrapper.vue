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
                      <el-col :span="11"> <el-input  placeholder="请输入曲谱名"></el-input></el-col>
                     <el-col :span="2"> <el-button type="primary" icon="el-icon-search" >搜索</el-button></el-col>
                 </el-row>
                </div>
            </div>         
        </section>
        <!-- One -->
        <section id="one" class="wrapper style2 spotlights ">
            <section>
                <a href="#" class="image"><img src="" alt="" data-position="center center" /></a>
                <div class="content">
                    <div class="inner">
                        <h2>Sed ipsum dolor</h2>
                        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                        <ul class="actions">
                            <li>
                                <a href="#" class="button">Learn more</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <a href="#" class="image"><img src="" alt="" data-position="top center" /></a>
                <div class="content">
                    <div class="inner">
                        <h2>Feugiat consequat</h2>
                        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                        <ul class="actions">
                            <li>
                                <a href="#" class="button">Learn more</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
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

    </div>
</template>

<script type="text/ecmascript-6">
 /* eslint-disable no-new */
// import WOW from 'js/wow.min.js'
import scrollbg from 'components/home/scrollbg/scrollbg.vue'
import tspectrum from 'components/home/Tspectrum/Tspectrum.vue'
import donation from 'components/home/donation/donation.vue'
import about from 'components/home/about/about.vue'
export default {
    data() {
        return {
            title: 'MoeJE☆自由神社',
            infor: 'JE吧曲库,自由神社,你要的谱子这里都有,',
            donationSeller: {},
            home_img: require('./pic01.jpg')
        }
    },
    components: {
        scrollbg,
        tspectrum,
        donation,
        about
    },
  created() {
        // this.$http.get('../src/assets/donation.json').then(response => {
        //     this.donationData = response.body
        //     console.log(this.durationData)
        // }, response => {
        //     console.log('未获取到数据')
        // })
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

.home_img{
    position: absolute;
    top: 0px;
    padding: 0 8% 0 8%;
    width: 100%;
    text-align: center;
}
.home_img img{
    max-height: 40%;
    width: 100%;
}
#intro_inner {
    position: relative;
    width: auto;
    font-family: "微软正黑体", "新细明体", "Helvetic", "SimHei", "Sans", "SimSun", "Arial";
    color: $--main-font-color;
    margin-top: 4em;
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
    margin-top: 2em;
    font-size: 1.25em;
    color: $--main-font-color;
    line-height: 1.5em;
    /* background-color: #8c9eff; */
}
#search{
 margin-top: 3em;
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
