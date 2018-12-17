<template>
  <div class="xiqu">
    <my-header></my-header>
    <div class="main">
      <tiyu-nav :swiperImg="swiperImg" page="xq"></tiyu-nav>
      <!-- 猜你喜欢 -->
      <div class="hot">
        <h2>猜你喜欢</h2>
        <hot-item
          v-for="(item, index) in likes"
          :key="index"
          :hotShow="false"
          :priceShow="true"
          :id="item.id"
          :imgUrl="item.imgUrl"
          :titName="item.areaName"
          :address="item.address"
          :dataDay="item.endDate"
          :price="item.minPrice"
        ></hot-item>
      </div>
      <!-- 精彩剧集 -->
      <div class="jingcai">
        <h2>精彩聚焦</h2>
        <el-row>
          <el-col :span="6">
            <div class="jingcai_juji">
              <img
                src="https://pimg.dmcdn.cn/perform/project/1710/171008_n.jpg?_t=1544434767426"
                alt
                srcset
              >
            </div>
          </el-col>
          <el-col :span="12">
            <div class="jingcai_juji">
              <ul>
                <li>
                  <img
                    src="https://pimg.dmcdn.cn/perform/project/1712/171216_n.jpg?_t=1544672998721"
                    alt
                    srcset
                  >
                </li>
                <li>
                  <img
                    src="https://pimg.dmcdn.cn/perform/project/1711/171104_n.jpg?_t=1544583468944"
                    alt
                    srcset
                  >
                </li>
                <li>
                  <img
                    src="https://pimg.dmcdn.cn/perform/project/1711/171170_n.jpg?_t=1544579310937"
                    alt
                    srcset
                  >
                </li>
                <li>
                  <img
                    src="https://pimg.dmcdn.cn/perform/project/1712/171218_n.jpg?_t=1544674394761"
                    alt
                    srcset
                  >
                </li>
                <li>
                  <img
                    src="https://pimg.dmcdn.cn/perform/project/1712/171237_n.jpg?_t=1544601460689"
                    alt
                    srcset
                  >
                </li>
                <li>
                  <img
                    src="https://pimg.dmcdn.cn/perform/project/1712/171287_n.jpg?_t=1544672392062"
                    alt
                    srcset
                  >
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="jingcai_juji">
              <img
                src="https://pimg.dmcdn.cn/perform/project/1710/171001_n.jpg?_t=1544585928011"
                alt
                srcset
              >
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 专场 -->
      <div class="zhuancang">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="音乐会专场" name="first">
            <ul>
              <li v-for="(item, index) in yinyhs" :key="index">
                <new-talent-item
                  :imgUrl="item.imgUrl"
                  :tit="item.areaName"
                  :address="item.address"
                  :time="item.endDate"
                  :price="item.minPrice"
                ></new-talent-item>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="舞蹈专场" name="second">
            <ul>
              <li v-for="(item, index) in wudaos" :key="index">
                <new-talent-item
                  :imgUrl="item.imgUrl"
                  :tit="item.areaName"
                  :address="item.address"
                  :time="item.endDate"
                  :price="item.minPrice"
                ></new-talent-item>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 热门排行榜 -->
      <div class="hot_ph">
        <h2>热门排行榜</h2>
        <el-row>
          <el-col :span="5">
            <talent-big-item>
              <img
                slot="img"
                src="https://pimg.dmcdn.cn/perform/project/1708/170872_n.jpg?_t=1544411536554"
                alt
                srcset
              >
              <span slot="tit">精品儿童剧《海的女儿•黎明钟声》</span>
            </talent-big-item>
          </el-col>
          <el-col :span="19">
            <talen-item
              v-for="(item, index) in wudaos"
              :key="index"
              :imgUrl="item.imgUrl"
              :tit="item.areaName"
              :address="item.address"
              :time="item.endDate"
              :price="item.minPrice"
            ></talen-item>
          </el-col>
        </el-row>
      </div>
      <!-- 日历事件 -->
      <div class="dataFn">
<index></index>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import TiyuNav from "../components/tiyu/tiyuNav";
import HotItem from "../components/hot/HotItem";
import NewTalentItem from "../components/talent/NewTalentItem";
import TalentBigItem from "../components/talent/TalentBigItem";
import TalenItem from "../components/talent/TalenItem";
import Index from '../components/dmCalendar/index'

import Axios from "axios";
export default {
  components: {
    MyHeader,
    MyFooter,
    TiyuNav,
    HotItem,
    NewTalentItem,
    TalentBigItem,
    TalenItem,Index
  },
  data() {
    return {
      swiperImg: [],
      likes: [],
      yinyhs: [],
      wudaos: [],
      activeName: "first"
    };
  },
  mounted() {
    Axios.get("http://127.0.0.1:3721/api/mock/swiper/xq")
      .then(res => {
        this.swiperImg = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
    Axios.get("http://127.0.0.1:3721/api/mock/text")
      .then(res => {
        this.likes = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
    Axios.get("http://127.0.0.1:3721/api/mock/text")
      .then(res => {
        this.yinyhs = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
    Axios.get("http://127.0.0.1:3721/api/mock/text")
      .then(res => {
        this.wudaos = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    handleClick() {}
  }
};
</script>
<style scoped>
.main {
  width: 1200px;
  margin: auto;
}
.el-input__inner {
  border-radius: 20px;
}
.hot,
.jingcai {
  padding: 10px 20px;
  overflow: hidden;
  background-color: #fff;
  margin: 20px 0;
}
.hot > div {
  float: left;
  margin: 0 20px;
}
.hot > h2,
.hot_ph > h2,
.jingcai > h2 {
  width: 140px;
  margin: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  text-align: center;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 2px #ccc, -2px 2px 2px #ccc;
}
.jingcai_juji {
  width: 100%;
  padding: 0 10px;
  /* background-color: red; */
  height: 400px;
}
.jingcai_juji img {
  width: 100%;
  height: 100%;
}
.jingcai_juji ul {
  width: 100%;
  height: 100%;
}
.jingcai_juji ul > li {
  float: left;
  width: 33%;
  height: 50%;
  padding: 1%;
}
.zhuancang,
.hot_ph {
  padding: 10px 20px;
  background-color: #fff;
  margin-bottom: 20px;
}
.zhuancang ul li {
  overflow: hidden;
  float: left;
  width: 33%;
  height: 100px;
  padding: 1%;
}
.talentitem {
  float: left;
}
.talentitem:nth-of-type(1),
.talentitem:nth-of-type(2),
.talentitem:nth-of-type(3) {
  margin-bottom: 20px;
}
</style>
