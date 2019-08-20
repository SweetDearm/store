<template>
  <div class="middles"> 
    <div class="first">
      <div class="L1">
        <i class="el-icon-star-off"></i>
        <div style="font-size:25px;color:#fff;">人气爆款</div>
      </div>
      <div class="L2">
        <div class="pic">
          <a href="">DARRY RING系列 真爱印记</a>
          <span>仅需9098元</span>
        </div>
        <div class="imgpic">
          <img src="https://aimg8.dlssyht.cn/module/simplepicbackground/1872058/6253/12504781_1556596751.jpg" alt="">
          </div>
      </div>
      <div class="L3">
        <div class="pic">
          <a href="">SWEETY系列 在一起 心形手链</a>
          <span>仅需2999元</span>
        </div>
        <div class="imgpic">
          <img src="https://aimg8.dlssyht.cn/module/simplepicbackground/1872058/6253/12504789_1556596763.jpg" alt="">
        </div>
      </div>
      <div class="L4">
        <div class="pic">
          <a href="">ENDLESS LOVE系列 典雅款</a>
          <span>仅需520元</span>
        </div>
         <div class="imgpic">
           <img src="https://aimg8.dlssyht.cn/module/simplepicbackground/1872058/6253/12504815_1556596792.jpg" alt="">
       </div>
      </div>
    </div>
   <div class="commodity">
     <div class="titlebar">
       <div class="left-t">
        <img src="http://aimg8.dlszyht.net.cn/module/simplepicbackground/1662688/2047/4093155_1522824378.png" alt="">
        <span style="font-size:26px;color:#333">爱情对戒</span>
        <span>送给让你怦然心动的人</span>
       </div>
        <router-link  to="#"><span class="more">更多戒指<i class="el-icon-d-arrow-right"></i></span></router-link>
     </div>
     <div class="overall">
       <div class="left-part" style=" background:#ff6565">
         <img src="http://aimg8.dlszyht.net.cn/module/simplepicbackground/1662688/2048/4094274_1522826395.jpg" alt="">
         <div class="left-bottom">
          <span>一生为你心动回旋,</span>
          <span>真爱永不止息！</span>
        </div>
        <button class="btn"  style=" background:#ff6565">戒指专区<i class="el-icon-arrow-right" style="color:#fff"></i></button>
       </div>
       <div class="right-part">
       <div class="item" v-for="(item,i) of list1" :key=i>
        <div id="change">
          <ul>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <span class="span" v-bind:style="{ 'background-image': 'url(' + url+item.PlaceImgUrl + ')'}"></span>
            </ul>
          </div>
          <div class="font-">
          <router-link  to="/products">{{item.title}}</router-link>
           <em>￥{{item.Price}}</em>
           </div>
         </div>
         <!-- <div class="item">
          <img src="https://aimg8.dlssyht.cn/u/1872058/product/6252/12502691_1556594605.jpg" alt="">
            <router-link  to="#">男女士情侣款戒指白金 PT950 正品</router-link>
           <em>￥8888</em>
         </div>
            <div class="item">
         <img src="https://aimg8.dlssyht.cn/u/1872058/product/6252/12502326_1556594200.jpg" alt="">
           <router-link  to="#">s925纯银情侣戒指男女饰品日韩简约对</router-link>
           <em>￥198</em>
         </div>
         <div class="item" >
          <img src="https://aimg8.dlssyht.cn/u/1872058/product/6251/12501641_1556593522.jpg" alt="">
            <router-link  to="#">s925银戒指女日韩简约开口对戒情侣</router-link>
           <em>￥218</em>
         </div>
        <div class="item">
         <img src="https://aimg8.dlssyht.cn/u/1872058/product/6251/12501172_1556592993.jpg" alt="">
           <router-link  to="#">情侣戒指男女士款对戒食指钛钢玫瑰金</router-link>
           <em>￥298</em>
         </div>
         <div class="item">
          <img src="https://aimg8.dlssyht.cn/u/1872058/product/6251/12501028_1556592807.jpg" alt="">
           <router-link  to="#">飒雅男女潮人戒指欧美夸张时尚饰品蓝</router-link>
           <em>￥199</em>
         </div> -->
       </div>
     </div>
   </div>
   <div class="commodity">
     <div class="titlebar">
       <div class="left-t">
        <img src="http://aimg8.dlszyht.net.cn/module/simplepicbackground/1662688/2048/4094519_1522826775.png" style="height:31px" alt="">
        <span style="font-size:26px;color:#333">精美手链</span>
        <span>给TA最美好的礼物</span>
       </div>
        <router-link  to="#"><span class="more">更多手链<i class="el-icon-d-arrow-right"></i></span></router-link>
     </div>
     <div class="overall">
       <div class="left-part" style=" background:#A0DE19">
         <img src="https://aimg8.dlssyht.cn/module/simplepicbackground/1872058/6255/12508643_1556604523.jpg" alt="">
         <div class="left-bottom">
          <span>一生为你心动回旋,</span>
          <span>真爱永不止息！</span>
        </div>
        <button class="btn" style=" background:#A0DE19">手链专区<i class="el-icon-arrow-right" style="color:#fff"></i></button>
       </div>
       <div class="right-part">
        <div class="item" v-for="(item,i) of list2" :key=i>
        <div id="change">
          <ul>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <span class="span" v-bind:style="{ 'background-image': 'url(' + url+item.PlaceImgUrl + ')'}"></span>
            </ul>
          </div>
          <div class="font-">
          <router-link  to="#">{{item.title}}</router-link>
           <em>￥{{item.Price}}</em>
           </div>
         </div>
         <!-- <div class="item">
          <img src="https://aimg8.dlssyht.cn/u/1872058/product/6252/12502628_1556594521.jpg" alt="">
            <router-link  to="#">洛莎银手链女四叶草s925银饰品</router-link>
           <em>￥219</em>
         </div>
            <div class="item">
         <img src="https://aimg8.dlssyht.cn/u/1872058/product/6251/12501893_1556593760.jpg" alt="">
           <router-link  to="#">天然水晶石榴石手链女纯银多圈宝石玛瑙</router-link>
           <em>￥668</em>
         </div>
         <div class="item" >
          <img src="https://aimg8.dlssyht.cn/u/1872058/product/6251/12501833_1556593702.jpg" alt="">
            <router-link  to="#">大善堂朱砂手串本命年饰品手链女必备</router-link>
           <em>￥328</em>
         </div>
        <div class="item">
         <img src="https://aimg8.dlssyht.cn/u/1872058/product/6251/12501345_1556593211.jpg" alt="">
           <router-link  to="#">天然水晶石榴石手链女纯银多圈宝石玛瑙</router-link>
           <em>￥668</em>
         </div>
         <div class="item">
          <img src="https://aimg8.dlssyht.cn/u/1872058/product/6251/12501304_1556593168.jpg" alt="">
           <router-link  to="#">纯黑乌金黑曜石手链男士女款貔貅天然水晶佛
            </router-link>
           <em>￥209</em>
         </div> -->
       </div>
     </div>
   </div>
    <div class="commodity">
     <div class="titlebar">
       <div class="left-t">
        <img src="http://aimg8.dlszyht.net.cn/module/simplepicbackground/1662688/2048/4094841_1522827313.png" style="width:37px;height:37px;" alt="">
        <span style="font-size:26px;color:#333">潮流新款</span>
        <span>送给你的TA</span>
       </div>
        <router-link  to="#"><span class="more">更多耳环<i class="el-icon-d-arrow-right"></i></span></router-link>
     </div>
     <div class="overall">
       <div class="left-part" style=" background:#00C5F6">
         <img src="https://aimg8.dlssyht.cn/module/simplepicbackground/1872058/6255/12508782_1556604742.jpg" alt="">
         <div class="left-bottom">
          <span>一生为你心动回旋,</span>
          <span>真爱永不止息！</span>
        </div>
        <button class="btn" style=" background:#00C5F6">耳环专区<i class="el-icon-arrow-right" style="color:#fff"></i></button>
       </div>
       <div class="right-part">
         <div class="item" v-for="(item,i) of list3" :key=i>
        <div id="change">
          <ul>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <span class="span" v-bind:style="{ 'background-image': 'url(' + url+item.PlaceImgUrl + ')'}"></span>
            </ul>
          </div>
          <div class="font-">
          <router-link  to="#">{{item.title}}</router-link>
           <em>￥{{item.Price}}</em>
           </div>
         </div>
         <!-- <div class="item">
          <img src="https://aimg8.dlssyht.cn/u/1872058/product/6252/12502210_1556594062.jpg" alt="">
           <router-link  to="#">简约方片流苏个性耳饰品耳坠百搭金属</router-link>
           <em>￥705</em>
         </div>
         <div class="item" >
          <img src="https://aimg8.dlssyht.cn/u/1872058/product/6252/12502174_1556594022.jpg" alt="">
            <router-link  to="#">豆粉色长装饰品流苏耳环蓝色结婚穗子</router-link>
           <em>￥285</em>
         </div>
        <div class="item">
         <img src="https://aimg8.dlssyht.cn/u/1872058/product/6252/12502142_1556593983.jpg" alt="">
           <router-link  to="#">KXDUN/卡希盾925纯银耳钉女耳环长</router-link>
           <em>￥1778</em>
         </div>
         <div class="item">
          <img src="https://aimg8.dlssyht.cn/u/1872058/product/6251/12501804_1556593670.jpg" alt="">
           <router-link  to="#">韩国高级感耳环女长款气质2019新款潮</router-link>
           <em>￥199</em>
         </div> -->
       </div>
     </div>
   </div>
    <div class="commodity">
     <div class="titlebar">
       <div class="left-t">
        <img src="http://aimg8.dlszyht.net.cn/module/simplepicbackground/1662688/2047/4093155_1522824378.png" alt="">
        <span style="font-size:26px;color:#333">吊坠项链</span>
        <span>送给让你怦然心动的人</span>
       </div>
        <router-link  to="#"><span class="more">更多项链<i class="el-icon-d-arrow-right"></i></span></router-link>
     </div>
     <div class="overall">
       <div class="left-part" style=" background:#FF6565">
         <img src="https://aimg8.dlssyht.cn/module/simplepicbackground/1872058/6255/12508565_1556604307.jpg" alt="">
         <div class="left-bottom">
          <span>一生为你心动回旋,</span>
          <span>真爱永不止息！</span>
        </div>
        <button class="btn" style=" background:#FF6565">项链专区<i class="el-icon-arrow-right" style="color:#fff"></i></button>
       </div>
       <div class="right-part">
         <div class="item" v-for="(item,i) of list4" :key=i>
        <div id="change">
          <ul>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <li v-bind:style="{'background-image':'url('+url+item.PlaceImgUrl + ')'}"></li>
           <span class="span" v-bind:style="{ 'background-image': 'url(' + url+item.PlaceImgUrl + ')'}"></span>
            </ul>
          </div>
          <div class="font-">
          <router-link  to="/products">{{item.title}}</router-link>
           <em>￥{{item.Price}}</em>
           </div>
         </div>
         <!-- <div class="item">
          <img src="https://aimg8.dlssyht.cn/u/1872058/product/6252/12502303_1556594162.jpg" alt="">
            <router-link  to="#">999项链女锁骨链首饰品日韩吊坠</router-link>
           <em>￥8976</em>
         </div>
            <div class="item">
         <img src="https://aimg8.dlssyht.cn/u/1872058/product/6252/12502088_1556593945.jpg" alt="">
           <router-link  to="#">民族风毛衣链琉璃吊坠配饰复古项链</router-link>
           <em>￥1609</em>
         </div>
         <div class="item" >
          <img src="https://aimg8.dlssyht.cn/u/1872058/product/6252/12502036_1556593896.jpg" alt="">
            <router-link  to="#">楼兰客栈菩提子天珠配饰挂件复古民族</router-link>
           <em>￥1309</em>
         </div>
        <div class="item">
         <img src="https://aimg8.dlssyht.cn/u/1872058/product/6251/12501985_1556593852.jpg" alt="">
           <router-link  to="#">ssm欧美夸张项链女短款复古宫廷风</router-link>
           <em>￥8880</em>
         </div>
         <div class="item">
          <img src="https://aimg8.dlssyht.cn/u/1872058/product/6251/12501952_1556593811.jpg" alt="">
           <router-link  to="#">s999纯银饰品项链十二星座锁骨链森系</router-link>
           <em>￥778</em>
         </div> -->
       </div>
     </div>
   </div>
   <div class="news">
     <div class="new-left">
       <div class="text-div">
           <h3 class="text-title"><span>新闻中心</span><br><span style="font-size:18px;color:#FFFFFF;line-height:2;">NEWS CENTER</span><br></h3>
        </div>
        <div>
          <a href="#" class="SeeMore">查看更多</a>
       </div>
     </div>
     <div class="new-middle">
       <div class="title-top">
         <span>饰品保养</span>
         <i class="el-icon-circle-plus-outline"></i>
       </div>
      <div class="content">
        <div class="item" v-for="(item,i) of list5" :key=i>
          <img alt="日常生活中，如何保养钻石首饰？" :src="item.PlaceImgUrl">
          <div class="item-text">
          <h3 style="font-size:16px">{{item.title}}</h3>
          <div>
          <p>{{item.content}}</p></div>
        </div>
      </div>
       
      </div>
     </div>
     <div class="new-right">
       <div class="title-top">
         <span>最新资讯</span>
         <i class="el-icon-circle-plus-outline"></i>
       </div>
       <div class="content">

       </div>
     </div>
   </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      url:"http://127.0.0.1:3000/",
      list1:[
        // {PlaceImgUrl:"https://aimg8.dlssyht.cn/u/1872058/product/6252/12502743_1556594655.jpg",
        //  title:"纯银戒指情侣款一对潮定制刻字对戒",
        //  price:8990 },
        //  {PlaceImgUrl:"https://aimg8.dlssyht.cn/u/1872058/product/6252/12502691_1556594605.jpg",
        //  title:"男女士情侣款戒指白金 PT950 正品",
        //  price:8888 },
        //  {PlaceImgUrl:"https://aimg8.dlssyht.cn/u/1872058/product/6252/12502326_1556594200.jpg",
        //  title:"s925纯银情侣戒指男女饰品日韩简约对",
        //  price:198 },
        // {PlaceImgUrl:"https://aimg8.dlssyht.cn/u/1872058/product/6251/12501641_1556593522.jpg",
        //  title:"s925银戒指女日韩简约开口对戒情侣",
        //  price:298 }, 
        //  {PlaceImgUrl:"https://aimg8.dlssyht.cn/u/1872058/product/6251/12501172_1556592993.jpg",
        //  title:"情侣戒指男女士款对戒食指钛钢玫瑰金",
        //  price:298 },
        // {PlaceImgUrl:"https://aimg8.dlssyht.cn/u/1872058/product/6251/12501028_1556592807.jpg",
        // title:"飒雅男女潮人戒指欧美夸张时尚饰品蓝",
        // price:199 },
      ],
      list2:[],
      list3:[],
      list4:[],
      list5:[
        {PlaceImgUrl:'https://aimg8.dlssyht.cn/ev_user_doc_content/800_1500/1872058/6253/12504311_1556596300.jpeg?',
        title:'日常生活中，如何保养钻石首饰？',
        content:'现在很多生活中购买什么首饰都是先了解，然后'},
         {PlaceImgUrl:'https://aimg8.dlssyht.cn/ev_user_doc_content/800_1500/1872058/6253/12504272_1556596276.jpeg?',
        title:'黄金首饰保养“超级补脑知识”',
        content:'在日常生活中，3D硬金的黄金吊坠或者转运'},
         {PlaceImgUrl:'https://aimg8.dlssyht.cn/ev_user_doc_content/800_1500/1872058/6253/12504209_1556596219.JPEG?',
        title:'珠宝首饰保养有妙招，清洗的时候勿用牙膏！',
        content:'有一句话说的非常好：对于爱美的女性而言'},
      ],
    }
  
  },
  methods: {
    ac(){
        var url="middles";
        this.axios.get(url).then(result=>{
          for (const item of result.data.list1) {
            this.list1.push(item)
           }
          for (const item of result.data.list2) {
            this.list2.push(item)
           }
           for (const item of result.data.list3) {
            this.list3.push(item)
           }
          for (const item of result.data.list4) {
            this.list4.push(item)
           }
        })
    }
  },
  created() {
   this.ac()
  },
}

