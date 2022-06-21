//------------------------------map function----------------------------------------
let arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.map((elem) => elem)); //[1, 2, 3, 4, 5, 6]
console.log(arr1.map((elem) => elem + elem)); // [2, 4, 6, 8, 10, 12]
console.log(arr1.map((elem) => elem * elem)); //[1, 4, 9, 16, 25, 36]

//swep letters if it is in uppercase to lowercase and if it is in lowercase to uppercase
let swapinCase = "abdUlRaHman";
let swap = swapinCase
  .split("")
  .map(function (elem) {
    return elem === elem.toUpperCase()
      ? elem.toLowerCase()
      : elem.toUpperCase();
  })
  .join("");
console.log(swap); //ABDuLrAhMAN

// change negative number to positive number
let invertedNum = [1, -10, -20, 15, 100, -30];
let num = invertedNum.map(function (elem) {
  return elem < 0 ? elem * -1 : elem;
});
console.log(num); //[1, 10, 20, 15, 100, 30]

// print only letters and ignore numbers
let ignoreNum = "mo77h1a2m2m8e11d9";
let ig = ignoreNum
  .split("")
  .map(function (elem) {
    return isNaN(parseInt(elem)) ? elem : "";
  })
  .join("");
console.log(ig); // mohammed

//----------------------------filter function---------------------------------------

// filter names which start with A
let filtered = num.filter((elem) => elem % 2 == 0);
console.log(filtered);

let arr = ["Abdulrahman", "Mohammed", "Ali", "Amr", "Rami", "Rahaf", "Asma"];
let filteredNames = arr.filter((elem) => elem.startsWith("A"));
console.log(filteredNames); // ['Abdulrahman', 'Ali', 'Amr', 'Asma']

// filter word more than 4 characters
let newArr = arr.filter((elem) => (elem.length > 4 ? elem : ""));
console.log(newArr); //['Abdulrahman', 'Mohammed', 'Rahaf']

// print only letters and ignore numbers
ignoreNum = "mo77h1a2m2m8e11d9";
ig = ignoreNum.split("").filter((elem) => (isNaN(parseInt(elem)) ? elem : ""));
console.log(ig.join("")); // mohammed

// filter and multiply
let mix = "A13BS2X";
let mixx = mix
  .split("")
  .filter((elem) => (!isNaN(parseInt(elem)) ? elem : ""))
  .map((elem) => elem * elem);
console.log(mixx); //[1, 9, 4]

//-----------------------------reduce----------------------------------------------
//find long word in array
arr = ["Abdulrahman", "Mohammed", "Ali", "Amr", "Rami", "Rahaf", "Asma"];
let check = arr.reduce((acc, current) => {
  return acc.length > current.length ? acc : current;
});
console.log(check);
