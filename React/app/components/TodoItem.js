import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


class TodoContent extends Component{

    render(){
        let {data,idx,handleRemove,handleComplete,handleSelect} = this.props;

        // context中的数据可以随意修改
        this.context.completeItem = function(){
            console.log('xxx')
        }

        // 使用context第4步：通过this.context.xxx使用
        let {completeItem,removeItem,selecteItem} = this.context;

        return (
            <tr className={data.completed?'table-success':''}>
                <td><input type="checkbox" checked={data.selected} onChange={()=>{selecteItem(idx)}}/></td>
                <td>{idx+1}</td>
                <td>{data.title}</td>
                <td>{data.completed ? '完成' : '待办'}</td>
                <td>
                <div className="btn-group btn-group-sm">
                    <Button className="btn btn-outline-success" handleClick={completeItem.bind(this,idx)}>完成</Button>
                    <Button className="btn btn-outline-danger" handleClick={removeItem.bind(this,idx)}>删除</Button>
                </div>
                </td>
            </tr>
        )
    }
}


// const TodoContent = ({data,idx,handleRemove,handleComplete,handleSelect})=>{
//     return (
//         <tr className={data.completed?'table-success':''}>
//             <td><input type="checkbox" checked={data.selected} onChange={()=>{handleSelect(idx)}}/></td>
//             <td>{idx+1}</td>
//             <td>{data.title}</td>
//             <td>{data.completed ? '完成' : '待办'}</td>
//             <td>
//             <div className="btn-group btn-group-sm">
//                 {/* <button className="btn btn-outline-success" onClick={()=>{handleComplete(idx)}}>完成</button>
//                 <button className="btn btn-outline-danger" onClick={()=>{handleRemove(idx)}}>删除</button> */}
//                 <Button className="btn btn-outline-success" handleClick={handleComplete.bind(this,idx)} text="完成"/>
//                 <Button className="btn btn-outline-danger" handleClick={handleRemove.bind(this,idx)} text="删除"/>
//             </div>
//             </td>
//         </tr>
//     )
// }

// 使用context第3步：子组件验证数据类型
TodoContent.contextTypes = {
    addItem:PropTypes.func,
    removeItem:PropTypes.func,
    completeItem:PropTypes.func,
    selecteItem:PropTypes.func,
    data:PropTypes.array
}

export default TodoContent;