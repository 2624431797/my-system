<template>
	<section class="graphbox">
		<div class="graph-head">
			<el-row :gutter="20">
				<el-col :span="6">
					<div class="grid-content bg-purple graph-head-item">
						<div class="graph-head-item-icon graph-head-item-icon-zu">
							<i class="iconfont icon-wode"></i>
						</div>
						<div class="graph-head-item-mess">
							<p>New Visits</p>
							<span>102,400</span>
						</div>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple graph-head-item">
						<div class="graph-head-item-icon graph-head-item-icon-xinxi">
							<i class="iconfont icon-xinxi1"></i>
						</div>
						<div class="graph-head-item-mess">
							<p>Messages</p>
							<span>81,212</span>
						</div>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple graph-head-item">
						<div class="graph-head-item-icon graph-head-item-icon-iconmoney">
							<i class="iconfont icon-iconmoney"></i>
						</div>
						<div class="graph-head-item-mess">
							<p>Purchases</p>
							<span>9,280</span>
						</div>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple graph-head-item">
						<div class="graph-head-item-icon graph-head-item-icon-gouwuche">
							<i class="iconfont icon-gouwuche"></i>
						</div>
						<div class="graph-head-item-mess">
							<p>Shoppings</p>
							<span>13,600</span>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
		<div class="graph-info">
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
		</div>
		<div class="graph-container">
			<el-row :gutter="20">

			</el-row>
		</div>
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
				["userCount", "orderCount", "adminCount", "allUserCount", "allOrderCount", "allAdminCount"].forEach(key => {
					if(key in res.user){
						this[key] = res.user[key]
					}
				})
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
			const date = dtime(new Date().getTime() - 86400000 * i).format('YYYY-MM-DD')
			this.sevenDay.push(date)
		}
	},
}
</script>

<style lang="scss" scoped>
	.graphbox{
		position: relative;
		background: #f0f2f5;
		overflow: hidden;
		.graph-head{
			width: 100%;
			height: 108px;
			margin-top: 20px;
			.graph-head-item{
				position: relative;
				height: 108px;
				font-size: 12px;
				color: #666;
				background: #fff;
				box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
				border-color: rgba(0, 0, 0, 0.05);
				overflow: hidden;
				cursor: pointer;
				.graph-head-item-icon{
					float: left;
					width: 48px;
					height: 48px;
					text-align: center;
					padding: 16px;
					margin: 14px 0 0 14px;
					border-radius: 6px;
					transition: all 0.38s ease-out;
					i{
						width: 48px;
						height: 48px;
						font-size: 48px;
						transition: all 0.38s ease-out;
					}
					.icon-wode{
						color: #40c9c6;
					}
					.icon-xinxi1{
						color: #36a3f7;
					}
					.icon-iconmoney{
						color: #f4516c;
					}
					.icon-gouwuche{
						color: #34bfa3;
					}
				}
				.graph-head-item-mess{
					float: right;
					font-weight: bold;
					margin: 26px;
					margin-left: 0px;
					p{
						line-height: 18px;
						color: rgba(0, 0, 0, 0.45);
						font-size: 16px;
						margin-bottom: 12px;
					}
					span{
						font-size: 20px;
						color: #333;
					}
				}
				&:hover {
					.iconfont{
						color: #fff;
					}
					.graph-head-item-icon-zu{
						background: #40c9c6;
					}
					.graph-head-item-icon-xinxi{
						background: #36a3f7;
					}
					.graph-head-item-icon-iconmoney{
						background: #f4516c;
					}
					.graph-head-item-icon-gouwuche{
						background: #34bfa3;
					}
				}
			}
		}
		.graph-info{
			background: #fff;
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
		}
	}
</style>