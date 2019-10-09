const myBind=require('./myBind');//引入myBind模板
const myReduce=require('./myReduce');//引入myReduce模板

// myBind(1,2,3)
var arr = [1,2,3,4]
for(var i=0;i<arr.length;i++){
    myReduce(arr,i)
}


//抛出一个对象
module.exports={
    myBind,
    myReduce
}