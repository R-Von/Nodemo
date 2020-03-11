// 1.假设我们文件其中有个工具模块
var tools = {
  add:(...numbers)=>{
    console.log(numbers)
    let sum = 0
    for (let number in numbers ){
      sum += numbers[number]
    }
    return sum
  }
}

/**
 * 2.暴露模块
 * exports.str = str
 * module.exports = str
 * 区别：
 * module.exports 是真正的接口
 * exports 是一个辅助工具
 * 如果 module.exports 为空  那么所有的 exports 收集到的属性和方法 都赋值给了module.exports
 * 如果 module.exports 具有任何属性和方法 则exports会被忽略
 */

//  exports使用方法
//  var str = 'js is very good'
//  exports.str = str  {str:'js is very good'}

// module.exports 使用方法
module.exports = tools 

// 这里  第一步  我们定义了个工具库tools
// 第二步 我们通过modules.exports将tools进行了导出
// 所以 我们在 03_CommonJS.js可以通过 require 导入使用