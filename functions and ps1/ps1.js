// printing from 1to 10
var a=1;
while(a<=10){
    console.log(a);
    a++
}

// printing from 10 to 1
var a=10;
while(a>=1){
    console.log(a);
    a--
}

// printing numbers from -1 to -10
var a=-1;
while(a>=-10){
    console.log(a);
    a--
}

// printing numbers from -10 to -1
var a=-10;
while(a<=-1){
    console.log(a);
    a++
}

// code to print even and odd digits from user input using while loop
var userinput=prompt("enter a number");
var a=0;
while(a<userinput.length){
    if(userinput[a]%2==0){
        console.log(userinput[a],"even digit")
    }
    else{
        console.log(userinput[a],"odd digit")  
    }
    a++
    
}

// code to print even and odd digits  and their sum from user input using while loop

var userinput=prompt("enter a number");
var a=0;
SumEven=0;
SumOdd=0;
while(a<userinput.length){
    if(userinput[a]%2==0){
        SumEven+=Number(userinput[a])
    
    }
    else{
        SumOdd+=Number(userinput[a])
    }
    a++
    
}
console.log(SumEven,"sum of Even digits in the given number")
console.log(SumOdd,"sum of Odd digits in the given number")
