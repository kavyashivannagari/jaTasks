let tags=document.querySelector("img")  // this is event binding
tags.style.borderRadius="100px"
 function image(){
  tags.src=`https://i.pinimg.com/736x/b3/c0/cc/b3c0ccb39c00b89d5a3a2acaca448d3e.jpg`
  tags.style.borderRadius="50px"
}
function clickbtn(){
  let s=document.getElementById("but")      // this is inline binding
    let v=s.style.backgroundColor="red"; s.style.padding="50px"; s.style.fontSize="40px"; s.style.color="white";
    s.style.borderRadius="50%"; 
   }
  console.log(v)