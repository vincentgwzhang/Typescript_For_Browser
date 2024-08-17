function logData<T, N>(data1: T, data2: N) : T|N {
    return Date.now() % 2 ? data1 : data2;
}

console.log(logData<String, number>('Str value', 33));


interface PPInterface<T> {
    name: string
    age: number
    extraInfo: T
}

let pp1 : PPInterface<string> = {
    name: 'AA',
    age: 18,
    extraInfo: 'vincent'
}