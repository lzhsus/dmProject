<template>
  <div class="tiyunav">
    <el-row>
      <el-col :span="20">
        <div class="grid-content">
          <ul>
            <li class="active" @click="pageBtn(index)">
              <router-link to="/xiqu">戏剧</router-link>
            </li>
            <li>
              <router-link to="/tiyu">体育</router-link>
            </li>
            <li>
              <router-link to="/qinzi">亲子</router-link>
            </li>
            <li>
              <router-link to="/yaogun">摇滚</router-link>
            </li>
            <li>
              <router-link to="/wudao">舞蹈经典</router-link>
            </li>
          </ul>
        </div>
      </el-col>
      <!-- <el-col class="more" :span="4"><router-link to="">更多精彩</router-link></el-col> -->
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <swiper :swiperImg="swiperImg" :swiperH="350"></swiper>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Swiper from "../swiper";
import Axios from 'axios'

export default {
  components: {
    Swiper
  },
  data() {
    return {
      swiperImg: []
    };
  },
  mounted() {
    Axios.get("http://127.0.0.1:3721/api/mock/indexswiper")
      .then(res => {
        this.swiperImg = res.data.data;
        console.log(this.swiperImg);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods:{
    pageBtn(index){

      // for(var i=0;i<$('li').length;i++){
      //   console.log(index,i)
      // }
    }
  }
};
</script>

<style scoped>
.tiyunav {
  background-color: #fff;
  margin-top: 20px;
}
.ul::after {
  display: block;
  clear: both;
  content: "";
}
li {
  float: left;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
}
li a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 16px;
}
.bg-purple-dark{
  width: 100%;
  height: 350px;
  background-color: red
}
.el-carousel__container {
  width: 100%;
  height: 100%;
}
.img {
  width: 100%;
  height: 350px;
}
.grid-content li.active{
  background-color: rgb(245, 196, 196);
}
</style>
