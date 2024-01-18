let nav= document.querySelector(".navbar")
window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled")
    }else{
        nav.classList.remove("header-scrolled")
    }
}
//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse"); 
navBar.forEach(function(a){
    a.addEventListener('click',function(){
      navCollapse.classList.remove("show");
    })
})



//download resume
function downloadResume() {
    // Resume file ka URL ya path
    var resumeUrl ="./AnkushResume_converted.pdf";

    // Anchor tag create karke download attribute set karein
    var link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ankush_Shakya.pdf'; // Resume file ka naam

    // Anchor tag ko click karein
    document.body.appendChild(link);
    link.click();

    // Anchor tag ko remove karein
    document.body.removeChild(link);
}

var typed = new Typed("#next",{
   strings:[" Ui Designer","Front-end Devloper"," Back-end Devloper"],
   typeSpeed:100,
   backSpeed:80,
   BackDelay:1000,
   loop:true,


})

