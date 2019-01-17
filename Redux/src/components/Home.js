import React,{Component} from 'react';

import { Carousel } from 'antd';

// let Home = ()=><div>Home</div>;
class Home extends Component{
    constructor(){
        super();
        this.state = {
            recommend:[
                {
                    text:'非洲美女',
                    imgurl:'img/g1.jpg'
                },
                {
                    text:'俄罗斯美女',
                    imgurl:'img/g3.jpg'
                },{
                    text:'中国靓仔',
                    imgurl:'img/laoxie.jpg'
                },{
                    text:'东南亚美女',
                    imgurl:'img/malin.jpg'
                },{
                    text:'千锋小鲜肉',
                    imgurl:'img/tiantian.jpg'
                }
            ]
        }
    }
    render(){
        return <div className="home">
            <Carousel autoplay>
                {
                    this.state.recommend.map(item=>{
                        return <div key={item.text}>
                            <img src={item.imgurl}/>
                            <h4>{item.text}</h4>
                        </div>
                    })
                }
            </Carousel>
        </div>
    }
}
export default Home;