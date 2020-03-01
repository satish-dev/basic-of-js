function second()
{
    console.log("This is second function");
}

function pro(){
    return new Promise((resolve,reject) => {
       setTimeout(() => {
        console.log("promise fun1");   
        resolve();
       }); 
    })
}
function pro2(){
    return new Promise((resolve,reject) => {
       setTimeout(() => {
        console.log("promise fun2");   
        reject();
       }); 
    })
}

function pro3(){
    return new Promise((resolve,reject) => {
       setTimeout(() => {
        console.log("promise fun3");   
        resolve();
       }); 
    })
}

let arr = [];
arr.push(pro(),pro2(),pro3());
Promise.all(arr).then(res =>{
    second();
}).catch(() =>{
    console.log("error");
})