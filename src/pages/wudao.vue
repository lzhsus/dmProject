<template>
  <div class="wudao">
      <my-header></my-header>
     <div class="main">
       <tiyu-nav :swiperImg="swiperImg" page="wd"></tiyu-nav>
     </div>
  </div>
</template>
<script>
import MyHeader from '../components/MyHeader'
import TiyuNav from '../components/tiyu/tiyuNav'
import Axios from 'axios'
export default {
  components:{
    MyHeader,
    TiyuNav
  }, data() {
    return {
      swiperImg: []
    };
  },
  mounted() {
    Axios.get("http://127.0.0.1:3721/api/mock/swiper/wd")
      .then(res => {
        this.swiperImg = res.data.data;

      })
      .catch(err => {
        console.log(err);
      });
  }
}
</script>
<style scoped>
.main{
  width: 1200px;
  margin: auto;
}
.el-input__inner {
  border-radius: 20px;
}
</style>
