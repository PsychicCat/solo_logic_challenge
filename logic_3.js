//challenge 3
function rightTriangle(a,b){
	this.a =  a,
	this.b =  b,
	this.c = 0
}

//create hypotenuse prototype
rightTriangle.prototype.hypotenuse = function(){
	this.c = Math.sqrt((this.a * this.a) + (this.b * this.b));
}

//new right triangle object
var rightTriangle1 = new rightTriangle(3,4);

rightTriangle1.hypotenuse();

console.log(rightTriangle1.c);