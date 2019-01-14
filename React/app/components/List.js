import React from 'react';
import PropTypes from 'prop-types';

// const List = ({data,page})=>{
//     return (
//         <div>
//             <ul>
//                 {
//                     data.map((item,idx)=><li key={idx}>{idx+1} - {item.singer} - {item.name}</li>)
//                 }
//             </ul>
//             {
//                 page ? 
//                 <div>
//                     <span>1</span>
//                     <span>2</span>
//                 </div>
//                 :
//                 null
//             }
            
//         </div>
//     )
// }

class List extends React.Component{
    // 静态方法
    static getData(){
        console.log('static getData');
    }

    // ES6默认不支持静态属性写法
    // 可利用babel-preset-stage-x来实现
    static defaultProps = {
        page:true
    }

    static propTypes = {
        data:PropTypes.array.isRequired,
        page:PropTypes.bool
    }

    render(){
        let {data,page} = this.props;
        return (
            <div>
                <ul>
                    {
                        data.map((item,idx)=><li key={idx}>{idx+1} - {item.singer} - {item.name}</li>)
                    }
                </ul>
                {
                    page ? 
                    <div>
                        <span>1</span>
                        <span>2</span>
                    </div>
                    :
                    null
                }
                
            </div>
        )
    }
}

console.dir(List);

// props数据类型校验
// List.propTypes = {
//     data:PropTypes.array.isRequired,
//     page:PropTypes.bool
// }

// // 设置props默认值
// List.defaultProps = {
//     page:true
// }


export default List;