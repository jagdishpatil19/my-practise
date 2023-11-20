function myName(){
    console.log("j")
    console.log("a")
    console.log("g")
    console.log("d")
    console.log("i")
    console.log("s")
    console.log("h")
}
myName() 

function addition(a,b){
    console.log(a+b,"addition")
    console.log(a-b,"substraction")
    console.log(a*b,"multiplication")
}
addition(2,4)


function userName(name){

    if(name===undefined){
        console.log("enter your user name")
        return
    }
    return `${name} loggin`
}
console.log(userName("jf"))



let first =prompt()
let second=prompt()

 function num(n1,n2){

 if(n1+n1){
    console.log(n1+n2,"addition")

 }
 else if(n1-n2){
    console.log(n1-n2,"sbstraction")

 }
}
num(prompt(),prompt())

