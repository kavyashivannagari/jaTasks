// code for checking user loggedin
let users=[
    {email:"kavyagoud@gmail.com",pswd:"kavya@123",phno:"9876543210"},
    {email:"Nisha@gmail.com",pswd:"Nishaa@123",phno:"9874543210"},
    {email:"Sony@gmail.com",pswd:"sony@123",phno:"9876783210"},
    {email:"Ammu@gmail.com",pswd:"ammu@123",phno:"99876543210"},
    {email:"Navya@gmail.com",pswd:"navvipandu@123",phno:"9822543210"}];
let userEmail=prompt("enter your email here:")    
let userPswd=prompt("enter your password  here:")  
let checkuser=users.find(user=>user.email===userEmail && user.pswd===userPswd)
if(checkuser){
    alert("your login has done successfully!!!")
}
else{
    alert("no match found")
}


// code for checking resume type to upload

let resumeType1=".pdf"
let resumeType2=".dox"

let uploadeResumeType=prompt("upload your resume here:")
if(uploadeResumeType.endsWith(resumeType1)||uploadeResumeType.endsWith(resumeType2)){
    alert("uploaded successfully!!!")
}
else{
    alert("check the resume type you uploaded")
}