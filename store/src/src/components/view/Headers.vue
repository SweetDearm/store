<template>
  <div class="headers">
    <div>
      <headerbar></headerbar>
    </div>
    <div class="headerlog">
        <img src="https://aimg8.dlssyht.cn/module/simplepicbackground/1872058/6343/12684857_1557369964.png "  alt="">
        <div class="search-all">
        <form action="">
        <div class="myinput">
        <input  type="text" v-model="nowInput"><el-button type="danger" icon="el-icon-search" >搜索</el-button>
        </div>
        </form>
        <div class="search-box" v-show=" this.nowInput !== ''">
        <ul class="resout">
          <li class="item" 
           v-for="(target, index) in getResoutItem" :key="index">{{ target.title }}</li>
        </ul>
        </div>
        </div>
        <div class="cartlump">
            <i class="el-icon-shopping-cart-full"></i>
           <router-link  to="/cart">我的购物车
             <b class="num">{{$store.getters.getCartCount}}</b>
             件商品</router-link>
           <i class="el-icon-arrow-right"></i>
        </div>
    </div>

   <div class="headernav">
     <div class="sales">
       <div class="sales-left"><router-link style="color:#fff; margin-left:15px;"  to="#">全店商品导购</router-link>
       <i class="el-icon-s-grid"></i>
       </div>
        <div class="sales-ul" >
          <ul>
            <li>
              <div>
              <router-link to="/ring">戒指</router-link></div>
              <router-link  to="#"><span>精品戒指</span></router-link>
             <router-link  to="#"><span>对戒</span></router-link>
              </li>
            <li>
              <div>
              <router-link  to="#">耳环</router-link></div>
              <router-link  to="#"><span>耳钉</span></router-link>
             <router-link  to="#"><span>耳坠</span></router-link>
              </li>
            <li>
              <div>
              <router-link  to="#">手链</router-link></div>
             <router-link  to="#"><span>手串</span></router-link>
             <router-link  to="#"><span>手环</span></router-link>
             <router-link  to="#"><span>手链</span></router-link>
              </li>
            <li>
              <div>
              <router-link  to="#">项链</router-link></div>
              <router-link  to="#"><span>锁骨链</span></router-link>
              <router-link  to="#"><span>配饰项链</span></router-link>
              <router-link  to="#"><span>复古项链</span></router-link>
              </li>
          </ul>
        </div>  
     </div>
    <div class="sales-right">
      <router-link  to="/"><span>首页</span></router-link>
      <router-link  to="/ring"><span>戒指</span></router-link>
      <router-link  to="/earrings"><span>耳环</span></router-link>
      <router-link  to="#"><span>手链</span></router-link>
      <router-link  to="#"><span>项链</span></router-link>
      <router-link  to="#"><span>新闻</span></router-link>
    </div>
   </div>
  <!-- 轮播图开始 -->
  <div>
    <carousel></carousel>
  </div>
  <!-- 轮播图结束 -->
  </div>
</template>
<script>
import Headerbar from './Headerbar';
import carousel from './Carousel';
export default {
  data(){
    return {
      url:"http://127.0.0.1:3000/",
      list:[
        // {img:"https://aimg8.dlssyht.cn/ev_user_module_content_tmp/2019_04_30/tmp1556590864_1872058_s.jpg"},
        // {img:"https://aimg8.dlssyht.cn/ev_user_module_content_tmp/2019_04_30/tmp1556592154_1872058_s.jpg"},
        // {img:"http://file.520qbt.com/Source/image/2018/04/08/025659f7f20d48e9b9b790bc4066fdc2.jpg"},
      ], 
      nowInput: '',
      resout: [],
    }
    
  },
   components:{
    "carousel":carousel,
    "headerbar":Headerbar
  },
    computed: {
      getResoutItem() {
        let callback = []
        if(this.nowInput == ''){
            return callback
        }
        for(var i=0; i<this.resout.length; i++){
          if(this.resout[i].title.toLowerCase().indexOf(this.nowInput.toLowerCase()) != -1){
            callback.push(this.resout[i])
          }
        }
        return callback
      }
    },
     mounted() {
      var url="search"
      this.axios.get(url)
        .then(result=> {
          this.resout = result.data.resout;
        })
        .catch(()=> {
          // this.$router.replace('/error/404')
        });
    },
  methods: { 
      /*跳转页面*/ 
      mo(){
      var str=location.href;
      var as=document.querySelectorAll("a");
      for (let i = 0; i < as.length; i++) {
        as[i].className="";
        var link=as[i].href;
        if (str==link) {
          as[i].className="active"
        }
      }
    },
  },
  
   created() {
     this.mo();
    },
   
}
</script>
<style>

