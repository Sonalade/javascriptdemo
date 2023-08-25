function is_perfect(number){
var temp=0
for(var i=1;i<=number/2;i++){
   if(number%i===0){
      temp+=i;
   }
}
if(temp === number && temp !==0){
   console.log("it is a perfect number")
}
else{
   console.log("it is not a perfect number")
}
is_perfect(28)
}





// const num = 28;
// const checkPerfectNumber = (num = 1)  {
//    if(num === 1) {
//       return false;
//    };
//    let sum = 1;
//    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
//       if(num % i === 0) {
//          sum = sum + i + num / i; if(sum > num) {
//             return false;
//          }
//       };
//    };
//    return sum === num;
// };
// console.log(checkPerfectNumber(num));