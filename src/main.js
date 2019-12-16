import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
  
Vue.use(VueQuillEditor)

//通用样式
import "./styles/main.scss"

//添加星空特效
import VueParticles from 'vue-particles'  
Vue.use(VueParticles)  

//DataV
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

import 'font-awesome/css/font-awesome.min.css'

import Mock from './mock'
Mock.bootstrap();

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }

    let user = JSON.parse(sessionStorage.getItem('user'));

    if (!user && to.path != '/login') {
        next({ path: '/login' })
    } 
    else {
        next()
    }
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

