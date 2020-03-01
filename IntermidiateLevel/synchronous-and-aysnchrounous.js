function first(callback)
{
    setTimeout(() => {
        console.log("This is first function");
        callback();
    });
}
function second()
{
    console.log("This is second function");
}
first(second);
