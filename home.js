
window.onload = function() {
var favoriteMovie = sessionStorage.getItem('usernamedb');
document.getElementById("name").innerHTML=favoriteMovie;
alert("Sign in sucessfull");
}