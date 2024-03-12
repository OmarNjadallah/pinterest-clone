
document.getElementById("login").addEventListener('click',function(){
    let list1 = document.getElementById('loginpage');
    list1.classList.replace("hidden","flex");
});
document.getElementById("closelogin").addEventListener('click',function(){
    let list1 = document.getElementById('loginpage');
    list1.classList.replace("flex","hidden");
});


document.getElementById("signup").addEventListener('click',function(){
    let list1 = document.getElementById('signuppage');
    list1.classList.replace("hidden","flex");
});
document.getElementById("closesignup").addEventListener('click',function(){
    let list1 = document.getElementById('signuppage');
    list1.classList.replace("flex","hidden");
});
