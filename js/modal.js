var modal = document.getElementById("Modal_1");
var modal2 = document.getElementById("Modal_2");
var modal3 = document.getElementById("Modal_3");
var modal4 = document.getElementById("Modal_4");
var modal5 = document.getElementById("Modal_5");
var modal6 = document.getElementById("Modal_6");


var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");


var span1 = document.querySelector(".close");
var span2 = document.querySelector(".close2");
var span3 = document.querySelector(".close3");
var span4 = document.querySelector(".close4");
var span5 = document.querySelector(".close5");
var span6 = document.querySelector(".close6");



btn.onclick = function() {
  modal.style.display = "flex";
}
btn2.onclick = function() {
  modal2.style.display = "flex";
}
btn3.onclick = function() {
  modal3.style.display = "flex";
}
btn4.onclick = function() {
  modal4.style.display = "flex";
}
btn5.onclick = function() {
  modal5.style.display = "flex";
}
btn6.onclick = function() {
  modal6.style.display = "flex";
}


span1.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span5.onclick = function() {
  modal5.style.display = "none";
}
span6.onclick = function() {
  modal6.style.display = "none";
}

// -------
// window.onclick = function(event) {
//   if (event.target == modal) {
//     this.modal.style.display = "none";
//   }
// }

