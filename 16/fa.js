// var fibo=[0,1]
// // fibo[2]=fibo[2-1]+fibo[2-2]
// // fibo[n]=fibo[n-1]+fibo[n-2]
// for(var i=2;i<=10;i++){
//     fibo[i]=fibo[i-1]+fibo[i-2]
//     // console.log(fibo[1])
// }
// console.log(fibo)

// function f(n){
//     var fibo=[0,1]
//     // fibo[2]=fibo[2-1]+fibo[2-2]
//     // fibo[n]=fibo[n-1]+fibo[n-2]
//     for(var i=2;i<=n;i++){
//         fibo[i]=fibo[i-1]+fibo[i-2]
//         // console.log(fibo[1])
//     }
//     return fibo
// }

// var r=f(10)
// console.log(r)


function fibonacci(n){
    if(n==0){
        return [0]
    }
    if(n==1){
        return [0,1]
    }else{
        var fibo=fibonacci(n-1)
        var next=fibo[n-1]+fibo[n-2]
        fibo.push(next)
        return fibo
    }
}
var r=fibonacci(10)
console.log(r)












