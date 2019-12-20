<template>
    <div class="fillcontain">
        <div class="table_container">
            <el-table
			    :data="tableData"
                :expand-row-keys='expendRow'
                :row-key="row => row.index"
			    style="width: 100%"
                v-loading="listLoading" 
            >
			    <el-table-column type="expand">
			      <template slot-scope="props">
			        <el-form label-position="left" inline class="demo-table-expand">
			          <el-form-item label="用户名" >
			            <span>{{ props.row.user_name }}</span>
			          </el-form-item>
			          <el-form-item label="店铺名称">
			            <span>{{ props.row.restaurant_name }}</span>
			          </el-form-item>
			          <el-form-item label="收货地址">
			            <span>{{ props.row.address }}</span>
			          </el-form-item>
			          <el-form-item label="店铺 ID">
			            <span>{{ props.row.restaurant_id }}</span>
			          </el-form-item>
			          <el-form-item label="店铺地址">
			            <span>{{ props.row.restaurant_address }}</span>
			          </el-form-item>
			        </el-form>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="订单 ID"
			      prop="id">
			    </el-table-column>
			    <el-table-column
			      label="总价格"
			      prop="total_amount">
			    </el-table-column>
			    <el-table-column
			      label="订单状态"
			      prop="status">
			    </el-table-column>
			</el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination 
                  layout="total, prev, pager, next, jumper"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
                restaurant_id: null,
                expendRow: [],
                listLoading: false,
            }
        },
        created(){
        	
        },
        mounted(){
            
            },
        methods: {
            
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
