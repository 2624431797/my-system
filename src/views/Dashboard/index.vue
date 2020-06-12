<template>
    <section class="app-box">
        <div class="app-container">
            <div class="container">
                <ul class="main">
                    <section class="item-map" :class="classNameList[1]">
                        <BaiDuMap />
                    </section>
                    <li
                        v-for="(item, index) in list"
                        :key="index"
                        class="item"
                        :class="index == 0 ? classNameList[index] : classNameList[index + 1]"
                    >
                        <section :is="item.className" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import BaiDuMap from "./components/BaiDuMap"
import Child from "./components/Child"

export default {
    components: {
        BaiDuMap,
        Child
    },
    data(){
        return {
            refreseChart: false,
            list: [
                {
                    index: '1',
                    className: 'Child'
                },
                {
                    index: '2',
                    className: 'Child'
                },
                {
                    index: '3',
                    className: 'Child'
                },
                {
                    index: '4',
                    className: 'Child'
                },
                {
                    index: '5',
                    className: 'Child'
                },
                {
                    index: '6',
                    className: 'Child'
                },
                {
                    index: '7',
                    className: 'Child'
                },
                {
                    index: '8',
                    className: 'Child'
                }
            ],
            //初始化数组
            nameList: [
                'item-1',
                'item-2',
                'item-3',
                'item-4',
                'item-5',
                'item-6',
                'item-7',
                'item-8',
                'item-9'
            ],
            classNameList: []
        }
    },
    mounted(){
        this.handlerInitGridDom(this.list)
    },
    methods: {
        handlerInitGridDom(list){
            if (list.length === 8) {
                this.classNameList = this.nameList.slice()
            }
            else if (list.length === 7) {
                this.classNameList = this.nameList.slice()
                this.classNameList.splice(6, 2, 'item-6-7')
            }
            else if (list.length === 6) {
                this.classNameList = this.nameList.slice(0, 7).concat(this.nameList.slice(-1, -2))
                this.classNameList.splice(1, 1, 'item-2-1-5')
            }
            else if (list.length === 5) {
                this.classNameList = this.nameList.slice(0, 6).concat(this.nameList.slice(-1, -2))
                this.classNameList.splice(0, 1, 'item-1-1-3')
                this.classNameList.splice(2, 1, 'item-3-1-3')
                this.classNameList.splice(3, 1, 'item-4-3-5')
                this.classNameList.splice(4, 1, 'item-5-2-4')
                this.classNameList.splice(5, 1, 'item-5-3-5')
            }
            else if (list.length === 4) {
                this.classNameList = this.nameList.slice(0, 6)
                this.classNameList.splice(0, 1, 'item-1-1-3')
                this.classNameList.splice(2, 1, 'item-3-1-3')
                this.classNameList.splice(3, 1, 'item-4-3-5')
                this.classNameList.splice(4, 1, 'item-5-3-5')
                this.classNameList.splice(1, 1, 'item-2-1-5')
            }
            this.refreseChart = !this.refreseChart
        }
    }
}
</script>

<style lang="scss" scoped>
    .app-box{
        background: #001646;
        .app-container{
            width: 100%;
            height: 100%;
            .container{
                width: 100%;
                height: 960px;
                margin-top: 80px;
                background: #001646;
                /* Grid布局 */
                .main{
                    position: relative;
                    display: grid;
                    width: 100%;
                    top: 0;
                    margin: 0;
                    padding: 0 5px;
                    grid-template-columns: 28% 390px 390px 28%;
                    grid-template-rows: 304px 152px 152px 304px;
                    grid-row-gap: 16px;
                    grid-column-gap: 14px;
                    .item {
                        border: 1px solid #e5e4e9;
                    }
                    .item-1 {

                    }
                    .item-1-1-3 {
                        grid-column-start: 1;
                        grid-column-end: 2;
                        grid-row-start: 1;
                        grid-row-end: 3;
                    }
                    .item-2 {
                        grid-column-start: 2;
                        grid-column-end: 4;
                        grid-row-start: 1;
                        grid-row-end: 4;
                    }
                    .item-2-1-5 {
                        grid-column-start: 2;
                        grid-column-end: 4;
                        grid-row-start: 1;
                        grid-row-end: 5;
                    }
                    .item-3 {

                    }
                    .item-3-1-3 {
                        grid-column-start: 4;
                        grid-column-end: 5;
                        grid-row-start: 1;
                        grid-row-end: 3;
                    }
                    .item-4 {
                        grid-column-start: 1;
                        grid-column-end: 2;
                        grid-row-start: 2;
                        grid-row-end: 4;
                    }
                    .item-4-3-5 {
                        grid-column-start: 1;
                        grid-column-end: 2;
                        grid-row-start: 3;
                        grid-row-end: 5;
                    }
                    .item-5 {
                        grid-column-start: 4;
                        grid-column-end: 5;
                        grid-row-start: 2;
                        grid-row-end: 4;
                    }
                    .item-5-3-5 {
                        grid-column-start: 4;
                        grid-column-end: 5;
                        grid-row-start: 3;
                        grid-row-end: 5;
                    }
                    .item-5-2-4{
                        grid-column-start: 2;
                        grid-column-end: 4;
                        grid-row-start: 4;
                        grid-row-end: 5;
                    }
                    .item-6 {

                    }
                    .item-7 {

                    }
                    .item-6-7 {
                        grid-column-start: 2;
                        grid-column-end: 4;
                        grid-row-start: 4;
                        grid-row-end: 5;
                    }
                    .item-8 {

                    }
                    .item-9 {

                    }
                    .item-3-9 {
                        grid-column-start: 4;
                        grid-column-end: 5;
                        grid-row-start: 3;
                        grid-row-end: 5;
                    }
                }
                /* Grid布局 */
            }
        }
    }
</style>