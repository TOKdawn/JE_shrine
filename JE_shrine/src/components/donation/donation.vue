<template>
    <div id="donation">
        <div id="describe">
            <h1>{{describe_title}}</h1>
             <p id="hello"> 路过的好人:<br/>
               &nbsp您好</p>

              MoeJE自由神社创建于2016年1月，我们长期致力于整合各类ACG乐谱，属于一个非营利性的网站。

              由于目前我们还在处于成长阶段，目前的开支费用完全由组织人员投入，但从长远来看这并不是合理的。

              正如您所知道的，网站的维护需要大量金钱和精力的投入，可能是不起眼的一隅，也是我们付出大量时间和精力所设计的。

          如果您喜欢自由神社，您可以考虑通过捐赠来支持我们，您的捐助将会用于:
          <div class="clear">


            <div class="left">
              <img src="./ziyou.png"/>
              <p id="moreinfor">支付宝扫码捐助:（捐助后请用备注您的ID或者直接支付宝加我好友私信告诉我您的ID以便统计）</p>
            </div>


          <ul>
          <li>帮助我们应付日益增长的服务器和带宽，以及前端开发、后端维护与编辑人员方面费用。</li>
          <li>帮助我们支付高昂的域名费用。</li>
          <li>帮助我们为自由神社做好风险措施，及时处理并修复可能出现的突发问题。</li>
          <li> 为日后举办一些活动，发放福利等提供资助。</li>
          <li style="color: #e91e63"> ❤️&nbsp&nbsp我们非常感谢您的捐赠与支持，哪怕这份捐助微乎其微&nbsp❤️</li>

          </ul>


          </div>
        </div>
        <div class="table-wrapper">
        </div>
    </div>
</template>
<script>
   export default {
       data() {
           return {
             describe_title: '捐助我们'
           }
       }
   }
</script>
<style lang="styl">
  #moreinfor{
    font-size: 14px;
  }
    #donation{
      text-align: left;
      background: #f3e5f5;
      width: 100%;
      padding: 30px 90px 0px 90px;
      font-size: 18px;
    }
    #donation img{
      right: 10px;
      width: 250px;
      height: 250px;
      display: inline-block;
      margin-top: 0px;

    }
    .left{
      float: left;
      width: 300px;
    }
    .clear::after{
      content: '';
      display: block;
      clear: both;
      float: none;

    }
    #donation h1 {
      color: #000000;
      margin-bottom: 10px;
    }
    #donation ul{
      margin-top: 20px;
      line-height: 33px;
      width: auto;
      list-style:none;
      color: #303f9f;
    }
    #hello{
      color: #00d6b2;
      text-align: left;
      font-size: 20px;
      margin-bottom: 10px;
    }
  .table-wrapper{
    background: #00ff00;
  }

</style>
