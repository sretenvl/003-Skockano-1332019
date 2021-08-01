window.onload=function(){
  document.getElementById("posalji").addEventListener("click",validate);
}
function validate(){

  //document.getElementById("cpr").innerHTML = "dobar dan";
  var ime = document.getElementById("ime").value;
  var email = document.getElementById("email").value;
  var predmet = document.getElementById("predmet").value;
  var poruka = document.getElementById("poruka").value;
  var tIme = /^([A-Z][a-z]{2,9})$/;
  var tEmail = /^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;
  var greske = [];
  if(tIme.test(ime) == false){
    greske.push("Ime");
    document.querySelector("#ime").style.border = "1px solid red";
  }
  else
  {
    document.getElementById("ime").style.border="1px solid green";
  }
  if(tEmail.test(email) == false){
    greske.push("email");
    document.querySelector("#email").style.border = "1px solid red";
  }
  else
  {
    document.getElementById("email").style.border="1px solid green";
  }

  if(poruka == ""){
    greske.push("poruka");
    document.querySelector("#poruka").style.border = "1px solid red";
  }
  else
  {
    document.getElementById("poruka").style.border="1px solid green";
  }
  if(greske.length==0)
  {
    alert("Vasa poruka je uspesno poslata.");
  }
}
