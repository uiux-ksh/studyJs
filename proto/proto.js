let superObj = {
    superVal:'super'
}
let subObj = {
    subVal:'sub'
}
//proto 객체간의 링크를 만들어준다.(주관적인생각) protiolink 라고한다
//객체가 변하지않고 연결만된다.
subObj.__proto__ = superObj;
console.log(subObj.subVal,superObj.superVal);
console.log(superObj.superVal,subObj.superVal)