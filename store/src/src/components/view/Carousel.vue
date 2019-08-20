<template>
  <el-carousel height="530px" class="car1" indicator-position="outside">
    <el-carousel-item v-for="(item, i) of list" :key="i">
      <img :src="url+item.img" style="height:550px">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data(){
    return {
      url:"http://127.0.0.1:3000/",
      list:[]
    }
  },
 
  methods:{
  add(){
      var url="headers";
      this.axios.get(url).then(result=>{
        //console.log(result)
        for (const item of result.data) {
            this.list.push(item)
           // console.log(item)
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
 .el-carousel__button{
   width: 20px !important;
   height: 20px !important;
   border-radius: 50% !important;
 }
  
</style>
