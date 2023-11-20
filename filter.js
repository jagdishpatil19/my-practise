let books=[
{sub:"marathi",session:20 ,prize:100},{sub:"english",session:22 ,prize:200},{sub:"maths",session:20 ,prize:300},{sub:"phy",session:30 ,prize:250},{sub:"chem",session:25 ,prize:180},{sub:"hindi",session:23 ,prize:130},{sub:"kanad",session:10 ,prize:90}

]


//change sub in arry
// books[0].sub="bhugol"


//addd new object in arry
// books[0].added="newone"
// console.log(books)

 let newBook=books.filter((value)=>{
     return value.session==20 && value.prize>100
})
console.log(newBook)




let num=[2,3,5,6,20,3,0,29,7]

number=num.map((value)=>{
   return (value*value)
})
 console.log(number)
 