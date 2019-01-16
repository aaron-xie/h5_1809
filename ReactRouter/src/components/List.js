import React,{Component} from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';

import { Tabs } from 'antd';


class List extends Component{
    constructor(){
        super();
        this.state = {
            tabs:[
                {
                    text:'电脑',
                    path:'/computer'
                },{
                    text:'手机',
                    path:'/phone'
                },{
                    text:'平板',
                    path:'/pad'
                }
            ],
            current:'/computer'
        }

        // 绑定this
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(path){
        let {history,match} = this.props;
        this.setState({
            current:path
        });

        // 表城市导航跳转
        history.push(match.url+path);
    }
    componentDidMount(){
        let hash = window.location.hash.replace('#'+this.props.match.url,'');console.log(hash)
        this.setState({
            current:hash
        })
    }
    render(){
        let {current,tabs} = this.state;
        let {match} = this.props;
        return (
            <div>
                <h4>列表</h4>
                <Tabs 
                onChange={this.handleChange} 
                activeKey={current}
                >
                    {
                        tabs.map(tab=>{
                            return <Tabs.TabPane tab={tab.text} key={tab.path}>
                                <Switch>
                                    <Route path={match.path + "/computer"} render={()=><div>电脑</div>} />
                                    <Route path={match.path + "/phone"}  render={()=><div>手机</div>} />
                                    <Route path={match.path + "/pad"}  render={()=><div>平板</div>} />
                                    <Redirect from={match.path}  to="/list/computer"/>
                                </Switch>
                            </Tabs.TabPane>
                        })
                    }
                </Tabs>
                
            </div>
        )
    }
}
export default List;