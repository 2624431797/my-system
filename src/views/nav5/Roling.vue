<template>
    <section class="rolebox">
        <div class="roling">
            <h3 class="box-title" slot="header" style="width: 100%;">
                <el-button 
                    type="primary" 
                    icon="plus"
                >新增</el-button>
                <el-button 
                    type="danger" 
                    icon="delete"
                >删除</el-button>
            </h3>
            <el-row slot="body" :gutter="24" style="margin-bottom: 20px;">
                <el-col :span="6" :xs="24" :sm="24" :md="6" :lg="6" style="margin-bottom: 20px;">
                    <el-tree 
                        v-if="roleTree"
                        :data="roleTree"
                        ref="roleTree"
                        show-checkbox
                        highlight-current
                        clearable 
                        node-key="id" 
                        :props="defaultProps"
                    ></el-tree>
                </el-col>
                <el-col :span="18" :xs="24" :sm="24" :md="18" :lg="18">
                    <el-card class="box-card">
                        <div class="text item">
                            <el-form :model="form" ref="form">
                                <el-form-item label="父级" :label-width="formLabelWidth">
                                    
                                </el-form-item>
                                <el-form-item label="名称" :label-width="formLabelWidth">
                                    <el-input v-model="form.name" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="英文" :label-width="formLabelWidth">
                                    <el-input v-model="form.enName" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="是否生效" :label-width="formLabelWidth">
                                    <el-radio class="radio" v-model="form.usable" label="1">是</el-radio>
                                    <el-radio class="radio" v-model="form.usable" label="0">否</el-radio>
                                </el-form-item>
                                <el-form-item label="排序" :label-width="formLabelWidth">
                                    <el-slider v-model="form.sort"></el-slider>
                                </el-form-item>
                                <el-form-item label="" :label-width="formLabelWidth">
                                    <el-button 
                                        type="primary" 
                                        v-text="form.id ? '修改' : '新增'"
                                    ></el-button>
                                    <el-button 
                                        type="info" 
                                        icon="setting" 
                                        v-show="form.id && form.id != null"
                                    >配置资源</el-button>
                                    <el-button 
                                        type="danger" 
                                        icon="delete" 
                                        v-show="form.id && form.id != null"
                                    >删除</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>
                    <el-dialog title="配置资源" v-model="dialogVisible" size="tiny">
                        <div class="select-tree">
                            <el-scrollbar
                                tag="div"
                                class='is-empty'
                                wrap-class="el-select-dropdown__wrap"
                                view-class="el-select-dropdown__list"
                            >
                                <el-tree
                                    :data="resourceTree"
                                    ref="resourceTree"
                                    show-checkbox
                                    check-strictly
                                    node-key="id"
                                    v-loading="dialogLoading"
                                    :props="defaultProps"
                                ></el-tree>
                            </el-scrollbar>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button>取 消</el-button>
                            <el-button type="primary">确 定</el-button>
                        </span>
                    </el-dialog>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            dialogLoading: false,
            dialogVisible: false,
            formLabelWidth: '100px',
            defaultProps: {
                children: 'children',
                label: 'name',
                id: "id",
            },
                roleTree: [],
                resourceTree:[],
                maxId:700000,
            form:{
                id: null,
                parentId: null,
                name: '',
                enName: '',
                sort: 0,
                usable: '1'
            }
        }
    },
    methods : {
        
    },
}
</script>

<style lang="scss" scoped>
    .roling{
        padding: 20px;
        border: 1px solid #d3dce6;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
        .box-title{
            margin-bottom: 20px;
        }
        .render-content {
            float: right;
            margin-right: 20px;
            i.fa {
                margin-left: 10px;
            }
            i.fa:hover{
                color: #e6000f;
            }
        }
    }
</style>