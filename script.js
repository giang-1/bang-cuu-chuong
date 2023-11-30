let so = [1,2,3,4,5,6,7,8,9];
let array1 = "<table border=2>";
for(i = 1; i <so.length; i++){
    array1 += "<tr>"
    for(j =0; j < so.length;j++){
        array1 += `<td> ${[j + 1]} * ${[i + 1]} = ${so[i] * so[j]} </td>`

    }
    array1 += "</tr>"
}
array1 += "</table>"
document.getElementById('render').innerHTML = array1