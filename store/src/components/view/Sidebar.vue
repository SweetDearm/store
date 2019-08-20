<template>
    <div class="wuyou-waiter">
		<ul class="waiter-ul">
			<li class="wuyou-shop">
				<a class="el-icon-phone-outline" href="#" target="_blank"></a>
				<div class="waiter-title">联系方式</div>
			</li>
			<li class="wuyou-contact">
				<a class="el-icon-chat-dot-square" href="#" target="_blank"></a>
				<div class="waiter-title">在线留言</div>
			</li>
			<li class="wuyou-top">
			  <a class="el-icon-top" href="#"></a>
				<div class="waiter-title">回到顶部</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        
    },
}
</script>
<style>
.wuyou-waiter {
    position: fixed;
    right: 0px;
    top:80%;
    margin-top: -90px;
    width: 60px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .3);
    z-index: 999;
}
.waiter-ul li {
    position: relative;
    height: 60px;
    line-height: 60px;
    background:#ffb443;
    margin-bottom: 15px;
    border-radius: 5px;
}
.waiter-ul li a {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    color: #fff;
    display: block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    transition:all 0.6s;
    text-decoration: none;
    font-size: 28px;
}
.waiter-title {
    position: absolute;
    left: 0px;
    bottom: 1px;
    color: #fff;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    transition:all 0.6s;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .3);
    z-index: 1;
    opacity: 0;
}
.waiter-title:before {
    content:'';
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    right: -5px;
    top: 14px;
    background-color:#ff6453;
    transform:rotate(45deg);
}
.waiter-ul li:hover .waiter-title {
    left: -88px;
    opacity: 1;
}

.waiter-ul li.wuyou-shop .waiter-title {
    background-color:#f60;
}
.waiter-ul li.wuyou-shop .waiter-title:before {
    background-color:#f60;
}

.waiter-ul li.wuyou-contact .waiter-title {
    background-color:#00b7ee;
}
.waiter-ul li.wuyou-contact .waiter-title:before {
    background-color:#00b7ee;
}
.waiter-ul li.wuyou-top .waiter-title {
    background-color:#333;
}
.waiter-ul li.wuyou-top .waiter-title:before {
    background-color:#333;
}
</style>