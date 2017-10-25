<template>
    <div id="wrapper">
        <!-- Intro -->
        <section id="intro">
             <scrollbg></scrollbg>
            <div id="intro_inner">
                <h1 id="intro_title">{{title}}</h1>
                <div id="intro_infor">{{infor}}</div>
            </div>
            <div class="6u 12u$(xsmall) " id="search">
                <input type="text" name="demo-name"  value="" placeholder="请输入曲谱名">
                <div class="button">搜索</div>
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

        <section id="four" class="wrapper style3 fade-up ">
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
            infor: 'JE吧曲库,自由神社,页面升级,努力建设中QvQ,',
            donationSeller: {}
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

<style>
body {
    font-family: "微软雅黑","Helvetic", "SimHei", "Sans", "SimSun", "微软正黑体", "新细明体", "Arial";
}
#two{
  background-color: #4b2d94;
  color: #fff;
}
#one{
  /*background-color: #fbe9e7;*/
  background-color: #a6367e;
}
#three{
  color: #fff;
  background-color: #a6367e;
}
#search{
 display: inline;
 margin: -24vh auto 0 auto;
 /* vertical-align: top; */
 /* background-color: #aadcda; */
 font-size: auto;
}
#search div{
    width: 20%;
    padding: 0;
    height: 2.75em;
    font-size: 1em;
    line-height: 2.75em;
    letter-spacing:0.1em;
    border-radius: 0em 0.25em 0.25em 0em;
    float: left;
    border-left: 0xp;
}
#search input{
    background-color: rgba(255, 255, 255, .15);
    color: #fff;
    display: block;
    float: left;
    width: 77%;
    border-radius: 0.25em 0em 0em 0.25em;
    border-right: 0px;
}

#search input:hover {
    border-right: 0px;
}

#search div:hover::after{
    border-radius: 0.25em 0em 0em 0.25em;


}
#intro_inner {
    position: relative;
    top: -39vh;
    left: 0;
    width: auto;
    font-family: "微软正黑体", "新细明体", "Helvetic", "SimHei", "Sans", "SimSun", "Arial";
    text-align: left;
    padding-left: 5em;
}

#intro_inner h1 {
    font-family: inherit;
    font-size: 3em;
    margin: 0;
}

#intro_inner div {
    font-size: 1.25em;
    color: #fff;
    /* background-color: #8c9eff; */
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

@media screen and (max-width: 1280px) {
    #wrapper {
        position: relative;
        margin-left: 0;
        padding-top: 4.5em;
        height: 100vh;
        vertical-align: baseline;
        box-sizing: border-box;
    }
}

@media screen and (max-width: 736px) {
    #wrapper {
        padding-top: 0;
    }
}
</style>
