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
          <li>帮助辛苦扒谱上传的</li>
          <li>帮助我们为自由神社做好风险措施，及时处理并修复可能出现的突发问题。</li>
          <li>帮助我们支付高昂的域名费用。</li>
          <li> 为日后举办一些活动，发放福利等提供资助。</li>
          
          <li style="color: #ec407a"> ❤️&nbsp&nbsp我们非常感谢您的捐赠与支持，哪怕这份捐助微乎其微&nbsp❤️</li>
          </ul>
          </div>
        </div>
      <h1>鸣谢名单:</h1>
        <el-table
    :data="donation.data"
    style="width: 100%; ">
    <el-table-column
      prop="num"
      label="序号"
      width="110">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="money"
      width="180"
      label="金额">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间">
    </el-table-column>
  </el-table>
 <div class="clear">
    <el-button-group class="buttonBar">
  <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
 </div>
  
    </div>
</template>
<script>
   export default {
      props: ['donation'],
       data() {
           return {
             describe_title: '捐助我们'
           }
       }

   }
</script>
<style lang="scss">
$--main-font-color: #777;
$--button-color: #8ebebc;
  #moreinfor{
    font-size: 14px;
  }
    #donation{
      text-align: left;
      width: 100%;
      padding: 30px 8% 30px 8%;
      font-size: 1.1em;
      line-height: 1.3em;
      color: $--main-font-color;
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
      color: #555;
      font-size: 2.5em;
      margin: 40px 0px 50px 0px;
    }
    #donation ul{
      margin-top: 20px;
      line-height: 33px;
      width: auto;
      list-style:none;
      color: #039be5;
    }
    #hello{
      color: #8bc34a;
      text-align: left;
      font-size: 20px;
      margin-bottom: 10px;
    }
  .el-table{
    background-color:#e8edec;
  }
 .el-table tr{
   background-color: #e8edec;
 }

  .el-table th.is-leaf, .el-table td {
    border-color: #bbb;
  }
.cell{
  padding-left: 10px !important;
  
}
.buttonBar{
  margin-top: 10px;
  float: right;
}


</style>
