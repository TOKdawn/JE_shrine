<template>
   <div id="search">
                 <el-row :gutter="12" >
                      <el-col :span="11"> <el-autocomplete
                                        v-model="state4"
                                        :fetch-suggestions="querySearchAsync"
                                         placeholder="请输入曲谱名或标签"
                                         @select="handleSelect"
                                         style="width:100%"
                                         @keyup.enter.native="searchKeyword"
                                         ></el-autocomplete>
                     </el-col>
                    <el-col :span="2"> <el-button type="primary" icon="el-icon-search" @click = "searchKeyword">搜索</el-button></el-col>
                 </el-row>
                </div>
</template>
<script>
export default {
  data() {
        return {
            restaurants: [],
            state4: '', // 用户输入的关键字
            timeout:  null,        
            donationSeller: {},      
            keyWordList :[
                {
                    "value": '我们的战场',
                    type: '1'
                },{
                    "value": '进击的巨人op',
                    type: '2'
                },{
                    "value": '进击的巨人ed',
                    type: '1'
                },{
                    "value": '残酷天使纲领',
                    type: '1'
                },{
                    "value": '未闻花名op',
                    type: '1'
                },
                {
                    "value": '未闻花名ed',
                    type: '1'
                },
                {
                    "value": '未闻花名第二季',
                    type: '1'
                }
            ]
        }
    }, 
     methods :{
        searchKeyword(){
            // var goSrc = '/retrieve/:'+this.state4
            if(this.state4 != '')
            this.$router.push({name: 'retrieve', params: { keyword:this.state4}})
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
        this.$router.push({name: 'retrieve', params: { keyword:item.value}})
      },
    },
    created () {
        this.restaurants = this.keyWordList;
    }
}
</script>
<style lang="scss" scoped>
#search{
 margin-top: 2em;
 padding-left:30%;
 font-size: auto;
 text-align: center;
}

</style>
