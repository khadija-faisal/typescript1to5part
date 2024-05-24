
//loop in Typescript
//types of loop 
//1 : for loop
// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum += i
// }
// console.log("total sum =",sum);

import { log } from "console";

//2 : while loop
// let i  : number = 1;
// while(i <= 10){
//     console.log("i=",i),
//     i++
// }

//3 : do while
// let name: string = "khadija";
// let num = 0
// do{
//     console.log(name),
//     num++
// }while(num <= 10); 

// //4 : for of
// //example 1
// let name : string = "GovernerSindh";
// for(let val of name){
//     console.log(val); //print each character of GovernerSindh
// }
// //example 2
// let list : string[] = ["mango", "apple", "orange", "strawberry","grapes"]
// for(let i of list){
//     console.log(i); //print each fruits of (list as array)
// }

//example 3
// let str: string = "typescript";
// let size:number = 0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("size of string", size)

// //5: for in loop //using in iteration of object key:value and arrays
// let student = {
//     name : "khadija",
//     age: 19,
//     cgpa: 7.5,
//     isPass: true,
// };
// for(let key in student){
//     console.log(`key is ${key}, value of key${student.name}`);
// }
// //practice 1
// for(let num = 0; num <= 100; num++ ){
//     if(num % 2 == 0){
//         console.log("even:", num)
//     }else{
//         console.log("odd:", num)
//     }

// }
//practice 2
// let password = "k1234"
// import inquirer from "inquirer";
// const answer = await inquirer.prompt([
//     {message: "Enter a password:",type: "string",name: "user"}, 
// ]);
//  if(answer.user != password ){
//     console.log("Please Enter a valid password");
// } else{
//     console.log("congratulation, you entered the right password");
// }


// import inquirer from "inquirer";
//  let answer = await inquirer.prompt([
//     {message: "Guess the Number :",type: "number",name: "userNum"}, 
//  ]);
//  let gameNum : number = 25 ;
//  while(answer.userNum != gameNum){
//     answer = await inquirer.prompt([
//        {message: "you entered wrong number , Guess again :",type: "number", name:"userNam"}, 
//     ]); 
//     if(answer.userNum == gameNum){
//         console.log("congratulations, you entered the right number");
//     }
// }



// //Strings in TypeScript !
// // strings is a sequence of characters used to represent text !

//  //CREATE A SIMPLE STRING :
//  let fullName : string = "khadija Mughal"; // using variable to storing string 

// //  //inbuilt properties of STRINGS:
// //  //most common properties is "string lengths"
// //  //length counting always start from "0"
//   let batch : string = "Monday";
//   console.log("the total length of Monday is:",batch.length); //its will count characters of "Monday" and + additional 1 
//                                                               //lenght counting start with 0

// Strings Methods in Typescript !
// these are built-in functions to manipulate a strings.
//1 : str.toUpperCase()
// //connvert with same variable "name" value toUpperCase.
// let name: string = "my name is khadija";
// name = name.toUpperCase();
// console.log(name);
// //convert with duplicate of your variable value toUpperCase.
// let level: string = "tweleve in humantites"
// let newlevel = level.toUpperCase();
// console.log(newlevel);

// //2 : str.toLowerrCase()
// //connvert with same variable "name" value toLowerCase.
// let name: string = "MY NAME IS KHADIJA";
// name = name.toLowerCase();
// console.log(name);
// //convert with duplicate of your variable value toLowerCase.
// let level: string = "TWELEVE IN HUMANITIES"
// let newlevel = level.toLowerCase();
// console.log(newlevel);

// //3 : str.trim()
// // str.trim() is used remove whitespaces , means its remove extra space from start of your variable and end of your variable
// let lang : string = "      typescript       ";
// console.log(lang.trim());
// console.log(lang); //without using trim()

