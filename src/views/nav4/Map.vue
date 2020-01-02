<template>
    <section class="mapbox">
        <el-row>
            <el-col :span="20">
                <div class="map-container">
                    <div 
                        ref="map" 
                        style="width: 1600px; height: 960px;"
                    ></div>
                </div>
            </el-col>
        </el-row>
    </section>
</template>    

<script>
import echarts from "echarts"
import { getUserMap } from "@/mock/mock"

import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)

export default {
    data(){
        return {
            mapName : [],
            mapValue : [],
        }
    },
    methods : {
        initMap(){
            var option = {
                title : {
                    text: '员工地理分布',
                    subtext: '后台管理',
                    x: 'center'
                },
                tooltip : {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['员工分布']
                },
                dataRange: {
                    min: 0,
                    max: 3000,
                    x: 'left',
                    y: 'bottom',
                    text: ['max','min'],           
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
                            normal : {label: { show : true }},
                            emphasis : {label: { show : true }}
                        },
                        data:[
                            {name: this.mapName[0], value: this.mapValue[0]},
                            {name: this.mapName[1], value: this.mapValue[1]},
                            {name: this.mapName[2], value: this.mapValue[2]},
                            {name: this.mapName[3], value: this.mapValue[3]},
                            {name: this.mapName[4], value: this.mapValue[4]},
                            {name: this.mapName[5], value: this.mapValue[5]},
                            {name: this.mapName[6], value: this.mapValue[6]},
                            {name: this.mapName[7], value: this.mapValue[7]},
                            {name: this.mapName[8], value: this.mapValue[8]},
                            {name: this.mapName[9], value: this.mapValue[9]},
                            {name: this.mapName[10], value: this.mapValue[10]},
                            {name: this.mapName[11], value: this.mapValue[11]},
                        ]
                    }
                ]
            }
            this.myChart.setOption(option)
        },
        initLoad(){
            getUserMap().then(res => {
                const { maplist } = res
                maplist.map(item => {
                    this.mapName.push((item.name).slice(0, 2))
                    this.mapValue.push(item.value)
                })
            })
        }
    },
    watch : {
        mapName(){
            this.initMap()
        },
        mapValue(){
            this.initMap()
        }
    },
    created(){
        this.initLoad()
    },
    mounted(){
        this.myChart = echarts.init(this.$refs.map)
        this.initMap()
    }
}
</script>

<style lang="scss">
    .map-container{
        width: 100%;
        height: 100%;
    }
</style>