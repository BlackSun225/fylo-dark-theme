const email = document.getElementById("email");
const checkmail = /[a-z0-9]+\@{1}[a-z]{3,}\.{1,2}/i;
const alert = document.getElementById("alert");

email.nextElementSibling.addEventListener("click", (event)=>{
  event.preventDefault();
})
email.addEventListener("blur", (event)=>{
 if (!email.value.match(checkmail)) {
   alert.innerHTML = "Please enter a valid email";
 }else{
   alert.innerHTML = "";
 }  
})

document.getElementById("lk").addEventListener("mouseover", (event)=>{
  event.target.children[0].src = "images/icon-arrow-white.svg";
});
document.getElementById("lk").addEventListener("mouseout", (event)=>{
  event.target.children[0].src = "images/icon-arrow.svg";
});


