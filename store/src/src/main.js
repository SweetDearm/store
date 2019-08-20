import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./axios" //在main中引入axios.js
import $ from 'jquery'
Vue.prototype.$ = $;
import ElementUI from 'element-ui'
//引入vuex
import Vuex from "vuex"
import './assets/css/common.css'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/font/iconfont.css'
Vue.use(ElementUI);
Vue.use(Vuex);
// 8：创建store
// var store = new Vuex.Store({
//     //vuex中全局共享数据
//     state: {
//         uname: '', // 用户名
//         isLogin: false,
//         carCount: 0, //购物车物品总数
//         cartGoods: [] // 添加到购物车中的商品
//     },
//     //修改vuex中全局共享数据
//     mutations: {
//         login(state, uname) { //登入
//             state.uname = uname
//             state.isLogin = true
//         },
//         logout(state) { //登出
//             state.isLogin = false
//         },
//         //购物车数量加1
//         increment(state) {
//             state.carCount++;
//         },
//         clear(state) {
//             state.carCount = 0;
//         },
//         //购物车数量增加指定值
//         updateCount(state, c) {
//             state.carCount += c;
//         }
//     },
//     //获取vuex中全局共享数据
//     getters: {
//         getCartCount: function(state) {
//             return state.carCount;
//         }
//     },
// })
router.afterEach(() => {
    window.scrollTo(0, 0)
})
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');