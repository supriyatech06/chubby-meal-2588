let data=JSON.parse(localStorage.getItem("updata"))||[];
let email=document.getElementById("email")
let signup=document.getElementById("signup");
let password=document.getElementById("password");
signup.addEventListener("click",function(){
    
    let obj={
        email:email.value,
        password:password.value,
    }
    data.push(obj);
    console.log(data);
    localStorage.setItem("updata",JSON.stringify(data));
    alert("Sign up succesful ");
})