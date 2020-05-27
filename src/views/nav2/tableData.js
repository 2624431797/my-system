const userApp = {
    formOption: {
        title: "",
        operationStatus: "",
        data: [],
        config: [{
                label: "Id",
                name: "id",
                type: "text"
            },
            {
                label: "时间",
                name: "date",
                type: "date"
            },
            {
                label: "姓名",
                name: "name",
                type: "text"
            },
            {
                label: "地址",
                name: "address",
                type: "text"
            },
            {
                label: "上级菜单",
                name: "parentMenu",
                type: "treeSelect",
                treeData: {
                    data: [],
                    title: "选择菜单",
                    style: "width: 161px",
                    model: "parentMenu"
                }
            },
            {
                type: "select",
                label: "类型",
                name: "type",
                dataList: [{
                        index: 1,
                        text: "业务部"
                    },
                    {
                        index: 2,
                        text: "研发部"
                    }
                ]
            }
        ],
        rules: {
            id: [{
                required: true,
                message: "请输入id",
                trigger: "blur"
            }]
        }
    },
    tableData: [{
        userName: "lyyhadmin",
        name: "临沂钰弘",
        telephone: "",
        mobilePhone: "",
        belongCompany: "临沂钰弘科技",
        department: "临沂钰弘科技"
    }],
    tableConfig: [{
            prop: "userName",
            label: "登录名",
            align: "center",
            width: ""
        },
        {
            prop: "name",
            label: "姓名",
            align: "center",
            width: ""
        },
        {
            prop: "telephone",
            label: "电话",
            align: "center",
            width: ""
        },
        {
            prop: "mobilePhone",
            label: "手机",
            align: "center",
            width: ""
        },
        {
            prop: "belongCompany",
            label: "归属公司",
            align: "center",
            width: ""
        },
        {
            prop: "department",
            label: "归属部门",
            align: "center",
            width: ""
        }
    ],
    searchFormOption: {
        config: [{
                type: "text",
                label: "归属公司：",
                name: "belongCompany",
                placeholder: "请输入公司名称"
            },
            {
                type: "text",
                label: "登录名：",
                name: "loginName",
                placeholder: "请输入登录名"
            },
            {
                type: "text",
                label: "姓名",
                name: "name",
                placeholder: "请输入姓名"
            }
        ]
    },
    defaultProps: {
        children: "children",
        label: "label"
    },
    data: [
        {
            label: "一级 1",
            children: [{
                label: "二级 1-1",
                children: [{
                    label: "三级 1-1-1"
                }]
            }]
        },
        {
            label: "一级 2",
            children: [{
                    label: "二级 2-1",
                    children: [{
                        label: "三级 2-1-1"
                    }]
                },
                {
                    label: "二级 2-2",
                    children: [{
                        label: "三级 2-2-1"
                    }]
                }
            ]
        },
        {
            label: "一级 3",
            children: [{
                    label: "二级 3-1",
                    children: [{
                        label: "三级 3-1-1"
                    }]
                },
                {
                    label: "二级 3-2",
                    children: [{
                        label: "三级 3-2-1"
                    }]
                }
            ]
        }
    ],
}

export default userApp