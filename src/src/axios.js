import Vue from 'vue' //引入vue实例
import axios from "axios" //引入axios
axios.defaults.withCredentials = true //发送请求保存session信息
axios.defaults.baseURL = "http://127.0.0.1:3000" //设置请求基础路径
Vue.prototype.axios = axios //将axios注册vue实例
    //在main中引入axios.js