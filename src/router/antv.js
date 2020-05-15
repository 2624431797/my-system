export default {
    name: "阿里表",
    path: "/",
    iconCls: "el-icon-s-grid",
    component: () => import("@/views/Home"),
    children: [{
        path: "/antv",
        component: () => import("@/views/nav7/main"),
        name: "阿里可视",
        hidden: true
    }]
}