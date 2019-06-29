"use strict"

var task = {
	title : "My Title",
	description: "My description",
}

Object.defineProperty(task, 'toString', {
	
	value: function(){
		return this.title + ' - ' + this.description
	},
	writable: false,
	enumerable: false,
	configurable: true
})

console.log(task)

try{
	task.toString = "Hi"
}catch{
	console.log("This function is a read only")
}
