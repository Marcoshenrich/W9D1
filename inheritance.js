// Function.prototype.inherits = function(parent) {
// function Surrogate(){}
// Surrogate.prototype = parent.prototype
// this.prototype = new Surrogate()
// this.prototype.constructor = this
// }
function MovingObject() {
}
function Ship() { }
// Ship.inherits(MovingObject);
function Asteroid() { }
// Asteroid.inherits(MovingObject);
MovingObject.prototype.saysHello = function (name) {
    console.log(`${name} says hello`);
}
// m = new MovingObject()
// s = new Ship()
// a = new Asteroid()
m = Object.create(MovingObject.prototype)
console.log(m.saysHello('Andrea'))
s = Object.create(Ship, MovingObject)
a = Object.create(Asteroid, MovingObject)
// console.log(m.name,",jhfgjk")
// m.saysHello('Diego')
// s.saysHello('Taylor')
// a.saysHello('Disnee')
Asteroid.prototype.doubler = function (num) {
    console.log(num * 2)
}
// m.doubler(2)
// s.doubler(4)
// a.doubler(6)