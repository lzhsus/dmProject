<template>
  <div class="login">
    <login-header></login-header>
    <div class="dl_form">
      <div class="dl_form_left">
        <img
          src="https://img.alicdn.com/tfs/TB1OasLsgHqK1RjSZJnXXbNLpXa-720-400.png_q75.jpg"
          alt
          srcset
        >
      </div>
      <div class="dl_form_right">
        <form action method="post">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="账户登录" name="first">
              <el-input placeholder="用户名/手机号码" v-model="username">
                <template slot="prepend">
                  <img class="img" src="../assets/icon/user-dm.png" alt srcset>
                </template>
              </el-input>
              <el-input placeholder="请输入密码" v-model="password">
                <template slot="prepend">
                  <img class="img" src="../assets/icon/mima-dm.png" alt srcset>
                </template>
              </el-input>
              <el-button :plain="true" type="success" round @click="userDl">登录</el-button>
              <el-checkbox v-model="checked">下次自动登录</el-checkbox>
              <router-link to>
                <span class="find-mima">忘记密码？</span>
              </router-link>
              <router-link to="/lgzc">
                <span class="new-login">立即注册</span>
              </router-link>
              <div class="more-login">
                <span>其他登录：</span>
                <img src="../assets/icon/qq.png" alt srcset>
                <img src="../assets/icon/wx.png" alt srcset>
                <img src="../assets/icon/xl.png" alt srcset>
                <img src="../assets/icon/rr.png" alt srcset>
              </div>
            </el-tab-pane>
            <el-tab-pane label="短信快捷登录" name="second">配置管理</el-tab-pane>
          </el-tabs>
        </form>
      </div>
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
      activeName: "first",
      checked: false,
      username:'',
      password:''
    };
  },
  methods: {
    handleClick() {},
    userDl(e) {
      this.$store.state.userName=this.username
       this.$store.state.userInfo=true
      if (true) {
        var that=this
        this.$message({
          message: "登录成功,自动跳转到首页",
          type: "success"
        });
        setTimeout(function() {

          that.$store.commit('userDl')
          that.$router.push({ path: "/" });
          console.log(that.$store.state)
        }, 1000);
      }
    }
  }
};
</script>
<style scoped>
.login {
  background-color: #f5f5f5;
}
.dl_top {
  width: 100%;
  height: 80px;
  background-color: #fff;
  margin-bottom: 20px;
}
.dl_top div {
  width: 1200px;
  margin: auto;
  display: flex;
  height: 80px;
  /* justify-content: space-around; */
  align-items: center;
}
.dl_top img {
  margin-right: 20px;
}
.dl_form {
  width: 1200px;
  margin: auto;
  /* background: #fff; */
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 100px 20px;
}
.dl_form_left {
  width: 480px;
  height: 320px;
  background-color: rgb(212, 175, 175);
}
.dl_form_left img {
  width: 100%;
  height: 100%;
}
.img {
  width: 20px;
  height: 20px;
}
.dl_footer {
  height: 140px;
  width: 100%;
}
.dl_form_right {
  width: 460px;
  padding: 10px 40px;
  background-color: #fff;
}
.el-input {
  margin-bottom: 20px;
}
.el-button {
  width: 100%;
  margin-bottom: 20px;
}
.el-checkbox {
  margin-right: 140px;
}
.el-tab-pane {
  height: 240px;
}
.find-mima {
  font-size: 12px;
  color: #000;
}
.new-login {
  font-size: 12px;
  color: orangered;
}
.more-login {
  padding: 10px 0;
}
.more-login span {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  float: left;
}
.more-login::after {
  clear: both;
  display: block;
  content: "";
}
.more-login img {
  width: 30px;
  height: 30px;
  float: left;
}
</style>

