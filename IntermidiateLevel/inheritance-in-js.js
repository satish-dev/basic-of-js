function fun1() {
    this.a = 10;
}
function fun2() {
    fun1();
    // fun1.call();
    console.log(a);
}
fun2();