<template>
         <Form ref="registeredData" :model="registeredData" :rules="ruleInline" inline id="registeredform">
        <FormItem prop="user">
            <Input type="text" v-model="registeredData.user" placeholder="用户名">
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="registeredData.password" placeholder="密码">
            </Input>
        </FormItem>
        <FormItem prop="rePassword">
            <Input type="password" v-model="registeredData.rePassword" placeholder="重复密码">
            </Input>
        </FormItem>
        <FormItem prop="mail">
         <AutoComplete
        v-model="registeredData.mail"
        @on-search="inputmail"
        placeholder="邮箱"
        >
        <Option v-for="item in tenp" :value="item" :key="item" >{{ item }}</Option>
        </AutoComplete>
        </FormItem>
        <FormItem >
            <div id="verification">
            <Input type="text" v-model="registeredData.Verification " placeholder="验证码" >
            </Input>
            <img :src="versrc">
            </div>
            <a class="changever">看不清,点我换一张</a>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" id="registeredButten">注册</Button>
        </FormItem>
        <p id="useragreement">点击「注册」按钮，即代表你同意<router-link to="/basic/loginbasic/agreement">《用户协议》</router-link></p>
    </Form> 
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      versrc: require("./aer.png"),
      tenp: [],
      registeredData: {
        user: "",
        password: "",
        rePassword: "",
        mail: "",
        verification: ""
      },
      ruleInline: {
        user: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { type: "string", min: 6, message: "密码至少六位", trigger: "blur" }
        ],
        rePassword: [
          {
            required: true,
            message: "请再次输入密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码至少六位",
            trigger: "blur"
          }
        ],
        mail: [{ required: true, message: "请输入邮箱", trigger: "blur" }]
      }
    };
  },
  methods: {
    signupscuess() {
      this.$notify({
        title: "成功",
        message: "注册成功",
        type: "success"
      });
    },
     signuperror() {
        this.$notify.error({
          title: '错误',
          message: '注册失败'
        });
      },
       signuprepeat() {
        this.$notify.error({
          title: '错误',
          message: '用户已存在'
        });
      },

    handleSubmit(name) {
      let _this = this;
      this.$axios
        .post("/api/signup", {
          signupName: this.registeredData.user,
          signupPassword: this.registeredData.password
        })
        .then(Response => {
          if (Response.data.code == 0) {
            _this.signupscuess();
          } else if(Response.data.code == -1){
              _this.signuprepeat();
          }
        }).catch((error)=>{
            _this.signuperror();
        })
    },
    inputmail(value) {
      this.tenp =
        !value || value.indexOf("@") >= 0
          ? []
          : [
              value + "@qq.com",
              value + "@sina.com",
              value + "@163.com",
              value + "@gmail.com"
            ];
    }
  },
  mounted() {
    this.$axios.post("101.225.229.78:5000/api/captcha").then(Response => {
      this.versrc = Response;
    });
  }
};
</script>
<style lang="scss">
$--login-width: 256px;
.changever {
  font-size: 5px;
  position: absolute;
  margin-top: -32px;
  margin-left: 3px;
  display: block;
}
.ivu-select-dropdown ul li {
  font-size: 15px;
}
#registeredform div input {
  width: $--login-width;
}
#registeredform p {
  color: #666;
  font-size: 15px;
}
#registeredform p a {
  color: #698ebf;
}
#registeredButten {
  width: $--login-width;
  font-size: 15px;
}
#verification {
  vertical-align: top;
  display: inline-block;
}
#verification div {
  width: auto;
  vertical-align: top;
}
#verification div input {
  width: 128px !important;
}
#verification img {
  width: 128px !important;
  display: inline-block;
}
</style>
