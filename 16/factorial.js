

// function factorial(num){
//     var factorial=1
//     for (let i = 1; i <=num; i++) {
//         factorial=factorial*i    
//     }
//     return factorial;
// }
// let result=factorial(10)
// console.log(result)

function fact(n){
    var i=1
    var factorial=0
    while (i <=n) {
        factorial=factorial+i 
        i++
    }
    factorial=factorial/3
    return factorial
}
let result=fact(5)
console.log(result)



