


function event(num){
    if(num%2==0){
        
        return num;
    }else{
        return num*2;
    }
}

var nums=[5,12,9,45,18,8]

for (let i = 0; i < nums.length; i++) {
    var num=nums[i]
    var r=event(num)
    console.log(r)
}
