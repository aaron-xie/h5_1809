import React,{Component} from 'react';


class TodoContent extends Component{

    render(){
        let {data,idx,handleRemove,handleComplete,handleSelect} = this.props;
        return (
            <tr className={data.completed?'table-success':''}>
                <td><input type="checkbox" checked={data.selected} onChange={()=>{handleSelect(idx)}}/></td>
                <td>{idx+1}</td>
                <td>{data.title}</td>
                <td>{data.completed ? '完成' : '待办'}</td>
                <td>
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-success" onClick={()=>{handleComplete(idx)}}>完成</button>
                    <button className="btn btn-outline-danger" onClick={()=>{handleRemove(idx)}}>删除</button>
                </div>
                </td>
            </tr>
        )
    }
}

export default TodoContent;