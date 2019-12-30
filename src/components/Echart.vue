<template>
    <section class="echartbox">
        <div id="chartColumn" style="width:100%; height:600px;"></div>
    </section>
</template>

<script>
import echarts from "echarts"

export default {
    props : ["num1", "num2", "num3", "num4", "num5"],
    methods : {
        initDate(){
		    var option = {
                title : {
                    text: '员工出勤情况',
                    subtext: '基于Vue框架',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['员工出勤', '员工迟到', '员工早退', '员工请假', '员工缺勤']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: this.num1, name: '员工出勤'},
                            {value: this.num2, name: '员工迟到'},
                            {value: this.num3, name: '员工早退'},
                            {value: this.num4, name: '员工请假'},
                            {value: this.num5, name: '员工缺勤'},
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                            }
                        }
                    }
                ]
            }
            this.chartBar.setOption(option)
        }
    },
    watch : {
        num1(){
            this.initDate()
        },
        num2(){
            this.initDate()
        },
        num3(){
            this.initDate()
        },
        num4(){
            this.initDate()
        },
        num5(){
            this.initDate()
        },
    },
	mounted(){     
        this.chartBar = echarts.init(document.querySelector('#chartColumn'))
        this.initDate()
	}
}
</script>

<style lang="scss" scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
</style>