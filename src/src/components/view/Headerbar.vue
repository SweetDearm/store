<template>
    <div class="top-bg">
      <div class="top-left" v-if="!isLogin">
      <router-link  to="/login">登录 </router-link> | 
      <router-link  to="/login">注册 </router-link>
      </div>
      <div class="top-left1" v-else>
        Welcome {{$store.state.uname}}!
      <span @click="logout" style="cursor:default">|注销</span>
      </div>
      <div class="top-right">
       <router-link  to="/">设为首页</router-link>
       <router-link  to="#">加入收藏</router-link>
       <router-link  to="#">在线留言</router-link>
       <router-link  to="#">企业位置</router-link>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  
  methods:{
   
    logout(){
      this.$store.commit('logout');
      this.$router.replace("/");
     // console.log(1)
    }
    },
     computed: {
    uname () {
      return this.$store.state.uname;
    },
    isLogin () {
      return this.$store.state.isLogin;
    }
  },

  }

</script>
<style>
.top-bg{
    width:100%;
    height: 35px;
    background-color:#f9f9f9;/*背景颜色*/
    display: flex;/*设置父元素为弹性布局*/
    justify-content: space-between;/*两边水平方向对齐*/
    border-radius: 5px;/*倒角*/
    line-height: 28px;/*行高*/
    position: relative;
  }
.top-bg .top-left{
    left:150px;
    position: absolute;
    width: 120px;
    height: 35px;
  }
  .top-bg .top-left1{
    left:150px;
    position: absolute;
    width: 170px;
    height: 35px;
    font-size:18px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
.top-bg .top-right{
    left:1050px;
    position: absolute;
    width: 300px;
    height: 35px;
    display: flex;/*弹性布局*/
    justify-content: space-between;/*两边水平方向对齐*/
  }
.top-bg a:hover,.top-bg .top-left1 span:hover{
    color:#ff6363;
  }
</style>
