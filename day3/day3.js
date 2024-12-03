// code to find the length of an array
var arr=[1,2,"ammu","abhi","navya",3,4,5];
console.log(arr.length);

// cod to add an element at the end of an array
var arr1=arr.push("teja","nisha")
console.log(arr);

// code to remove last element from array
var arr2=arr.pop()
console.log(arr);

// code to add an element at the begining of the array
var arr3=arr.unshift("sunitha","krishna goud")
console.log(arr);
var arr3=arr.unshift({Hometown:"Narsapur",family:"neuclar"})
console.log(arr);

// code to remove first element from an array
var a=[1,2,3,4,"xyz","legacy"]
var a1=a.shift();
console.log(a);

// code to reverse the order of elements in an array
var a2=a.reverse();
console.log(a);

// code to find specific index of an element in array;
var a3=a.indexOf("legacy");
console.log(a3);
var a4=a.indexOf(4);
console.log(a4);

// code to check whether an element present in array or not
var a5=a.includes("legacy")
console.log(a5);
var a6=a.includes("integrity");
console.log(a6);

// code to sort the elements in ascending order
var a7=a.sort()
console.log(a);

// code to convert an array into string by separting them with commas
var a8=a.join(",");
console.log(a8);

// code snippet that adds an element to the end of an array, then removes the first element.
var array=["cricket","kabbadi","tennis","druv jurel","anup kumar",23,45,1,55,88]
var array1=array.push("bhuvi")
var array2=array.shift();
console.log(array);

// code to reverse an array and then join the elements into a string
var array3=array.reverse();
console.log(array);

var array4=array.join(" ");
console.log(array4);

//  code that first sorts an array in ascending order, then removes the last element
var b=["cricket","kabbadi","tennis","druv jurel","anup kumar",23,45,1,55,88];
var b1=b.sort()
console.log(b1);
var b2=b1.pop()
console.log(b);

// code to add two elements at the beginning of an array, then remove the first element and find the length of the array
var c=["cricket","kabbadi","tennis","druv jurel","anup kumar",23,45,1,55,88];
var c1=c.unshift("srh","kohli","sony")
console.log(c);
var c3=c.shift();
console.log(c);
console.log(c.length);

// code to combine two arrays, sort the combined array, and then remove the last element
var d=["cricket","kabbadi","tennis","druv jurel","anup kumar",23,45,1,55,88,{name:"kavya",surname:"shivannagari"}];
var e=["unemployed","jobless","bankrupt"];
var f=d.concat(e);
console.log(f);
var g=f.pop();
console.log(f);































