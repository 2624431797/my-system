<template>
    <section class="mapbox">
        <el-row>
            <el-col :span="20">
                <div class="map-container">
                    <div ref="map" style="width: 1600px; height: 960px;"></div>
                </div>
            </el-col>
        </el-row>
    </section>
</template>    

<script>
import echarts from "echarts";
import 'echarts/map/js/china';
import option  from "./map";
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)

export default {
    name: "mapDemo",
    data() {
        return {

        }
    },
  //钩子函数  不了解的话 建议看看 vue的生命周期
    mounted(){
        this.mapEchartsInit();
    },
    methods : {
        mapEchartsInit(){
            var myChart=echarts.init(this.$refs.map);
            myChart.setOption(option, true);
        }
    }
}
</script>

<style lang="scss">
    .map-container{
        width: 100%;
        height: 100%;
    }
</style>