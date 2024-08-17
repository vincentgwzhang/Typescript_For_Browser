"use strict";
let ca1;
ca1 = 99;
ca1 = 'hello';
ca1 = false;
let x;
// x = a; 成功
/////////////////////////////////
let ca2;
// unknown 与 any 的区别： 
let y;
// y = ca2; 失败
//除非：
if (typeof ca2 === 'string') {
    y = ca2;
}
let a;
x = a; // 断言
x = a;
///////////////////////////////////////
// Any 和 Unknown 的区别
let strcase1;
strcase1 = "value";
strcase1.toUpperCase(); // 没有警告
let strcase2;
strcase2 = "value";
strcase2.toUpperCase(); // 没有警告
let strcase3;
strcase3 = "value";
// strcase3.toUpperCase(); // 警告, 因为 strcase3 为位置
strcase3.toUpperCase(); // 强制赋值
///////////////////////////////////////
function demo1() {
    return 100;
}
function demo() {
    throw new Error('this is error');
}
///////////////////////////////////////
// 下面三个程序都是允许的
function logMessage1(msg) {
    console.log(msg);
}
function logMessage2(msg) {
    console.log(msg);
    return;
}
function logMessage3(msg) {
    console.log(msg);
    return undefined;
}
///////////////////////////////////////
function logMessage4(msg) {
    console.log(msg);
}
let result = logMessage4("vincent");
console.log(result);
function logMessage5(msg) {
}
let result2 = logMessage5("vincent");
if (result2) {
}
