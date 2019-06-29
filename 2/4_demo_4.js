var obj = require('./4_demo_3_export.js')

var data = obj.info()
console.log(data)
console.log(data.title)

//inheritance
var anotherObj = Object.create(data)
console.log(anotherObj.__proto__)
console.log(anotherObj.__proto__.__proto__)


