let data=JSON.parse(localStorage.getItem("updata"))||[]
let email=document.getElementById("email");
let password=document.getElementById("password");
let signin=document.getElementById("signin")
let flag=false;

signin.addEventListener("click",function(e){
    e.preventDefault();
    data.forEach(ele =>{
        if(ele.email==email.value && ele.password==password.value){
            flag=true;
            console.log("done")
        }
        else if(ele.email!=email.value && ele.password==password.value){
         flag="wrongemail";
        }
        else if(ele.email==email.value && ele.password!=password.value){
            flag="wrongpassword";
        }
        else if(ele.email!=email.value && ele.password!=password.value){
            flag="wrongemailandpassword";
        }
    });

if(flag==true){
    window.location.href="./index.html"
    alert("Logged Successfully")
}
else if(flag=="wrong email"){
    alert("wrongemail")
}
else if(flag=="wrongpassword"){
    alert("wrong password")
}
else if(flag=="wrongemailandpassword"){
    alert("wrong email and password")
}


})