// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false




function checkUserName(){
    let x = document.getElementById("usertext");
    if(x.value==""){
        document.getElementById("name_error").innerHTML="Username should not be empty";
        return false ;
    }
    
    if(x.value.length<=8 || x.value.length>15){
        document.getElementById("name_error").innerHTML="Username should be a minimum of 8 characters and above ";
    }
    else {
        document.getElementById("name_error").innerHTML="";
        return true ;
    }
}
function checkEmail(){
     
    let email = document.getElementById("emailtext").value;
    var re = /\S+@\S+\.\S+/;
     if(!re.test(email)){
        document.getElementById("email_error").innerHTML="only @ , . , _ [at,dot,underscore] is allowed";
     }
     else {
        document.getElementById("email_error").innerHTML=" ";
     }
    
}

function checkPassword(){
    var p = document.getElementById('passwordtext').value;
        
    if (p.length < 8) {
        document.getElementById("password_error").innerHTML="Your password must be at least 8 characters";
        return false ; 
    }
    if (p.search(/[a-z]/i) < 0) {
        document.getElementById("password_error").innerHTML="Your password must contain at least one letter.";
        return false ;
    }
    if (p.search(/[0-9]/) < 0) {
        document.getElementById("password_error").innerHTML="Your password must contain at least one digit."; 
        return false ;
    }
    document.getElementById("password_error").innerHTML=" ";
    return true ;
}

function validateForm(){
    if(checkUserName() || checkEmail() || checkPassword() ){
        return true;
    }
    else return false;
    }
    
