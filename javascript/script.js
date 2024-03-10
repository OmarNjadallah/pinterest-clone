
document.getElementById("login").addEventListener('click',function(){
    let list1 = document.getElementById('loginpage');
    list1.classList.replace("hidden","flex");
});
document.getElementById("close").addEventListener('click',function(){
    let list1 = document.getElementById('loginpage');
    list1.classList.replace("flex","hidden");
});


