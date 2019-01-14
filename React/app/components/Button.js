import React from 'react';

const Button = ({className,handleClick,children})=>{

    // 如何在组件模板中获取组件内容
    // props.children
    console.log(React.Children)
    // console.log('only:',React.Children.only(children))
    return <button className={className} onClick={handleClick}>{children}</button>
}


export default Button;