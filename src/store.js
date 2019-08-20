import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { //vuex中全局共享的数据
        uname: '', // 用户
        isLogin: false,
        carCount: 0, //购物车物品总数
        qx:false,
        resout:[],
        nowInput:''
    },
    mutations: { //修改vuex中全局共享的数据
        

        login(state, uname) { //登入
            state.uname = uname
            state.isLogin = true
        },
        logout(state) { //登出
            state.isLogin = false
        },

        setShopCarLength(state, length) {
            state.length = length
        },
        //购物车数量加1
        increment(state) {
            state.carCount++;
        },
        clear(state) {
            state.carCount = 0;
        },
        //购物车数量增加指定值
        updateCount(state, c) {
            state.carCount += c;
        },

    },
    actions: { //获取vuex中全局共享的数据

    },
    //获取vuex中全局共享数据
    getters: {
        getCartCount: function(state) {
            return state.carCount;
        },
        getisLogin:state=>{
            state.isLogin
        },
        getuname:state=>{
            state.uname
        },
    },
})