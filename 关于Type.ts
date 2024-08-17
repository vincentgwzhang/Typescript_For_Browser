let var_a: number;

type Status = number | string;
function printStatus(data: Status) {
    console.log(data);
}

function printStatus2(data: number | string) {
    console.log(data);
}

type A = {
    height: number;
    width: number;
}

type B = {
    num: number
    cell: number
    room: string
}

type House = A & B; // 可以连接

const house: House = {
    height: 1,
    width: 2,
    num: 3,
    cell: 4,
    room: 'hello'
}


type logFunc = () => void;

const f1: logFunc = () => {
    return 100;
}