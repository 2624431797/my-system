export default {
    name : "审批表",
    path : "/",
    iconCls: 'fa fa-address-card',
    leaf: true,//只有一个节点
    component : () => import("@/views/Home"),
    children : [
        { 
            path: '/page', 
            component: () => import("@/views/nav2/Page"), 
            name: '请假审批' 
        }
    ]
}