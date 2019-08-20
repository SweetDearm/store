<template>
  <div class="login">
      <div class="form" style="position:relative">
          		<!--登录表单-->
     <div class="form_login" style="position:absolute">
			<form action="#">
				<h1>会员登录</h1>
				<div class="form_item">
					<label for="username">用户名：</label>
					<input type="text" name="username" id="username" placeholder="请输入用户名" v-model="uname" required>
				</div>
				<div class="form_item">
					<label for="password">密码：</label>
					<input type="password" name="password" id="password" placeholder="请输入密码名" v-model="upwd" required>
				</div>
				
                    <div class="form_item" @click="login">
                    <a class="login_btn">登录</a>
				</div>
			</form>
			<div class="info">没有账号？点击<span class="switch register_Btn">注册账号</span></div>
    </div> 
		<!--注册表单-->
        <div class="form_register" style="height:0">  
            <form action="#">
                <h1>注册账号</h1>
                <div class="form_item">
                    <label for="username">用户名：</label>
                    <input type="text" name="username" id="username" placeholder="请输入用户名" required autofocus  v-model="uname">
                </div>
                <div class="form_item">
                    <label for="password">密码：</label>
                    <input type="password" name="password" id="password" placeholder="请输入密码" required autofocus v-model="upwd">
                </div>
                <div class="form_item">
                    <label for="email">电子邮箱：</label>
                    <input type="email" name="email" id="email" placeholder="请输入电子邮件" required autocomplete v-model="uemail">
                </div>
                <div class="form_item">
                    <label for="tel">手机号：</label>
                    <input type="tel" name="tel" id="tel" placeholder="请输入手机号码" required v-model="uphone">
                </div>
                <div class="form_item" @click="reg">
                    <input type="submit" value="注册">
                </div>
            </form>
            <div class="info">已有账号？点击<span class="switch login_Btn">登录</span></div>
        </div>

    </div>
  </div>

</template>
<script>
export default {
  data(){
    return {
        uname:"",
        upwd:"",
        uphone:"",
        uemail:""
    }
  },
   methods: {
        login(){
        // 完成用户登录
        var n = this.uname;
        // 2.获取用户输入的用户密码
        var p = this.upwd;
        // 3.创建两个正则表达式
        var preg = /^[a-zA-Z0-9]{3,8}$/;
        if (n==""){
            this.$confirm("用户名不能为空");
            return;
        };
        if (!preg.test(p)){
            this.$confirm("密码格式不正确");
            return;
        };
        var url="login";
        var obj={uname:n,upwd:p};
        this.axios.get(url,{params:obj}).then(result=>{
            if (result.data.code==1){
            this.$store.commit('login', this.uname);
                this.$router.replace("/");    
        }else{
            this.$confirm(result.data.msg)
        }
        });
        }, 
        reg(){
            var u_name=this.uname;
            var u_pwd=this.upwd;
            var u_phone=this.uphone;
            var u_email=this.uemail
          var upwdreg = /^[a-zA-Z0-9]{3,8}$/;
          var phonereg=/^1[3|4|5|7|8][0-9]{9}$/;
        if (uname==""){
            this.$confirm("用户名不能为空");
            return;
        };
        if (!upwdreg.test(u_pwd)){
            this.$confirm("密码格式不正确");
            return;
        };
        if(!phonereg.test(u_phone)){
            this.$confirm("请输入有效的手机号");
            return;
        }
        var url="reg";
        var obj={uname:u_name,upwd:u_pwd,uphone:u_phone,uemail:u_email};
         this.axios.get(url,{params:obj}).then(result=>{
            if (result.affectedRows > 0){
          
        }else{
            this.$confirm(result.data.msg)
        }
        });
        }
    },
}
window.onload = function() {
    var form_login = document.querySelector('.form_login')
    var form_register = document.querySelector('.form_register')
    var switchBtns = document.querySelectorAll('.switch')
    switchBtns.forEach(function(item) {
        item.addEventListener('click', function() {
            if (this.innerText == '注册账号') {
                addStyle(form_login, { height: '0', transitionDelay: '0s' })
                addStyle(form_register, { height: '548px', transitionDelay: '1.2s' })
            } else if (this.innerText == '登录') {
                addStyle(form_login, { height: '422px', transitionDelay: '1.2s' })
                addStyle(form_register, { height: '0', transitionDelay: '0s' })
            }
        })
    })
    function addStyle(ele, orignStyle) {
        for (var item in orignStyle) {
            if (ele) {
                ele.style[item] = orignStyle[item]
            }
        }
    }
}
</script>

<style scoped>

.login{
 background: url('../../assets/images/bg.jpg') no-repeat center/cover;
 height: 700px;
}
.form{
    width: 500px;
    height: 600px;
    margin: auto auto;
    padding-top:100px;
}
.form_register,.form_login{
    width: 500px;
    background-color:rgba(0, 188, 212, 0.7);
    border-radius: 5px;
    box-shadow: 0 0 3px #ccc;  
    overflow: hidden;
    transition: height 1s;
}
.form_register{
    height: 548px;
}

.form form{
   padding: 25px 40px;
}
.form .form_item{
    display: flex;
    margin: 25px 0;
    vertical-align: middle;
}
.form input{
    outline: none;
    text-indent: 10px;
    flex: 1;
    width: auto;
    border: none;
    border-radius: 3px;
    height: 36px;
}
.form .form_item .login_btn{
    width:420px;
    height: 45px;
    text-align: center;
    background-color: rgba(244, 22, 7, 0.7);
    line-height: 40px;
    font-size:20px;
    color:#fff;
    cursor: pointer;
}
.form form label{
    width: 90px;
    float: left;
    line-height: 36px;
}
h1{
    text-align: center;
    padding: 0;;
    margin: 30px 0 30px 0;
}
.form form input[type='submit']{
    background-color: rgba(244, 22, 7, 0.7);
    color: aliceblue;
    height: 45px;
    font-size: 20px;
    cursor:pointer;
    margin-top: 20px;
}
.form .info{
    text-align: center;
    font-size: 14px;
    margin-bottom: 20px;
}
.form .info span{
    color: crimson;
    margin-left: 3px;
}
.form .info span:hover{
    cursor: pointer;
    border-bottom: 1px solid crimson;
    
}
</style>