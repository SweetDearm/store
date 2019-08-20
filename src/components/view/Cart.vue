<template>
  <div>
    <div>
       <headerbar style="margin-bottom:40px;"></headerbar>
    </div>
   <el-steps :active="2" align-center>
    <el-step  description="1、我的购物车"></el-step>
    <el-step  description="2、填写核对订单信息"></el-step>
    <el-step  description="3、成功提交订单"></el-step>
   </el-steps>
   <div class="cart">
     <div class="titlebar">全部商品</div>
     <table class="tab">
       <tr class="taball">
         <td width="12%">
           <div class="selectAll">
            <input class="qx" type="checkbox" v-model="qx"  @change="selectAll"/>
             <span><label for="checkbox">全选</label></span>
            </div>
         </td>
         <td width=38% algin="left">商品</td>
         <td  width="12%">单价</td>
         <td width="15%">数量</td>
         <td width="12%">小计</td>
         <td width="11%">操作</td>
       </tr>
     </table>
    <div class="cart-item" v-for="(item,i) of list" :key="item.id">
     <table class="tab-item">
      <tr>
      <td width="12%">
        <input class="input-sp" type="checkbox" v-model="item.checked" @click="wq(i)"/>
       <img :src="url+item.img_url" />
      </td>
      <td width=38% algin="left">
        <a href="#">{{item.title}}</a>
        </td>
      <td width="12%">
            ￥{{item.price}}
      </td>
      <td width="15%">
         <div class="number">
        		<a href="javascript:;" @click="changeQuantity(i,-1)" class="reduce reSty l">-</a>
						<input type="text"  v-model="item.count" value="item.count" class="sum">
						<a href="javascript:;" @click="changeQuantity(i,1)" class="plus r">+</a> 
           </div>
      </td>
      <td width="12%">￥{{item.price * item.count}}</td>
      <td width="11%">  <el-button :data-id="item.id"  @click="delItem">删除</el-button>  </td>
      </tr>
    </table>
    </div>
     <div v-if="$store.getters.getCartCount === 0" class="empty-wrap">
        你还没有添加任何商品哦~
      </div>
    <div class="select-last">
      <div class="select-left">
    
    <!--删除选中商品-->
    <div class="selectbtn">
      <a @click="delAll">
       删除选中商品
     </a>
     <a href="#">加入我的收藏</a>
      </div>
    </div>
    <div class="select-right">
      <span>已选择<em>{{getAllShop()}}</em>件商品</span>
      <span>总价（不含运费）：￥<em>{{ getAllMoney() }}</em></span>
    </div>
    </div>
      <el-button class="set">去结算</el-button>
  </div>  

  </div>
