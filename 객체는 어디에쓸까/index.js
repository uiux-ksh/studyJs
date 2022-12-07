console.log('Math.Pi',Math.PI);
console.log('숫자랜덤',Math.floor(Math.random() * 10));
console.log('정수',Math.floor(3.9));

//객체  = 연관된  변수와 함수의 그룹핑된것
let MyMath = {
    PI:Math.PI,
    random:function (){
        return Math.floor(Math.random()*10);
    },
    floor:function (val){
        return Math.floor(val);
    }
}
console.log(MyMath.PI,MyMath.random(),MyMath.floor(3.9))