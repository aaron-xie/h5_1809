import React,{Component} from 'react';

/*
    给表单绑定vaue属性到状态state，必须同时提供修改函数onChange
*/

class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            keyword:'xxx'
        }

        this.handlerChange = this.handlerChange.bind(this);
        this.handlerAdd = this.handlerAdd.bind(this);
    }
    handlerChange(e){
        //    修改state状态值为输入框的内容
        this.setState({
            keyword:e.target.value
        })
    }
    handlerAdd(){
        this.props.handlerClick(this.state.keyword)
        this.setState({
            keyword:''
        },()=>{
            this.refs.keyword.focus();
        })
    }
    render(){
        
        return (
            <div className="input-group mb-3">
                <input 
                type="search" 
                className="form-control" 
                placeholder="Recipient's username" 
                value={this.state.keyword}
                onChange={this.handlerChange}
                ref="keyword"
                 />
                <div className="input-group-append">
                    <button className="btn btn-success" onClick={this.handlerAdd}>搜索</button>
                </div>
            </div>
        )
    }
}

export default TodoForm;