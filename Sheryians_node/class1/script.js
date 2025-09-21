
var arr = [1, 2, 3, 4]; 

arr.forEach(function(each){
    console.log(each+ " hello"); 
}) 
console.log(arr)

//.............

var arr1 = [1, 2, 3, 4]; 

let newarr1 = arr1.map((each)=>{
    return each*3 ;
})
console.log(newarr1)

 //...................

let fill = arr1.filter((val)=> {
    if(val >3) {
        return val; 
    }
})
console.log(fill) 

// ...........

let khojo = arr.find((val)=> {
    if (val === 2) return val; 
})
console.log(khojo)

//..........

arr.indexOf(12)   // -1 false. 
arr.indexOf(2)   //  1  true. 

var obj = {
    name: "harsh", 
    age: 12,
}
Object.freeze(obj); 

obj.name = "gaurav"

function abcd(){
    return "hello world"; 
}

var ans1 = abcd(); 


///........... 

var blob = await fetch(`https://randomuser.me/api/`); 
var  res = await blob.json(); 
console.log(res)









