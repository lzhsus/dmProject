<template>
  <div class="qinzi">
      <my-header></my-header>
     <div class="main">
       <tiyu-nav></tiyu-nav>
     </div>
  </div>
</template>
<script>
import MyHeader from '../components/MyHeader'
import TiyuNav from '../components/tiyu/tiyuNav'
export default {
  components:{
    MyHeader,
    TiyuNav
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
