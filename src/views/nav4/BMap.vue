<template>
    <section class="bmapbox">
        <template>
            <baidu-map 
                :map-click="false"
                class="bmap-view"
                style="height: 800px;"
                @ready="handler"
                @mousemove="syncpolygon"
                @click="paintpolygon"
                @rightclick="newpolygon"
            >
                <!-- 定位 -->
                <bm-geolocation 
                    anchor="BMAP_ANCHOR_BOTTOM_RIGHT" 
                    :showAddressBar="true" 
                    :autoLocation="true"
                ></bm-geolocation>
                <!-- 比例尺 -->
                <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
                <!-- 缩放 -->
                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                <!-- 地图类型 -->
                <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
                <!-- 绘制图形 -->
                <bm-polygon 
                    v-for="path of polygon.paths"
                    :key="path.toString()"
                    :path="path" 
                    stroke-color="blue"
                    fill-color="yellow"
                    :fill-opacity="0.5"
                    :stroke-opacity="0.5"
                    :stroke-weight="2"
                ></bm-polygon>
                <!-- 绘制按钮 -->
                <bm-control>
                    <button 
                        class="bmap-view-btn"
                        @click="toggle('polygon')"
                    >{{ polygon.editing ? '停止绘制' : '开始绘制' }}</button>
                </bm-control>
            </baidu-map>
        </template>
    </section>
</template>

<script>
export default {
    data(){
        return {
            map: {},
            //地图绘制
            polygon: {
                editing: false,
                paths: []
            }
        }
    },
    methods: {
        handler ({ BMap, map }) {
            this.map = map
            map.enableScrollWheelZoom(true)
            map.centerAndZoom("青岛市", 12)
        },
        toggle (name) {
            this[name].editing = !this[name].editing
            // 在这里做一步判断，如果有路径且开启绘制就把原来的路径清空
            if (this.polygon.paths && this.polygon.editing) {
                this.polygon.paths = []
            }
        },
        syncpolygon (e) {
            if (!this.polygon.editing) {
                return
            }
            const {paths} = this.polygon
            if (!paths.length) {
                return
            }
            const path = paths[paths.length - 1]
            if (!path.length) {
                return
            }
            if (path.length === 1) {
                path.push(e.point)
            }
            this.$set(path, path.length - 1, e.point)
        },
        newpolygon (e) {
            if (!this.polygon.editing) {
                return
            }
            const {paths} = this.polygon
            if(!paths.length) {
                paths.push([])
            }
            const path = paths[paths.length - 1]
            path.pop()
            if (path.length) {
                paths.push([])
            }
        },
        paintpolygon (e) {
            if (!this.polygon.editing) {
                return
            }
            const {paths} = this.polygon
            !paths.length && paths.push([])
            paths[paths.length - 1].push(e.point)
        }
    },
    created(){

    }
}
</script>

<style lang="scss">
    .bmapbox{
        border: 1px solid #ccc;
        background: #fff;
        .bmap-view {
            width: 100%;
            .BMap_noprint{
                font-weight: 400;
                line-height: 20px;
                font-size: 14px;
                letter-spacing: .01em;
                .bmap-view-btn{
                    min-width: 88px;
                    min-height: 36px;
                    margin: 40px 10px 6px;
                    padding: 0 16px;
                    display: inline-block;
                    position: relative;
                    overflow: hidden;
                    user-select: none;
                    cursor: pointer;
                    background: none;
                    border: 0;
                    border-radius: 2px;
                    transition: all .4s cubic-bezier(.25,.8,.25,1);
                    color: currentColor;
                    font-family: inherit;
                    font-size: 14px;
                    font-style: inherit;
                    font-variant: inherit;
                    font-weight: 500;
                    letter-spacing: inherit;
                    line-height: 36px;
                    text-align: center;
                    text-transform: uppercase;
                    text-decoration: none;
                    vertical-align: top;
                    white-space: nowrap;
                    background-color: #3f51b5;
                    color: rgba(255, 255, 255, .87);
                    box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
                }
            }
        }
    }
</style>