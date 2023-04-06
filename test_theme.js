let btnBurguer = document.querySelector(".burguer_content");
let navBarMobile = document.querySelector(".mobile_nav_bar");
let equisRemove = document.querySelector(".equis_nav");


btnBurguer.addEventListener("click", ()=> {
    navBarMobile.classList.add("mobile_nav_bar_active")
})
equisRemove.addEventListener("click", ()=> {
    navBarMobile.classList.remove("mobile_nav_bar_active")
})
