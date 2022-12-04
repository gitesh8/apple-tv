let Contentbx = document.getElementsByClassName("dcontentbox");
for(let i=0; i<Contentbx.length; i++){
      Contentbx[i].addEventListener("click",function(){
        this.classList.toggle('active');
      })
}
function redirect1(){
  window.location.href="https://www.apple.com/in/";
}