let jsUser={

    name:"jagdish",
    age:18,
    location:"kadalge khurdh",
    mobNo:[7198108810,8108173020]
}


jsUser.age=23
console.log(jsUser["age"])

// Object.freeze(jsUser)
// jsUser.name="patil"
// console.log(jsUser.name)

jsUser.user=function(){
    console.log("hello js user",this.name)
}

console.log(jsUser.age,jsUser.name)

let fisrt={a:1,b:2,c:3}
let second={d:4,e:5,f:6}
  addset={...fisrt ,...second}
  console.log(addset)
 console.log(first)