import React,{Component} from 'react';

// 引入组件
import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

// 引入样式
import 'bootstrap/dist/css/bootstrap.css';

/*
    数据修改原则
        * 谁的数据谁修改
*/
class TodoList extends Component{
    constructor(){
        super();

        // 组件状态
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

        // 改变事件处理函数的this指向
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.completeItem = this.completeItem.bind(this)
        this.selecteItem = this.selecteItem.bind(this)
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

    removeItem(idx){

        this.setState({
            data:this.state.data.filter((item,i)=>i!=idx)
        })
    }

    completeItem(idx){
        this.setState({
            data:this.state.data.map((item,i)=>{
                if(i==idx){
                    item.completed = true;
                }
                return item;
            })
        })
    }

    selecteItem(idx){console.log(idx)
        if(typeof idx == 'number'){
            this.setState({
                data:this.state.data.map((item,i)=>{
                    if(i==idx){
                        item.selected = !item.selected;
                    }
                    return item;
                })
            })
            
        }else{
            this.setState({
                data:this.state.data.map((item,i)=>{
                    item.selected = idx.target.checked;
                    return item;
                })
            })
        }
    }

    render(){
        return (
            <div className="p-3">
                <TodoForm handleClick={this.addItem}/>
                <TodoContent 
                data={this.state.data} 
                handleRemove={this.removeItem}
                handleComplete={this.completeItem}
                handleSelect={this.selecteItem}
                 />
            </div>
        )
    }
}

export default TodoList;