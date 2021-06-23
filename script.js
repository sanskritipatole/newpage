
function validation() {

var first= document.getElementById('first').value
var last= document.getElementById('last').value
var mob= document.getElementById('mob').value
var user= document.getElementById('user').value
var pass= document.getElementById('pass').value
var birth= document.getElementById('birth').value
var a = document.Login.gender;

alert(" submit the following >> " + first + ", " + last + ", " + birth + ", " + mob + ", " + user + ", " + pass  )
if (first == "") {
  alert("**pls fill first name")
  //document.getElementById('firstname').innerHTML= "**pls fill first name";
  return false;
}
 if (!isNaN(first)) {
   alert("**nos. not allowed in first name")
  //document.getElementById('firstname').innerHTML= "**nos. not allowed in first name";
  return false;

}


 if (last == "") {
   alert("**pls fill last name")
  //document.getElementById('lastname').innerHTML= "**pls fill last name";
  return false;
}
if (!isNaN(last)) {
  alert("**nos. not allowed in last name")
//  document.getElementById('lastname').innerHTML= "**nos. not allowed in last name";
  return false;
}


if (birth == "") {
  alert("pls fill birthdate")
  //document.getElementById('birthdate').innerHTML= "**pls fill birthdate";
  return false;
}

if (mob == "") {
  alert("**pls fill mobile no.")
  //document.getElementById('mobno').innerHTML= "**pls fill mobile no.";
  return false;
}
if (isNaN(mob)) {
  alert("**only nos. allowed")
//  document.getElementById('lastname').innerHTML= "**nos. not allowed in last name";
  return false;
}
if(mob.length != 10){
  alert("**pls enter 10 nos, less than 10 not allowed")
  //document.getElementById('mobno').innerHTML= "**pls enter 10 nos, less than 10 not allowed";
}
if ((mob.charAt(0)!= 9) && (mob.charAt(0)!= 8) && (mob.charAt(0)!= 7)) {
  alert(" **mobile no. should start from 9 / 8/ 7 only")
  return false;
}





if (user == "") {
  alert("**pls fill username")
  //document.getElementById('username').innerHTML= "**pls fill username";
  return false;
}
if(user.length < 4){
alert("**user name should be greater than 4")
  //document.getElementById('username').innerHTML= "** should not be same";
  return false;
}
if(pass.length < 4){
alert("**password should be greater than 4")
  //document.getElementById('username').innerHTML= "** should not be same";
  return false;
}
if (pass.length <= 0) {
  alert("**pls fill password")
  //document.getElementById('password').innerHTML= "**pls fill password";
  return false;
}
if(user == pass){
alert("**username and password should not be the same")
  //document.getElementById('username').innerHTML= "** should not be same";
  return false;
}

function f2(){
if{ (pass.match(/[a-z]/g) && pass.match(/[A-Z]/g) && pass.match(/[0-9]/g) && pass.match(/[^a-zA-Z\d]/g) && pass.length >= 8)
                return true;
            else
                return false;
            alert("**passwword must contain atleast 1.upper case, 1.lower case, 1.special character && should not exceed 8 characters. ")
    }}
    return f2();
  /*if(pass.search(/ [0-9] /) == -1) {
  alert("**password must contain a number")
  //document.getElementById('password').innerHTML= "**password must contain a number";
  return false;
}  if (pass.search(/ [A-Z] /) == -1') {
  alert("**password must contain a uppercase")
//  document.getElementById('password').innerHTML= "**password must contain a uppercase";
  return false;
}  if (pass.search(/ [!/@/#/$/%/^/&/*] /) == 0) {
  alert("**Password must contain a special character")
  //document.getElementById('password').innerHTML= " **Password must contain a special character";
  return false;
}*/





function f1(){
for (var i = 0; i < a.length; i++) {
  if(a[i].checked==true)
  return true;}

alert("**pls fill radio box")
return false;
}
return f1();

}
<input type="submit"
