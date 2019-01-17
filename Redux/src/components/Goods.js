import React,{Component} from 'react';

class Home extends Component{

    componentWillMount(){
        let {match,history} = this.props;
        let goodsid = match.params.id;

        // console.log(this.props)
        // 发起ajax请求
    }

    render(){
        let {match,history} = this.props;

        return <div>商品详情{match.params.id}</div>
    }
}

export default Home;