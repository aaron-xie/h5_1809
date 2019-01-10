import React,{Component} from 'react';


class TodoContent extends Component{

    render(){
        let {data,idx} = this.props;
        return (
            <tr>
                <td><input type="checkbox"/></td>
                <td>{idx+1}</td>
                <td>{data.title}</td>
                <td>{data.complete ? '完成' : '待办'}</td>
                <td>
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-success">完成</button>
                    <button className="btn btn-outline-danger">删除</button>
                </div>
                </td>
            </tr>
        )
    }
}

export default TodoContent;