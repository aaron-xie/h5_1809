import React from 'react';

import Card from './components/Card';
import TodoList from './components/TodoList';
import Lifecycle from './components/Lifecycle';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            username:'laoxie'
        }
    }
    render(){
        return (
            <div>
                <button onClick={()=>{
                    this.setState({username:'tiantian'})
                }}>{this.state.username}</button>
                <Card/>
                <TodoList/>
                <Lifecycle username={this.state.username}/>
            </div>
        )
    }
}

export default App;