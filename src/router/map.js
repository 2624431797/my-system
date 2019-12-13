export default {
    name : "地理图",
    path : "/",
    iconCls : 'fa fa-map-marker',
    component : () => import("@/views/Home"),
    children : [
        {
            name : "地理信息",
            path : "/map",
            component : () => import("@/views/nav4/Map")
        }
    ]
}