//string methods
//4: slice(start, End)
//SLICE METHOD USE TO RETURN A SPECIFIC PART OF STORED STRINGS IN VARIABLE
// let str = "KHADIJA";
// console.log(str.slice(1, 3)); //output will be "HA"
//                     //1= starting point 3= ending point
//                   //also "3" as a last index is non inculsive
// console.log(str.slice(0)); //output will be "KHADIJA"
//only put starting index as a "0" 
// if you put olny "start Index" it will print all the index after starting index

//string methods
//5: concat()
//CONCAT STRING USE TO JOIN 2 DIFFERENT STRING WHICH STORED IN 2 DIFFERENT VARIABLE
// let str1 = "type"
// let str2 = "script"
// let str3 = "love"
// console.log(str1.concat(str2,)) //output will be "typescript"
// console.log(str1 + str2);//also concat like this
//                         //same output "typescript

//string methods
//6: replace(searchVal, newVal)
//The replace() method helps you change parts of a text (like a sentence or a word) in a string

// //example :1 change alphabet characters
// let str1 = "hello";
// console.log(str1.replace("lo", "p"))
//             //output will be "help"

// // //example :2 change word from sentance
// // let str2 = "i love coding";
// // console.log(str2.replace("love", "enjoy"));
// //       //output will be "i enjoy coding"

// //replace() v/s replaceAll()
// //replace()
// let str3 = "A javascript is amazing, i love javascript";
// //replace will just change first coming word
// console.log(str3.replace("javascript", "typescript"));
// //output will be "A typescript is amazing, i love javascript"

// //replaceAll();
// console.log(str3.replaceAll("javascript", "typescript"));
// //output will be "A typescript is amazing, i love typescript"

//practice question for string method
// import inquirer from "inquirer";

// let input = await inquirer.prompt(
//       {
//             name: "fullname",
//             type: "input",
//             message: "enter your fullname without spaces:",
//       },
// );

// let attherate = "@";
// let userName = attherate.concat(input.fullname,);
// console.log(userName + userName.length);








// ARRAYS IN TYPESCRIPT :
//collections of items in linear 
//note : using [] to create an Array
//simple array
// let marks :number[] = [78, 85, 67, 50, 89, 100,];
// console.log(marks);
// //length of array
// console.log(marks.length); //array count 1 value as 1 length.
//                         // not count each numbers like 7 or 8, count one time
// //which data type is an arrys called
// console.log(typeof(marks));



//Arrays Indices!
//values of arrays access on index based.
//  let studentName :string[] = ["ali", "tasbiha", "mahira", "usman"];
// console.log("index value of 0:",studentName[0]);//index 0 = ali
// console.log("index value of 1:",studentName[1]);//index 1 = "tasbiha"
// //value is not avaiable in your array
// console.log("index value of 4:",studentName[4]);// index 4 = undefined


// //Arrays Indices!
// //wanna change any value from your array
// let students :string[] = ["ali", "tasbiha", "mahira", "usman"];
// students[2] = "rabia" //put rabia on mahira place
// console.log(students); //print after change specific value of array


//Looping over an "Array":
// loops use on -> iterable:(means that can be iterate by loops (strings, objects,arrays, numbers))
// prints all elements of an arrays.
//using for loop
// let colors: string[] = ["black", "pink", "orange", "blue", "purple", "green"];
// for (let i = 0; i < colors.length; i++) {
//     console.log("Colors:", colors[i]); //loop run until value of index is less then colors length
// }
// console.log("for loop is end");

// //using of "for of" loop
// let colors: string[] = ["black", "pink", "orange", "blue", "purple", "green"];
// for(let color of colors){
//     console.log("color:",color); //simply loop run printing colors one by one
// }
// console.log("for of loop is end");

// //for of loop
// let cities : string[] = ["karachi", "lahore", "islamabad", "kashmir"];
// for(let city of cities){ //simply loop run printing all cities name in uppercase one by one
//     console.log(city.toUpperCase());
// }

