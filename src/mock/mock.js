import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers, Users } from './data/user';
let _Users = Users;

export default {
    bootstrap(){
        let mock = new MockAdapter(axios);

        // mock success request
        mock.onGet('/success').reply(200, {
            msg: 'success'
        });

        // mock error request
        mock.onGet('/error').reply(500, {
            msg: 'failure'
        })

        //登录
        mock.onPost('/login').reply(config => {
            let {username, password} = JSON.parse(config.data);
            return new Promise((resolve, reject) => {
                let user = null;
                setTimeout(() => {
                    let hasUser = LoginUsers.some(u => {
                        if (u.username === username && u.password === password) {
                            user = JSON.parse(JSON.stringify(u));
                            user.password = undefined;
                            return true;
                        }
                    })

                    if(hasUser){
                        resolve([200, { code: 200, msg: '请求成功', user }]);
                    } 
                    else{
                        resolve([200, { code: 500, msg: '账号或密码错误' }]);
                    }
                }, 1000);
            })
        })

        //获取用户列表
        mock.onGet('/user/list').reply(config => {
            let {name} = config.params;
            let mockUsers = _Users.filter(user => {
                if (name && user.name.indexOf(name) == -1) return false;
                return true;
            })
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        users: mockUsers
                    }])
                }, 1000)
            })
        })

        //获取用户列表（分页）
        mock.onGet('/user/listpage').reply(config => {
            let {page, name} = config.params;
            let mockUsers = _Users.filter(user => {
                if (name && user.name.indexOf(name) == -1) return false;
                return true;
            })

            let total = mockUsers.length;
            mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        total: total,
                        users: mockUsers
                    }])
                }, 1000)
            })
        })

        //删除用户
        mock.onGet('/user/remove').reply(config => {
            let { id } = config.params;
            _Users = _Users.filter(u => u.id !== id)

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '删除成功'
                    }])
                }, 500)
            })
        })

        //批量删除用户
        mock.onGet('/user/batchremove').reply(config => {
            let { ids } = config.params;
            ids = ids.split(',');
            _Users = _Users.filter(u => !ids.includes(u.id))
          
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '删除成功'
                    }])
                }, 500)
            })
        })

        //编辑用户
        mock.onGet('/user/edit').reply(config => {
            let { id, name, addr, age, birth, sex } = config.params

            _Users.some(u => {
                if (u.id === id) {
                    u.name = name;
                    u.addr = addr;
                    u.age = age;
                    u.birth = birth;
                    u.sex = sex;
                    return true;
                }
            })

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '编辑成功'
                    }])
                }, 500)
            })
        })

        //新增用户
        mock.onGet('/user/add').reply(config => {
            let { name, addr, age, birth, sex } = config.params;
            _Users.push({
                name: name,
                addr: addr,
                age: age,
                birth: birth,
                sex: sex
            })
          
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '新增成功'
                    }])
                }, 500)
            })
        })
    }
}

//使用axios异步操作
//import axios from "axios"

const isDev = process.env.NODE_ENV === "development"

//http://rap2api.taobao.org/app/mock/240339/api/v1/setuserlist

const service = axios.create({
    baseURL : isDev ? "http://rap2api.taobao.org/app/mock/240339" : ""
})

//axios拦截器   (请求之前拦截/响应之后拦截)
service.interceptors.request.use(config => {
    //token放入localStorage.getItem("authToken")
    config.data = {...config.data, "authToken" : "sdfsdfsdfasd"}
    return config
})

service.interceptors.response.use(res => {
    if(res.data.code = 200){
        return res.data.data
    }
    else{
        console.log("连接失败!")
    }
})

/* 员工模块 */
//主页员工
export const getMainStaff = () => {
    return service.post(`/api/s1/getmainstaff`)
}

//获取员工
export const getStaffList = () => {
    return service.post(`/api/s1/stafflist`)
}

//查找员工
export const searchStaff = params => {
    return service.post(`/api/s1/searchstafflist`, { params : params})
}

//图表员工
export const chartStaffList = () => {
    return service.post("/api/s1/userchartlist")
}

//订单员工
export const getOrderStaff = () => {
    return service.post("/api/s1/orderstaff")
}

/* 概况模块 */
//概况员工
export const getUserEchart = () => {
    return service.post(`/api/m1/setuserechart`)
}

/* 管理员模块 */
//获取管理员
export const getSetUserList = () => {
    return service.post("/api/v1/setuserlist")
}

//修改管理员
export const editUserList = id => {
    return service.post(`/api/v1/edituserlist/${id}`)
}

//删除管理员
export const delectUserList = id => {
    return service.post(`/api/v1/setuserlistdelete/${id}`)
}

//保存管理员
export const initUserList = (id, data) => {
    return service.post(`/api/v1/inituserlist/${id}`, data)
}

//新增管理员
export const addUserList = (data) => {
    return service.post(`/api/v1/adduserlist`, data)
}

//查找管理员
export const searchUserList = params => {
    return service.post(`/api/v1/searchuserlist`, { params: params })
}