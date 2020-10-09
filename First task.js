function first(x) {
    let arr =new Array(x)
    for (let i = 0; i < arr.length; i++) {
        arr[i]=i
    }
    return arr
}
function second(x,y,z)
{
    return x % y === 0 && x % z === 0;
}
function third(x)
{
    return x[0].toUpperCase()+x.slice(1)
}

console.log("First task: "+"arr(5)"+first(5))
console.log("Second task: "+"11,3,4 => "+second(11,3,4))
console.log("Third task: "+ "george => "+third("george"))