import React,{Component} from 'react';

/*
    给表单绑定vaue属性到状态state，必须同时提供修改函数onChange
*/

class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            keyword:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleChange(e){
        //    修改state状态值为输入框的内容
        this.setState({
            keyword:e.target.value
        })
    }
    handleAdd(){
        this.props.handleClick(this.state.keyword);

        // 清空输入框并自动获得焦点
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
                onChange={this.handleChange}
                ref="keyword"
                 />
                <div className="input-group-append">
                    <button className="btn btn-success" onClick={this.handleAdd}>搜索</button>
                </div>
            </div>
        )
    }
}

export default TodoForm;