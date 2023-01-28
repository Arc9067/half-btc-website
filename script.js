const open = document.querySelector(".open");
const close = document.querySelector(".close");
const nav_links = document.querySelector(".nav-links");
const nav_link= document.querySelector(".nav-link");

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  navigationTooltips: ["Home", "About", "Contact"],
});

open.addEventListener("click", (e) => {
  nav_link.classList.toggle("display-nav");
  open.style.display="none"
  close.style.display="block"
});

close.addEventListener("click",()=>{
    close.style.display="none"
    open.style.display="block"
    nav_link.classList.remove("display-nav")
})




