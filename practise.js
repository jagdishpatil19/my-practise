// problem 1
// extract the amount out of this String
// "please give rs 1000"

let string="please give Rs 1000"
// let amount=Number.parseInt(string.slice("please give Rs "));===1000
           //or

  amount=Number(string.slice(15))
  console.log(amount)//1000


//   problem2

let freind="deepika"
console.log(freind.replace("e","i"))