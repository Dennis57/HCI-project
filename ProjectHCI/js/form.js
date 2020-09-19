var error = document.getElementById('lblError');

function validateForm(){
    var email = document.getElementById('email').value;
    var Username = document.getElementById('Username').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;
    var Male = document.getElementById('male').checked;
    var Female = document.getElementById('female').checked;
    var country = document.getElementById('country').value; 
    var Born = document.getElementById('birthday').value;
    var Must = document.getElementById('BOX').checked;

    if(email == ""){
        error.innerHTML = "Please enter your e-mail address";
    }
    else if(
        email.indexOf('@') == -1 || email.indexOf('.com') == -1|| email.indexOf('@') == 0|| email.indexOf('.') == 0
    ){
        error.innerHTML = "Wrong e-mail format";
    }
    else if(Username == ""){
        error.innerHTML = "Please enter your username";
    }
    else if(Username.length < 8){
        error.innerHTML = "Username at least 8 characters";
    }
    else if(password == ""){
        error.innerHTML = "Please enter your password";
    }
    else if(repassword == ""){
        error.innerHTML = "Please enter your password confirmation";
    }
    else if(password != repassword){
        error.innerHTML = "Passwords do not match";
    }
    else if((Male || Female) == 0){
        error.innerHTML = "Please choose your gender";
    }
    else if(Born == ""){
        error.innerHTML = "Please enter your Birthday";
    }
    else if(country == "None")
    {
        error.innerHTML = "Please choose a country";
    }
    else if(Must == 0){
        error.innerHTML = "Please agree";
    }
    else{
        error.innerHTML = "";
        alert("Successfully Registered");
        document.getElementById('form').submit();
    }
}

