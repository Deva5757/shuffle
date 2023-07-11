function math(array){
    var a=Math.floor(Math.random()*array.length)
    return a;
}
var a=["C","HTML","CSS","React","Python"];
function shuffle(array){
    var a=[];
    for(i=0;i<array.length;i++){
        var b=Math.floor(Math.random()*array.length);
        a.push(array[b])
    }
    alert(a)
}
// alert(shuffle(a));