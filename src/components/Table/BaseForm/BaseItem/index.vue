<script>
export default {
    name: "baseItem",
    props: {
        formModel: {
            type: Object,
            default: () => {}
        },
        formConfig: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            defaultStyle: "width: 220px;",
            dialogVisible: false
        }
    },
    methods: {
        submitData() {
            this.$emit("update: formModel", this.formModel)
        },
        showSelectTree(item) {
            const treeData = item.treeData
            this.$emit("showSelectTree", treeData)
        },
        // 生成列表
        generateList(itemObj) {
            const itemEle = []
            for (let index = 0; index < itemObj.dataList.length; index++) {
                const item = itemObj.dataList[index]
                switch (itemObj.type) {
                // 下拉菜单
                case "select":
                    itemEle.push(
                        <el-option
                            key={item.index}
                            label={item.text}
                            value={item.index}
                        ></el-option>
                    )
                    break
                // 多选框
                case "checkbox":
                    itemEle.push(
                        <el-checkbox label={item.index}>{item.text}</el-checkbox>
                    )
                    break
                // 单选框
                case "radio":
                    itemEle.push(<el-radio label={item.index}>{item.text}</el-radio>)
                    break
                }
            }
            return itemEle
        },
        // 生成下拉菜单
        generateSelect(item) {
            return (
                <el-select
                    v-model={this.formModel[item.name]}
                    style={item.style || this.defaultStyle}
                >
                    {this.generateList(item)}
                </el-select>
            )
        },
        // 生成树形结构选择框
        generateTreeSelect(item) {
            return (
                <el-input
                    v-model={this.formModel[item.name]}
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
        // 生成多选框
        generateCheckbox(item) {
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
                    type={item.type}
                    placeholder="选择日期"
                />
            )
        },
        // 生成颜色选择器
        generateColor(item) {
            return <el-color-picker v-model={this.formModel[item.name]} show-alpha />
        },
        // 生成输入框
        generateInput(item) {
            const ele = []
            // 提示位置：默认右侧，bottom表示提示位置在输入框底部
            if (item.tipsType === "bottom") {
                ele.push(<p class="title-tips item-tips-bottom">{item.tips}</p>)
            } else {
                ele.push(<label class="title-tips">{item.tips}</label>)
            }
            return (
                <div class="oa-form-item">
                    <el-input
                        v-model={this.formModel[item.name]}
                        type={item.type}
                        disabled={item.disabled}
                        autosize={item.autosize}
                        style={item.style || this.defaultStyle}
                    ></el-input>
                    {ele}
                </div>
            )
        },
        generateSlot() {
            return <div>{this.$slots["slot"]}</div>
        },
        generateFormItems(items = []) {
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
                    itemEle = this.generateSlot()
                    break
                // 日期选择框
                case "date":
                    itemEle = this.generateDate(item)
                    break
                // 颜色选择框
                case "colorSelect":
                    itemEle = this.generateColor(item)
                    break
                // 输入框
                default:
                    itemEle = this.generateInput(item)
                    break
                }
                ele.push(
                    <el-form-item
                        label={item.label}
                        prop={item.name}
                        style={item.formItemStyle}
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
        const ele = this.generateFormItems(this.formConfig)
        return <div>{ele}</div>
    }
}
</script>

<style lang="scss" scoped>
    .el-form-item__content {
        width: 220px !important;
    }
</style>