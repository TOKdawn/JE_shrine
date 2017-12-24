<template>
    <div id="zrelease">
 <i-form ref="formValidate" :model="formValidate"  :label-width="80">

        <Form-item label="曲谱名:" prop="title">
            <i-input v-model="formValidate.title" placeholder="请输入曲谱名"></i-input>
        </Form-item>

        <Form-item label="作曲人:" prop="author">
            <i-input  v-model="formValidate.author" placeholder="请输入作曲人"></i-input>
        </Form-item>
         <Form-item label="演唱者:" prop="singer">
            <i-input  v-model="formValidate.singer" placeholder="请输入演唱者"></i-input>
        </Form-item>
     
        <Form-item label="tags:" prop="tags">
            <Checkbox-group  :model.sync="formValidate.tags">
                <Checkbox value="流行乐">流行乐</Checkbox>
                <Checkbox value="古典乐">古典乐</Checkbox>
                <Checkbox value="轻音乐">轻音乐</Checkbox>
                <Checkbox value="二次元">二次元</Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item label="内容:" prop="content">
            <i-input  v-model="formValidate.content" type="textarea" :autosize="{minRows: 2,maxRows: 10}" placeholder="请输入..."></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary" @click="handleSubmit('formValidate')">提交</i-button>
        </Form-item>
    </i-form>

    </div>
</template>
<script>
import store from "@/vuex/index.js";
export default {
  data() {
    return {
      formValidate: {
        title: "",
        author: "",
        singer: "",
        content: "",
        tags: ["二次元","流行乐"],
      },
      
    };
  },
  methods: {
    handleSubmit(name) {
            // console.log("dsadas",this.formValidate)
          let _this = this;
          this.$axios
            .post("/api/music/release", {
              title: _this.formValidate.title,
              author: _this.formValidate.author,
              singer: _this.formValidate.singer,
              content: _this.formValidate.content,
              tags: _this.formValidate.tags
            })
            .then(Response => {
              if (Response.data.code == 0) {
                _this.$Message.success("提交成功!");
              } 
            })
            .catch(error => {
              _this.$Message.error("提交失败!");
            });   
        
    },
    
  }
};
</script>
<style scoped>
#zrelease {
  color: #888;
  width: 500px;
  left: 0;
  right: 0;
  display: block;
  margin: auto;
  padding-top: 100px;
}
</style>
