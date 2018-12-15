<template>
  <el-carousel trigger="click">
    <el-carousel-item v-for="(item, index) in swiperImg" :key="index" id="item.id">
      <img class="img" :src="item.imgUrl" alt srcset>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: "swiper",
  data() {
    return {};
  },
  props: ["swiperImg", "swiperH"]
};
</script>
<style>
.block,
.el-carousel,
.el-carousel-item,
.el-carousel__container {
  width: 100%;
  height: 350px;
}
.img {
  width: 100%;
  height: 350px;
}
</style>


