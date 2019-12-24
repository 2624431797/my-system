<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="20">
                <div id="chartColumn" style="width:100%; height:600px;"></div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
import echarts from 'echarts';

export default {
	data(){
		return {
            
        }
	},
	mounted(){
		var chartBar = echarts.init(document.querySelector('#chartColumn'))
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
					data:[
						{value:335, name:'员工出勤'},
						{value:310, name:'员工迟到'},
						{value:234, name:'员工早退'},
						{value:135, name:'员工请假'},
						{value:1548, name:'员工缺勤'}
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
		chartBar.setOption(option)
	}
}

</script>


<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
    /*.chart div {
        height: 400px;
        float: left;
    }*/

    .el-col {
        padding: 30px 20px;
    }
</style>
