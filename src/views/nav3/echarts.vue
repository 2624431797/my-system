<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="20">
				<Echart
					:num1="num1"
					:num2="num2"
					:num3="num3"
					:num4="num4"
					:num5="num5"
				></Echart>
			</el-col>
        </el-row>
    </section>
</template>

<script>
import { getUserEchart } from "@/mock/mock"
import Echart from "@/components/Echart"

export default {
	data(){
		return {
			num1 : null,
			num2 : null,
			num3 : null,
			num4 : null,
			num5 : null,
			newArr : [],
        }
	},
	components : {
		Echart
	},
	methods : {
		async initGet(){
			await getUserEchart().then(res => {
				let newRes = Object.values(...res)	
				this.newArr = newRes
			})
			const newStr = this.newArr
			Promise.all(newStr).then(res => {
				this.num1 = res[0]
				this.num2 = res[1]
				this.num3 = res[2]
				this.num4 = res[3]
				this.num5 = res[4]
			})
		},
	},
	created(){
		this.initGet()
	},
}
</script>

<style lang="scss" scoped>
    .el-col {
        padding: 30px 20px;
		.chart-container {
			width: 100%;
			float: left;
		}
    }
</style>

/* Math.round(Math.random() * 1000) */