window.addEventListener("load", ()=>{
    let loader = document.querySelector(".preoader");
     setTimeout(function(){
      loader.style.opacity = 0;
     }, 1000)
  
     setTimeout(function(){
         loader.style.display = "none";
     }, 2000)
  }) 
let btn1 = document.querySelector(".b-1");
let inp1 = document.querySelector(".i-1");



function hello(name) {
    alert("Пітвердіть" + name);
}
btn1.addEventListener("click", ()=>{
    hello("");
} )