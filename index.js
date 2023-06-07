function add(a,b){
    return a+b;
}
add(2,3)

function subtract(a,b){
    return a-b;
}
subtract(6,4)

function multiply(a,b){
    return a*b;
}
console.log(multiply(5,6))

function divide(a,b){
    return a/b;
}
console.log(divide(9,3))

function increment(a){
    return a + 1;
}
console.log(increment(3))

function decrement(a){
    return a - 1;
}

function makeInt(n){
    return parseInt(n,10)
}
console.log(makeInt('2'))
console.log(makeInt('0*2328'))
console.log(makeInt('sldkjflksjf'))

function preserveDecimal(n){
    return parseFloat(n)
}
console.log(preserveDecimal('2.222'))
console.log(preserveDecimal('sldkjflksjf'))