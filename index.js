// var array = [1,2,3,4,5,6,7,8,9,10]
// for(array = 1; array<= 10; array++ ){
//         document.write(array + "<br>")
//     };
// assignment 4
// qno 1;
// function checkarr(arr){
// var result = Array.isArray(arr);
// if(result){
//     return true;
// }else{
//     return false;
// }
// }
// console.log(checkarr([1,2,3,4,5,5]));
// console.log(checkarr([1,2,3,4,5]));
// console.log(checkarr([]));

// // qno 2;
var cities = ["islamabad" , "karachi" , "lahore" , "peshawar"]
console.log(cities.toString());

// qno 3
// var digit = 25468;
// var str = digit.toString();
// console.log(str);
// var result = [0,"-",str[0]];
// console.log(result);
// for(let i = 1; i<str.length;i++){
//   if(str[i-1]%2===0 && str[i]%2===0){
//     result.push('-',str[i]);
//   }else{
//     result.push(str[i]);
//   }
// }
// console.log(result.join(''));





// qno 4;
var arr1 = [1,2,5,4,7,17,6,9]
console.log(arr1.sort());

// qno 6

// var alpa = "The Quick Brown Box";
// var string = "";
//     for(i = 0; i<alpa.length; i++){
//         if(alpa[i]===alpa[i].toUpperCase()){
//             string+=alpa[i].toLowerCase();     
//            }else{
//             string +=alpa[i].toUpperCase();
//            }
//     }
// console.log(string);





// qno 8;
var x = 0;
var array = Array();
function  add_element_to_array(){
    array[x] = document.getElementById("text1").value;
    // ("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("text1").value = "";
   }
   
   function display_array()
   {
      var e = "<hr/>";   
       
      for (var y=0; y<array.length; y++)
      {
        e += "Element " + y + " = " + array[y] + "<br/>";
      }
      document.getElementById("Result").innerHTML = e;
}



// qno7

// var array = [1, 2, 3, 4, 5, 6],
//     s = 0,
//     p = 1,
//     i;
// for (i = 0; i < array.length; i += 1) 
//    {
//     s += array[i];
//     p *= array[i];
//     }
// console.log('Sum : '+s + ' Product :  ' +p); 


