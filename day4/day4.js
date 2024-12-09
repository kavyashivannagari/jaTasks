// STRINGS TASKS
//  code  to concat the both string and convert the combined string into uppercase string
// var str1="     Kavya"
// var str2="GOUD      "
// var str3=str1.concat(str2)
// console.log(str3);
// var str4=str3.trim().toUpperCase()
// console.log(str4);

//  code to  Extract Middle Portion of the string and get the last index of char of extracted string and
//  Convert the portion to Lowercase
// var str5=str4.slice(2,7);
// console.log(str5);
// var lastindex=str5.length-1
// var lastchar=str5.charAt(lastindex)
// console.log(lastchar);
// var lowerstr=str5.toLowerCase()
// console.log(lowerstr);




// 3.take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char 

// var char="S"
// var upperstr=char.concat("KavyaGoud").toUpperCase();
// console.log(upperstr);
// var lastsecondchar=upperstr.charAt(upperstr.length-2)
// console.log(lastsecondchar);

// 4.we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase


//  var str1 = "sun risers hyderabad";
//  var str2 = "royal challengers benguluru";
 
//  const firstPart = str1.slice(0, 3);
//  const lastPart = str2.slice(-3);
 
//  const result = firstPart.concat(lastPart);
//  const capitalizedResult = result[0].toUpperCase() + result.slice(1, -1) + result[result.length - 1].toUpperCase();
 
//  console.log(capitalizedResult); 

//  5.You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, 
//  concatenate it with another string


const str = "   shivannagari kavya   ";
const toExtract = 3;
const additionalString = " Goud";
const trimmedStr = str.trim();
const extractedPart = trimmedStr.slice(toExtract, toExtract + 3); 
const capitalized = trimmedStr[0].toUpperCase() + trimmedStr.slice(1, -1) + trimmedStr[trimmedStr.length - 1].toUpperCase();
const finalString = extractedPart.concat(additionalString);
console.log(finalString);


//  6."hello there , how are you " find the index of are word in the sentence
// var sentence="hello there , how are you "
//  var x=sentence.split(" ")
//  console.log(x.indexOf("are"));
 






//  OBJECT TAKS
// Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.

// var person={firstName:"kavya",lastName:"shivannagari",age:20};
// console.log(person.firstName);
// person.city="New York"
// console.log(person);


// // Create an object product with properties name, price, and inStock. Then:
// // Modify the price property to a new value.
// // Delete the inStock property from the object and print the updated object.

// var product={name:"laoptop",price:"48000",instock:true}
// product.price=52000;
// delete product.instock;
// console.log(product);

// // 3.Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// // Add a new genre scienceFiction with a list of two books.
// // Access and print the first book in the fantasy genre.
// // Delete the mystery genre from the object.

// const library = {
//     fantasy: ["Lord of the Rings", "Harry Potter"],
//     mystery: ["Sherlock Holmes", "Agatha Christie"],
//     romance: ["Pride and Prejudice", "Romeo and Juliet"]
// };

// library.scienceFiction = ["Dune", "Foundation"];
// console.log(library.fantasy[0]);
// delete library.mystery;
// console.log(library);


// // 4.Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// // Freeze the user object using Object.freeze().
// // Try to change the email property and check if the object is frozen using Object.isFrozen().
// // Add a new property phone to the user object and observe the result.


// var user={username:"kavya goud",email:"kavyagoud@gmail.com",address:{city:"Narsapur",state:"Telanagan",zip:"502313"}}
// Object.freeze(user);
// user.email="kavya@gmail.com"
// console.log(user);
// var userfrozen=Object.isFrozen(user);
//  console.log(userfrozen);
//  user.phone="IQZ9X"
//  console.log(user); // we wont add or delete an property when the object is frozen


// //  5.Create an object car with properties make, model, and price. Then:
// // Seal the object using Object.seal().
// // Try to delete the make property and check if the object is sealed using Object.isSealed().
// // Modify the price property, and check if the object is still extensible using Object.isExtensible()
 
//  var car={make:"premium cars",model:"Toyota Fortuner",price:"₹33.43"}
//  Object.seal(car);
//  delete car.make
//  console.log(car); //wont delete when the object is seal
//  var carseal=Object.isSealed(car);
//  console.log(carseal);
//  car.price="40 lakhs"
//  console.log(car);
//   var carextensible=Object.isExtensible(car);
//   console.log(carextensible);
  
  
  
 

 


 

 
 















