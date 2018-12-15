<template>
  <div class="talentmodel">
    <talent-item
      v-for="(item, index) in talentItems"
      :key="index"
      :imgUrl="item.imgUrl"
      :tit="item.tit"
      :price="item.price"
      :address="item.address"
      :time="item.time"
    ></talent-item>
  </div>
</template>
<script>
import TalentItem from "./talent/TalenItem";
export default {
  name: "TalentModel",
  components: {
    TalentItem
  },
  data() {
    return {

    };
  },
  props:["talentItems"],
  methods: {}
};
</script>
<style>
.talentmodel div {
  float: left;
}
.talentmodel > div:nth-of-type(1) {
  margin: 0 20px 20px 0;
}
.talentmodel > div:nth-of-type(2) {
  margin: 0 0px 20px 0;
}
.talentmodel > div:nth-of-type(3) {
  margin: 0px 20px 0px 0;
}
.talentmodel > div:nth-of-type(4) {
  margin: 0;
}
.talentmodel::after {
  content: "";
  display: block;
  clear: both;
  overflow: hidden;
}
.talentmodel {
  padding: 0 20px;
}
</style>

