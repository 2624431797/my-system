export default {
    name : "说明书",
    path : "/",
    iconCls : 'el-icon-warning',
    component : () => import("@/views/Home"),
    children : [
        {
            name : "员工说明",
            path : "/explain",
            component : () => import("@/views/nav6/Explain")
        },
        {
            name : "员工轮播",
            path : "/userbanner",
            component : () => import("@/views/nav6/Userbanner")
        }
    ]
}