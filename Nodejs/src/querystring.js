/**
 * parse()
 * stringify()
 */
const qs = require('querystring');

let str = 'firstname=laoxie&url=http%3A%2F%2Flaoxie.com&lastname=xie&passowrd=123456';

let obj = qs.parse(str);


let person = {firstname:"laoxie", url:"http://laoxie.com", lastname: 'xie', passowrd: 123456};
let str2 = qs.stringify(person);
console.log('str2',str2);