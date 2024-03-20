
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

const textchanger = document.getElementById('textchanger');


document.getElementById("list1").addEventListener('click',function(){
    clearbuttons();
    textchanger.classList.remove('textchanger');

setTimeout(function(){
    textchanger.classList.add('textchanger');
},10);
    this.classList.replace("bg-gray-300", "bg-yellow-600");
    textchanger.textContent = 'weekend dinner idea';
    textchanger.classList.add("text-yellow-600");   
});
document.getElementById("list2").addEventListener('click',function(){
    clearbuttons(); 
   
    textchanger.classList.remove('textchanger');

setTimeout(function(){
    textchanger.classList.add('textchanger');
},10);
    this.classList.replace("bg-gray-300", "bg-green-900");
    textchanger.textContent = 'home decor idea';
    textchanger.classList.replace('text-yellow-600','text-green-900');
    textchanger.classList.replace('text-blue-600','text-green-900');
});
document.getElementById("list3").addEventListener('click',function(){
    clearbuttons();
    
    textchanger.classList.remove('textchanger');

setTimeout(function(){
    textchanger.classList.add('textchanger');
},10);
    this.classList.replace("bg-gray-300", "bg-blue-600");
    textchanger.textContent = 'new look outfit';
    textchanger.classList.replace('text-green-900','text-blue-600');
    textchanger.classList.replace('text-yellow-600','text-blue-600');
});
document.getElementById("list4").addEventListener('click',function(){
    clearbuttons();
    
    textchanger.classList.remove('textchanger');

setTimeout(function(){
    textchanger.classList.add('textchanger');
},10);
    this.classList.replace("bg-gray-300", "bg-green-900");
    textchanger.textContent = 'green thumb idea';
    textchanger.classList.replace('text-blue-600','text-green-900');
    textchanger.classList.replace('text-yellow-600','text-green-900');
});


function clearbuttons(){
    document.getElementById('list1').classList.replace("bg-yellow-600","bg-gray-300")
    document.getElementById('list2').classList.replace("bg-green-900","bg-gray-300")
    document.getElementById('list3').classList.replace("bg-blue-600","bg-gray-300")
    document.getElementById('list4').classList.replace("bg-green-900","bg-gray-300")
}
textchanger.addEventListener('change',function(){
    textchanger.classList.toggle('textchanger');
})
