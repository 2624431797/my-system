export default {
    path : "/",
    hidden : true,
    component : () => import("@/views/Home"),
    children : [
        {
            name : "权限用户添加修改",
            path : "/setuseradd",
            component : () => import("@/views/nav5/SetUserAdd")
        }
    ]
    
}