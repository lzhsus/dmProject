<template>
  <el-container class="hotreom">
    <el-main>
      <el-row>
        <el-col :span="24" class="hotTit">{{hotTit}}</el-col>
        <hot-item
          v-for="(item, index) in hotArr"
          :key="index"
          :imgUrl="item.imgUrl"
          :titName="item.titName"
          :price="item.price"
          :id="item.id"
          :address="item.address"
          :dataDay="item.dataDay"
          :dataTime="item.dataTime"
          :hotShow="item.hotShow"
          :priceShow="true"
        ></hot-item>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import HotItem from "./hot/HotItem";
export default {
  name: "HotRecomment",
  components: {
    HotItem
  },
  data() {
    return {
      hotTit: "热门推荐",
      hotArr: [
        {
          titName: "开心麻花爆笑舞台剧《乌龙山伯爵》",
          price: "￥709.5",
          imgUrl:
            "https://pimg.dmcdn.cn/perform/project/1685/168537_n.jpg?_t=1542262666324",
          id: "hot1",
          address: "虹桥艺术中心",
          dataDay: "2018.12.11",
          dataTime: "17:20",
          hotShow: false
        },
        {
          titName: "中国国家话剧院演出 话剧《哥本哈根》",
          price: "￥101.6",
          imgUrl:
            "https://pimg.dmcdn.cn/perform/project/1694/169440_n.jpg?_t=1542955497970",
          id: "hot1",
          address: "虹桥艺术中心",
          dataDay: "2018.12.11",
          dataTime: "17:20",
          hotShow: false
        },
        {
          titName: "开心麻花2019爆笑贺岁舞台剧《窗前不止明月光》",
          price: "￥59.9",
          imgUrl:
            "https://pimg.dmcdn.cn/perform/project/1653/165381_n.jpg?_t=1543231895827",
          id: "hot1",
          address: "虹桥艺术中心",
          dataDay: "2018.12.11",
          dataTime: "17:20",
          hotShow: false
        },
        {
          titName: "开心麻花2019爆笑贺岁舞台剧《谈判专家》",
          price: "￥995.2",
          imgUrl:
            "https://pimg.dmcdn.cn/perform/project/1658/165847_n.jpg?_t=1541038564406",
          id: "hot1",
          address: "虹桥艺术中心",
          dataDay: "2018.12.11",
          dataTime: "17:20",
          hotShow: false
        },
        {
          titName: "开心麻花2019爆笑贺岁舞台剧 《窗前不止明月光》",
          price: "￥482.5",
          imgUrl:
            "https://pimg.dmcdn.cn/perform/project/1702/170262_n.jpg?_t=1543890989341",
          id: "hot1",
          address: "虹桥艺术中心",
          dataDay: "2018.12.11",
          dataTime: "17:20",
          hotShow: false
        },
        {
          titName: "2018年北京喜剧艺术节：汉诺赫·列文经典喜剧《冬季的葬礼》",
          price: "￥369.9",
          imgUrl:
            "https://pimg.dmcdn.cn/perform/project/1703/170333_n.jpg?_t=1543904825560",
          id: "hot1",
          address: "虹桥艺术中心",
          dataDay: "2018.12.11",
          dataTime: "17:20",
          hotShow: false
        }
      ]
    };
  },
  methods:{

  }
};
</script>
<style scoped>
.hotreom {
  padding-bottom: 40px;
  background-color: #fff;
}
.hotitem {
  margin: 0 20px;
  float: left;
}
.el-main{
  padding: 0 20px;
}
.el-row::after {
  display: block;
  clear: both;
  content: "";
}
.hotTit {
  padding: 20px;
  font-weight: bold;
  font-size: 26px;
}
.el-main {
  width: 1200px;
}
</style>

