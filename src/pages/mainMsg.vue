
<template>
  <div class="mainmsg">
    <my-header></my-header>
    <div class="main_counten">
      <el-row>
        <el-col :span="4">
          <div class="main_left">
            <div class="tit">我的大麦</div>
            <el-row class="tac">
              <el-col :span="24">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  :default-openeds="openeds"
                >
                  <el-submenu index="1">
                    <template slot="title">
                      <!-- <i class="el-icon-location"></i> -->
                      <span>交易中心</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">订单管理</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="2">
                    <template slot="title">
                      <!-- <i class="el-icon-location"></i> -->
                      <span>账户管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="2-1">个人信息</el-menu-item>
                      <el-menu-item index="2-2">常用购票人</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
            <!-- <div
              class="main_jy"
              v-for="(item, index) in list"
              :key="index"
              :id="item.id"
              @click="xuanzheBtn(item.id)"
            >
              <div>
                {{item.tit}}
                <i :class="item.magShow?'el-icon-arrow-down':'el-icon-arrow-right'"></i>
              </div>
              <div
                v-for="(itemTow, index) in item.cList"
                :key="index"
                :class="itemTow.magShowTow?'main_jy_tow active':'main_jy_tow'"
                v-show="item.magShow"
                :id="itemTow.id"
                @click="changeBtn(item.id)"
              >{{itemTow.tit}}</div>
            </div>-->
            <!-- <div class="main_zh">
              <div>
                账户中心
                <i :class="magShow?'el-icon-arrow-down':'el-icon-arrow-right'"></i>
              </div>
              <div :class="magShowTow?'main_jy_tow active':'main_jy_tow'" v-show="magShow">个人信息</div>
              <div class="main_jy_tow" v-show="magShow">常用购票人</div>
            </div>-->
          </div>
        </el-col>
        <el-col :span="19">
          <div class="main_right">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>我的大麦</el-breadcrumb-item>
              <el-breadcrumb-item>交易中心</el-breadcrumb-item>
              <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            </el-breadcrumb>
            <div>
              <h3>近期订单列表</h3>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
export default {
  data() {
    return {
      openeds: ["1"]
    };
  },
  components: {
    MyHeader,
    MyFooter
  },
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.mainmsg {
  background-color: #f5f5f5;
}
.main_counten {
  width: 1200px;
  margin: 20px auto;
  background-color: #fff;
}
.main_fg {
  width: 100%;
  height: 10px;
  /* height: 500px;

  background-color: black */
}
.main_left {
  width: 100%;
  height: 340px;
  /* background: red; */
  border: 1px solid #ccc;
}
.main_right {
  width: 100%;
  height: 600px;
  background-color: aqua;
}
.el-breadcrumb {
  padding: 14px;
  /* border-radius: 20px; */

  background-color: rgb(162, 228, 240);
}
.tit {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 20px;
  background-color: rgb(206, 44, 44);
  color: #fff;
}
/* .main_left i {
  padding-left: 80px;
} */
.main_jy > div {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 20px;
}
.main_left .main_jy_tow {
  padding-left: 40px;
}
.main_zh > div {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 20px;
}
.main_jy_tow.active {
  color: orangered;
}
</style>
