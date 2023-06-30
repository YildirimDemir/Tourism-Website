document.getElementById("b1").addEventListener("click", function() {

  let satirElementleri = document.getElementsByClassName("plane");
    satirElementleri[0].scrollIntoView({ behavior: "auto", block:"center" });
});
document.getElementById("b2").addEventListener("click", function() {

  let satirElementleri = document.getElementsByClassName("ship");
    satirElementleri[0].scrollIntoView({ behavior: "auto", block:"center" });
});

document.getElementById("b3").addEventListener("click", function() {

  let satirElementleri = document.getElementsByClassName("bus");
    satirElementleri[0].scrollIntoView({ behavior: "auto", block:"center" });
});

document.getElementById("b4").addEventListener("click", function() {

  let satirElementleri = document.getElementsByClassName("train");
    satirElementleri[0].scrollIntoView({ behavior: "auto", block:"center" });
});
let butons = document.getElementsByClassName("butn");

for (let i=0; i < butons.length; i++ ) {
  butons[i].addEventListener("click", function() {
  
    let satirElementleri = document.getElementsByClassName("login");
      satirElementleri[0].scrollIntoView({ behavior: "auto", block:"center" });
  });
}