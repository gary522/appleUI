let home = true;
document.getElementById("menu").onclick = function () {
    if (home) {
        document.getElementById('popup').className = 'animate__animated animate__fadeInLeft'
        document.getElementById("appleRecruitment").innerHTML = '<a href="#"><i class="fab fa-apple"></i> Recruitment</a>';
        document.getElementById("menu").innerHTML = '<a href="#"><i class="fas fa-times"></i></a>';
    } else {
        document.getElementById('popup').className = 'animate__animated animate__fadeOutLeft'
        document.getElementById("appleRecruitment").innerHTML = '<a href="#"><i class="fab fa-apple"></i> Talent Point</a>';
        document.getElementById("menu").innerHTML = '<a href="#"><i class="fas fa-bars"></i></a>';
        
    }
    home = !home;
};

let coll = document.getElementsByClassName("sign");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    let content = document.getElementById('content'+i);
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      this.className = "fas fa-plus sign"
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.className = "fas fa-times sign"
    }
  });
}


