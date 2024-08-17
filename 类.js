"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log('[Person] speak function called');
    }
}
const p1 = new Person('vincent', 18);
// p1.speak();
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    speak() {
        super.speak();
        //console.log('[Student]speak function called');
    }
}
const s1 = new Student('vincent', 12, 'A+');
// s1.speak();
class Parcel {
    constructor(weight) {
        this.weight = weight;
    }
    printParcel() {
        console.log(`The weight of package height as ${this.weight}`);
    }
}
class StandardParcel extends Parcel {
    constructor(weight, unitPrice) {
        super(weight);
        this.unitPrice = unitPrice;
    }
    calculate(x) {
        this.weight = Number((x * this.unitPrice).toFixed(2));
    }
}
const parcel1 = new StandardParcel(100, 2.3);
parcel1.calculate(3);
parcel1.printParcel();
