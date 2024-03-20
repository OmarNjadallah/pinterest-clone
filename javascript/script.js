
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


document.getElementById("personal").addEventListener('click',function(){
    document.getElementById("personaldiv").classList.add('hidden');
    document.getElementById("businessdiv").classList.remove('hidden');
});
document.getElementById("business").addEventListener('click',function(){
    document.getElementById("businessdiv").classList.add('hidden');
    document.getElementById("personaldiv").classList.remove('hidden');
});


document.getElementById("list1").addEventListener('click',function(){
    clearbuttons();
    this.classList.replace("bg-gray-300", "bg-yellow-600");
    let text = document.getElementById('textchanger');
    text.textContent = 'weekend dinner idea';
    text.classList.add("text-yellow-600");
});
document.getElementById("list2").addEventListener('click',function(){
    clearbuttons();
    this.classList.replace("bg-gray-300", "bg-green-900");
    let text = document.getElementById('textchanger')
    text.textContent = 'home decor idea'
    text.classList.replace('text-yellow-600','text-green-900');
    text.classList.replace('text-blue-600','text-green-900');
});
document.getElementById("list3").addEventListener('click',function(){
    clearbuttons();
    this.classList.replace("bg-gray-300", "bg-blue-600");
    let text = document.getElementById('textchanger')
    text.textContent = 'new look outfit'
    text.classList.replace('text-green-900','text-blue-600');
    text.classList.replace('text-yellow-600','text-blue-600');

});
document.getElementById("list4").addEventListener('click',function(){
    clearbuttons();
    this.classList.replace("bg-gray-300", "bg-green-900");
    let text = document.getElementById('textchanger')
    text.textContent = 'green thumb idea'
    text.classList.replace('text-blue-600','text-green-900');
    text.classList.replace('text-yellow-600','text-green-900');
});


function clearbuttons(){
    document.getElementById('list1').classList.replace("bg-yellow-600","bg-gray-300")
    document.getElementById('list2').classList.replace("bg-green-900","bg-gray-300")
    document.getElementById('list3').classList.replace("bg-blue-600","bg-gray-300")
    document.getElementById('list4').classList.replace("bg-green-900","bg-gray-300")
}