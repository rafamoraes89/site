let menu = document.querySelector("#menu-hamburguer")
 menu.addEventListener('click', function() {
     setTimeout(function tempo() {let element = document.getElementById("menu-side");
     element.classList.toggle("dropdown-active")},250)
 })

let confirm = document.getElementById("menu-side")
 document.addEventListener('click', function() {
     if (confirm.classList.contains("dropdown-active")) {
     setTimeout(function tempo() {let element = document.getElementById("menu-side");
     element.classList.remove("dropdown-active")},250);
     let teste = document.querySelector("#menu-hamburguer").checked = false
     console.log(teste)
     
    }
 }) 
