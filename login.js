function signup(){
signpass=document.getElementById("wordpass").value;
signuser=document.getElementById("signusername").value;
email= document.getElementById("signemail").value;
malegen= document.getElementById("male1").value;
console.log(malegen);
femalegen= document.getElementById("female1").value;
othergen= document.getElementById("other1").value;

if(malegen.checked){
    gennier=malegen;
    console.log(malegen);
    localStorage.setItem("gender", gennier);
    }
else if(femalegen.checked){
        gennier=femalegen;
        localStorage.setItem("gender", gennier);
    }
else if(other.checked){
        gennier=othergen;
        localStorage.setItem("gender", gennier);
    }

    localStorage.setItem("signpassword", signpass);
    localStorage.setItem("signusername", signuser);
    localStorage.setItem("signemail", email);
    window.location.replace("index.html");
    //the information here and the window.location isnt saving/working...
}


function login(){
signedpass=localStorage.getItem("signpassword");
signedname=localStorage.getItem("signusername");
enterpass=document.getElementById("logpassword").value;
enteruser=document.getElementById("logusername").value;

    if(signedpass==enterpass && signedname==enteruser){
        console.log("correct");
        window.location="qwitter.html";
        
    }
    else{
        window.alert("Your Username or Password is wrong. Please enter it again");
    }

}