<!-- 可以自适应到屏幕大小 768px 以上-->
<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :lg="12" :md="10" :sm="8" :xs="9">
          <el-row>
            <el-col :lg="6" :md="8" :sm="12" :xs="14">
              <div class="grid-content bg-purple">
                <router-link to="/">
                  <img class="log-img" src="../assets/icon/log.png" alt srcset>
                </router-link>
              </div>
            </el-col>
            <el-col :lg="3" :md="5" :sm="9" :xs="9">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  {{address}}
                  <i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>上海站</el-dropdown-item>
                  <el-dropdown-item>海南站</el-dropdown-item>
                  <el-dropdown-item>深圳站</el-dropdown-item>
                  <el-dropdown-item>四川站</el-dropdown-item>
                  <el-dropdown-item>湖北站</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :lg="17" :md="11" :sm="3" :xs="1">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :lg="6" :md="7" :sm="7" :xs="5">
          <div class="grid-content bg-purple-dark">
            <el-input
              placeholder="请输入演出、赛事、艺人、场馆名称..."
              size="medium"
              suffix-icon="el-icon-search"
              v-model="input"
            ></el-input>
          </div>
        </el-col>
        <el-col :lg="6" :md="7" :sm="9" :xs="10">
          <el-row class="header-nav-top">
            <el-col :span="3" :sm="0" :xs="0">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="7" :sm="10" :xs="9">
              <div class="grid-content bg-purple">
                <div class="user">
                  <span>HI,</span>

                  <span
                    @click="dl"
                    class="user-name"
                  >{{this.$store.state.userInfo?this.$store.state.userName:"登录"}}</span>

                  <!-- <router-link to="/lgzc"> -->
                    <span @click="zc">{{this.$store.state.userInfo?"退出":"注册"}}</span>
                  <!-- </router-link> -->
                </div>
              </div>
            </el-col>
            <el-col :span="9" :sm="9" :xs="9">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  | 我的大麦
                  <i class="el-icon-arrow-down el-icon--right"></i> |
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="5" :sm="5" :xs="6">
              <div class="grid-content bg-purple">
                <span>我的订单</span>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>
<script>
export default {
  name: "MyHeader",
  data() {
    return {
      input: "",
      userName: "",
      address: "北京站",
      userInfo: "",
      count: ""
    };
  },
  components: {
    userInfo() {
      this.$store.state.userInfo = this.userInfo;
      this.$store.state.userName = this.userName;
    },
    count() {
      this.$store.state.count = this.count;
    }
  },
  methods: {
    // 登录
    dl() {
      if (this.$store.state.userInfo) {
        this.$message({
          message: "您已登录，无需重复登录",
          type: "success"
        });
      } else {
        this.$router.push({ path: "/lgdl" });
      }
    },
    // 注册
    zc(){
       if (this.$store.state.userInfo) {
       this.$confirm('您将退出登录, 是否继续?', '提示', {
          confirmButtonText: '确定退出',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出登录成功!'
          });
          this.$store.state.userName="登录"
          this.$store.state.userInfo=false
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          });
        });
      } else {
        this.$router.push({ path: "/lgdl" });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.log-img {
  margin-top: 13px;
}
.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.grid-content {
  /* border-radius: 4px; */
  min-height: 36px;
}
.el-input--medium .el-input__inner {
  border-radius: 20px;
}
.header-nav-top span {
  display: inline-block;
  font-size: 14px;
  color: #606266;
}
@media all and (min-width: 768px) {
  .user span{
    float: left;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .user-name {
    width: 70px;
    text-align: left;

  }
}
@media all and (min-width: 769px) and (max-width: 992px) {
  .user-name {
    width: 50px;
    text-align: left;
  }
}
@media all and (min-width: 661px) and (max-width: 768px) {
  .header-nav-top span {
    font-size: 12px;
    display: inline-block;
  }
  .user-name {
    width: 50px;
    text-align: left;
  }
  .el-input--medium .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
}
@media all and (max-width: 660px) {
  .header-nav-top span {
    font-size: 12px;
    display: inline-block;
  }
  .user-name {
    width: 30px;
    text-align: left;
  }
}
</style>
