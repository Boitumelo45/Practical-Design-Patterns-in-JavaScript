"use strict"

var data = Object.create(Object.prototype)
data.title =  "My title"
data.description = "My description"

Object.defineProperty(data, 'fn', {
	value: function(){
		return this.title + " ...."
	},
	writable: true,
	enumerable: true,
	configurable:true
	})

exports.info = function(){
	return data
}


