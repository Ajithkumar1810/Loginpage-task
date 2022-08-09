
function emailval(){
   
    const email_1=document.getElementById("email").value;
    if( email_1==="" ){
        document.getElementById("s1").innerHTML="Its mandatory";
    }
    else if(email_1.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        document.getElementById("s1").innerHTML="";
        
    }
    else{
        document.getElementById("s1").innerHTML="invalid Email";
    }
    sessionStorage.setItem("favoriteMovie2", email_1);
}
function passval(){
    const password=document.getElementById("password").value;
    document.getElementById("s3").innerHTML="";
   
   
    if(password===""){
        document.getElementById("s2").innerHTML="Its mandatory";
    }
    else if(password.length>=8){
        document.getElementById("s2").innerHTML="";
        
       
    }
    else{
        document.getElementById("s2").innerHTML="Password length must be atlest 8 character";
    }

}
function sumbitval()
{
    // var favoriteMovie = sessionStorage.getItem('usernamedb');
    var favoriteMovie1 = sessionStorage.getItem('emaildb');
    // var favoriteMovie2 = sessionStorage.getItem('passworddb');
    var favoriteMovie3 = sessionStorage.getItem('cpassworddb');
    // var favoriteMovie4 = sessionStorage.getItem('phonedb');
    let z=x=0;
    const email_1=document.getElementById("email").value;
    if( email_1==="" ){
        document.getElementById("s1").innerHTML="Its mandatory";
    }
    else if(email_1===favoriteMovie1){
        document.getElementById("s1").innerHTML="";
        z=1;
        
    }
    else{
        document.getElementById("s1").innerHTML="No user found";
    }
    const password=document.getElementById("password").value;
   
   
    if(password===""){
        document.getElementById("s2").innerHTML="Its mandatory";
    }
    else if(password===favoriteMovie3){
        document.getElementById("s2").innerHTML="";
        x=1;
       
    }
    else{
        document.getElementById("s2").innerHTML="invalid password";
    }
   
    
    if(z===1 && x===1){
        
        window.location.replace("./home.html")
        alert("Sign in sucessfully");
        
       
    }
    else{
        if(!(email_1===favoriteMovie1)){
        document.getElementById("s3").innerHTML="No Registered user found ";
        }
        else if(!(password===favoriteMovie3)){
            document.getElementById("s3").innerHTML="Invalid password entered";
        }
        else{
            document.getElementById("s3").innerHTML="";
        }
    }


}
function next(){
    window.location.replace("./signup.html")
}