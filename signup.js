function backpage(){
    window.location.replace("./index.html")
}
function namefun(){
    const first_name=document.getElementById("username").value;
    if( first_name==="" ){
        document.getElementById("s1").innerHTML="Its mandatory";
    }
    else if(first_name.match(/^[a-zA-Z]+$/)){
        document.getElementById("s1").innerHTML="";
    }
    else{
        document.getElementById("s1").innerHTML='Name should be only aplhabet';
    }
    sessionStorage.setItem("usernamedb", first_name);
}
function checking_email(){

    const email_1=document.getElementById("email").value;
    if( email_1==="" ){
        document.getElementById("s2").innerHTML="Its mandatory";
    }
    else if(email_1.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        document.getElementById("s2").innerHTML="";
    }
    else{
        document.getElementById("s2").innerHTML="invalid Email";
    }
    sessionStorage.setItem("emaildb", email_1);
}
function passval(){
    const password=document.getElementById("password").value;
   
   
    if(password===""){
        document.getElementById("s3").innerHTML="Its mandatory";
    }
    else if(password.length>=8){
        document.getElementById("s3").innerHTML="";
       
    }
    else{
        document.getElementById("s3").innerHTML="Password length must be atlest 8 character";
    }

}
function cpassval(){
    const cpassword=document.getElementById("cpassword").value;
    const password=document.getElementById("password").value;
   
   
    if(cpassword===""){
        document.getElementById("s4").innerHTML="Its mandatory";
    }
    else if(cpassword===(password)){
        document.getElementById("s4").innerHTML="";
       
    }
    else{
        document.getElementById("s4").innerHTML="Password does not match";
    }

}
function checking_phone(){
    const phone_1=document.getElementById("phone").value;
    if( phone_1==="" ){
        document.getElementById("s5").innerHTML="Its mandatory";
    }
    else if( phone_1.match(/^\d{10}$/)){
        document.getElementById("s5").innerHTML="";
    }
    else{
        document.getElementById("s5").innerHTML="invalid phone number";
    }
    sessionStorage.setItem("phonedb", phone_1);
}
function finish(){
    let a=b=c=d=e=0;
    //name
    const first_name=document.getElementById("username").value;
    if( first_name==="" ){
        document.getElementById("s1").innerHTML="Its mandatory";
    }
    else if(first_name.match(/^[a-zA-Z]+$/)){
        document.getElementById("s1").innerHTML="";
        a=1;
    }
    else{
        document.getElementById("s1").innerHTML='Name should be only aplhabet';
    }
    sessionStorage.setItem("usernamedb", first_name);
    //email
    const email_1=document.getElementById("email").value;
    if( email_1==="" ){
        document.getElementById("s2").innerHTML="Its mandatory";
    }
    else if(email_1.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        document.getElementById("s2").innerHTML="";
        b=1;
    }
    else{
        document.getElementById("s2").innerHTML="invalid Email";
    }
    sessionStorage.setItem("emaildb", email_1);
    //password
    const password=document.getElementById("password").value;
   
   
    if(password===""){
        document.getElementById("s3").innerHTML="Its mandatory";
    }
    else if(password.length>=8){
        document.getElementById("s3").innerHTML="";
        c=1;
       
    }
    else{
        document.getElementById("s3").innerHTML="Password length must be atlest 8 character";
    }
    //cpassword
    const cpassword=document.getElementById("cpassword").value;
    // const password=document.getElementById("password").value;
   
   
    if(cpassword===""){
        document.getElementById("s4").innerHTML="Its mandatory";
    }
    else if(cpassword===(password)){
        document.getElementById("s4").innerHTML="";
        d=1;
       
    }
    else{
        document.getElementById("s4").innerHTML="Password does not match";
    }
    //phone
    const phone_1=document.getElementById("phone").value;
    if( phone_1==="" ){
        document.getElementById("s5").innerHTML="Its mandatory";
    }
    else if( phone_1.match(/^\d{10}$/)){
        document.getElementById("s5").innerHTML="";
        e=1;
    }
    else{
        document.getElementById("s5").innerHTML="invalid phone number";
    }
    sessionStorage.setItem("phonedb", phone_1);
    if(a===1&&b===1&&c===1&&d===1&&e===1){
        document.getElementById("s6").innerHTML="";
        backpage();
        alert("Registration Sucessfull");
    }
    else{
        document.getElementById("s6").innerHTML="Fill the details properly";
    }
}
