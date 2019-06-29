"use strict"

class Task{
	constructor(name){
		this.name = name
		this.completed = true
	}

	complete(){
		console.log('Complete task: ' + this.name)
		this.completed = true
	}

	save(){
		console.log('Saving task: ' + this.name)
	}
}

var task = new Task('Learn JS')
task.complete()
