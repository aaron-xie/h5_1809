import React,{Component} from 'react';

class List extends Component{
    render(){
        console.log('list:',this.props.history);
        return (
            <div>List</div>
        )
    }
}
export default List;