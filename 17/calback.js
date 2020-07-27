

function explain_calback(name,age,task){
    console.log(name)
    console.log(age)
    task()
}
function hello(){
    console.log('Your age ')
}
function hello2(){
    console.log('Your age ')
}
explain_calback('jami',20,hello)
explain_calback('Hello',27,hello2)






// function add(){
//     var sum=0
//     for (let i = 0; i < arguments.length; i++) {
//         const num = arguments[i];
//         sum=sum+num
        
//     }
//     return sum
// }

// var r=add(2,3,3,4,4,5)
// console.log(r)










