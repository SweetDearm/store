<template>
<div class="products">
  <div class="all" v-for="(item,index) in listData" :key="item.id">
  <div class="products_nav">
    <span class="el-icon-s-promotion"></span>
    <router-link  to="/">首页</router-link>
    <i class="el-icon-d-arrow-right"></i>
    <router-link  to="/ring">戒指</router-link>
    <i class="el-icon-d-arrow-right"></i>
    <router-link  to="/ring">对戒</router-link>
    <i class="el-icon-d-arrow-right"></i>
    <b style="color:#ffa500">{{item.title}}</b>
  </div>
  <div class="main" >
  <div id="preview">
      <div class=jqzoom>
          <img id=bigImg :src="url+item.PlaceImgUrl" width=420 height=420 :jqimg="url+item.PlaceImgUrl">
          </div>
         <div id=specRight class="control specRightT"></div>
        </div>
        <div class="pro_right">
          <p>{{item.title}}</p>
          <div class="price_" style="background:#e4e4e4">
          <span class="price_a">价格：</span>
          <span class="price_b">￥{{item.price}}</span>
          </div>
          <div class="price_c">
            <span>累计销量0</span>
            <span>累计评价</span>
          </div>
            <div class="amount_box">
                <span>购买数量：</span>
						<a href="javascript:;" @click="changeQuantity(index,-1)" class="reduce reSty">-</a>
						<input type="text"  v-model="item.quantity" value="item.quantity" class="sum">
						<a href="javascript:;" @click="changeQuantity(index,1)" class="plus">+</a>   
					</div>
          <div class="sum_">
            <span>总计：</span>
            <span class="sum_price">￥{{item.price * item.quantity}}</span>
          </div>
          <div class="my_btn">
            <el-button type="warning">立即购买</el-button>
            <el-button type="danger" @click="addGoods">加入购物车</el-button>
          </div>
        </div>
      </div>
    <div class="des" >
      <p class="des_p">产品说明</p>
      <p style="text-align: center; margin-bottom:20px;" >
      <img :src="url+item.img1">
      <img :src="url+item.img2">
      <img :src="url+item.img3">
      <img :src="url+item.img4">
      <img :src="url+item.img5">
      <img :src="url+item.img6">
      <img :src="url+item.img7">
      <img :src="url+item.img8">
      <img :src="url+item.img9">
      <img :src="url+item.img10"><br></p>
    </div>
    </div>
   </div>
</template>
<script>
export default {
  data(){
    return {
      url:"http://127.0.0.1:3000/",
      listData:[
       
      ]
    
    }
  },
   methods:{
        changeQuantity (index,plus){
        var quantity = this.listData[index].quantity;
        var sum = quantity + plus;
        if(sum <= 1 ){
          sum = 1;
        }
        this.listData[index].quantity = sum;
        this.$set(this.listData,index,this.listData[index])
    },
  addGoods(){
    
  }, 
   add(){
      var url="products";
      this.axios.get(url).then(result=>{
        for (const item of result.data) {
            this.listData.push(item)
        }
      })
   }   
  },  
  created() {
   this.add()
  },
}
</script>
<style>
.products{
  width:1200px;
  margin:auto;
}
/*导航栏*/
.products_nav{
  width: 580px;
  height: 25px;
  display: flex;/*弹性布局*/
  justify-content: space-between;/*两端水平方向对齐*/
  font-size:12px;/*字体大小*/
  color:#666;/*字体颜色*/
  line-height: 25px;/*行高*/
  font-family: "微软雅黑";
}
.el-icon-d-arrow-right{
  line-height: 2 !important;
}
/*主要内容*/
.main{
  width: 1200px;
  height: 420px;
  position: relative;/*定义父元素绝对定位*/
  margin-bottom: 10px;
}
.jqzoom {
    border: #ddd 1px solid;
    width: 420px;
    height: 420px;
    overflow: hidden;
    position: relative;
}
.zoomdiv {
    width: 310px;
    height: 310px;
    z-index: 100;
    border: #e4e4e4 1px solid;
    position: absolute;
    text-align: center;
    display: none;
    background: url(https://aimg8.dlssyht.cn/u/1872058/product/6252/12502743_1556594655.jpg) #fff no-repeat center center;
    overflow: hidden;
    top: 0px !important;
    left: 425px !important;
}
/* 
.specLeftT {
    position: absolute;
    width: 5px;
    background: url(https://aimg8.dlssyht.cn/u/1872058/product/6252/12502743_1556594655.jpg) no-repeat -157px 0px;
    float: left;
    height: 9px;
    top: 17px;
    cursor: pointer;
    left: 0px
}

.specRightT {
    position: absolute;
    width: 5px;
    background: url(https://aimg8.dlssyht.cn/u/1872058/product/6252/12502743_1556594655.jpg) no-repeat -164px 0px;
    float: left;
    height: 9px;
    top: 17px;
    cursor: pointer;
    right: 0px
}

.specLeftF {
    position: absolute;
    width: 5px;
    background: url(https://aimg8.dlssyht.cn/u/1872058/product/6252/12502743_1556594655.jpg) no-repeat -145px 0px;
    float: left;
    height: 9px;
    top: 17px;
    cursor: pointer;
    left: 0px
}

.specRightF {
    position: absolute;
    width: 5px;
    background: url(https://aimg8.dlssyht.cn/u/1872058/product/6252/12502743_1556594655.jpg) no-repeat -151px 0px;
    float: left;
    height: 9px;
    top: 17px;
    cursor: pointer;
    right: 0px
} */

#specList {
    display: inline;
    margin-left: 2px
}

