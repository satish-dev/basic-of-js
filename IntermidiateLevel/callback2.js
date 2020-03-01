function homework(sub1, sub2, callback1, callback2)
{
    console.log("I am doing", sub1, "Home work");
    callback1(sub1);
    console.log("I am doing", sub2, "Home work");
    callback2(sub2);
}
function homeworkDone(sub)
{
    console.log(sub, "Homework completed");
}
homework("Math", "Science", homeworkDone, homeworkDone);