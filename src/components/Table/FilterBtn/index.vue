<script>
export default {
    name: "filterBtn",
    props: {
        formOption: {
            type: Object,
            default: () => {}
        }
    },
    data(){
        return {
            formModel: {},
            treeData: {}
        }
    },
    methods: {
        handlerSelectTreeNode(selectData) {
            this.formModel[this.treeData.model] = selectData;
        },
        //触发父组件搜索方法
        handleFilter() {
            this.$emit("search", this.formModel)
        },
        handlerFormModelProcess(){
            const formObj = {}
            this.handlerGetFormItems().forEach(e => {
                const nameVal = e.name
                if(!nameVal){
                    console.error("[oa form warn]: 存在未配置name或者name为空的表单项")
                    return
                }
                formObj[nameVal] = ""
            })
            this.formModel = Object.assign({}, formObj)
        },
        handlerGetFormItems(){
            return this.formOption.config || []
        },
        //生成列表
        generateList(itemObj){
            const itemEle = []
            for(let index = 0; index < itemObj.dataList.length; index++){
                const item = itemObj.dataList[index]
                switch(itemObj.type){
                    case "select":
                        itemEle.push(
                            <el-option
                                key={item.index}
                                label={item.text}
                                value={item.index}
                            />
                        )
                        break
                    case "checkbox":
                        itemEle.push(
                            <el-checkbox label={item.index}>{item.text}</el-checkbox>
                        )
                        break
                    case "radio":
                        itemEle.push(
                            <el-radio label={item.index}>{item.text}</el-radio>
                        )
                        break
                    default:
                        break
                }
            }
            return itemEle
        },
        //生成下拉菜单
        generateSelect(item){
            return (
                <el-select
                    v-model={this.formModel[item.name]}
                    placeholder={item.placeholder}
                    style={item.style || this.defaultStyle}
                >
                    {this.generateList(item)}
                </el-select>
            )
        },
        //生成树形选择
        generateTreeSelect(item){
            return (
                <el-input
                    v-model={this.formModel[item.name]}
                    placeholder={item.placeholder}
                    onFocus={e => this.showSelectTree(item, e)}
                    style={item.style || this.defaultStyle}
                >
                    <el-button
                        slot="append"
                        size="mini"
                        onClick={e => this.showSelectTree(item, e)}
                        icon="el-icon-search"
                    ></el-button>
                </el-input>
            )
        },
        //生成多选框
        generateCheckbox(item){
            return (
                <el-checkbox-group v-model={this.formModel[item.name]}>
                    {this.generateList(item)}
                </el-checkbox-group>
            )
        },
        // 生成单选
        generateRadio(item) {
            return (
                <div class="oa-form-item">
                    <el-radio-group v-model={this.formModel[item.name]}>
                        {this.generateList(item)}
                    </el-radio-group>
                    {this.generateShowImg(item)}
                </div>
            )
        },
        // 生成日期选择器
        generateDate(item) {
            return (
                <el-date-picker
                    v-model={this.formModel[item.name]}
                    placeholder={item.placeholder}
                    type={item.type}
                    placeholder="选择日期"
                />
            )
        },
        // 生成输入框
        generateInput(item) {
            return (
                <el-input
                    v-model={this.formModel[item.name]}
                    type={item.type}
                    placeholder={item.placeholder}
                    style={item.style || this.defaultStyle}
                ></el-input>
            )
        },
        generateSlot(item) {
            const name = item.name;
            return <div>{this.$slots[name]}</div>
        },
        handlerGenerateFormItem(items = []){
            const ele = []
            items.forEach(item => {
                let itemEle = ""
                switch (item.type) {
                    // 下拉菜单
                    case "select":
                        itemEle = this.generateSelect(item)
                        break
                    // 树形结构选择器
                    case "treeSelect":
                        itemEle = this.generateTreeSelect(item)
                        break
                    // 多选框
                    case "checkbox":
                        itemEle = this.generateCheckbox(item)
                        break
                    // 单选框
                    case "radio":
                        itemEle = this.generateRadio(item)
                        break
                    case "slot":
                        itemEle = this.generateSlot(item)
                        break
                    // 日期选择框
                    case "date":
                        itemEle = this.generateDate(item)
                        break
                    // input框
                    case "text":
                        itemEle = this.generateInput(item)
                        break
                    // 输入框
                    default:
                        break
                }
                ele.push(
                    <el-form-item
                        label={item.label}
                        prop={item.name}
                        label-width={item.labelWidth}
                    >
                        {itemEle}
                    </el-form-item>
                )
            })
            return ele
        }
    },
    render(h){
        let ele = []
        ele = this.handlerGenerateFormItem(this.formOption.config)
        return (
            <el-form
                disabled={this.disabled}
                inline={true}
                ref={this.formOption.name}
                rules={this.formOption.rules}
                v-model={this.formModel}
                label-position="left"
            >
                {ele}
                <el-button
                    type="primary"
                    icon="el-icon-search"
                    onClick={this.handleFilter}
                >
                查询
                </el-button>
            </el-form>
        )
    },
    mounted(){
        this.handlerFormModelProcess()
    }
}
</script>

<style>

</style>