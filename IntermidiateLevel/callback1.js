function homework(subject, callback){
    console.log("I am doing", subject);
    callback();
}
function finishedHomework(){
    console.log("homework finished");
}
homework('math', finishedHomework);

