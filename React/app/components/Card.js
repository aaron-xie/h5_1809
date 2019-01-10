import React,{Component} from 'react';

import '../sass/page.scss';

// extends仅仅继承了原型对象中的方法
class Card extends Component{
    constructor(){
        // super继承属性：
        // 调用Component,并把this指向Card
        // 达到效果：继承Component中的属性
        super();//xxx.call(this)

        // 组件状态state
        this.state = {
            data:[
                {
                    name:'laoxie',
                    age:18,
                    gender:'男',
                    photo:'img/laoxie.jpg'
                },
                 {
                    name:'lemon',
                    age:32,
                    gender:'女',
                    photo:'img/lemon.jpg'
                },
                 {
                    name:'tiantian',
                    age:24,
                    gender:'男',
                    photo:'img/tiantian.jpg'
                },
                 {
                    name:'wenjing',
                    age:24,
                    gender:'女',
                    photo:'img/wenjing.jpg'
                },
                 {
                    name:'laoyao',
                    age:24,
                    gender:'男',
                    photo:'img/laoyao.jpg'
                }
           ],
           currentIndex:0,
           num:10
        }

        // 在constructor中给事件处理函数绑定this
        this.handlerNext = this.handlerNext.bind(this);
    }

    // 事件处理函数
    // 事件处理函数默认没有this，需要手动绑定
    handlerNext(){
        let idx = this.state.currentIndex;
        if(idx>=this.state.data.length-1){
            idx = 0;
        }else{
            idx++;
        }
        // 修改state
        this.setState({
            currentIndex:idx,
            num:this.state.num+1
        },()=>{

            console.log('::',this.state.num);
        })

        // 函数方式
        // this.setState(function(state){
            
        //     return {
        //         num:state.num+1
        //     }
        // },function(a){
        //     console.log(a,this.state.num)
        // })


        // 手动刷新组件
        // this.state.currentIndex = 2;
        // this.forceUpdate();

    }

    // 组件UI
    // 组件要显示什么内容，就return什么
    render(){console.log(666)
        // 解构
        let {currentIndex,data} = this.state;
        return (
        <div>
            <button onClick={this.handlerNext}>下一张</button>
            {
                data.map((item,idx)=>{
                    return <div className="card" key={item.name} style={{display:idx==currentIndex?'block':'none'}}>
                        <img src={item.photo} />
                        <div className="info">
                            <h4>{item.name}</h4>
                            <p>性别：{item.gender}</p>
                            <p>年龄：{item.age}</p>
                        </div> 
                    </div>
                })
            }
            
        </div>
        )
    }
}

export default Card;