"use strict"

var task = new Object();
task.title = "To do List"
task.description = "My description"
task.toString = function(){
	return this.title + ' ' + this.description
}
console.log(task.toString())

console.log(task)
