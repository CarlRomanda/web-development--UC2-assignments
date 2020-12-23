var myform = document.forms.myform;
var message = document.getElementById("message");

myForm.onsubmit = function(){

    if(myForm.name.value == ""){
        message.innerHTML = "please enter a name";
        return false;
    } else{
        message.innerHTML = "";
        return true;
    }

};