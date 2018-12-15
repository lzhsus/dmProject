<template>
  <div class="cls">
    <div class="cls_left">
      <div class="cls_left_tit">全部商品分类</div>
      <div class="cls_left_sp">
        <ul>
          <li class="active">
            <img src="../assets/logo.png" alt srcset>
            <span>演唱会</span>
          </li>
          <li>
            <img src="../assets/logo.png" alt srcset>
            <span>音乐会</span>
          </li>
          <li>
            <img src="../assets/logo.png" alt srcset>
            <span>曲苑杂坛</span>
          </li>
          <li>
            <img src="../assets/logo.png" alt srcset>
            <span>话剧歌剧</span>
          </li>
          <li>
            <img src="../assets/logo.png" alt srcset>
            <span>体育比赛</span>
          </li>
          <li>
            <img src="../assets/logo.png" alt srcset>
            <span>芭蕾舞蹈</span>
          </li>
          <li>
            <img src="../assets/logo.png" alt srcset>
            <span>儿童亲子</span>
          </li>
           <li>
            <img src="../assets/logo.png" alt srcset>
            <span>动漫</span>
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
import Swiper from './swiper'
import Axios from 'axios'
export default {
  components:{
    Swiper
  },
  data(){
    return{
swiperImg:[]
    }
  },
  mounted(){
   Axios.get("http://127.0.0.1:3721/api/mock/indexswiper")
      .then(res => {
        this.swiperImg=res.data.data
        console.log(this.swiperImg)
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
  padding-left: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.cls_left_sp li::after {
  display: block;
  clear: both;
  content: "";
}
.cls_left_sp li.active {
  background-color: #868683;
  opacity: 0.5;
}
.cls_left_sp li img {
  width: 26px;
  height: 26px;
  float: left;
}
.cls_left_sp li span {
  width: 100%;
  text-align: left;
  margin-left: 10px;
}
.cls_right_swiper{
  background-color: red;
  width: 100%;
  height: 350px;
}

</style>
