Aud();
function Aud(){
    console.log(this)
}

clousers 

function abc(){
    i = 3
    return function (){ return i++}
}

console.log("ABC -- "+abc());
console.log("ABC -- "+abc());
console.log("ABC -- "+abc());
console.log("ABC -- "+abc());

var i = (param)=>{
    code
} 




arr = [10,20,30,40,50]
Array.prototype.goapl = function (fun){
    filterArr = [];
    for(i=0;i<this.length;i++){
        if(fun(this[i],i,this)){
            filterArr.push(this[i]);
        }
    }
    return filterArr;
}
var a = arr.goapl((element,index,arr)=>{return element>20});
console.log(a);


// function filterArr(arr,condition){
//     fiteredArr = [];
//     arr.forEach(element => {
//         if(element==condition){
//             fiteredArr.push(element);
//         }
//     });
//     return fiteredArr;
// }

