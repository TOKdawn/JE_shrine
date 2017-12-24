<template>
    <div id="zrelease">
 <i-form v-ref:form-validate :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="曲谱名" prop="title">
            <i-input :value.sync="formValidate.title" placeholder="请输入去曲谱名"></i-input>
        </Form-item>
        <Form-item label="作曲者" prop="author">
            <i-input :value.sync="formValidate.author" placeholder="请输入作曲人"></i-input>
        </Form-item>
         <Form-item label="演唱者" prop="singer">
            <i-input :value.sync="formValidate.singer" placeholder="请输入演唱者"></i-input>
        </Form-item>
        <Form-item label="" prop="tags">
            <i-select :model.sync="formValidate.tags" placeholder="请输入标签">
                <i-option value="流行乐">流行乐</i-option>
                <i-option value="东方">东方</i-option>
                <i-option value="轻音乐">轻音乐</i-option>
                 <i-option value="古典乐">古典乐</i-option>
                  <i-option value="二次元">二次元</i-option>
            </i-select>
        </Form-item>
        <Form-item label="主体" prop="content">
            <i-input :value.sync="formValidate.content" type="textarea" :autosize="{minRows: 2,maxRows: 10}" placeholder="请输入..."></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary" @click="handleSubmit('formValidate')">提交</i-button>
            <i-button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</i-button>
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
        tags: [],
        
      },
      ruleValidate: {
        title: [{ required: true, message: "标题不能为空", trigger: "blur" }],
        author: [{ required: true, message: "作曲人不能为空", trigger: "blur" }],
        singer: [{ required: true, message: "演唱者不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
        ],
        tags: [{ required: true, message: "请选择标签", trigger: "change" }],
        
        content: [
          { required: true, type: "date", message: "请选择内容", trigger: "change" }
        ]
       
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
         this.name = store.state.userdata.username;
          this.$Message.success("提交成功!");
        } else {
          this.$Message.error("表单验证失败!");
        }
      });
    },
   
  }
};
</script>
<style scoped>
#zrelease {
  color: #888;
}
</style>
