import React,{Component} from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import { Tabs,List,Skeleton,Avatar } from 'antd';
import axios from 'axios';

import {add,changeQty} from '../actions/cartAction';


class GoodsList extends Component{
    constructor(){
        super();
        this.state = {
            tabs:[
                {
                    text:'电脑',
                    path:'/computer'
                },{
                    text:'手机',
                    path:'/phone'
                },{
                    text:'平板',
                    path:'/pad'
                }
            ],
            current:'/computer',
            goodslist:[],
            loading:false
        }

        // 绑定this
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(path){
        let {history,match} = this.props;
        this.setState({
            current:path
        });

        // 表城市导航跳转
        history.push(match.url+path);
    }
    add2cart(goods){

        goods = {
            id:goods.goods_id,
            name:goods.goods_name,
            price:goods.goods_price,
            imgurl:goods.goods_image_url,
            qty:1
        }

        this.props.dispatch({
            type:'ADD_TO_CART',
            payload:goods
        });
    }
    componentWillMount(){
        // 获取商品信息
        axios.get('https://www.nanshig.com/mobile/index.php',{
            params:{
                act:'goods',
                op:'goods_list',
                keyword:'',
                page:10,
                curpage:1
            }
        }).then(res=>{
            console.log(res.data)
            this.setState({
                goodslist:res.data.datas.goods_list
            })
        })
    }
    componentDidMount(){
        let hash = window.location.hash.replace('#'+this.props.match.url,'');
        this.setState({
            current:hash
        })
    }
    render(){
        let {current,tabs} = this.state;
        let {match} = this.props;
        return (
            <div>
                <List
                    className="demo-loadmore-list"
                    loading={this.state.loading}
                    itemLayout="horizontal"
                    dataSource={this.state.goodslist}
                    renderItem={item => (
                    <List.Item actions={[<a onClick={()=>{
                        // 判断商品是否已经存在
                        let currentGoods = this.props.cartlist.filter(goods=>goods.id==item.goods_id);
                        if(currentGoods.length>0){
                            let {id,qty} = currentGoods[0];
                            this.props.changeQty(id,qty+1);
                        }else{
                            let goods = {
                                id:item.goods_id,
                                name:item.goods_name,
                                price:item.goods_price,
                                imgurl:item.goods_image_url,
                                qty:1
                            }
                            this.props.add2cart(goods)

                        }
                    }}>添加到购物车</a>]}>
                        <Skeleton avatar title={false} loading={item.loading} active>
                        <List.Item.Meta
                            avatar={<Avatar src={item.goods_image_url} />}
                            title={item.goods_name}
                            description={<div className="info">
                                <p className="price">原价：<del>{item.goods_marketprice}</del></p>
                                <p className="price">现价：<span>{item.goods_price}</span></p>
                                <p>分数：{item.evaluation_good_star}</p>
                            </div>}
                        />
                        </Skeleton>
                    </List.Item>
                    )}
                />
                <Tabs 
                onChange={this.handleChange} 
                activeKey={current}
                >
                    {
                        tabs.map(tab=>{
                            return <Tabs.TabPane tab={tab.text} key={tab.path}>
                                <Switch>
                                    <Route path={match.path + "/computer"} render={()=><div>电脑</div>} />
                                    <Route path={match.path + "/phone"}  render={()=><div>手机</div>} />
                                    <Route path={match.path + "/pad"}  render={()=><div>平板</div>} />
                                    <Redirect from={match.path}  to="/list/computer"/>
                                </Switch>
                            </Tabs.TabPane>
                        })
                    }
                </Tabs>
                
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {
        cartlist:state.cart.goodslist
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    console.log('ownProps:',ownProps)
    return {
        add2cart(goods){
            dispatch(add(goods))
        },
        changeQty(id,qty){
            dispatch(changeQty(id,qty))
        }
    }
}
GoodsList = connect(mapStateToProps,mapDispatchToProps)(GoodsList);

export default GoodsList;