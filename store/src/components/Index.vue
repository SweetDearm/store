<template>
  <div>
    <div>
      <headers></headers>
    </div>
    <div>
       <carousel></carousel>
    </div>
    <div>
      <middles style="margin-bottom:35px;"></middles>
    </div>
    <div>
      <sidebar></sidebar>
    </div>
    <div>
      <footers></footers>
    </div>
  </div>
</template>
<script>
import Headers from './view/Headers';
import Footers from './view/Footers';
import Middles from './view/Middles';
import Sidebar from './view/Sidebar';
import carousel from './view/Carousel';
export default {
  data(){
    return {
      
    }
  },
  components:{
    "headers":Headers,
    "footers":Footers,
    "middles":Middles,
    "sidebar":Sidebar,
    "carousel":carousel
  }
}
</script>
<style>
html ::-webkit-scrollbar {/*滚动条整体样式*/
            width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 5px;
        }
        ::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 5px;
            background: rgba(0,0,0,0.2);
        }
html{
  line-height: normal !important;
}
</style>