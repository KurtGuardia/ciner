const navSlide=()=>{const e=document.querySelector(".burger2"),n=document.querySelector(".nav-mini"),t=document.querySelectorAll(".nav-mini li");e.addEventListener("click",()=>{n.classList.toggle("nav-active"),t.forEach((e,n)=>{e.style.animation?e.style.animation="":e.style.animation=`navLinkFade 0.5s ease forwards ${n/7+.4}s`}),e.classList.toggle("toggle")})};navSlide();