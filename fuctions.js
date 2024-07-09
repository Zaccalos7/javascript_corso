temp1 = `3
38
4
3
9
16
45
45
110
110
2
124
15
15
15
15
15
8
36
20
217`.split("\n")
let  startIndex = 0;
let endIndex = 0; 
var appog = '';
for ( let i=0; i<temp1.length; i++){
    endIndex+= parseInt(temp1[i]);
    //console.log(startIndex, endIndex)
    appog += "startIndex = "+startIndex+", endIndex = "+endIndex + "\n";
    startIndex = endIndex; 
}
console.log(appog);