</template>
<script>
import Headerbar from './Headerbar'
export default {
  data(){
    return {
      url:"http://127.0.0.1:3000/",
      list:[],
      qx:false
    }
  },
   components:{
    "headerbar":Headerbar
  },
  created() {
      this.loadMore();
    },
    computed: {
      /*总价*/
      // getAllMoney(){
      //   var n = 0;
      //   for(var i in this.list){
      //     n += this.list[i].price * this.list[i].count
      //   }
      //   return n
      // },
      /*总数*/
      // getAllShop(){
      //   var n=0;
      //   for(var i in this.list){
      //     n+=this.list[i].count
      //   }
      //   return n       
      // },
      
    },
    methods:{
      length: function() {
            return this.list.length;
        },
          changeQuantity (i,plus){
        var count = this.list[i].count;
        var sum = count + plus;
        if(sum <= 1 ){
          sum = 1;   
        } 
        this.list[i].count = sum;
        //this.$set(this.list,i,this.list[i])    
    },
      /*选中商品*/ 
      getAllShop() {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].checked) {
                  console.log(this.list[i].checked)
                    total += parseInt(this.list[i].count);
                }
            }
            return total;
        },
        /*选中商品总价*/ 
        getAllMoney(){
          var totall = 0;
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].checked) {
                    totall += parseInt(this.list[i].count * this.list[i].price);
                }
            }
            return totall;
        },
     delAll(){
        //删除多个商品
        // 1:创建变量保存空字符串
        var str="";
        // 2：创建循环拼接字符串内容
        for(var item of this.list){
          if(item.cb){
          str+=item.id+","
          }
        }
        str=str.substring(0,str.length-1);
        console.log(str)
        // 3：判断如果用户没选择商品提示
        if(str.length==0){
          alert("请选择要删除的商品");
          return;
        }
        // 4：发送ajax请求
      this.$confirm("是否删除指定数据").then(action=>{
        var url="delAll";
        var obj={ids:str};
        this.axios.get(url,{params:obj}).then(result=>{
          // 5：重新加载数据
          this.loadMore();
        })
      }).catch(err=>{
       return;
     })
        
      },
  delItem(e){
     //1:获取当前商品id
     var id = e.target.dataset.id;
     //2:显示交互确认框
     //3:如果用户选择 "确认"
     this.$confirm("是否删除指定数据").then(action=>{
        var url = "delItem";
        var obj = {id:id};
        this.axios.get(url,{params:obj}).then(result=>{
          //重新加载数据相当刷新
          this.loadMore();
        })
     }).catch(err=>{
       return;
     })
     //4:发送ajax删除数据
     //5:如果用户选择 "取消"
      },
       wq(e) {
            //点击方框
            console.log(this.list[e].checked)
            var arrs = [];
            this.list[e].checked = !this.list[e].checked   
            for (var i = 0; i < this.list.length; i++) {
                arrs.push(this.list[i].checked);
            }
            if (arrs.indexOf(false) == -1) {
                this.qx = true
            } else {
                this.qx = false
            }
        },
      selectAll:function (){
    if (!this.qx) {
         for (var i = 0; i < this.list.length; i++) {
              this.list[i].checked = false
             }
           } else {
              for (var i = 0; i < this.list.length; i++) { 
              this.list[i].checked = true
              //console.log(this.list[i].checked)
              this.qx = true;
                }
            }
      },
      
      loadMore(){ 
        //1:创建url
        var url = "cart";
        //2:发送ajax请求
        this.axios.get(url).then(result=>{
          //this.list = //result.data.data;
          
          //1:获取服务器数组
          var rows = result.data.data;
          //2:创建循环为数组中每个//对象添加cb属性
          //cb控制商品前复选框
          for(var item of rows){
            item.cb = false;
            //更新购物车数量
            this.$store.commit("increment")
          }
          //3:将新数据保存
          this.list = rows;
        })
      }
    }
}
</script>
<style>
.el-step__description.is-finish {
    color: #333;
}
.el-step__description {
    padding-right: 10%;
    margin-top: 15px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
}
.el-button{
  background:#ff0000;
}
</style>
<style scoped>
.cart{
  width: 1200px;
  margin:auto;
}
.titlebar{
 height: 40px;
 font-size: 18px;
 color: #666;
}
.tab{
  width:100%;
  height: 45px;
  background: #F4F4F5;
  color:#555;
  border: 1px solid #E4E4E4;
   cursor: pointer;
}
.tab-item{
  width: 100%;
  height: 100px;
}
.tab-item .input-sp{
  float: left;
    margin: 28px 10px 0 5px;
}
.tab-item td img{
   width:78px;
   height:78px;
 }
 .cart-item{
   border-bottom:1px dotted #333;
 }
 .price{
   margin-left:25px;
 }
 .l,.r{
    text-align: center;
    line-height: 30px;
    width: 30px;
    height: 30px;
    color: #555;
    cursor: pointer; 
    display: inline-block;
}
.l{
  display: block;
  float: left;
  border-radius: 0 3px 3px 0;
  border-right: 1px solid #CFCFCF;
}
.r{
 border-radius: 3px 0px 0px 3px;
 border-left:1px solid #CFCFCF;
}
.number{
    display: inline-block;
    width: 102px;
    height: 30px;
    overflow: hidden;
    border-radius: 3px;
    border: 1px solid #CFCFCF;
    background-color: #FFF;
}
 .sum{
    border:0;
    line-height: 30px;
    height: 30px;
    width: 30px;
    text-align: center;
    float: left;
 }
 .seect-last{
   width: 1200px;
   height: 60px;
   display: flex;
   justify-content: space-between;
 }
 .select-left,.select-right{
   width:380px;
   height:60px;
   line-height: 60px;
   float: left;
    font-size: 14px;
    color: #555;
 }
 .select-right{
   float:right;
 }
 .select-right span em{
   color:#ff0000;
   font-size:20px;
 }
 .select-right span{
    margin-right: 10px;
    margin-left: 10px;
 }
.sel{
  width: 45px;
  height: 60px;
  float: left;
  font-weight: 500;
  cursor: pointer;
}
 .selectbtn a{
    float: left;
    display: block;
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
 }
 .set{
   background:crimson;
   clear: both;
   float:right;
   color:#E4E4E4;
 }
   </style>