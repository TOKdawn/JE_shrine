<template>
    <div id="wrapper">
        <!-- Intro -->
        <section id="intro">
            <!-- <scrollbg></scrollbg> -->
            <div id="intro_inner">
                <h1 id="intro_title">{{title}}</h1>
                <div id="intro_infor">{{infor}}</div>
            </div>
            <div class="6u 12u$(xsmall) " id="search">
                <input type="text" name="demo-name"  value="" placeholder="请输入曲谱名">
                <div class="button ">搜索</div>
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
            <!-- <section>
                                                <a href="#" class="image"><img src="images/pic03.jpg" alt="" data-position="25% 25%" /></a>
                                                <div class="content">
                                                    <div class="inner">
                                                        <h2>Ultricies aliquam</h2>
                                                        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                                                        <ul class="actions">
                                                            <li>
                                                                <a href="#" class="button">Learn more</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </section> -->
        </section>

        <!-- Two -->
        <section id="two" class="wrapper style3 fade-up section-list-hook">
            <tspectrum>    </tspectrum>
        </section>

        <!-- Three -->
        <section id="three" class="wrapper style1 fade-up section-list-hook">
            <div class="inner">
                <h2>Get in touch</h2>
                <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
                <div class="split style1">
                    <section>
                        <form method="post" action="#">
                            <div class="field half first">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div class="field half">
                                <label for="email">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div class="field">
                                <label for="message">Message</label>
                                <textarea name="message" id="message" rows="5"></textarea>
                            </div>
                            <ul class="actions">
                                <li>
                                    <a href="" class="button submit">Send Message</a>
                                </li>
                            </ul>
                        </form>
                    </section>
                    <section>
                        <ul class="contact">
                            <li>
                                <h3>Address</h3>
                                <span>12345 Somewhere Road #654<br /> Nashville, TN 00000-0000<br /> USA
                                </span>
                            </li>
                            <li>
                                <h3>Email</h3>
                                <a href="#">user@untitled.tld</a>
                            </li>
                            <li>
                                <h3>Phone</h3>
                                <span>(000) 000-0000</span>
                            </li>
                            <li>
                                <h3>Social</h3>
                                <ul class="icons">
                                    <li>
                                        <a href="#" class="fa-twitter">
                                            <span class="label">Twitter</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="fa-facebook">
                                            <span class="label">Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="fa-github">
                                            <span class="label">GitHub</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="fa-instagram">
                                            <span class="label">Instagram</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="fa-linkedin">
                                            <span class="label">LinkedIn</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>

        <section id="four" class="wrapper style3 fade-up ">
            <div class="inner">
                <h2>What we do</h2>
                <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
                <div class="features">
                    <section>
                        <span class="icon major fa-code"></span>
                        <h3>Lorem ipsum amet</h3>
                        <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                    </section>
                    <section>
                        <span class="icon major fa-lock"></span>
                        <h3>Aliquam sed nullam</h3>
                        <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                    </section>
                    <section>
                        <span class="icon major fa-cog"></span>
                        <h3>Sed erat ullam corper</h3>
                        <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                    </section>
                    <section>
                        <span class="icon major fa-desktop"></span>
                        <h3>Veroeros quis lorem</h3>
                        <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                    </section>
                    <section>
                        <span class="icon major fa-chain"></span>
                        <h3>Urna quis bibendum</h3>
                        <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                    </section>
                    <section>
                        <span class="icon major fa-diamond"></span>
                        <h3>Aliquam urna dapibus</h3>
                        <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                    </section>
                </div>
                <ul class="actions">
                    <li>
                        <a href="#" class="button">Learn more</a>
                    </li>
                </ul>
            </div>
        </section>

    </div>
</template>

<script type="text/ecmascript-6">
// import WOW from 'js/wow.min.js'
import scrollbg from 'components/scrollbg/scrollbg.vue'
import tspectrum from 'components/Tspectrum/Tspectrum.vue'
export default {
    data() {
        return {
            title: 'MoeJE☆自由神社',
            infor: 'JE吧曲库,自由神社,页面升级,努力建设中QvQ,'
        }
    },
    components: {
        scrollbg,
        tspectrum
    }
}
</script>

<style>
body {
    font-family: "Helvetic", "SimHei", "Sans", "SimSun", "微软正黑体", "新细明体", "Arial";
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