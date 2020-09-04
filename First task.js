function first(x) {
    var arr =new Array(x)
    var y=String()
    //console.log("First task")
    for (var i = 0; i < arr.length; i++) {
        arr[i]=i+1
        y+=arr[i].toString()+" "
        //console.log(arr[i])
    }
    return y
}
function second(x,y,z)
{
    if(x%y===0&&x%z===0)return true
    return false
}
function third(x)
{
    return x=x[0].toUpperCase()+x.slice(1)

    // console.log(x)
}
function process()
{
    var x=document.getElementById('first').value
    console.log(first(parseInt(x)))
    var y=document.getElementById('second').value
    console.log(second(parseInt(y[0]),parseInt(y[2]),parseInt(y[4])))
    var z=document.getElementById('third').value
    console.log(third(z))
}
// console.log("First task: "+"arr(5)"+first(5))
// console.log("Second task: "+"11,3,4 => "+second(11,3,4))
// console.log("Third task: "+ "george => "+third("george"))