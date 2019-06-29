"use strict"

var task = Object.create(Object.prototype)
console.log(task)

Object.defineProperty(task, 'title', {
	value: "My title",
	writable: true,
	enumerable: true,
	configurable: true
})

task.description = "My description"

Object.defineProperty(task, 'toString', {
	
	value: function(){
		return this.title + " : " + this.description
	},
	writable: false,
	enumerable: false,
	configurable: true
})

//values
console.log(Object.values(task))
//keys
console.log(Object.keys(task))

exports.task 
