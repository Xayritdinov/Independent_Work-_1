// ---wrapper--- //
let wrapper = document.querySelector (".wrapper");
let popUp = document.querySelector (".wrapper .popUp");
let typ = document.querySelector (".wrapper .thankYouPage");
let btns = document.querySelectorAll (".mainScreen__btn button");
let formBtn = document.querySelector (".form button");
let username = document.getElementsByName ("username")[0];
let userphone = document.getElementsByName ("userphone")[0];
let comments = document.getElementsByName ("comments")[0];

btns.forEach (btn => {
    btn.addEventListener ('click', showpopUp);
})
wrapper.addEventListener ('click', hidepopUp);

function showpopUp() {
    username.value = "";
    userphone.value = "";
    comments.value = "";
    
    wrapper.style.display = "flex";
    popUp.style.display = "flex";  
    typ.style.display = "none";
}
function hidepopUp() {
    let elem = event.target;
    if (elem == wrapper) {
        wrapper.style.display = "none";
    }
}
formBtn.addEventListener ("click", sendForm);
function sendForm() {
    event.preventDefault();    
    if (username.value.length > 1) {
        if (userphone.value.length > 1){
            showTYP();
        } else {
            console.log ('неверный номер'); 
        } 
        }else {
        console.log ('короткое имя');
        }
    }
function showTYP() {
    popUp.style.display = "none";    
    typ.style.display = "flex";
}

// ---Close-Btn--- //
document.getElementById('submitBtn2').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.wrapper').style.display = 'none';
});
document.querySelector('.close-button').addEventListener('click', function() {
    document.querySelector('.wrapper').style.display = 'none';
  });


// ---burger-menu--- //
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})