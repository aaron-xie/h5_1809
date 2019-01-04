/*
	* WorkerGlobalScope
		* 是worker的全局对象(类似于window)，所以它包含所有核心javascript全局对象拥有的属性如JSON等，window的一些属性，也拥有类似于XMLHttpRequest()等。
		* importScripts()：载入工具类函数（同步）
 */
console.time('worker');
for(var i=0;i<100000000;i++){
	
}
console.timeEnd('worker');
onmessage=e=>{
	//根据不同的数据处理不同的操作
	console.log('worker:',e.data);
	console.dir(JSON);
	postMessage('ok')
}