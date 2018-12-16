<template>
  <div class="cls">
    <div class="cls_left">
      <div class="cls_left_tit">全部商品分类</div>
      <div class="cls_left_sp">
        <ul>
          <li class="active">
            <router-link to=""><img src="../assets/logo.png" alt srcset>
            <span>演唱会</span></router-link>
          </li>
          <li>
           <router-link to=""> <img src="../assets/logo.png" alt srcset>
            <span>音乐会</span></router-link>
          </li>
          <li>
             <router-link to=""><img src="../assets/logo.png" alt srcset>
            <span>曲苑杂坛</span></router-link>
          </li>
          <li>
             <router-link to=""><img src="../assets/logo.png" alt srcset>
            <span>话剧歌剧</span></router-link>
          </li>
          <li>
             <router-link to=""><img src="../assets/logo.png" alt srcset>
            <span>体育比赛</span></router-link>
          </li>
          <li>
             <router-link to=""><img src="../assets/logo.png" alt srcset>
            <span>芭蕾舞蹈</span></router-link>
          </li>
          <li>
            <router-link to=""> <img src="../assets/logo.png" alt srcset>
            <span>儿童亲子</span></router-link>
          </li>
          <li>
             <router-link to=""><img src="../assets/logo.png" alt srcset>
            <span>动漫</span></router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="cls_right">
      <div class="cls_right_nav">
        <ul>
          <li>
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
      <div class="cls_right_swiper">
        <swiper :swiperImg="swiperImg" :swiperH="350"></swiper>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "./swiper";
import Axios from "axios";
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
    Axios.get("http://127.0.0.1:3721/api/mock/swiper/ty")
      .then(res => {
        this.swiperImg = res.data.data;

        console.log(this.swiperImg);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
.cls {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 20px;
  color: #fff;
  font-size: 18px;
}
.cls_left {
  width: 200px;
  background-color: rgb(236, 120, 25);
}
.cls_left_tit {
  width: 100%;
  height: 50px;
  background-color: rgb(12, 12, 12);
  text-align: center;
  line-height: 50px;
}
.cls_right {
  width: 100%;
}
.cls_right_nav {
  width: 100%;
  height: 50px;
  background-color: #5a5b5c;
}
ul::after {
  display: block;
  clear: both;
  content: "";
}
.cls_right li {
  float: left;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
}
.cls_right li a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}
.cls_left li {
  width: 100%;
  height: 44px;
  line-height: 44px;
  /* padding-left: 30px; */
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  position: relative;
}
.cls_left_sp li::after {
  display: block;
  clear: both;
  content: "";
}
.cls_left_sp li.active {
  background-color: #868683;

}
.cls_left_sp li img {
  width: 26px;
  height: 26px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%)
}
.cls_left_sp li span {
  width: 100%;
  text-align: left;
  margin-left: 30px;
}
.cls_right_swiper {
  background-color: red;
  width: 100%;
  height: 350px;
}
.cls_right_nav li{
  padding: 0;
}
.cls_right_nav a{
  display: inline-block;
  width: 100%;
  height: 100%;
   padding: 0 20px;
}
.cls_right_nav a:hover{
  background-color:rgb(245, 196, 196);
}
.cls_left_sp a{
    display: inline-block;
  width: 100%;
  height: 100%;
  padding-left: 30px;
  text-decoration: none;
  color: #fff;
}
.cls_left_sp a:hover{
  background-color: red;
}
</style>
