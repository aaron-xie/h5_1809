import React,{Component} from 'react';

// 引入组件
import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

// 引入样式
import 'bootstrap/dist/css/bootstrap.css';

class TodoList extends Component{
    constructor(){
        super();

        this.state = {
            data:[
                {
                    title:'逆风的方向，更适合飞翔',
                    completed:false,
                    selected:false
                },
                {
                    title:'拼搏到无能为力，坚持到感动自己',
                    completed:false,
                    selected:false
                }
            ]
        }

        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.completeItem = this.completeItem.bind(this)
    }

    // 数据处理方法
    addItem(title){
        let item = {
            title,
            completed:false,
            selected:false
        }

        // 先取出，再修改
        let data = this.state.data;
        data.push(item);

        this.setState({
            data
        })        
    }

    removeItem(){

    }

    completeItem(){

    }

    render(){
        return (
            <div className="p-3">
                <TodoForm handlerClick={this.addItem}/>
                <TodoContent data={this.state.data} data-myname="laoxie" idx={10} />
            </div>
        )
    }
}

export default TodoList;