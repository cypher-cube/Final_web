function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




function verif(){
    let firstname=document.getElementById("first-name")
    let familyname=document.getElementById("familyname")
    let birthdate=document.getElementById("birthdate")
    let email=document.getElementById("Email")
    if(!validateEmail(email.value)){
        alert("email is invalid")
    }
    let password=document.getElementById("Password")
    if(!Date.parse(birthdate.value)){
        alert("invalid date")
    }
    
    if (password.value.length<6){
        alert("password too short")
    }
    if (firstname.value.length==""){
        alert("must enter a name")
    }
    if (familyname.value.length==""){
        alert("must enter a falmily name")
    }
}