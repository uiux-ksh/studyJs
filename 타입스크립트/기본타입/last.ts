//Literal Types
const userName = "Bob";
let userName2:string|number = "Tom";
userName2 = 3;

type Jop = "police" | "developer"|"teacher";
interface User {
    name:string;
    jop:Jop;
}

const user:User = {
    name:'Bob',
    jop:"developer",//jop에 있는것만사용가능 student 같은 없는값을 입력시 에러
}

//유니온 타입

interface Car {
    name:'car';
    color:string;
    start():void;
}

interface  Mobile {
    name:"mobile";
    color:string;
    call():void;
}

function  getGift(gift:Car|Mobile) {
    console.log(gift.color);
    //둘다 color가있어서 가능 근데 start는 모바일이가지고있지않어 에러
    // gift.start()
    if(gift.name === "car") {
        gift.start();
    }else{
        gift.call();
    }
}

//교차타입(AND)
interface  Toy {
    name:string;
    color:string;
    price:number;
}
//교차타입은 전부 조건에 맞춰서 입력해줘야합니다.
const toyCAR:Toy & Car ={
    name:'car',
    start(){},
    color:'blue',
    price:3000,
}
