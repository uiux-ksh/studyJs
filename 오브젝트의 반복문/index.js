let object = {
    manager:'kimseonghoos',
    developer:'ksh',
    designer:'any'
}

//객체에서 사용하는for문은 for in
for ( let name in object) {
    console.log(name,object[name]); //키값이 나옵니다. object[key] = value;
}
