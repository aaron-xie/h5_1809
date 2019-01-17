import React,{Component} from 'react';
import {connect} from 'react-redux';

import { Tabs,List,Skeleton,Avatar } from 'antd';

class Cart extends Component{
    handleRemove(id){
        this.props.dispatch({
            type:'REMOVE_FROM_CART',
            payload:{id}
        })
    }
    render(){
        return (
            <List
                className="demo-loadmore-list"
                loading={false}
                itemLayout="horizontal"
                dataSource={this.props.goodslist}
                renderItem={item => (
                <List.Item actions={[<a onClick={this.handleRemove.bind(this,item.id)}>删除</a>]}>
                    <Skeleton avatar title={false} loading={false} active>
                    <List.Item.Meta
                        avatar={<Avatar src={item.imgurl} />}
                        title={item.name}
                        description={<div className="info">
                            <p className="price">现价：<span>{item.price}</span></p>
                        </div>}
                    />
                    </Skeleton>
                </List.Item>
                )}
            />
        )
    }
}

Cart = connect(state=>{
    return {
        goodslist:state.cart.goodslist
    }
})(Cart);

export default Cart;