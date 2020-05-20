export default {
    name: "阿里表",
    path: "/",
    iconCls: "el-icon-s-grid",
    component: () => import("@/views/Home"),
    children: [{
        path: "/antvline",
        component: () => import("@/views/nav7/main"),
        name: "横向可视",
        hidden: true
    },
    {
        path: "/antvkeyboard",
        component: () => import("@/views/nav7/keyboard"),
        name: "纵向可视",
        hidden: true
    }]
}