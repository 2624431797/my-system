export default {
    name : "概况图",
    path : "/",
    iconCls : 'fa fa-bar-chart',
    component : () => import("@/views/Home"),
    children : [
        {
            name : "员工考勤",
            path : '/echarts',
            component : () => import("@/views/nav3/Echarts")
        }
    ]
}