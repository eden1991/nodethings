var my_vars = process.argv;
var sum_of_numbers = 0;

for (i = 2; i < my_vars.length; i++) {
 // console.log(my_vars[element]);
  sum_of_numbers = sum_of_numbers + parseInt(my_vars[i]); 
}

console.log(sum_of_numbers)
