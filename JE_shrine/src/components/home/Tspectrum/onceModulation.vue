<template>
    <el-container style="height: 770px;">
  <el-header id="onceHead"> 
        <h1>直接转换</h1>
        <p>此功能适用于转换已知调性的乐谱</p>
  </el-header>
   <el-main>
    <el-row :gutter="20">
  <el-col :span="12">
      <el-input
  type="textarea"
  :rows="23"
  placeholder="请在此处输入"
  v-model="input">
</el-input>
      </el-col>
  <el-col :span="12">
      <el-input
  type="textarea"
  :rows="23"
  placeholder="这里是输出"
  v-model="output">
</el-input>
      </el-col>
</el-row >
     <div id="bdButton">
   <span class="shuoming">转换前1=</span>
   <el-select v-model="selected1" placeholder="C" class="selectcss">
     <el-option
     v-for = "item in options"
     :key="item.value"
     :label="item.text"
     :value="item.value"
     >
     </el-option>
   </el-select>
  <span class="shuoming">转换后1=</span>
  <el-select v-model="selected2" placeholder="C" class="selectcss">
     <el-option
     v-for = "item in options2"
     :key="item.value"
     :label="item.text"
     :value="item.value"
     >
     </el-option>
   </el-select>
  <el-button type="info" style="margin-left:10px">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</div>
    </el-main>
</el-container>
</template>
<script>
  export default {
      data (){
          return {
                    selected1: '3',
                    selected2: '3',
                    options: [
                        {text: 'A', value: '0'},
                        {text: '#A', value: '1'},
                        {text: 'B', value: '2'},
                        {text: 'C', value: '3'},
                        {text: '#C', value: '4'},
                        {text: 'D', value: '5'},
                        {text: '#D', value: '6'},
                        {text: 'E', value: '7'},
                        {text: 'F', value: '8'},
                        {text: '#F', value: '9'},
                        {text: 'G', value: '10'},
                        {text: '#G', value: '11'}],
                    options2: [
                        {text: 'A', value: '0'},
                        {text: '#A', value: '1'},
                        {text: 'B', value: '2'},
                        {text: 'C', value: '3'},
        {
          text: '#C',
          value: '4'
        },
        {
          text: 'D',
          value: '5'
        },
        {
          text: '#D',
          value: '6'
        },
        {
          text: 'E',
          value: '7'
        },
        {
          text: 'F',
          value: '8'
        },
        {
          text: '#F',
          value: '9'
        },
        {
          text: 'G',
          value: '10'
        },
        {
          text: '#G',
          value: '11'
        }]
          }
      }
  }
</script>
<style lang="scss">

#onceHead h1{
    font-size: 2em;
    padding-top: 40px;
}
#onceHead p{
    padding-top: 20px;
    color: #888;
    font-size: 1.3em;
}
#onceHead {
    height: 100px !important;
}
#bdButton{
    padding-top: 50px
}
.shuoming{
  color: #888;
  text-align: center;
  font-size: 1.5em;
}
.selectcss{
  width: 5em;
}

</style>
