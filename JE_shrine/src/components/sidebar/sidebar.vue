<template>
  
  <section id="sidebar">

      <a href="#" class="profilepic">
        <img :src=src width="100%" height="100%">
      </a>
      <a href="#" class="button  center">登录/注册</a>

    <div class="inner">
      <nav>
        <ul>
          <li>
            <a href="#intro">主页</a>
          </li>
          <li>
            <a href="#one">分类</a>
          </li>
          <li>
            <a href="#two">小工具</a>
          </li>
          <li>
            <a href="#three">关于我们</a>
          </li>
          
          <li>
            <a href="#three">鸣谢/捐赠</a>
          </li>

        </ul>
      </nav>
      
    </div>
    
  <div id="contribute">
    投稿
  </div>

  </section>

</template>
<script>
export default {
  data () {
    return {
      src: require('./img/Akkarin.jpg')
    }
  }

}
</script>
<style >

section{
  margin: 0;
  padding: 0;
}

#contribute{
   background-color: rgba(210,58,81, 0.9);
  color: #eee;
  width: 80px;
 height: 70px;
 position: absolute;
 bottom: 10px;
 right: -10px;
 font-size: 1.5em;
 text-align : center;
 line-height : 70px;
 transition : right 0.2s;

}
#contribute:hover{
  
 right: -20px;

}
.center{
   height: 6vh;
   width: 80%;
    display: block;
    margin: 3vh auto 0vh auto;
    text-align: content;
    line-height: 6vh;
    font-size: 0.8em;

}
.profilepic{
    display: block;
    border: 5px solid #fff;
    border-radius: 300px;
    width: 14vh;
    height: 14vh;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background: #88acdb;
    -webkit-transition: all .2s ease-in;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    text-align: center;

}
   

#sidebar {
  padding: 5vh 4vh 0vh 4vh;
  background: #312450;
  cursor: default;
  height: 100vh;
  left: 0;
  overflow-x: visible;
  overflow-y: visible;
  position: fixed;
  text-align: right;
  top: 0;
  width: 18em;
  z-index: 10000;

}

#sidebar>.inner {
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
  -moz-transform: translateY(0);
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  -moz-transition: opacity 1s ease;
  -webkit-transition: opacity 1s ease;
  -ms-transition: opacity 1s ease;
  transition: opacity 1s ease;
  min-height: 65vh;
  opacity: 1;
  width: 100%;
}

body.is-ie #sidebar>.inner {
  height: 100%;
}

#sidebar nav>ul {
  list-style: none;
  padding: 0;
}

#sidebar nav>ul>li {
  -moz-transform: translateY(0);
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  -moz-transition: opacity 0.15s ease, -moz-transform 0.75s ease;
  -webkit-transition: opacity 0.15s ease, -webkit-transform 0.75s ease;
  -ms-transition: opacity 0.15s ease, -ms-transform 0.75s ease;
  transition: opacity 0.15s ease, transform 0.75s ease;
  margin: 1.5em 0 0 0;
  opacity: 1;
  padding: 0;
  position: relative;
}

#sidebar nav>ul>li:first-child {
  margin: 0;
}

#sidebar nav>ul>li:nth-child(1) {
  -moz-transition-delay: 0.45s;
  -webkit-transition-delay: 0.45s;
  -ms-transition-delay: 0.45s;
  transition-delay: 0.45s;
}

#sidebar nav>ul>li:nth-child(2) {
  -moz-transition-delay: 0.65s;
  -webkit-transition-delay: 0.65s;
  -ms-transition-delay: 0.65s;
  transition-delay: 0.65s;
}

#sidebar nav>ul>li:nth-child(3) {
  -moz-transition-delay: 0.85s;
  -webkit-transition-delay: 0.85s;
  -ms-transition-delay: 0.85s;
  transition-delay: 0.85s;
}

#sidebar nav>ul>li:nth-child(4) {
  -moz-transition-delay: 1.05s;
  -webkit-transition-delay: 1.05s;
  -ms-transition-delay: 1.05s;
  transition-delay: 1.05s;
}