</script>
<style scoped>
  .middles .first{
      width: 1200px;
      height: 310px;
      margin:auto;
      display: flex;/*设置为弹性布局*/
      justify-content: space-between;/*两端水平方式对齐*/
    }
  .L2,.L3,.L4{
    width: 303px;
    height: 190px;
    margin-top:55px;
    display: flex;/*设置为弹性布局*/
    justify-content: space-between;/*两端水平方式对齐*/
  }
  .L1{
    width: 260px;
    height: 190px;
    margin-top:55px;
    background: #ff6643;
    text-align: center;
  }
  .L1 .el-icon-star-off{
    font-size:100px;
    color:#fff;
    line-height: 130px;
  }
  .middles .first .imgpic img{
    width: 148px;
    height: 161px;
  }
  .middles .first .pic{
    width: 135px;
    margin-left:20px;/*距离左边的距离*/
  }
  .middles .first .pic a{
    display: block;/*块级元素显示*/
    width: 118px;
    height: 60px;
    font-weight: 700;/*加粗字体*/
    color: #555555;/*字体颜色*/
    margin-top:45px;/*左右水平对齐*/
  }
  .middles .first .pic span{
    width: 100px;
    height: 25px;
    display: block;/*块级元素显示*/
    background: #ff6643;/*定义span得背景颜色*/
    text-align:center;/*文本居中*/
    color:#fff;/*字体颜色*/
    line-height: 25px;/*行高，水平居中*/
  }
  .middles .commodity{
    width: 1200px;
    height:735px;
    margin:auto;
  }
  /*商品标题样式*/
  .middles .commodity .titlebar{
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: space-between;
  } 
  .middles .commodity .titlebar .left-t{
    width: 330px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    margin-top:70px;
    color: #a9a9a9;
    line-height: 25px
  }
  .more{
    line-height: 185px;
  }
  .overall{
    width: 1200px;
    height: 610px;
    display: flex;
    justify-content: space-between;
  }
  .overall .left-part{
    width: 260px;
    height: 610px;
   
  }
  .overall .left-part img{
    width: 260px;
    height: 378px;
  }
  .overall .left-part .left-bottom span{
    width: 260px;
    height: 30px;
    display: block;
    line-height: 30px;
    text-align: center;
    color:#fff;
  }
  .overall .left-part .left-bottom{
    width: 260px;
    height: 100px;
    margin-top:35px;
  }
  .overall .left-part .btn{
    color:#fff;
    border:#fff 2px solid;
    width: 100px;
    height: 35px;
    margin-left:75px;
  }
  .overall .right-part{
    width: 940px;
    height: 610px;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }
  .overall .right-part .item{
    width: 311px;
    height: 305px;
    text-align: center;
    border-right:1px solid #ededed;
    border-bottom:1px solid #ededed;
    position: relative;
  }
  .overall .right-part .item a{
    display: block;
  }
  .overall .right-part .item .font-{
    position: absolute;
    top:250px;
    left:55px;
  }
  .overall .right-part img{
    width:215px;
    height: 215px;
    margin-top:15px;
  }
  .overall .right-part .item em{
    font-size:14px;
    color:#ff6643;
  }
  /*切图效果样式开始*/
