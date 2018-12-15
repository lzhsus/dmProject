<template>
  <div class="talentbigitem">
    <slot name="img"></slot>
    <div v-if="isShow">
      <slot name="tit"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "talentbigitem",
  data() {
    return {
      isShow:true
    };
  },
  methods: {}
};
</script>
<style>
.talentbigitem {
  width: 214px;
  height: 340px;
  /* background: #000; */
  position:relative;
  z-index: 0;
}
.talentbigitem img{
  width: 100%;
  height: 100%;
}
.talentbigitem>div{
  width: 100%;
  height: 100px;
  background-color: rgb(49, 45, 45);
  opacity: 0.5;
  color: #fff;
  padding-top: 20px;
  padding-left: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.talentbigitem>div span{
  font-size: 16px;
  text-align: left;
}
</style>


