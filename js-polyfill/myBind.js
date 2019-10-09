// myBind函数测试用例

    // var func = function(){
    //     return this.a + Array.prototype.slice.call(arguments);
    // }

    // func.myBind(1,2,3)()

    // 输出“undefined2,3"

    // func.myBind({a:1000}, 1,2,3)(4,5,6)

    // 输出"10001,2,3,4,5,6"
 
//抛出
const myBind=(obj,num1,num2)=>{
    console.log(obj.a,num1,num2) 
    return this.a + Array.prototype.slice.call(arguments);
}
module.exports=myBind