import axios from 'axios';

export default new Promise((resolve,reject)=>{
    axios.get('./mock/region.json').then(res=>{
        let data = res.data;

        let indexCity = {};

        // 以字母作为属性写入对象indexCity
        'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('').forEach(letter=>{
            indexCity[letter] = [];
        });

        function getCity(items){

            for(let item of items){
                if(item.id%10000 === 0){
                    // 直辖市，特别行政区
                    // console.log(item.name)
                    if(item.municipality || item.special){
                        addCity(item);
                    }else{
                        // 省份进入递归调用
                        getCity(item.regions);
                    }
                }else{
                    // 城市处理
                    addCity(item);
                }

                
            }
        }

        function addCity(item){
            let {id,name,pinyin} = item;
            indexCity[item.pinyin[0]].push({
                id,
                name,
                pinyin
            });
        }

        getCity(data.regions);

        resolve(indexCity);

    })
});