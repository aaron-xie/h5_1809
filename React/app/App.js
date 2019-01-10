import React from 'react';

import Card from './components/Card';
import TodoList from './components/TodoList';

class App extends React.Component{
    render(){
        return (
            <div>
                <Card/>
                <TodoList/> 
            </div>
        )
    }
}

export default App;