import React, { Component } from 'react'
class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount () {
        // window.$loop.getList()
        // .then(res => {
        //     console.log(res)
        //     if(res.Result) {
        //         console.log(res.Msg)
        //         alert(res.Msg)
        //         this.setState({
        //             data :res.Data
        //         } , () => {
        //             console.log(this.state.data)
        //         })
        //     }else {
        //         alert(res.Msg)
        //     }
        // })
        //    let num = 123
        //    let res = window.$loop.zhengze(num)
        //    console.log(res)
        //    if(!res.Result) {
        //         alert(res.Msg);
        //    }
    }

    render () {
        return (
            <div className="idnex">
                二级路由首页
            </div>
        )
    }
}


export default componentName