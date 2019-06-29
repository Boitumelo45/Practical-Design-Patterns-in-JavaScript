"use strict"

//creating instances of a class

class User {
	constructor(fn = "John", ln = "Doe"){
		this.fn = fn
		this.ln = ln
	}
}

let  user = new User('Malcolm', 'X')
console.log(user.fn)
