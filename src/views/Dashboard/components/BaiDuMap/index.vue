<template>
    <section class="map-box">
        <div class="map-container">
            <baidu-map
                class="map-content"
                :center="center"
                :zoom="zoom"
                :map-style="mapStyle"
                @ready="handler"
                @zoomend="handlerZoom"
            >
                <!-- 点聚合 -->
                <bml-marker-clusterer :average-center="true">
                    <bm-marker
                        :position="{lng: marker.lng, lat: marker.lat}"
                        v-for="marker of markers"
                        :key="marker.id"
                    />
                </bml-marker-clusterer>
                <!-- 地图切换 -->
                <bm-map-type
                    :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
                    anchor="BMAP_ANCHOR_TOP_LEFT"
                />
                <!-- 定位 -->
                <bm-geolocation
                    anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                    :show-address-bar="true"
                    :auto-location="true"
                />
            </baidu-map>
        </div>
    </section>
</template>

<script>
import { BmlMarkerClusterer } from 'vue-baidu-map'

export default {
    name: "BaiDuMap",
    components: {
        BmlMarkerClusterer
    },
    data(){
        return {
            zoom: 7,
            center: '青岛市',
            mapStyle: {},
            // 弹出框信息配置
            infoWindow: {
                show: false,
                autoPan: true,
                title: '火灾报警',
                position: {},
                contents: '青岛维客广场'
            },
            // 点聚合假数据
            markers: [
                {
                    lng: 121.287973,
                    lat: 36.326908
                },
                {
                    lng: 121.388705,
                    lat: 36.221165
                },
                {
                    lng: 116.404,
                    lat: 39.915
                },
                {
                    lng: 117.958049,
                    lat: 35.524878
                },
                {
                    lng: 117.902736,
                    lat: 35.390909
                },
                {
                    lng: 117.604415,
                    lat: 35.390909
                },
                {
                    lng: 127.794001,
                    lat: 44.073246
                },
                {
                    lng: 127.781353,
                    lat: 44.06081
                },
                {
                    lng: 127.380061,
                    lat: 44.135388
                },
                {
                    lng: 116.852,
                    lat: 38.1512
                }
            ],
        }
    },
    methods: {
        // 初始化百度地图
        handler({ BMap, map }) {
            map.enableScrollWheelZoom(true)
        },
        // 地图缩放后筛选需要展示的  区域
        handlerZoom(e) {
            this.zoom = e.target.getZoom()
            this.infoWindowClose()
        },
        // 打开信息窗口
        infoWindowOpen(e) {
            this.infoWindow.show = true
        },
        // 关闭信息窗口
        infoWindowClose(e) {
            this.infoWindow.show = false
        }
    },
    created(){

    }
}
</script>

<style lang="scss" scoped>
    .map-box{
        height: 100%;
        background: #fff;
        .map-container{
            position: relative;
            width: 100%;
            height: 100%;
            .map-content {
                height: 100%;
                .camera-box{
                    position: absolute;
                    top: 0;
                    right: 0;
                    .camera-item{
                        width: 150px;
                        height: 100px;
                    }
                }
                .info-btn{
                    width: 160px;
                    height: 36px;
                    color: #fff;
                    font-size: 14px;
                    border: 0;
                    border-radius: 5px;
                    background: #eb6100;
                }
            }
        }
    }
</style>