.el-carousel__button{
   width: 20px !important;
   height: 20px !important;
   border-radius: 50% !important;
 }
</style>
<style scoped>
/*头部整体样式*/
.headers{
  height: 750px;
}

  /*顶部导航结束*/
  /*搜索行部分*/
  .headerlog{
    width: 1200px;
    margin:auto;
    display: flex;
    justify-content: space-between;
    z-index: 999;
  }
  .headerlog img{
    width: 300px;
    height: 100px;
  }
.headerlog .myinput{
  width: 380px;
  height: 36px;
  margin-top:35px;
  border:3px solid #ff6363;
}
.headerlog .myinput input{
  width: 260px;
  height: 30px;
  padding:1px 15px;
  border:0px;/*取消边框*/
  outline:none;/*取消搜索框获取焦点后的蓝框*/
}
/*搜索按钮*/
.el-button{
  border-radius: 0px;
  line-height: 0;
  padding:10px 20.5px;
}
/*购物车块*/
.headerlog .cartlump{
  width: 180px;
  height: 35px;
  border:1px solid #ccc;
  margin-top:35px;
  line-height: 35px;
  display: flex;/*弹性布局*/
  justify-content: space-between;/*两边水平方式对齐*/
}
.headerlog .cartlump .num{
    color: #c00;
    padding: 0 3px;
}
.headerlog .cartlump .el-icon-shopping-cart-full{
  font-size:20px;
  color:#ff6363;
  line-height: 35px;
}
.el-icon-arrow-right{
  line-height: 38px;
}

/*分类导航栏*/
.headernav{
  width: 100%;
  height: 50px;
  background:#ff6643;
  border-radius: 5px;
  display: flex;/*弹性布局*/
  justify-content: space-between;/*两边水平方式对齐*/
  margin-top:20px;
}
/*导航栏左侧*/
.sales{
  width: 260px;
  height: 460px;
  position: relative;
  left:200px;
}
.sales .sales-left{
  width: 260px;
  height: 50px;
  background:#ff8a43;
  text-align: center;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
}
.sales .sales-ul{
  width: 260px;
  height: 410px;
  position: absolute;
}
/*左边图标样式*/
.sales .sales-left .el-icon-s-grid{
  color:#fff;
  font-size:24px;
  line-height: 50px;
  margin-right:15px;
}
.sales .sales-ul{
  display: block;
  z-index: 998;
  background:#f9f9f9;
  height: 450px;
}
.sales .sales-ul li{
  width: 260px;
  height: 110px;
}
.sales .sales-ul li div a{
  color:#ff6643;
  font-size:18px;
  line-height: 65px;
}
.sales .sales-ul li div{
  width: 220px;
}
.sales .sales-ul li span{
  line-height: 45px;
  padding:0px 8px;
  border-right:1px dotted #ddd;
}
/*导航栏右侧*/
.sales-right{
  width: 720px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left:500px;
}
.sales-right a{
  width: 120px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
}
.sales-right a:first-child{
  background:#FF8A43;
}
.sales-right a:hover{
  background:#FF8A43;
  color: #fff;
}
.search-all{
  z-index: 999;
}
.search-box .resout{
  width: 384px;
  height: 150px;
  border:1px solid #ccc;
  display: block;
  float: left;
  z-index: 999;
  position: absolute;
  background: #f9f9f9;
  overflow: hidden;
}
.search-box ul li{
  border-bottom:1px dotted #ccc;
  text-align: center;
  font-size:14px;
  height: 30px;
  line-height: 30px;
}
</style>