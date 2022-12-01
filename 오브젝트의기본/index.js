//오브젝트의 crud ;
//create
let object = {
    manager:'kimseonghoos',
    developer:'ksh',
    designer:'any'
}
//update
object.manager = 'kimseonghoon'
//read
console.log(object.manager,object.developer,object['designer']);
//delete
delete object.designer;