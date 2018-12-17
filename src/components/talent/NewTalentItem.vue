<template>
  <div class="talentitem">
    <div class="img">
      <img :src="imgUrl" alt srcset>
    </div>
    <div class="talent_msg">
      <div class="tit">{{tit}}</div>
      <div class="address">
        <span>{{address}}</span>
      </div>
      <div class="time">
        <span>{{time}}</span>
      </div>
      <div class="price">
        票价：
        <span>{{price}}</span>起
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "newtalentitem",
  data() {
    return {};
  },
  props: ["imgUrl", "tit", "address", "time", "price"],
  methods: {}
};
</script>
<style scoped>
.talentitem {
  width: 390px;
  display: flex;
  justify-content: space-around;
  /* background-color: rgb(121, 73, 73); */
  height: 100px;
  box-sizing: border-box;
}
.img {
  width: 540px;
  height: 100%;
  background-color: red;
}
.img img {
  width: 100%;
  height: 100%;
}

.talent_msg .tit {
  font-size: 14px;
  color: #000;
  width: 160px;
  margin: 0 10px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  /* margin-bottom: 40px; */
}
.address,
.time,
.price {
  width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 2px 10px;
  color: #999;
  font-size: 12px;
}
.price span{
  color: orangered;
}
</style>

