"use strict";
function logData(data1, data2) {
    return Date.now() % 2 ? data1 : data2;
}
console.log(logData('Str value', 33));
let pp1 = {
    name: 'AA',
    age: 18,
    extraInfo: 'vincent'
};
