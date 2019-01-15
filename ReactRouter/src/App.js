import React from 'react';
import {Route,Link,NavLink,Switch,Redirect} from 'react-router-dom';

let List = ()=><div>List</div>;
let Home = ()=><div>Home</div>;
let Mine = ()=><div>Mine</div>;

/*
    <Route/>组件的职责：根据浏览器url匹配Route的path属性，渲染相应的componet
*/

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            username:'laoxie',
        }
    }
    render(){
        return (
            <div>
                <h1>React Router路由演示</h1>
                <NavLink 
                to="/home" 
                activeClassName="current" 
                activeStyle={{color:'#58bc58','font-weight':'bold'}}>首页</NavLink>
                <NavLink to="/list" activeClassName="current"
                activeStyle={{color:'#58bc58','font-weight':'bold'}}>列表</NavLink>
                <NavLink to="/mine" activeClassName="current"
                activeStyle={{color:'#58bc58','font-weight':'bold'}}>我的</NavLink>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/mine" component={Mine}/>
                    <Redirect from="/" to="/home"/>
                </Switch>
            </div>
        )
    }
}

export default App;