#sidebar nav>ul>li:nth-child(5) {
  -moz-transition-delay: 1.25s;
  -webkit-transition-delay: 1.25s;
  -ms-transition-delay: 1.25s;
  transition-delay: 1.25s;
}

#sidebar nav a {
  -moz-transition: color 0.2s ease;
  -webkit-transition: color 0.2s ease;
  -ms-transition: color 0.2s ease;
  transition: color 0.2s ease;
  border: 0;
  color: rgba(255, 255, 255, 0.35);
  display: block;
  font-size: 0.9em;
  font-weight: bold;
  letter-spacing: 0.25em;
  line-height: 1.75;
  outline: 0;
  padding: 1.2em 0;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
}

#sidebar nav a:before,
#sidebar nav a:after {
  border-radius: 0.2em;
  bottom: 0;
  content: '';
  height: 0.2em;
  position: absolute;
  right: 0;
  width: 100%;
}

#sidebar nav a:before {
  background: #3c2c62;
}

#sidebar nav a:after {
  background-image: -moz-linear-gradient(to right, #5e42a6, #b74e91);
  background-image: -webkit-linear-gradient(to right, #5e42a6, #b74e91);
  background-image: -ms-linear-gradient(to right, #5e42a6, #b74e91);
  background-image: linear-gradient(to right, #5e42a6, #b74e91);
  -moz-transition: max-width 0.2s ease;
  -webkit-transition: max-width 0.2s ease;
  -ms-transition: max-width 0.2s ease;
  transition: max-width 0.2s ease;
  max-width: 0;
}

#sidebar nav a:hover {
  color: rgba(255, 255, 255, 0.55);
}

#sidebar nav a.active {
  color: #ffffff;
}

#sidebar nav a.active:after {
  max-width: 100%;
}

body.is-loading #sidebar>.inner {
  opacity: 0;
}

body.is-loading #sidebar nav ul li {
  -moz-transform: translateY(2em);
  -webkit-transform: translateY(2em);
  -ms-transform: translateY(2em);
  transform: translateY(2em);
  opacity: 0;
}

@media screen and (max-width: 1280px) {

  #contribute {
    background-color: rgba(210, 58, 81, 1);
    color: #eee;
    width: 80px;
    height: 70px;
    position: absolute;
    bottom: -10px;
    right: 10px;
    font-size: 1.5em;
    text-align: center;
    line-height: 70px;
    transition: right 0.2s;
    border-radius: 5px;
  }

  #contribute:hover {
    right: 10px;
  }


  
.center {
  height: 6vh;
  width: 80%;
  display: none;
  margin: 3vh auto 0vh auto;
  text-align: content;
  line-height: 6vh;
  font-size: 0.8em;

}

.profilepic {
  display: block;
  border: 1px solid #fff;
  border-radius: 300px;
  width: 3.3em;
  height: 3.3em;
  margin:  .1em ;
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
  right: 120px;
}




  #sidebar {
    height: 3.5em;
    left: 0;
    line-height: 3.5em;
    overflow: visible;
    padding: 0;
    text-align: center;
    top: 0;
    width: 100%;
  }
  #sidebar>.inner {
    -moz-flex-direction: row;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -moz-align-items: stretch;
    -webkit-align-items: stretch;
    -ms-align-items: stretch;
    align-items: stretch;
    line-height: inherit;
  min-height: 100%;
  position: absolute;
  }
  #sidebar nav {
    height: inherit;
    line-height: inherit;
  }
  #sidebar nav ul {
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    height: inherit;
    line-height: inherit;
    margin: 0;
  }
  #sidebar nav ul li {
    display: block;
    height: inherit;
    line-height: inherit;
    margin: 0 0 0 2em;
    padding: 0;
  }
  #sidebar nav a {
    height: inherit;
    line-height: inherit;
    padding: 0;
  }
  #sidebar nav a:after {
    background-image: none;
    background-color: #b74e91;
  }
}

@media screen and (max-width: 736px) {
  #sidebar {
    display: none;
  }
}

</style>