#change {
    position: relative;
		width: 215px;
		height: 215px;
		overflow: hidden;
		transition: 0.5s;
    top:23px;
    left:60px;
	}
	.span {
		display: block;
		width: 215px;
		height: 215px;
		position: absolute;
		transform: scale(1.5);
		transition: 0.6s;
		left: 0px;
		top: 0px;
		z-index: -1;
		/* background-image: url(https://aimg8.dlssyht.cn/u/1872058/product/6252/12502743_1556594655.jpg); */
		background-repeat: no-repeat;
    background-size: 215px;
	} 
	#change:hover .span {
		transform: scale(1);
	}
	#change ul {
		list-style: none;
		font-size: 0;
	}
	#change ul li {
		width: 107.5px;
		height: 107.5px;
		/* background-image: url(https://aimg8.dlssyht.cn/u/1872058/product/6252/12502743_1556594655.jpg); */
		background-repeat: no-repeat;
		transition: 0.5s;
    background-size: 215px;
	}
	
	#change ul li:nth-child(1) {
		background-position-x: 0;
		background-position-y: 0;
	}
	
	#change ul li:nth-child(2) {
		background-position-x: -107.5px;
		background-position-y: 0;
		position: absolute;
		left: 107.5px;
		top: 0;
	}
	
	#change ul li:nth-child(3) {
		background-position-x: 0;
		background-position-y: -107.5px;
	}
	
	#change ul li:nth-child(4) {
		background-position-x: -107.5px;
		background-position-y: -107.5px;
		position: absolute;
		left: 107.5px;
		top: 107.5px;
	}
	
	#change:hover ul li:nth-child(1) {
		background-position-y: 215px;
	}
	
	#change:hover ul li:nth-child(2) {
		background-position-x: -215px;
	}
	
	#change:hover ul li:nth-child(3) {
		background-position-x: -215px;
	}
	
	#change:hover ul li:nth-child(4) {
		background-position-y: 215px;
	}
