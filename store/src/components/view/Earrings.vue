<template>
 <div class="ring">
   <div>
     <headers></headers>
   </div>
  <div class="ringn">
    <span class="el-icon-s-promotion"></span>
    <router-link  to="/" >首页</router-link>
    <i class="el-icon-d-arrow-right"></i>
    <router-link  to="/ring">耳环</router-link>
    <div class="ringnav">
      <div class="ringclass"></div>
      <div class="ringclass">
        <div class="title-">耳环：</div>
        <ul>
          <li><a href="javascript:;">全部</a></li>
          <li><a href="javascript:;">耳钉</a></li>
          <li><a href="javascript:;">耳坠</a></li>
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
      <div class="pr" v-for="(item,i) of list2" :key=i>
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
    <div class="page"><el-pagination
        layout="prev, pager, next"
        :total=pagenumbe
        :page-size=ringitemnum
        :pager-count="5"
        background
        @next-click="pagenext"
        @prev-click="pageprev"
        @current-change="pagechange"
        :current-page.sync="currentPage"
        >
      </el-pagination></div>
      <div>
        <footers></footers>
      </div>
  </div>
</template>
<script>
import Headers from './Headers';
import Footers from './Footers';
export default {
  data (){
    return {
      list2:[],
      url:"http://127.0.0.1:3000/",
      pagenumbe:1000,//总数据数
      ringitemnum:15,//页大小一页几个
      pno:0,//页码
      currentPage:0//点的第几页
    }
  },
   components:{
    "headers":Headers,
    "footers":Footers,
  },
  created() {
    this.pagenext()
  },
  methods: {
    pagenext(){//下一页
      var url="ring";
      this.pno++;
      var obj={pno:this.pno,pageSize:this.ringitemnum}
      this.axios.get(url,{params:obj}).then(result=>{
        this.list2=[];
        for (const item of result.data.list2) {
          this.list2.push(item)
        }
        this.pagenumbe=result.data.pagenumbe;
        
      })
    },
    pageprev(){
      this.pno=this.pno-2;
      this.pagenext()
    },
    pagechange(){
      this.pno=this.currentPage-1;
      this.pagenext()
    }
  },
}
</script>
<style>

.ringn{
  width: 1200px;
  margin:auto;/*整体居中*/
  height:278px;
  margin-top:15px;
}
.el-icon-s-promotion{
  color:#ff6453;
  font-size:20px;
  margin-right:15px;
}
.ringn a,.ringn i{
  font-size:12px;
  margin-right:5px;
}
.ringn .ringnav{
  width: 1200px;
  height: 138px;
  background:#FAFAFA;
  border-radius: 5px;
  margin-top:15px;
}
.ringn .title-{
  width: 80px;
  height: 32px;
  margin-left:15px;
  border-bottom:1px dotted #ddd;/*设置边框*/
  font-size:12px;/*字体大小*/
}
.ringclass{
  width: 1200px;
  height: 32px;
  display: flex;/*弹性布局*/
  justify-content: space-between;/*两端水平方式对齐*/
  margin-bottom:10px;
}
.ringclass ul{
  width: 1120px;
  height: 32px;
  border-bottom:1px dotted #ddd;
}
.ringclass ul li{
  width: 69px;
  height: 32px;
  display: inline-block;/*在同一行显示*/
}
.rings .sort{
  margin-top:50px;
  width:1200px;
  height:48px;
  background:#FAFAFA;/*背景颜色*/
}
/*排序分类*/
.rings .sort li{
  display:inline-block;/*让li在同一行显示*/
  width:80px;
  height:40px;
  line-height: 40px;/*定义行高，居中*/
  text-align:center;/*文本居中*/
}
/*定义本页所有商品部分整体宽高*/
.product-ring{
  width: 1200px;
  margin-top:52px;/*整体*/
  display: flex;/*设置父元素为弹性布局*/
  text-align: center;/*文本居中*/
  flex-wrap:wrap; /*自动换行*/
  margin:auto;/*整体居中*/
}
/*单个商品宽高*/
.product-ring .pr{
  width: 230px;
  height: 350px;
  cursor: default;/*鼠标样式*/
  display: flex;/*弹性布局*/
  justify-content: space-between;/*两端水平方向对齐*/
  position: relative;/*相对定位*/
  background:#FAFAFA;/*背景颜色*/
  margin-bottom: 35px;/*距离下边距离*/
  margin-right:10px;/*距离右边距离*/
}
.img img:hover{
  transform:scale(1.2);/*鼠标移入放大效果*/
  transition:1s;/*动画时间*/
}
.img img{
  width: 200px;
  height: 200px;
}
.img{
  width: 200px;
  height: 200px;
  position: absolute;/*相对于父元素定位*/
  left:15px;
  top:25px;
  overflow: hidden;/*溢出隐藏*/
}
.product-ring .s1{
  font-size:20px;
  color:#ff2020;
  width: 218px;
  position: absolute;/*相对定位*/
  top:230px;
  left:0px;
  text-align: center;/*文本居中*/
}
.product-ring .s2{
  position: absolute;/*相对定位*/
  top:258px;
  left:10px;
}
.product-ring .s3{
  width: 218px;
  height: 25px;
  position: absolute;/*相对定位*/
  top:295px;
  left:8px;
  display: flex;/*弹性布局*/
  justify-content: space-between;/*两端水平方式对齐*/
}

/*数字样式*/
.product-ring .s3 em{
  font-size:20px;
  color:#ff6453;
}
/*设置分页条居中*/
.page .el-pagination{
  width: 435px;
  height: 35px;
  margin:auto;
  margin-top:15px;
  margin-bottom: 35px;
}
.page .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff6700;
    color: #FFF;
}
</style>