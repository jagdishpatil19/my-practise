// 
// for loop

 
for (let i=1;i<10; i++) {
    console.log(" the number is " ,i,"the odd number is")
}

//-------------------------------------------------------------------------------------------------------------
//for/in loops
// let obj={
//     shri:92,
//     kishore:90,
//     sham:80,
//     RN:82
// }

// for(let a in obj){
//     console.log( "marks of ",a,"is",obj[a])
// }

// //---------------------------------------------------------------------------------------------------------
// //for/of loops

// let loopOf="jagdish"

// for(let b of loopOf){
//     console.log(loopOf[b])
// }

// //---------------------------------------------------------------------------------------------------
// //while loops

// let n =prompt("the number of n")
// n=Number.parseInt(n)
 
// let i=0;
// while(i<n){
//     console.log(i)
//     i++
// }



// for(let i=1; i<=20; i++){
//     console.log(i)
//     i=i+1
// // }


// let number1= [11,2,3,5,7,8,9]
//  for (let x =0; x<number1.length;x++){
//     console.log(`${number1[x]}"the odd number"`)
//  }

// let w=2
// while(w<=10){
//     console.log(w,"the number is" )
//     w=w*2
// }


 let num=[3,5,6,1,30,15]
// num.forEach((element)=>{
//     console.log(element+element)
// })

// console.log(num)
// for(let b of num){
//     console.log(b)
// }
for( let j in num){
    console.log(num[j])
}

for(f of num){
    console.log(f)
}


let space ="    my         name      is       jagdish      "

let newSpace=space.replace(/\s+/g," ")
console.log(newSpace)

  