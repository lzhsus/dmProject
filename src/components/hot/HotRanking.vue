<template>
  <div class="hotranking">
    <div class="tit">热门排名</div>
    <div class="ranking">
      <ul>
        <li v-for="(item, index) in rankings" :key="index" id="item.id">
          <span :class="item.isShow=='true'?'atrive':''">{{index+1}}</span>《{{item.name}}》
        </li>
      </ul>
    </div>
    <div class="img">
      <slot name="rankingImg"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'HotRanking',
  data() {
    return {

    };
  },
  props:['rankings',"rankingImg"]
};
</script>
<style lang="postcss" scoped>
.hotranking {
  width: 100%;
}
.tit {
  font-size: 26px;
  height: 40px;
}
.ranking {
  height: 254px;
}
.ranking li {
  width: 100%;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  height: 26px;
  line-height: 26px;
}
.ranking span {
  display: inline-block;
  width: 20px;
  line-height: 14px;
  text-align: center;
  height: 14px;
  font-size: 10px;
  color: #fff;
  background-color: #ccc;
  margin-right: 14px;
}
.ranking span.atrive {
  background-color: red;
}
.img {
  width: 100%;
  box-sizing: border-box;
  height: 80px;
  margin-top: 20px;
}
.img img {
  width: 100%;
  height: 100%;
}
</style>
