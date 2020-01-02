<template>
    <section class="fillcontain">
        <div class="table_container">
            <el-table
			    :data="tableData"
			    style="width: 100%"
				v-loading="loading"
            >
			    <el-table-column type="expand">
					<template slot-scope="props">
						<el-form 
							label-position="left" 
							inline 
							class="demo-table-expand"
						>
							<el-form-item label="用户名:">
								<span>{{ props.row.expand.name }}</span>
							</el-form-item>
							<el-form-item label="用户手机号:">
								<span>{{ props.row.expand.user_mobile }}</span>
							</el-form-item>
							<el-form-item label="店铺名称:">
								<span>{{ props.row.expand.restaurant_name }}</span>
							</el-form-item>
							<el-form-item label="收货地址:">
								<span>{{ props.row.expand.user_address }}</span>
							</el-form-item>
							<el-form-item label="店铺 ID:">
								<span>{{ props.row.expand.restaurant_id }}</span>
							</el-form-item>
							<el-form-item label="店铺地址:">
								<span>{{ props.row.expand.restaurant_address }}</span>
							</el-form-item>
						</el-form>
					</template>
			    </el-table-column>
				<el-table-column 
					type="index" 
					width="55"
				></el-table-column>
			    <el-table-column
					label="订单 ID"
					prop="id"
				></el-table-column>
			    <el-table-column
					label="订单 名称"
					prop="title"
				></el-table-column>
			    <el-table-column
					label="总价格"
					prop="amount"
				></el-table-column>
			    <el-table-column
					label="订单状态"
					prop="status"
					:formatter="handlerStatus"
				></el-table-column>
			</el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination 
                  	layout="total, prev, pager, next, jumper"
					style="margin-left: 50px;"
				  	:total="this.total"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
                >
                </el-pagination>
            </div>
        </div>
    </section>
</template>

<script>
import { getOrderStaff } from "@/mock/mock"

export default {
	data(){
		return {
			tableData: [],
			total : null,
			pageSize : 15,
			pageNo : 1,
			loading : false,
		}
	},
	methods : {
		handlerGetUser(){
			this.loading = true
			getOrderStaff().then(res => {
				setTimeout(() => {
					this.tableData = res.orderlist
					this.total = res.total
					this.loading = false
				}, 1000)
			})
		},
		handlerStatus(para){
			if(para.status) return "已支付"; return "未支付";
		},
		handleSizeChange(val){
			this.pageSize = val
			this.handlerGetUser()
		},
		handleCurrentChange(val){
			this.pageNo = val
			this.handlerGetUser()
		},
	},
	created(){
		this.handlerGetUser()
	},
	mounted(){
		
	},
}
</script>

<style lang="less">
    .table_container{
        padding: 20px;
    }
    .demo-table-expand {
	    font-size: 0;
	}
	.demo-table-expand label {
	    width: 90px;
	    color: #99a9bf;
	}
	.demo-table-expand .el-form-item {
	    margin-right: 0;
	    margin-bottom: 0;
	    width: 50%;
	}
</style>
