import React, { Component } from 'react';
import './index.css'
export default class heade extends Component {
  render() {
    return (
       <div>
        <div className="header">
              <div className="imgBox">
                  <span className='word'>作战指挥平台</span>
                  <ul className='timer'>
                      <li>12:23:23</li>
                      <li>2019-05-11</li>
                      <li>星期一</li>
                  </ul>
              </div>
          </div>  
          <ul className='nav'>
            <li>首页</li>
            <li>作战部署</li>
            <li>作战指挥</li>
            <li>集中监控</li>
            <li>数据研判</li>
            <li>案件归档</li>
            <li>工作交流</li>
            <li>系统管理</li>   
          </ul>
       </div> 
    )
  }
}
