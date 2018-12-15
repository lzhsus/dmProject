<template>
  <div class="containe">
    <div class="footer">
      <div class="footer-msg">
        <dl>
          <dt>订购方式</dt>
          <dd>在线订购</dd>
          <dd>电话订购</dd>
          <dd>上门订购</dd>
          <dd>大客户团体订购</dd>
          <dd>大麦超级票订购</dd>
        </dl>
        <dl>
          <dt>配送方式</dt>
          <dd>送货上门</dd>
          <dd>电子票</dd>
          <dd>上门自取</dd>
          <dd>大麦自动售票</dd>
        </dl>
        <dl>
          <dt>支付方式</dt>
          <dd>在线支付</dd>
          <dd>柜台付款</dd>
          <dd>货到付款</dd>
        </dl>
        <dl>
          <dt>小麦网微信</dt>
          <dd><img class="wximg" src="../assets/images/erwem.png" alt=""></dd>
        </dl>
        <dl>
          <dt>小麦网触屏版</dt>
          <dd><img class="wximg" src="../assets/images/erwem.png" alt=""></dd>
        </dl>
        <dl>
          <dt>账户管理</dt>
          <dd>找回密码</dd>
          <dd>账户注册</dd>
          <dd>账户绑定</dd>
          <dd>SSL安全证书</dd>
        </dl>
        <dl>
          <dt>退换货管理</dt>
          <dd>退货及缺货说明</dd>
          <dd>发票帮助</dd>
          <dd>订票服务条款</dd>
        </dl>
        <dl>
          <dt>特色服务</dt>
          <dd>演出订阅</dd>
        </dl>
      </div>
      <div class="line"></div>
      <div class="msg">
        <ul>
          <li>
            <a href="javascript;;">公司简介</a>
          </li>
          <li>
            <a href="javascript;;">|</a>
          </li>
          <li>
            <a href="javascript;;">品牌识别</a>
          </li>
          <li>
            <a href="javascript;;">|</a>
          </li>
          <li>
            <a href="javascript;;">企业荣誉</a>
          </li>
          <li>
            <a href="javascript;;">|</a>
          </li>
          <li>
            <a href="javascript;;">隐私声明</a>
          </li>
          <li>
            <a href="javascript;;">|</a>
          </li>
          <li>
            <a href="javascript;;">联系及合作</a>
          </li>
          <li>
            <a href="javascript;;">|</a>
          </li>
          <li>
            <a href="javascript;;">招聘信息</a>
          </li>
          <li>
            <a href="javascript;;">|</a>
          </li>
          <li>
            <a href="javascript;;">网站地图</a>
          </li>
          <li>
            <a href="javascript;;">|</a>
          </li>
          <li>
            <a href="javascript;;">友情链接</a>
          </li>
          <li>
            <a href="javascript;;">|</a>
          </li>
          <li>
            <a href="javascript;;">公司大事情</a>
          </li>
        </ul>
        <ul>
          <li>
            <img class="img" src="../assets/images/logoAD1.png" alt srcset>
          </li>
          <li>
            <img class="img" src="../assets/images/logoAD2.png" alt srcset>
          </li>
          <li>
            <img class="img" src="../assets/images/logoAD3.png" alt srcset>
          </li>
          <li>
            <img class="img" src="../assets/images/logoAD4.png" alt srcset>
          </li>
          <li>
            <img class="img" src="../assets/images/logoAD5.png" alt srcset>
          </li>
          <li>
            <img class="img" src="../assets/images/logoAD6.png" alt srcset>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.containe {
  background-color: #fff;
  padding: 30px 0;
}
.footer {
  width: 1200px;
  margin: auto;
}
.line {
  padding: 1px;
  width: 100%;
  background-color: red;
  margin: 10px 0;
}
.footer-msg {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}
.footer-msg dl {
  width: 13%;
}
dt{
  font-size: 16px;
  color: #000;
}
dd{
  font-size: 14px;
  color: #999;
  margin: 4px 0;
}
.msg {
  width: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 90px;
}
.wximg{
  width: 90px;
  height: 90px;
}
ul:nth-of-type(1) {
  position: absolute;
  top: 10px;
  left: 30%;
  transform: translateX(-20%);
}
ul:nth-of-type(2) {
  position: absolute;
  top: 40px;
  left: 30%;
  transform: translateX(-20%);
}
ul::after {
  display: block;
  content: "";
  clear: both;
}
li {
  float: left;
  margin: 0 4px;

}
li a {
  font-size: 14px;
  color: #000;
  text-decoration: none;
}
.img {
  width: 100px;
  height: 40px;
}
</style>

