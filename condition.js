//  let age=prompt('Enter your age- ');
//  age=Number.parseInt(age)

//  if(age<=18){
// alert("chal be")
//  }

a = prompt()
a=Number.parseInt(a)
if(a>20){
    alert("unlimited")
}
 else if (a < 20 && a>10) {
  alert("hurry up bye fast");
}
 else if (a < 10 && a>=5) {
alert("limites stock")
}
else if (a<5 && a>=1){
    alert("last 5 available")
}
else if(a<=0){
    alert("unavilable")
}
 else {
  alert("plz inter valide no");
}
alert( a>0? "you can order":"you can\'t orderd") 