// JS是一门面向原型的语言
// 每一个对象有一个内部属性[[prototype]]指向其原型对象，原型链的顶端是Object.prototype，是null

function Person(name) {
  this.name = name;
}
const p1 = new Person("p1");
// 构造函数的prototype属性指向原型对象
console.log(p1.__proto__ === Person.prototype); // true

// 通过原型链可以实现方法的继承和访问
// 因为p1的原型对象是Person.prototype，所以p1可以访问到Person.prototype上的属性和方法
Person.prototype.say = function () {
  console.log(this.name + "is saying");
};

p1.say();
