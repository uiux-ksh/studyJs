//얕은복사는 주소값만 복사하는것을 말한다 스택에있는(주소)
//방법
const obj = {
    name: '김성훈',
    age: 28,
    gender: "man",
    jop:'frontend'
}
//스프레드 연산자를 사용하면 주소값을 복사한다(얕은복사)
const copy = {...obj}
//깊은복사가 필요할때 객체안에 객체가있을시필요
const obj2 = {
    name: '김성훈',
    age: 28,
    gender: "man",
    jop:'frontend',
    kim:{
        user:'me'
    }
}
//방법
const copy2 =JSON.stringify(obj2);
const deepcopy = JSON.parse(copy2);
//이렇게 가능한이유 JSON stringfy로 문자열로만들어 주소값을 끊는다. 그후 객체로 다시만들어 새로운 주소값이 할당된다.
//깊은 복사는 주소만 복사하는게아니라 실제값(힙영역에있는값)까지 복사한다.