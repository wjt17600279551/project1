import axios from 'axios'
// axios.defaults.baseURL = 'XXX'
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            // eslint-disable-next-line default-case
            switch (error.response.status) {
                case 401:
                    window.alert('权限不足')
                    break;
                case 429:
                    break;
                case 404:
                    window.alert('地址错误')
                    break;
            }
        }
        return Promise.reject(error) // 返回接口返回的错误信息
    });
let loop = {
    //获取列表
    async getList() {
        const data = await axios('https://www.easy-mock.com/mock/5af90718113f91088393ac9a/exaple/pagenum')
        console.log(data)
        if(data.data.Result === 'Info') {
            return {
                Result : true ,
                Msg : '请求数据回来了',
                Data : data.data.Data
            }
        }else {
            // eslint-disable-next-line no-throw-literal
            return {
                Result : false ,
                Msg : data.data.Message,
                Data : data.data.Data
            }
        }
    },
    zhengze (val) {
        let zzc = /^[0-9]*$/
        if(zzc.test(val)) {
            return {
                Result : true,
                Msg : '成功'
            }
        }else {
            return {
                Result : false,
                Msg : '必须是数字'
            }
        }
    }
    
}
// export default loop
export default{  
  install() {
    window.$loop = loop
  }
}