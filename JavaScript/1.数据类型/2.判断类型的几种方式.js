// 1.typeof
const a = 1;
console.log("typeof a:", typeof a); // number
const b = "hello";
console.log("typeof b:", typeof b); // string

// typeof null是object，这是一个历史遗留问题
// 由于在JS的最初版本中，使用的是32位系统，为了性能考虑使用低位存储变量的类型信息
// 000 开头代表是对象，然而null表示为全零，所以将它错误的判断为object
// 后来的ES5中，将这个问题修复了，但是为了兼容以前的代码，typeof null仍然返回object
const nul = null;
console.log("typeof nul", typeof nul); // object

// 2.instance of
// 一般用来检测构造函数的prototype属性是否出现在某个实例对象的原型链上
function Foo(name){
  this.name = name
}
const aaa = new Foo('aaa')
console.log(aaa.__proto__ === Foo.prototype); // true
console.log(aaa.constructor === Foo); // true
console.log(aaa instanceof Foo); // true

// 3.Object.prototype.toString.call()
// 调用Object原型上的toString方法，会反对对象的原始类型,可以比较准确的判断出变量类型
function bar(){}
console.log(Object.prototype.toString.call(bar));// [object Function]

// 4.根据对象的constructor属性判断
const arr = [1,2,3]
console.log(arr.constructor === Array); // true