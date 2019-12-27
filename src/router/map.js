export default {
    name : "地理图",
    path : "/",
    iconCls : 'fa fa-map-marker',
    component : () => import("@/views/Home"),
    children : [
        {
            name : "百度地图",
            path : "/bmap",
            component : () => import("@/views/nav4/BMap.vue")
        },
        {
            name : "地理信息",
            path : "/map",
            component : () => import("@/views/nav4/Map.vue")
        }
    ]
}