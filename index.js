
let menuBtn=document.getElementById("menu")
let navLinks=document.getElementById("navLinks")
menuBtn.onclick=function(){
    console.log("hello")
    navLinks.classList.toggle("hidden");
}

let prevBtn=document.getElementById("prev");
let nextBtn=document.getElementById("next");
let partners=document.getElementById("partnerImgs");
let imgArr=document.getElementsByClassName("partner-img");

nextBtn.onclick=function(){
            
    partners.append(imgArr[0])
    partners.classList.add("transition")
          
}
prevBtn.onclick=function(){

    partners.prepend(imgArr[imgArr.length-1])
}