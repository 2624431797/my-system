export default {
    name : "大数据",
    path : "/",
    iconCls : 'el-icon-message',//图标样式class
    component : () => import("@/views/Home"),
    children : [
        { 
            path: '/main', 
            component: () => import("@/views/nav1/Main"), 
            name: '员工主页', 
            hidden: true 
        },
        { 
            path: '/graph', 
            component: () => import("@/views/nav1/Graph"), 
            name: '员工图表', 
            hidden: true 
        },
        { 
            path: '/table', 
            component: () => import("@/views/nav1/Table"), 
            name: '员工信息',
            hidden: true 
        },
        { 
            path: '/user', 
            component: () => import("@/views/nav1/User"), 
            name: '员工列表',
            hidden: true 
        },
        { 
            path: '/order', 
            component: () => import("@/views/nav1/Order"), 
            name: '员工订单',
            hidden: true 
        },
    ]
}