<template>
	<section class="userbox">
		<!-- 工具条 -->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleSearchStaff">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!-- 列表 -->
		<el-table :data="staffs" highlight-current-row v-loading="loading" style="width: 100%; margin-bottom: 30px">
			<el-table-column prop="id" type="index" width="60">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120" sortable>
			</el-table-column>
			<el-table-column prop="sex" label="性别" width="120" :formatter="formatSex" sortable>
			</el-table-column>
			<el-table-column prop="age" label="年龄" width="120" sortable>
			</el-table-column>
			<el-table-column prop="birth" label="生日" width="150" sortable>
			</el-table-column>
			<el-table-column prop="mobile" label="手机号" min-width="140" sortable>
			</el-table-column>
			<el-table-column prop="email" label="电子邮箱" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="address" label="地址" min-width="200" sortable>
			</el-table-column>
			<el-table-column prop="time" label="入职时间" min-width="180" sortable>
			</el-table-column>
		</el-table>
		<!-- 分页 -->
		<el-pagination
			layout="total, prev, pager, next, jumper"
			style="margin-left: 50px;"
			:total="this.total"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
		>
		</el-pagination>
	</section>
</template>
<script>
import { getStaffList, searchStaff } from "@/mock/mock"

export default {
	data(){
		return {
			filters : {
				name: ''
			},
			staffs : [],
			total : 0,
			pageSize: 12,
			pageNo: 1,
			loading : false,
		}
	},
	methods: {
		formatSex(row, column){
			if(row.sex){ return "男" } return "女";
		},
		handleSearchStaff(){
			if(!this.filters.name){
                this.getStaff()
			}
			else{
				let para = {
					page: this.pageNo,
                    name: this.filters.name
				}
				this.loading = true
				searchStaff(para).then(res => {
					setTimeout(() => {
						let newUserlist = [res.stafflist]
						this.staffs = newUserlist
						this.total = res.total

						this.loading = false
					}, 1000);
				})
			}
		},
		getStaff(){
			getStaffList().then(res => {
				this.loading = true
				setTimeout(() => {
					this.staffs = res.stafflist
					this.total = res.total

					this.loading = false
				}, 1000);
			})
		},
		handleSizeChange(val) {
			this.pageSize = val
			this.getStaff()
		},
		handleCurrentChange(val) {
			this.pageNo = val
			this.getStaff()
		},
	},
	created() {
		this.getStaff()
	}
}
</script>

<style lang="scss" scoped>

</style>