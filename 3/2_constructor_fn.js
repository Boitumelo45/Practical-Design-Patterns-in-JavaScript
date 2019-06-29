
function ObjectName(param1, param2){
	this.param1 = param1;
	this.param2 = param2;
	this.content = function(){
		return this.param1 + '-' + this.param2	
	}
}

var n = ObjectName('X', 'Y')
