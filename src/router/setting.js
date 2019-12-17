export default {
    name : "设置项",
    path : "/",
    iconCls : 'fa fa-cog fa-fw',
    component : () => import("@/views/Home"),
    children : [
        {
            name : "角色管理",
            path : "/roling",
            component : () => import("@/views/nav5/Roling")
        },
        {
            name : "权限设置",
            path : "/setting",
            component : () => import("@/views/nav5/Setting")
        }
    ]
}