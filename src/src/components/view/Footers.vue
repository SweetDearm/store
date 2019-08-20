<template>
  <div class="footers">
   <div class="base">
    <ul class="left1">
      <li>产品类型</li>
      <li><a href="">戒指</a></li>
      <li><a href="">耳环</a></li>
      <li><a href="">手链</a></li>
      <li><a href="">项链</a></li>
    </ul>
    <ul class="left2">
      <li>联系我们</li>
      <li><a href="">服务邮箱：xxxxxxxxxx@qq.com</a></li>
      <li><a href="">网站地址：www.shipinshangcheng.com</a></li>
    </ul>
    <img class="img1" src="https://aimg8.dlssyht.cn/module/simplepicbackground/1872058/6407/12812219_1557890603.png" alt="">
    <div><img class="img2" src="https://aimg8.dlssyht.cn/module/simplepicbackground/1872058/6257/12512581_1556611063.png" alt="">
    <span>手机站~</span>
    </div>
    <div>
    <img class="img2" src="https://aimg8.dlssyht.cn/module/simplepicbackground/1872058/6257/12512593_1556611074.png" alt="">
    <span>微海报~</span>
    </div>
    </div>
    <div class="basenav">
      <a href="">会员登录页</a>
      <a href="">戒指</a>
      <a href="">耳环</a>
      <a href="">手链</a>
      <a href="">项链</a>
      <a href="">在线留言</a>
    </div>
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>
<style scoped>
  .footers{
    height: 310px;
    background:#555;
  }
  .footers .base{
    width: 1200px;
    height: 230px;
    margin:auto;
    padding-top:25px;
    display: flex;
  }
  .footers .left1{
    width: 89px;
    height: 160px;
    font-size:18px;
    font-weight: bold;
  }
  .footers .left1 li{
    width: 89px;
    height: 32px;
    text-align: center;
    display: block;
  }
  .footers .left1 li,.footers .left2 li,.footers .left1 li a,.footers .left2 li a{
    color:#ccc;
  }
  .footers .left1 li a:hover,.footers .left2 li a:hover{
    color:#ff6363;
    text-decoration: underline; 
  }
   .footers .left2{
    width: 428px;
    height: 120px;
  }
  .footers .left2 li{
    color:#ccc;/*字体颜色*/
    width: 428px;
    height: 40px;
    font-size:18px;/*字体大小*/
    font-weight: bold;/*字体加粗*/
  }
  /*广告图片大小*/
  .footers .base .img1{
    width: 286px;
    height:241px;
    margin-right:50px;
  }
  /*二维码图片大小*/
  .footers .base .img2{
    width: 130px;
    height:130px;
    margin-top:50px;
    margin-right:50px;
  }
  .footers .base div span{
    color:#ccc;
    margin-left: 35px;
    line-height: 35px;
  }
  .footers .basenav{
    width:100%;
    height: 55px;
    background:#282828;
    margin:auto;/*整体居中*/
    text-align: center;/*文本居中*/
  }
  .footers .basenav a{
    color:#f3f3f3;
    line-height: 50px;
    font-size:12px;
    padding:0px 12px;
    border-right:1px solid #f3f3f3;
  }
</style>