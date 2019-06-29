"use strict"

var Task = function(name){
	this.name = name
	this.completed = false

	this.complete = function(){
		console.log('completing task: ' + this.name)
		this.completed = true
	}

	this.save = function(){
		console.log('saving Task: ' + this.name)
	}
}

var task1 = new Task('demo 1')
var task2 = new Task('demo 2')

task1.complete()
task1.save()
