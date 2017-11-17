<template>
 
 
    <div style="background:#dce3e2;padding: 20px" id="about">
        <Card :bordered="false">
            <p slot="title">联系我们</p>
            <p> 加入到自由神社开发小组-> <span>{{QQ}}</span></br>
              广告及相关业务咨询也欢迎联系我们</p>
        </Card>
       <Card :bordered="false">
            <p slot="title">开发者</p>
           
        </Card>
        <Card :bordered="false">
            <p slot="title">ChangeLog</p>
            <Timeline>
        <TimelineItem  color="red">
          
            <div class="time">2017年10月1日</div>
            <div class="changeLogCon">项目建立</div>
        </TimelineItem>
        <TimelineItem>
            <div class="time">1984年</div>
            <div class="changeLogCon">发布 Macintosh</div>
        </TimelineItem>
        <TimelineItem>
            <div class="time">2007年</div>
            <div class="changeLogCon">发布 iPhone</div>
        </TimelineItem>
        <TimelineItem>
            <div class="time">2010年</div>
            <div class="changeLogCon">发布 iPad</div>
        </TimelineItem>
        <TimelineItem>
            <div class="time">2011年10月5日</div>
            <div class="changeLogCon">史蒂夫·乔布斯去世</div>
        </TimelineItem>
    </Timeline>
        </Card>
    </div>
</template>
<script>
export default{
    data() {
        return {
          QQ: 'QQ群：12344511'
        }
    }
}
</script>
<style lang="scss">
$--about-color:#dce3e2;
.ivu-card-head p{
  font-size: 2em;
  line-height: 2em;
  color:#555;
  height:auto;
}
.ivu-card-body p{
  font-size: 1.3em;
  line-height: 1.3em;
  color:#777;
  height:auto;
}
#about{
  background-color: $--about-color;

}
#about>div{
  margin-bottom: 20px;
  
}
#about div div{
  text-align: left;
}
#ChangeLog{
width: 10%;
margin-left: 20%;
}
.time{
        font-size: 1.5em;
        color:#555;
        font-weight: bold;
    }
    .changeLogCon{
      padding-left: 5px;
      color:#777;
      font-size: 1.3em;
    }
   
</style>