/*切图效果样式结束*/
  .news{
    width: 1200px;
    height: 470px;
    margin:auto;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .news .new-left{
    width: 260px;
    height: 310px;
    background:#ff6643;
    margin-top:100px;
    position: relative;
  }
  .text-div{
    width: 169px;
    height: 84px;
    position: absolute;
    top:50px;
    left:50px;
  }
  .text-title span{
    font-size:24px;
    color:#FFFFFF;
    font-weight: 400;
    line-height:2;
  }
  .SeeMore{
    position: absolute;
    width: 118px;
    height: 38px;
    display: block;
    border-radius:15px;
    color:#fff;
    border:1px solid #fff;
    text-align: center;
    line-height: 38px;
    top: 200px;
    right:55px;
  }
  .news .new-middle,.news .new-right{
    width: 454px;
    height: 310px;
    margin-top:100px;
    background: #F9F9F9
  }
  .news .title-top{
    width: 454px;
    height: 45px;
    background:#ff6643;
    position: relative;
  }
  .news .title-top span{
   color:#fff;
   font-size:18px;
   position: absolute;
   top:11px;
   left:40px;
  }
.news .title-top i{
  position: absolute;
  right:40px;
  top:15px;
  color:#fff;
  font-size:20px;
}
.content{
  width: 454px;
  height: 265px;
}
.content .item{
  width: 427px;
  height: 55px;
  border-bottom:1px dotted #333;
  float:right;
  display: flex;
  justify-content: space-between; 
  padding:15px 0;
}
.content .item img{
  width: 55px;
  height: 55px;
}
.item-text p{
  width: 362px;
  height: 20px;
  font-size:12px;
  color:#777;
  overflow: hidden;
  line-height: 20px;
  margin-top:10px;
}

</style>