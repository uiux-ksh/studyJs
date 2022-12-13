//any타입은 되도록이면 쓰지않길
function add(num1:number,num2:number){
    console.log(num1 + num2) ;
}
add(1,2);


//배열
function showItems(arr:number[]) {
    arr.forEach((item) => {
        console.log(item);
    })
}
showItems([1,2,3]);


//타입스크립트 기본타입
let car:String = 'car';
//car =3 으로 바뀌면 에러가남;

let age:number = 3;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ['mon','tue','wed'];
let week2:Array<string> =['mon','tue','wed'];

//week2.push(3)하면 에러가나옵니다.


//튜플
let b:[string,number];
b=['z',1] //가능 b=[1,'z'] x안됨


//void never void는 아무것도 반환하지않는것

function sayHello():void {
    console.log('hello');
}
function showError():never {
      throw  new Error();
}


//enum
//json처럼 Os['Window']하실 3   Os[3] 실행시 Window가나옴
enum Os {
    Window=3,Ios=10,Android
}
let a3:null = null;
let a4:undefined = undefined;

//interface

let user:object;
user = {
    name:'kim',
    age:30
}
// user.name 에러가나옵니다 프로퍼티를 쓸려할때는 인터페이스가 필요합니다 console.log(user.name);
type Score = 'A'|'B'|'C'|'D';
interface User2 {
    name:string;
    age:number;
    gender? :string;
   readonly birthday:number;
   [key:number] :Score;
   //number숫자를 여러번받을수있다 예시 1:'A' 2:'B' 3:'C'이런식으로가능
}
//?옵션을 넣어도되고 안넣어도된다.
let user2 :User2 = {
    name:'xx',
    age:30,
    birthday:3,
    1:'A',
    2:'B'
}
// user2.birthday = 10; readonly 수정불가능
console.log(user2.age);

