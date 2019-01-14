import React from 'react';

import Card from './components/Card';
import TodoList from './components/TodoList';
import Lifecycle from './components/Lifecycle';
import List from './components/List';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            username:'laoxie',
            songlist:[
                {
                    name:'丑八怪',
                    singer:'薛之谦'
                },
                {
                    name:'夜来香',
                    singer:'李香兰'
                }
            ]
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
                <List data={this.state.songlist}/>
            </div>
        )
    }
}

export default App;