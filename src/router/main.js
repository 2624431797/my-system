export default {
    name: "Dashboard",
    path: "/",
    iconCls: "fa fa-home",
    component: () => import("@/views/Home"),
    children : [
        {
            name : "Dashboard",
            path : "/Dashboard",
            component : () => import("@/views/Dashboard")
        }
    ]
}