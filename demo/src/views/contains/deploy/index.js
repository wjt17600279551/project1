import React, {Component} from 'react';
import './index.css';
import Index from './child/index'
import Command from './child/command'
import Deploys from './child/deploys'
import Monitoring from './child/monitoring'
import Study from './child/study'
import Pigeonhole from './child/pigeonhole'
import Exchange from './child/exchange'
import Management from './child/management'
import { Switch,Route,Redirect , BrowserRouter} from "react-router-dom";

class Deploy extends Component {
    constructor (props) {
      super(props)
      this.state = {
        navList : [
          {
            name : '首页',
            link : '/deploy/index',
          },
          {
            name : '作战指挥',
            link : '/deploy/command',
          },
          {
            name : '作战部署',
            link : '/deploy/deploys',
          },
          {
            name : '集中监控',
            link : '/deploy/monitoring',
          },{
            name : '数据研判',
            link : '/deploy/study',
          },
          {
            name : '案件归档',
            link : '/deploy/pigeonhole',
          },
          {
            name : '工作交流',
            link : '/deploy/exchange',
          },
          {
            name : '系统管理',
            link : '/deploy/management',
          },
        ],
        active : 0,
        headerName: '作战指挥平台'
      }
    }

    tab(val , index) {
      this.setState({ 
        active : index
      })
      this.props.history.push(val.link)
    }
    render() {
      return ( 
        <div className = "deploy" >
            <h2>作战指挥平台</h2>
            <header>
              {
                this.state.navList.map((item , index) => {
                  return <span key={index} onClick={()=>{this.tab(item , index)}} className={index == this.state.active ? 'active' : ''} >
                   {
                     item.name
                   }
                  </span>
                })
              }
            </header>
            <main>
              
              <Switch>
                 <Route exact path="/deploy" render={() => {
                   return <Redirect to="/deploy/index"/>
                 }}/>
                <Route path="/deploy/index" component={Index} />
                <Route path="/deploy/command" component={Command} />
                <Route path="/deploy/deploys" component={Deploys} />
                <Route path="/deploy/monitoring" component={Monitoring} />
                <Route path="/deploy/study" component={Study} />
                <Route path="/deploy/pigeonhole" component={Pigeonhole} />
                <Route path="/deploy/exchange" component={Exchange} />
                <Route path="/deploy/management" component={Management} />
              </Switch>
            </main>
        </div>
              
      );
    }
  }
  
  export default Deploy;