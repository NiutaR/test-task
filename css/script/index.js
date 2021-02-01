//the 3rd task
const arr = [1,0,10,'0','1','',NaN,false,null,undefined,'false','true'];
function showTrue(arr) {
    for (let item of arr) {
        if(item) {
            console.log(item);
        }
    }
}
showTrue(arr);