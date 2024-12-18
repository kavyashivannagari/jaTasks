// examples on filter method
let numbers=[1,2,-4,10,-3,-8,6,4,11,-1,-100,200]
let possitive_numbers=numbers.filter(num=>num>0);
console.log(possitive_numbers)

let words=["kavya Goud","Navya Goud","Abhinay Goud","Nisha","sony","unemployed individual","neha","teja naidu"]
let longwords=words.filter(word=>word.length>5)
console.log(longwords)
let smallwords=words.filter(word=>word.length<7)
console.log(smallwords)


let details=[{name:"shiva",age:25,job:"devops eng"},{name:"Uma",age:23,job:"soft eng"},{name:"Navya",age:19,job:"junior developer"},{name:"Abhi",age:20,job:"full stack developer"}]
let filtered_details=details.filter(user=>user.age>20)
console.log(filtered_details)

let nums=[1,2,3,5,8,7,9,56,12,43]
let evennum=number=>number%2==0
let even=nums.filter(evennum)
console.log(even)


// examples on map method
const num= [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2); 
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


const names = ["Ammu", "Navya", "abhi","sunitha","krishna"];
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);


const arrnum= [1, 2, 3, 4, 5];
const evenNumbersSquared = arrnum
  .filter(number => number % 2 === 0) 
  .map(number => number * number);
console.log(evenNumbersSquared);


const arr1 = [1, 2, 3, 4, 5];
const sumOfSquares = arr1
  .map(number => number * number) 
  .reduce((accumulator, current) => accumulator + current, 0);
console.log(sumOfSquares); // Output: 55

const users = [
    { id: 1, name: "vemana" },
    { id: 2, name: "thikkana" },
    { id: 3, name: "nannaya" }
  ];
  const userIds = users.map(user => user.name);
  console.log(userIds); 


//   examples on foreach
const n= [1, 2, 3, 4, 5];
n.forEach(number => {
  console.log(number); 
});


const Names = ["Shivannagari", "Abhinay", "Goud"];
let namesString = "";
Names.forEach(name => {
  namesString += name + " ";
});
console.log(namesString);


const user = [
    { id: 1, name: "kavya" },
    { id: 2, name: "navya" },
    { id: 3, name: "abhi" },
    { id: 4, name: "teja" }
  ];
  users.forEach(user => {
    console.log(user.name); 
  });


const n1 = [1, 2, 3, 4, 5];
n1.forEach(number => {
  if (number % 2 === 0) {
    console.log(number * 2); 
  }
});