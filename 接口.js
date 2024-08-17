"use strict";
class PersonInterfaceImpl {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak(n) {
    }
}
const userImpl = {
    name: "zhangsan",
    gender: "Male",
    age: 18,
    run(n) {
        console.log(n);
    }
};
// userImpl.run(12);
const studentImpl = {
    name: 'ZZ',
    age: 18,
    grade: 'A2',
    speak: (n) => {
        console.log(`this is a number? ${n}`);
    }
};
studentImpl.speak(30);
// 自动合拼
const AImpl = {
    name: 'zhangsan',
    age: 40
};
