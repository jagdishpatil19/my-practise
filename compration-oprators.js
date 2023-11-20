// two types of confirm,pration oprators
// 1-stack (primitive datatype)              2- heap (non-premitive datatype)
// pahilya variable che copy aste      varible copy naste direct to oringal mdhe change hotay 


let name="jagdish"
lName=name;
lName="jagdish patil"
console.log(name) 
// resul= jagdish
console.log(lName)
// result=jagdish patil


// heap
let heap={name:"jagdish" ,id:"patiljagdish", no:7449028}
 
newHeap=heap
newHeap.id="patil"
newHeap.no=82282023
newHeap.rollNo=12


// result=name:jagdish,id:patil,no:82282023
console.log(newHeap);
// result=name:jagdish,id:patil,no:82282023