//Generic
//타입 파라미터
function getSize<T>(arr:T[]):number{
    return arr.length;
}
const arr1 = [1,2,3];
getSize<number>(arr1);
const arr2 = ["1","2","3"]
getSize<string>(arr2);

const arr3 = [false,true];
//마우스갖다되면 타입이나옵니다!
getSize(arr3);

//interface

interface  Mobile<T> {
    name:string;
    price:number;
    option:T | null;
}

// 이렇게도 사용 가능합니다
// const m1:Mobile<{color:string; coupon:boolean}>= {
//     name:"s123",
//     price:1000,
//     option :{
//         color:"red",
//         coupon:false
//     },
// }
const m1:Mobile<Object>= {
    name:"s123",
    price:1000,
    option :{
        color:"red",
        coupon:false
    },
}
const m2:Mobile<string> = {
    name:"s20",
    price:900,
    option:"good"
}
//
interface User {
    name:string;
    age:number;
}

interface  Car {
    name:string;
    color:string;
}

interface  Book {
    price:number;
}


const user:User = {name:"a",age:10};
const car:Car = {name:'bb', color:'red'};
const book:Book = {price:5000}

function showName<T extends  {name:string} >(data:T):string {
    return  data.name
}

showName(user);
showName(car);
// showName(book);