//Arrays Methods 
// 1
//  push() : add too end
//push method use to add some value at the end of an array
//it will change in original array
// let cities = ["karachi", "lahore", "sukkar" ]
// cities.push("sawat", "islam")
// console.log(cities);//output will be ["karachi", "lahore", "sukkar", "sawat"]

// // 2
// //pop() : remove from end 
// //pop method use to remove some value at the end of an array
// //it will change in original array
// let fruits = ["mango", "orange", "banana", "strawberry"]
// fruits.pop()
// console.log(fruits);// output will be ["mango", "orange", "banana"]

// 3 
// unshift() : Add to start 
//unshift method used to add some value at the start of an array
// let veggies = ["potato", "tomato", "onion", "Chilli"]
// veggies.unshift("carrot")
// console.log(veggies)//output will be ["carrot","potato", "tomato", "onion", "Chilli"]

// // 4 
// //shift() : remove from start 
// //shift method used to remove some value at the start of an array
// let heros = ["batman", "hulk", "ironman", "superman"]
// heros.shift()
// console.log(heros); //output will be ["hulk", "ironman", "superman"]

// 5 
// concat() : join multiple array 
// used to join mutiple array and give result in the form of new array.
// do not change original arrays 
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let newArray = arr1.concat(arr2);
// console.log(newArray);//output will be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 6
// slice(startIndex, endIndex) : return a piece of the array
//return a new array after perform method, do not change in original array
// let heros = ["hulk", "batman", "ironman", "Dr.stranger", "superman"]
//        //      0        1         2          3              4
// console.log(heros.slice(0, 2));//output will be ["hulk", "batman"] 
//             //also "2" as a last index is non inculsive

// //if you put only startIndex it will print the values after the "2" also inculisve "2"
// console.log(heros.slice(2));
//output will be ["ironman", "Dr.stranger", "superman"]


// 7
//splice() : used to Change orignal array (Add, remove, replace) 
//splice can excess value based on index 
// //understand it by example 
// let natruralNum =  [1, 2, 3, 4, 5, 6]
// //index ofnumbers = 0  1  2  3  4  5

// natruralNum.splice(2,   3,   103, 104, 105);
//   //splice(startIndex, deleteCount, newElement1,2,3..)

// console.log(natruralNum); //output will be [1, 2, 103, 104, 105, 6]










// // practice question for arrays 1
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0
// for(let mark of marks ){
//      sum += mark; 
// }
// let average = sum /marks.length
// console.log(`average marks of class = ${average}`);

// practice question for arrays 2
// //first way
// let items: number[] = [ 250, 645, 300, 900, 50];
// for(let i = 0; i < items.length; i++){
// if((items[i]) !== -1){
//       let divison = items[i] / 10
//       let result = items[i] - divison
//       console.log(result);
// }
// }
// second way
// let i = 0;
// for(let val of items){
//       let divison = val / 10 ;
//       items[i] = items[i] - divison 
//       console.log(`the value after 10% off ${items[i]}`);
//       i++
// }


// practice question for arrays 3
//part : a
//let companies: string[] = ["bloomberg", "microsoft", "Uber", "google", "IBM", "Netflix"]
//  companies.shift()
//  console.log(companies)
//part : b
// companies.splice(2,1,"Ola")
// console.log(companies)
//part : c
// companies.push("Amazon")
// console.log(companies)



//FUNCTIONS IN TYPESCRIPT
//block of code that performs a specific task, can be invoked(Call your fuction) whenever needed.
//create a simple function:
// function chocolate(milk: number, cocoPowder: number , sugar: number){
//  let recipe = milk + cocoPowder + sugar ;
//  return recipe ;  
// }
// //(round) brackets is used to call your function
// const result = chocolate(1, 2, 2); 
// console.log(`your Chocolate is ready ${result}`)
     //output will be "your Chocolate is ready 5 "

//create an arrow function:
//  const multipleNum = (a: number, b: number) => { return a * b ; } 

