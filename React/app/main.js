import React from 'react';
import ReactDOM from 'react-dom';



function format(d){
    return d.toLocaleDateString() + d.toLocaleTimeString().replace(/上午|下午/,' ');
}



setInterval(()=>{
    let now = new Date();
    let dom = <div>
        <h2>走动的时钟：</h2>
        <time>{format(now)}</time>
    </div>
    ReactDOM.render(
        dom
        ,
        document.querySelector('#app')
    )
},1000)