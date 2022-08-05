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
   
    if(password===""){
        document.getElementById("s2").innerHTML="Its mandatory";
    }
    else if(password.length>8){
        document.getElementById("s2").innerHTML="";
    }
    else{
        document.getElementById("s2").innerHTML="Password length must be atlest 8 character";
    }

}