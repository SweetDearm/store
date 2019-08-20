<template>
  <div>
   <div>
     <headers></headers>
   </div>
   <div class="ringn">
    <span class="el-icon-s-promotion"></span>
    <router-link  to="/">首页</router-link>
    <i class="el-icon-d-arrow-right"></i>
    <router-link  to="/ring">戒指</router-link>
    <div class="ringnav">
      <div class="ringclass"></div>
      <div class="ringclass">
        <div class="title-">戒指：</div>
        <ul>
          <li><a href="javascript:;">全部</a></li>
          <li><a href="javascript:;">精品戒指</a></li>
          <li><a href="javascript:;">对戒</a></li>
        </ul>
      </div>
      <div class="ringclass">
        <div class="title-">规格：</div>
         <ul>
          <li><a href="javascript:;">全部</a></li>
          <li><a href="javascript:;">国际7号</a></li>
          <li><a href="javascript:;">国际8号</a></li>
          <li><a href="javascript:;">国际9号</a></li>
          <li><a href="javascript:;">银色</a></li>
          <li><a href="javascript:;">玫瑰金</a></li>
         </ul>
       </div>
       <div class="rings">
         <ul class="sort">
          <li><a href="javascript:;">默认排序</a></li>
          <li><a href="javascript:;">按时间排序</a></li>
          <li><a href="javascript:;">按价格</a></li>
         </ul>
         <div>共有 个商品</div>
       </div>
     </div>
   </div>
   
     <div class="product-ring">
      <div class="pr" v-for="(item,i) of resout" :key=i>
       <div class="img">
         <img :src="url+item.PlaceImgUrl" alt="图片加载中..."></div>
         <span class="s1">{{item.Price}}元</span>
         <span class="s2">{{item.title}}</span>
         <div class="s3">
         <span style="font-size:12px;">已有<em>0</em>人评价</span>
         <span style="font-size:12px;">累计销量<em>0</em></span>
         </div>
       </div>
    </div>
   
   <div>
    <footers></footers>
  </div>
  </div>
</template>
<script>
import Headers from './Headers';
import Footers from './Footers';
export default {
  
  data(){
    return {
      resout:[]
  
    }
  },
   watch:{
   
     },
    components:{
    "headers":Headers,
    "footers":Footers,
  },
  created() {
  
  },
  
    methods:{
     
     
      },
     
    }

</script>
<style>

</style>