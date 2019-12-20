//使用axios异步操作
import axios from "axios"

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
    if(res.code = 200){
        return res.data
    }
    else{
        console.log("连接失败!")
    }
})

export const getSetUserList = () => {
    return service.post("/api/v1/setuserlist")
}