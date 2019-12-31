<template>
    <div class="line">
        <div id="line" style="width: 90%;height:450px;"></div>
    </div>
</template>

<script>
import echarts from "echarts"

export default {
    props: ["sevenDate1", "sevenDate2", "sevenDate3", "sevenDay"],
    methods: {
        initData(){
            const colors = ['#5793f3', '#675bba', '#d14a61'];
            const option = {
                color: colors,
                title: {
                    text: '走势图',
                    subtext: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['新注册用户', '新增订单', '新增管理员']
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['bar', 'line']},
                        restore: {},
                    }
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: this.sevenDay
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '用户',
                        min: 0,
                        max: 200,
                        position: 'left',
                        axisLine: {
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: '订单',
                        min: 0,
                        max: 200,
                        position: 'right',
                        axisLine: {
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                ],
                series: [
                    {
                        name:'新注册用户',
                        type:'line',
                        data: this.sevenDate1,
                        yAxisIndex: 1,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'新增订单',
                        type:'line',
                        data: this.sevenDate2,
                        yAxisIndex: 1,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'新增管理员',
                        type:'line',
                        data: this.sevenDate3,
                        yAxisIndex: 1,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    }
                ]
            }
            this.myChart.setOption(option)
        }
    },
    watch : {
        sevenDate1(){
            this.initData()
        },
        sevenDate2(){
            this.initData()
        },
        sevenDate3(){
            this.initData()
        },
        sevenDay(){
            this.initData()
        },
    },
    mounted(){
        this.myChart = echarts.init(document.getElementById('line'));
        this.initData()
    },
}
</script>

<style lang="scss">
    .line1{
        display: flex;
        justify-content: center;
    }
</style>
