interface PersonInterface {
    name: string
    age: number
    speak(n: number): void
}

interface StudentInterface extends PersonInterface {
    grade: string
}

class PersonInterfaceImpl implements PersonInterface {
    constructor(public name: string, public age: number) {

    }
    speak(n : number) : void {

    }
}

interface UserInterface {
    name: string
    readonly gender: string
    age? : number
    run: (n: number) => void
}

type UserType = {
    name: string
    readonly gender: string
    age? : number
    run: (n: number) => void
}

const userImpl : UserInterface = {
    name: "zhangsan",
    gender: "Male",
    age: 18,
    run(n) {
        console.log(n);
    }
}

// userImpl.run(12);

const studentImpl : StudentInterface = {
    name: 'ZZ',
    age: 18,
    grade: 'A2',
    speak: (n: number) => {
        console.log(`this is a number? ${n}`);
    }
}

studentImpl.speak(30);

// interface 和 type 的区别
// 像上面的 UserInterface 和 UserType 都是可以接受类的结构的
// 但是 interface 可以继承和合拼
interface AInterface {
    name: string
}

interface AInterface {
    age: number
}

// 自动合拼
const AImpl : AInterface = {
    name: 'zhangsan',
    age: 40
}