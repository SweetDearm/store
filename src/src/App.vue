<template>
 <div class="app-container">
    <router-view></router-view>
 </div>
</template>

<style>
   .app-container{
     padding-top:0px;
     padding-bottom:0px;
     overflow-x:hidden;
   }

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
.dropdown{
  width: 100px;
  margin-top: 10px;
  
}
.dropdown:hover>a{
  color: #ff6700 !important;
  
}
.dropdown:hover>.dropdown_menu{
  height:160px;
}
.dropdown a{
  text-decoration:none; 
  display:inline-block;
  color: #333;
}
.dropdown_menu{
  width: 150px;
  position: absolute;
  top: 38px;
  left: 660px;
  list-style:none; margin:0; padding:0;
  box-shadow: 0 0 30px 0 rgba(65,67,70,.08);
  line-height: 25px;
  height:0px;
  overflow:hidden;
  transition:all .5s linear;
  
}
.dropdown_menu li{ 
  text-align: center;
}

.dropdown_menu a{ 
  padding: 6px 0px;
  width: 100%;
}
.dropdown_menu li:hover{background:#fff}