//  let result = multipleNum(4, 6);
// console.log(result); //output will "24"

// practice no 1 (Function) (using arrow function)
// let vowelSentance2 : any = (sentance: string) => {
//       let vowelCount = 0;
//       let vowellist = "AEIOUaeiou"
//       sentance = "this sentance take a lot of vowls"
//       for(let list of vowellist){
//             for (let val of sentance) {
//                   if (val === list) {
//                         vowelCount += 1;
//             }

//       }
// }
// console.log(sentance);
// return vowelCount ;
// }
// let response = (vowelSentance2());
// console.log(response)


// forEeach loop in array : it is a method to work for callback function 
//you can used three type of paremeters in foreach loop (val, idx, array)
//foreach also called as a "higher order function/Method": which is used to another function as a paremeter and return another function as a value
//callBackFunction: here, it is a function to excute for "each" elements in the array
//*A callback is a function passed to another function
//Example no 1 (Also a practice question )
// create an simple array of natural number 1 to 7
// let arr = [22, 44, 55, 66, 77]
// //forEach method go on every index on array
// arr.forEach((val) =>{ 
// // fuction add 1 in every each element in array 
// console.log(val * 2); //print after adding every element in single line
// });

//some more array method 
//2 : map
//create a new array with the result of some operation. the value its callback returns are used to form new array
//foreach and map have similer work
//difference is map create a new array on with result of your any operation
//in case foreach perform just your work  and  not create an new array
//syntx : arr.map(callbackfunc(value, index, array)) 
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
// arr2.map((val) => {
//       console.log(val * 2);
// })

//3: Filter 
//create a new array of elements that give true for a condition/filter.
//not change in original array, perform your work and give result in dulicate array
// //simple example as a even number 
// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8]
// let evenArray = arr3.filter((val: any) => {
//       return val % 2 === 0
     
// }
// );
// console.log(evenArray);

// //4 : Reduce 
// //performs some operation & reduce the array to a single value . it returns that single value
// //you can pass tow perameter in your callback function (perviousValue, currentvlue)
// // understand by example 
// //simple array
// let arr4 =[1, 2, 3, 4,]
// //how reduce work 
// //firstly preVal = 1 + currVal = 2 both value from arr4 then anwer is 3 then 
// // answer 3 will be preVal and + with 3 from arr4 is equal as a currVal 
// // then result will be 6 the 6 will be preVal it will add with 4 from arr4 
// let result = arr4.reduce((preVal: number, currVal) => {
//       return preVal + currVal;
//       //output will be 10 
// })
// console.log(result)

//side point about reduce method 
//if you wanna found  greatest number in your array by using reduce 
// let arr5 = [5, 2, 1, 6, 8, 7]
// const output = arr5.reduce((preVal, currVal) => {
//     return preVal > currVal ? preVal : currVal ;
// //if preVal is greater then currVal ? return preVal otherwise return currVal
// });
// console.log(output);



//practice qs 1  aray methods
//find out the marks upto 90 
// let marks = [87, 91, 75, 95, 67, 99]
// let highestMarks = marks.filter((val : number) =>{
//     return val > 90 ;
// });
// console.log("topper marks",highestMarks) 

//Array method practice qs 2 (using fuction to perform first part)
//take a number n as input  from user. create an arrray of numbers from 1 to n. by using typescript
// function newArray ( n: number ){ //taking n as a input 
// //storednum empty array is used to stored your output result 
//   const storedNum: Number[] =[] ;
//   //using for loop to excess value based on indices 
//   for(let i = 1; i <= n; i++){
//     //push is used to push your each value in storedNum array
//     storedNum.push(i)
//   }
//   //return your storedNum array to acsess your value out of scope
//   return storedNum ;
// }
// //stored your callfuction in result
// const result = newArray(1)
// //print your result on terminal
// console.log(result);




