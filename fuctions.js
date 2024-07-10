temp1 = `3, 73, 22, 5, 12, 50, 4, 90, 17, 51, 80`.split(",")
console.log(temp1.length)
let  startIndex = 0;
let endIndex = 0; 
var appog = '';
for ( let i=0; i<temp1.length; i++){
    endIndex+= parseInt(temp1[i]);
    appog += ","+"startIndex = "+startIndex+", endIndex = "+endIndex + "\n";
    startIndex = endIndex; 
}
console.log(appog);



