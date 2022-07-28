//burgar_btn
function hamBtn(){
    let x = document.getElementById("navLinks");
    if(x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}
//navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-95px";
  }
  prevScrollpos = currentScrollPos;
}