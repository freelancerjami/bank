

function factrial(n){
    if(n==0){
        return 1
    }
    else{
        return n*factrial(n-1)
    }
}
var result=factrial(2)
console.log(result)