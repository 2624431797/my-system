import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

//$http
import axios from "axios"
Vue.prototype.$http = axios

//通用样式
import "./styles/main.scss"

//添加星空特效
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

//cookie
import Cookies from 'js-cookie'
Vue.use(Cookies)

//vue验证器
import Validator from 'vue-validator'
Vue.use(Validator)

//DataV
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

//图标
import 'font-awesome/css/font-awesome.min.css'

//复制粘贴
import clipboard from 'clipboard'
Vue.prototype.clipboard = clipboard

//moment
import moment from 'moment'
Vue.prototype.$moment = moment

//Mock
import Mock from './mock'
Mock.bootstrap()

//BaiDu地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    ak: 'YVE2oN3K3SDZH8XpUkYj6ezf2h4wIkNf' // 百度地图秘钥
})

//路由守卫
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }

    let user = JSON.parse(sessionStorage.getItem('user'));

    if (!user && to.path != '/login') {
        next({
            path: '/login'
        })
    } else {
        next()
    }
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')