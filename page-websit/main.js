
var id;
var bottombar;

window.onload=function(){
 document.getElementById("p1").style.display="unset";
 document.getElementById("p2").style.display="none";
 bottombar=document.getElementById("p1noid");
 id=document.getElementById("p1id");
}

function recordid(){
 let loading=document.getElementById("loading");
 
 if(id.value.length==0){
 loading.style.display="unset";
 setTimeout(function(){loading.style.display="none";},1000);
 setTimeout(function(){bottombar.style.display="unset";},1000);
 setTimeout(function(){bottombar.style.display="none";},6000);
 }
 else{
 let loading=document.getElementById("loading");
 loading.style.display="unset";
 setTimeout(function(){loading.style.display="none";},900);
 document.getElementById("p1").style.display="none";
 document.getElementById("p2").style.display="unset";
 let idbox=document.getElementById("p2iddetails")
 
 if(validateEmail(id.value)){
 let text=document.createTextNode(id.value);
 let label_email=document.createElement("span");
 label_email.style.fontSize="13px";
 label_email.appendChild(document.createTextNode("Email"));
 idbox.appendChild(label_email);
 idbox.appendChild(document.createElement("br"));
 idbox.appendChild(text);
 }
 
 else if(isNumber(id.value)){
 let text=document.createTextNode(id.value);
 let label_email=document.createElement("span");
 label_email.style.fontSize="12px";
 label_email.appendChild(document.createTextNode("Phone"));
 idbox.appendChild(label_email);
 idbox.appendChild(document.createElement("br"));
 idbox.appendChild(text);
 }
 
 else{
 let text=document.createTextNode(id.value);
 let label_email=document.createElement("span");
 label_email.style.fontSize="12px";
 label_email.appendChild(document.createTextNode("Username"));
 idbox.appendChild(label_email);
 idbox.appendChild(document.createElement("br"));
 idbox.appendChild(text);
 }
 }
 return false;
}

const validateEmail = (email) => {
  return String(email)
 .toLowerCase()
 .match(
   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 );
};

function isNumber(str){
 for(c of str){
 if(isLetter(c)) return false;
 }
 return true;
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function func(){
 alert("هذا مجرد تصميم سنكمل في المستقبل القريب");
}

function changeImg(){
 let img=document.getElementById("p2showpassword");
 let see="https://i.ibb.co/pWXhcxd/image-1.png";
 let nosee="https://i.ibb.co/kGVk72h/image.png";
 let passbox=document.getElementById("p2password");
 if(img.src==see){
 img.src=nosee;
 passbox.type="text";
 passbox.focus();
 }
 else{
 img.src=see;
 passbox.type="password";
 passbox.focus();
 }
}

function final(){
 let password=document.getElementById("p2password");
 if(password.value != ""){
 alert("! تم تسجيل الدخول بنجاح");
 }
 else{
 alert(" ! رجاءا ادخل كلمة السر");
 }
 password.blur();
}
 
