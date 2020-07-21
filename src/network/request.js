import axios from 'axios'

export function request(config) {

  //创建axios实例
  const instance = axios.create({
    // baseURL: "http://123.207.32.32:8000",
    baseURL: "http://152.136.185.210:8000/api/n3",
    timeout: 5000
  })


  //axios拦截器
  instance.interceptors.request.use(config => {
    // console.log(config)
    //1.比如config中的一些信息不符合服务器要求
    //2.比如每次发送网络请求时,都希望在界面显示换一个请求图标
    //3.某些网络请求(比如登录(token)),必须携带一些特殊信息

    return config
  }, err => {
    console.log(err)
  })

  //拦截响应
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  //发送真正的网路请求
  return instance(config)
}