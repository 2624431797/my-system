export default {
    title : {
        text: '员工地理分布',
        subtext: '后台管理',
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['员工分布']
    },
    dataRange: {
        min: 0,
        max: 3000,
        x: 'left',
        y: 'bottom',
        text:['max','min'],           
        calculable : true
    },
    toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {
            name: '员工分布',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
            {name: '山东',value:2500},
            {name: '北京',value: 2222},
            {name: '天津',value:1932},
            {name: '山西',value: 1200},
            {name: '陕西',value:888},
            {name: '四川',value: 1762},
            {name: '广东',value:1389},
            {name: '福建',value: 560},
            {name: '香港',value:999},
            {name: '澳门',value: 1111}
            ]
        }
    ]
  };