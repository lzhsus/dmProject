<template>
  <div ref class="hotitem" :id="id">
    <div class="img">
      <img :src="imgUrl" alt srcset>
    </div>
    <div class="img-hover" v-if="hotShow">
      <div>
        <i class="el-icon-location-outline"></i>
        {{address}}
      </div>
      <div>
        <i class="el-icon-time"></i>
        {{dataDay}} {{dataTime}}
      </div>
    </div>
    <div v-if="priceShow">
       <p class="tit">{{titName}}</p>
    <div class="price">
      票价:
      <span>{{price}}</span>起
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HotItem",
  data() {
    return {};
  },
  props: [
    "imgUrl",
    "titName",
    "price",
    "address",
    "dataDay",
    "dataTime",
    "id",
    "hotShow",
    "priceShow"
  ],
  mounted() {
    console.log();
  }
};
</script>
<style scoped>
.hotitem {
  width: 152px;
  /* height: 240px; */
  /* border: 1px solid gold; */
  /* background-color: rgb(95, 84, 84); */
  position: relative;
}
.img-hover {
  width: 100%;
  height: 60px;
  background-color: red;
  opacity: 0.8;
  position: absolute;
  bottom: 60px;
  left: 0;
  color: #fff;
}
.img-hover div {
  margin: 5px;
  font-size: 14px;
}
.img {
  width: 100%;
  height: 180px;
  /* border: 1px solid red; */
}
.img img {
  width: 100%;
  height: 100%;
}
.tit {
  width: 100%;
  font-size: 16px;
  color: #000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px;
}
.price {
  width: 100%;
  padding: 4px;
  font-size: 16px;
  color: #909399;
}
.price span {
  color: #f56c6c;
}
.el-icon-location-outline,
.el-icon-time {
  color: #fff;
  margin: 0 4px;
}
</style>

