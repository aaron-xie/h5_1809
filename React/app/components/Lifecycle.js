import React,{Component} from 'react';

class Lifecycle extends Component{
    constructor(){
        super();
        this.state = {
            num:10
        }
        console.log('Initial:',this)
    }
    // 生命周期函数
    // Mounting
    // Updating
    // Unmounting
    componentWillMount(){
        console.log('WillMount:',this)

        // window.setInterval(()=>{
        //     console.log(666)
        // },100)

        // axios.get('xxx.php')
    }
    componentDidMount(){
        console.log('DidMount:',this)
    }

    componentWillUpdate(nextProps, nextState){
        console.log('WillUpdate:',this)
    }
    componentDidUpdate(nextProps, nextState){
        console.log('DidUpdate:',this)
    }

    componentWillUnmount(){
        // 组件销毁时执行
        // 适合做以下操作
        // 清除定时器：clearInterval(xx)
        // 终止ajax请求: xhr.abort()
        console.log('WillUnmount:',this)
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps:',nextProps)
    }

    shouldComponentUpdate(prevProps, nextState){
        // 可以根据state的值选择性更新（优化性能）
        console.log('shouldComponentUpdate:',prevProps,nextState)
        if(nextState.num >= 15){
            return true
        }
        return false;//默认
    }

    // 事件处理函数
    handleClick(){
        this.setState({
            num:this.state.num+1
        })
    }

    render(){
        return (
            <div>
                <h2>Lifecycle</h2>
                <div>{this.state.num} -- {this.props.username}</div>
                <button onClick={this.handleClick.bind(this)}>修改num</button>
            </div>
        )
    }
}

export default Lifecycle;