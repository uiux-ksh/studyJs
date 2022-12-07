let superObj = {
    superVal:'super'
}
// let subObj = {
//     subVal:'sub'
// }
let subObj = Object.create(superObj);
superObj.subVal = 'sub';
debugger;

console.log(subObj.subVal,superObj.superVal ,subObj);
