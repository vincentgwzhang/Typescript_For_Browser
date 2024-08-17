class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
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
    private grade: string;
    constructor(name: string, age: number, grade: string) {
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

abstract class Parcel {
    constructor(public weight: number) {

    }

    abstract calculate(x: number, y: number): void;

    printParcel() {
        console.log(`The weight of package height as ${this.weight}`);
    }

}

class StandardParcel extends Parcel {
    constructor(weight: number, private unitPrice: number) {
        super(weight);
    }
    calculate(x: number): void {
        this.weight = Number((x * this.unitPrice).toFixed(2));
    }
}

const parcel1 = new StandardParcel(100, 2.3);
parcel1.calculate(3);
parcel1.printParcel();