//Array method practice qs 2 (by using inquirer perform all part)
//(part 1) take a number n as input  from user.  
// create an arrray of numbers from 1 to n.
//(part 2)use reduce method to calulate the sum of all number in array.
//(part 3)use reduce method to calulate the product of all number in array
//(part 1)
// import inquirer from "inquirer";
//  let input = await inquirer.prompt(
//     {
//         name: "user",
//         type: "number",
//         message: "enter a number"
//     }
//  );
//  let arr : number[] = [];
//  for(let i = 1; i <= input.user; i++){
//     arr.push(i);
//  }
//   console.log(arr);
// //(part 2)
// let sum = arr.reduce((pre, curr) => {
//     return pre + curr
// });
// console.log("sum",sum)
// //(part 1) 
// let product = arr.reduce((pre, curr) => {
//     return pre * curr
// });
// console.log("factorial",product)








//class work
//practice
// let day = "thursday";
// let time = "9am to 12am";
// let phase = "morning"
// if(day === "thursday" && time === "9am to 12am" && phase === "morning"){
//     console.log("you can take class")
//  } else {
//      console.log("you cannot take class");
//  }

//practice
//  let age = 16;

//  if(age <= 18){
//     console.log("teenager");
//  } else if (age <= 40){
//     console.log("elder");
//  }else if (age <= 60){
//     console.log("Adult");
//  } else {
//     console.log("Kids");
//  }

// functions practice 
//place to put variable
//  function meal (biryani: number, colddrink: number, ) { //variable called perameter and , called dellimeter
//     let food = biryani + colddrink
//     console.log(food);
//     return food
//  }
// //when function called argument 
// meal()

//perameter store at this place

//       function tea(sugar:number,milk:number,tea:number){
// let cooked = sugar + milk + tea;
// console.log(cooked, "kitchen")
// return cooked

// }
// let respnose = tea(1,2,4)
// console.log(respnose)
// function biryani(masla: any, rice: any, chicken: any, youghart: any, potatos: any, onion: any, tomatos: any  ){
//     let cooked = masla  + rice + chicken + youghart + potatos + onion + tomatos;
//     console.log(cooked)
//     return cooked
//    }
// let respnose = biryani(1, 2, 1, 1, 4, 3, 1)

// let tea = () => {let cooked = 1+4+2
//    console.log(cooked);
//  } ;
// let respnose = tea()

/// miss assignmnet
// // Q no 1
// //  // Define a function named vowel_count that takes a string parameter (sentance)
// function vowelSentence(sentence: string) {
//      // Define a string containing all the vowels in both lowercase and uppercase
//    let vowelList = "aeiouAEIOU";

//      let vowelCount = 0 ;
//      // Iterate through each character in the input string
//      for (let i = 0; i < sentence.length; i++){
// ////We look at its index (position) in the vowelList If the index is not -1 (meaning it’s found in the list), we know it’s a vowel.
//         if (vowelList.indexOf(sentence[i]) !== -1){
//          // So, we increase the vowelCount by 1
//          vowelCount += 1;
//       }
//      } 
//      // Return the total count of vowels in the input string
//        return vowelCount;
//     }
//     // Log the result of calling vowelSentance with the inputstring "there are so many vowel in this sentance" in console
//     console.log(vowelSentence("there are so many vowel in this sentance"))

// //Q no 2
// //build a function that accept a number as a parameter 
// //and checks whether it is prime 
// let isPrime = function(num: number){
//   if (num <= 1 ){ // Numbers less than or equal to 1 are not prime
//     return false;
//   } else if ( num === 2){
//     return true;
//   } else {
//      for (let i = 2; i < num ; i++){
//       if(num % i === 0){ // If num is divisible by any number other than 1 and itself
//          return false;
//        }
//       }
//      }
//      return true // If no divisors were found, num is a prime number
//   }

// const userInput = 12
// console.log(`is ${userInput} a prime number`, isPrime(userInput));





