let person = {
    name:'laoxie',
    age:18,
    gender:'男'
}

//利用module.exports对外暴露接口（推荐）
// 一个文件只能有一个module.exports
// module.exports = person;

exports.getName = ()=>{
    return 'tiantian'
}

exports.setName = (name)=>{
    return person.name = name;
}