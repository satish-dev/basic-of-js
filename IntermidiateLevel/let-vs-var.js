
function start() { 
    for(let i=0; i<5 ; i++) {
        console.log(i);
    }
    // This will show the error 
    console.log(i);
}
start();
/* The main difference between let and var is 
Variable declared using let is only available to the 
nearest block and on the other variable declared using 
the var is available to the nearest function*/

function start1() {
    for(var j=0; j<5 ; j++) {
        console.log(j);
    }
    // This will not show any kind of error
    console.log(j);
}
start1();

/* 
Before ES6  we have only var keyword to declare variable
ES6(ES2015) also have let and const to declare variable 
Note :- Variable declared using the var keyword is added inside the
window object so there is chance of conflict between between the already defined 
properites and your ones.So it's better to use let keyword in place of var
*/