// function vowelSentance(sentance : string){
//       let vowelList = "aeiouAEIOU"

//       let vowelCount = 0 ;

//    for(let i = 0; i < sentance.length; i++){
//       if(vowelList.indexOf(sentance[i]) === -1){
//             vowelCount += 1
//       }
//    }
//    return vowelCount;

// };
// console.log(vowelSentance("there are so many vowels in this sentance"));

// const sayHello = (num: number, num2: number) => {
//       let result = num + num2
//       let result2 = num - num2
//    console.log(result)
//      return result2
// }
// let response1 = sayHello(4,5)
// console.log(response2 - 4)
//  const sum = (...rest: any[]) => {
//    return rest
//  }
//  let response = sum(5 + 4 - 6)
//  console.log(response);










//class work objects

// let userName : any = {
//       name: "khadija",
//       age : 19,
//       result : "A+1",
//       isPass : true,
// }
// console.log(userName.age)


// // //how to object type
// type Cars = {
//  title : string,
//  model : string | number,

//  }
// let student : Cars = {
//     title : "civic",
//     model : "4563",

// }

// type Products = {
//     title: string,
//     price: number,
//     desc: string,
//     isAvaiable: boolean
// }
// let info : Products = {
//     title: "watch",
//     price: 4000,
//     desc: "this is the watch",
//     isAvaiable: true
// } 

// //nested object means : object mein object .
// // how?
// let prouduct1 = {
//     name: "fan",
//     model: "es4567",
//     address:{
//       street: "block 1 street 6",
//       postcode: 70742,
//       city: "karachi"
//     }
// }

// const product = {
//     title: "outfitters",
//     description: "this is outfitters shirt ",
//     price: 5000,
//     additionalinfo:{
//         color : ["pink", "black", "white"],
//         size : ["medium", "small", "large"],

//     }
// }
// // //creating objectbased type  (alias)
// type student = {
//     bio : {
//         name : string;
//         age: number;
//         dob: string;
//     },
//     department :{
//         depName : string,
//         faculty :"bcom" | "bscs" | "ba"
//         }
//      } 


// let info1 : student ={
//     bio : {
//         name: "khadija",
//         age: 19,
//         dob: "20-1-2005"
//     },
//     department: {
//         depName: "arts",
//         faculty : "ba"
//     }
//  }
// //  console.log(Object.values(info1.bio));
// // console.log(Object.entries(info1.bio));
// // console.log(Object.keys(info1.bio));

// //functions in objects
//  let info3 = {
//     printvalue : (val1: any) => {
//      return val1;
//     }
//  }
// console.log(info3.printvalue(4))
// //array class 
// let arr = ["hello", "khadija", 19, ]
// let collection = [{name: "khadija", class: 12,age : 19},{name: "ayesha", class: 10, age: 17} ]
// console.log(typeof(collection)) ;
// console.log(typeof(arr)) ; 
// //reserve two type in array
// let arr2 : (string | number)[] = [ "khadija", 11, "ayesha",]

//tuples
//reserved value in arrays
type  Cars =[string, string, string]
const cars: Cars = ["lamborhghini", "landcrusier", "mercedeces"]

//multi dimension array : array mein array
const arr : any = [1, 2,[1,2], ["ayesha"]]   // this any i took because of erorr  and second way to remove array convert into tuples
console.log(arr[3][0]);
console.log(arr)
  
//if you wanna pass  single elemts of 
console.log(arr[3][0]);
console.log(arr)

//second way to remove array convert into tuples
type tuples = [string, string, string, [string, string, string ]]


// you can use two multiple type in one object 

type intersection = {
   name: string;
   class: string ;

}
type intersection2 = {
  dob : number ;

}

let intersec : intersection & intersection2 ={
   name: "khadija",
   class: "twelve",
   dob : 1234

}
// declare type in variable in diferent way
let num: string = "khadija";
let num2 = 234 as number ;



