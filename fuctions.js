temp1 = `3,
    38,
    4,
    3,
    9,
    16,
    45,
    45,
    110,
    5,
    110,
    2,
    124,
    15,
    15,
    15,
    15,
    15,
    8,
    36,
    20,
    217`.split("\n")
console.log(temp1.length)
let  startIndex = 0;
let endIndex = 0; 
var appog = '';
for ( let i=0; i<temp1.length; i++){
    endIndex+= parseInt(temp1[i]);
    if(i!=1 || i!= 12 || i!=21)
        appog += ","+"startIndex = "+startIndex+", endIndex = "+endIndex + "\n";
    startIndex = endIndex; 
}
console.log(appog);