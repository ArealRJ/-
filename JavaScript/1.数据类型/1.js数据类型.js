/**
 * JS数据类型分为基本数据类型和引用数据类型
 * 基本数据类型：Number、String、Boolean、Null、Undefined、Symbol
 * 引用数据类型：Object
 */
// 基本数据类型，存储在占内存中
// 通过字面量创建，一经创建，无法修改
const num = 1;
const str = "hello";
const bool = true;
const nul = null;
const und = undefined;
const sym = Symbol();

// 引用数据类型，存储在堆内存中
// 引用类型的标识符指向的是堆内存中的地址
// 引用类型包含几个子类型：Object、Array、Function、Date、RegExp、Error
const obj = {
  a: "123",
};
function fn() {}
const arr = [1, 2, 3];
const date = new Date();
console.log("date:", typeof date);
const reg = /hello/;
console.log("reg:", typeof reg);
const err = new Error();
console.log("err:", typeof err);
