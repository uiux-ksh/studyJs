//인터페이스 함수
interface  Add {
    (x:number,y:number):number;
    // 가장뒤에 number은 반환값
}
const add:Add = function (아무거나,넣어도됨):number {
    return 아무거나 +넣어도됨
}
add(10,20);

interface IsAdult {
    (age:number):boolean;
}

const a:IsAdult = (age):boolean => {
    return age > 19;
}

a(2);//true가 반환됨

interface  Car {
    color?:string;
    wheels?:number;
    start?():void;
}

class Bmw implements Car {
    color;
    wheels =4;
    constructor(c:string) {
       this.color =c;
    }


    start() {
        console.log('go...')
    }
}
const b= new Bmw('green') // BmW = { wheels:4; color:green } 으로 출력
b.start(); //go..가찍힘.

interface Banz extends Car {
    door:number;
    stop():void
}

const benz:Banz = {
    door:5,
    stop(){
        console.log('hello');
    }
}
//확장 여러개도가능
interface  ToyCar extends Car,Banz {
    price:number;
}
//함수
function hello(name?:string) {
    return `Hello ${name || 'Word'}`;
}
const result =hello();
const result2 = hello('ksh');

// name ? age 이런식으로는 안됨 ?인 선택적 매개변수가 필수매개변수 앞에 있으면안됩니다. 쓰고싶다면 name|undefined hello(undefined,30) 이런식으로 사용해야됩니ㅏㄷ.
function hello2(name:string,age?:number):string {
    if(age !== undefined){
        return  `Hello ${name}. You are ${age}`;
    }else{
        return `Hello ${name}`;
    }
}
hello2('NonAge')
hello2('Sam',20);
//수동적 함수
function adds(...num:number[]):number {
    return num.reduce((result,num) => result + num , 0);
}
adds(1,3,4);