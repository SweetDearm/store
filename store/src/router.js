import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Headerbar from './components/view/Headerbar.vue'
import Headers from './components/view/Headers.vue'
import Middles from './components/view/Middles.vue'
import Footers from './components/view/Footers.vue'
import Sidebar from './components/view/Sidebar.vue'
import Ring from './components/view/Ring.vue'
import Login from './components/view/Login.vue'
import Cart from './components/view/Cart.vue'
import Earrings from './components/view/Earrings.vue'
import Products from './components/view/Products.vue'
import Details from './components/view/Details.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Index,
          
        },
        { path: '/headers', component: Headers },
        { path: '/headerbar', component: Headerbar },
        { path: '/middles', component: Middles },
        { path: '/footers', component: Footers },
        { path: '/sidebar', component: Sidebar },
        { path: '/ring', component: Ring },
        { path: '/login', component: Login },
        {
            path: '/cart',
            component: Cart,
            meta: {
                requireAuth: true, //添加该字段，表示进入这个路由是需要登录的
            }
        },
        { path: '/earrings', component: Earrings },
        { path: '/products', component: Products },
        { path: '/details', component: Details },
    ]
})