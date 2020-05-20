import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from "./login"
import NotFound from "./notFound"
import Home from "./home"
import Page from "./page"
import Echart from "./echart"
import AMap from "./map"
import Setting from "./setting"
import Check from "./cheaking"
import Explain from "./explain"
import AntV from "./antv"
import SetUserAdd from "./setuseradd"

export default new VueRouter({
    routes: [{
            path: "/",
            hidden: true,
            redirect: "/login"
        },
        Login,
        NotFound,
        Home,
        Page,
        Echart,
        AMap,
        Setting,
        Check,
        AntV,
        Explain,
        SetUserAdd,
        {
            path: "*",
            hidden: true,
            redirect: "/404"
        }
    ]
})