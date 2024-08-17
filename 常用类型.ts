let ca1: any;
ca1 = 99
ca1 = 'hello'
ca1 = false

let x : string
// x = a; 成功

/////////////////////////////////

let ca2 : unknown;
// unknown 与 any 的区别： 

let y: string
// y = ca2; 失败

//除非：
if (typeof ca2 ==='string') {
    y = ca2;
}
let a: unknown;
x = a as string; // 断言
x = <string> a;


///////////////////////////////////////

// Any 和 Unknown 的区别

let strcase1: string
strcase1 = "value";
strcase1.toUpperCase(); // 没有警告

let strcase2: any;
strcase2 = "value";
strcase2.toUpperCase(); // 没有警告

let strcase3: unknown;
strcase3 = "value";
// strcase3.toUpperCase(); // 警告, 因为 strcase3 为位置
(strcase3 as string).toUpperCase(); // 强制赋值

///////////////////////////////////////

function demo1() : number {
    return 100;
}

function demo() : never {
    throw new Error('this is error');
}

///////////////////////////////////////

// 下面三个程序都是允许的
function logMessage1(msg: string): void {
    console.log(msg);
}

function logMessage2(msg: string): void {
    console.log(msg);
    return;
}

function logMessage3(msg: string): void {
    console.log(msg);
    return undefined;
}

///////////////////////////////////////

function logMessage4(msg: string) : void {
    console.log(msg);
}

let result = logMessage4("vincent");
console.log(result);

function logMessage5(msg: string) : undefined {
    
}
let result2 = logMessage5("vincent");
if (result2) {
    
}











