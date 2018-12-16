<template>
  <div class="login">
    <login-header></login-header>
    <div class="lg-zc-form">
      <h1>欢迎注册</h1>
      <form action method="post">
        <el-row>
          <el-col :span="14">
            <el-input placeholder="用户名/手机号码" @blur="valueBtn">
              <template slot="prepend">
                <img class="img" src="../assets/icon/user-dm.png" alt srcset>
              </template>
            </el-input>
          </el-col>
          <el-col :span="10" class="err" v-show="ph">
            <div>{{txt?'不可为空':'输入正确'}}</div>
          </el-col>
          <el-col :span="14">
            <el-input placeholder="请输入登录密码">
              <template slot="prepend">
                <img class="img" src="../assets/icon/mima-dm.png" alt srcset>
              </template>
            </el-input>
          </el-col>
          <el-col :span="10" class="err" v-show="ph">
            <div>{{txt?'不可为空':'输入正确'}}</div>
          </el-col>
          <el-col :span="14">
            <el-input placeholder="请输入确认登录密码">
              <template slot="prepend">
                <img class="img" src="../assets/icon/mima-dm.png" alt srcset>
              </template>
            </el-input>
          </el-col>
          <el-col :span="10" class="err" v-show="ph">
            <div>{{txt?'不可为空':'输入正确'}}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="9">
            <el-input placeholder="请输入验证码">
              <template slot="prepend">
                <img class="img" src="../assets/icon/yzm-dm.png" alt srcset>
              </template>
            </el-input>
          </el-col>
          <el-col :span="5">
            <el-button class="hqyzm">获取验证码</el-button>
          </el-col>
          <el-col :span="9" class="err" v-show="ph">
            <div>{{txt?'不可为空':'输入正确'}}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="14">
            <el-button type="primary" round>立即注册</el-button>
          </el-col>
        </el-row>
      </form>
    </div>
    <div class="dl_footer">
      <login-footer></login-footer>
    </div>
  </div>
</template>
<script>
import loginHeader from "../components/login/loginHeader";
import loginFooter from "../components/login/loginFooter";
export default {
  name: "loginDL",
  components: {
    loginHeader,
    loginFooter
  },
  data() {
    return {
      ph: false,
      txt: true
    };
  },
  methods: {
    valueBtn(e) {
      var value = e.target.value;
      this.ph = true;
      if (value.length != 0) {
        this.txt = false;
      }
    }
  }
};
</script>
<style scoped>
.lg-zc-form {
  width: 600px;
  padding: 0 80px 40px;
  margin: auto;
  background-color: #fff;
  border-radius: 20px;
}
.lg-zc-form h1 {
  font-size: 30px;
  padding: 20px 0;
}
.kong {
  width: 10px;
}
.img {
  width: 20px;
  height: 20px;
}
.el-input {
  width: 100%;
  margin-bottom: 10px;
}
.el-button {
  width: 100%;
}
.err {
  height: 40px;
  line-height: 40px;
  color: red;
  padding-left: 4px;
  box-sizing: border-box;
  font-size: 12px;
}
.hqyzm {
  padding: 13px 4px;
  font-size: 12px;
}
</style>