.bigimg {
    WIDTH: 800px;
    HEIGHT: 800px
}
.jqZoomPup {
    z-index: 10;
    border-bottom: #aaa 1px solid;
    position: absolute;
    filter: alpha(opacity=50);
    border-left: #aaa 1px solid;
    width: 50px;
    background: #fede4f no-repeat 50% top;
    height: 50px;
    visibility: hidden;
    border-top: #aaa 1px solid;
    top: 0px;
    cursor: move;
    border-right: #aaa 1px solid;
    left: 0px;
    opacity: 0.5;
    -moz-opacity: 0.5;
    -khtml-opacity: 0.5
}

.pro_right{
  width: 760px;
  position: absolute;/*相对定位*/
  top:0px;
  right:0px;
}
/*商品价格，标题样式*/
.price_,.pro_right p{
  width: 760px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
}
.price_a{
  width: 90px;
  height: 38px;
  line-height: 30px;
}
.price_b{
  width: 670px;
  height: 38px;
  color:#ff6643;
  font-size:24px;
}
/*销量，评价*/
.price_c{
  width: 760px;
  height: 36px;
  display: flex;
  justify-content: space-between;
}
.price_c span{
  width: 380px;
  height: 36px;
  text-align: center;/*文本居中*/
  line-height: 36px;
  color:#999;
  font-size:12px;/*字体大小*/
  /*设置上下边框*/
  border-top:1px dotted #999;
  border-bottom:1px dotted #999;
}
#preview {
    text-align: center;
    width: 420px;
    margin-top:20px; 
}
.amount_box{
    margin-top: 20px;
    width: 250px;
    height: 25px;
    position: relative;
    margin-bottom:20px;
}
/*显示数量框*/
.amount_box input {
    width: 39px;
    height: 15px;
    line-height: 15px;
    border: 1px solid #aaa;
    color: #343434;
    text-align: center;
    padding: 4px 0;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    right:19px;
}
/* + -样式*/
.amount_box a {
    height: 23px;
    width: 18px;
    border: 1px solid #e5e5e5;
    background: #f0f0f0;
    text-align: center;
    line-height: 23px;
    color: #444;
    position: absolute;
    top:0;
    float: left;
}
/*+ -框鼠标悬停样式*/
.amount_box a:hover {
    border-color: #ff873e;
    text-decoration: none;
    color: #ff873e;
    z-index: 3;
}


/*-*/
.amount_box .reduce {
    right: 61px;
}

/*+*/
.plus {
    border-left-color: transparent;
    right: 0;
}
/*总价*/
.sum_price {
    line-height: 18px;
    margin-top: 20px;
    font-family: Verdana, Tahoma, arial;
    color: #ff0000;
    font-weight: bold;
}
.amount_box span,.sum_ span{
  font-size:24px;
  font-weight: bold;
}

.my_btn{
  margin-top:20px;
}



.des{
  margin-top:20px;
}
.des .des_p{
  height: 41px;
  font-size:18px;
  color:#555;
  border-bottom:2px dotted #e4e4e4; 
}


</style>