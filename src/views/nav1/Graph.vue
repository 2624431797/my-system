<template>
	<section class="graphbox">
		<div class="data_section">
			<header class="section_title">数据统计</header>
			<el-row :gutter="20" style="margin-bottom: 10px;">
                <el-col :span="4"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">{{userCount}}</span> 新增用户</div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">{{orderCount}}</span> 新增订单</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{adminCount}}</span> 新增管理员</div></el-col>
			</el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allUserCount}}</span> 注册用户</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allOrderCount}}</span> 订单</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allAdminCount}}</span> 管理员</div></el-col>
            </el-row>
		</div>
		<Tendency 
			:sevenDate1="sevenDate1"
			:sevenDate2="sevenDate2"
			:sevenDate3="sevenDate3"
			:sevenDay="sevenDay"
		></Tendency>
	</section>
</template>

<script>
import { chartStaffList } from "@/mock/mock"
import Tendency from "@/components/Tendency"
import dtime from 'time-formater'

export default {
	data(){
		return {
			userCount: null,
			orderCount: null,
			adminCount: null,
			allUserCount: null,
			allOrderCount: null,
			allAdminCount: null,
			newRes: null,
			sevenDay: [],
			sevenDate1: [],
			sevenDate2: [],
			sevenDate3: [],
		}
	},
	components: {
		Tendency,
	},
	methods: {
		initData(){
			chartStaffList().then(res => {
				this.userCount = res.user.usercount
				this.orderCount = res.user.ordercount
				this.adminCount = res.user.admincount
				this.allUserCount = res.user.allusercount
				this.allOrderCount = res.user.allordercount
				this.allAdminCount = res.user.alladmincount
			})
		},
		async getSevenData(){
			await chartStaffList().then(res => {
				let newStr = Object.values(res.chart)

				let newobj1 = Object.values(newStr[0])
				let newobj2 = Object.values(newStr[1])
				let newobj3 = Object.values(newStr[2])

				let newArr1 = Object.values(newobj1[0])
				let newArr2 = Object.values(newobj2[0])
				let newArr3 = Object.values(newobj3[0])

				const newArr = [[], [], []]
				newArr[0] = newArr1
				newArr[1] = newArr2
				newArr[2] = newArr3

				this.newRes = newArr
			})
			const newStr = this.newRes
			Promise.all(newStr).then(res => {
				this.sevenDate1 = res[0]
				this.sevenDate2 = res[1]
				this.sevenDate3 = res[2]
			})
		}
	},
	created(){
		this.getSevenData()
		this.initData()
		for (let i = 6; i > -1; i--) {
			const date = dtime(new Date().getTime() - 86400000*i).format('YYYY-MM-DD')
			this.sevenDay.push(date)
		}
	},
}
</script>

<style lang="scss" scoped>
	.data_section{
		padding: 20px;
		margin-bottom: 40px;
		.section_title{
			text-align: center;
			font-size: 30px;
			margin-bottom: 10px;
		}
		.data_list{
			text-align: center;
			font-size: 14px;
			color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            .data_num{
                color: #333;
                font-size: 26px;
            }
            .head{
                border-radius: 6px;
                font-size: 22px;
                padding: 4px 0;
                color: #fff;
                display: inline-block;
            }
        }
        .today_head{
            background: #FF9800;
        }
        .all_head{
            background: #20A0FF;
		}
		.wan{
			.sc{
				font-size: 16px;
				color: #333;
			}
		}
	}
</style>