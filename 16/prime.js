
function idprime(n){
    for(i=2;i<n;i++){
        if(n%i==0){
           return 'not prime'
        }
    }
    return ' prime'
   
}
var r= idprime(113)
console.log(r)