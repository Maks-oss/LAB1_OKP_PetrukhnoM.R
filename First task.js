function first(x) {
    let arr =new Array(x)
    let y=String()
    //console.log("First task")
    for (let i = 0; i < arr.length; i++) {
        arr[i]=i+1
        y+=arr[i].toString()+" "
        //console.log(arr[i])
    }
    return y
}
function second(x,y,z)
{
    return x % y === 0 && x % z === 0;
}
function third(x)
{
    return x[0].toUpperCase()+x.slice(1)
}
function process()
{
    let x=document.getElementById('first').value
    console.log(first(parseInt(x)))
    let y=document.getElementById('second').value
    y=y.split(",")
    console.log(second(parseInt(y[0]),parseInt(y[1]),parseInt(y[2])))
    let z=document.getElementById('third').value
    console.log(third(z))
}
// console.log("First task: "+"arr(5)"+first(5))
// console.log("Second task: "+"11,3,4 => "+second(11,3,4))
// console.log("Third task: "+ "george => "+third("george"))