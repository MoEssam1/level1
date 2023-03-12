

function avg(){
    var nums=[15,20,30,6,8,92,10,23,45,30,68];
    var sum=0;
    for (let index = 0; index < nums.length; index++) {
        sum+=nums[index];
    }
    var avg=sum/nums.length;
    document.getElementById("result").innerHTML="avg : "+avg;
}
function show_sec(){
    avg();
    document.getElementById("result").style.display="block";
}
function hide_sec(){
    document.getElementById("result").style.display="none";

}
function show_nav(){
    document.getElementById("side_nav").style.width="300px";
    document.getElementById("sec").style.marginLeft="300px";
    document.getElementById("sec").style.transition=".5s";
}
function closeNav(){
    document.getElementById("side_nav").style.width="0px";
    document.getElementById("sec").style.marginLeft="0px";
}
 
function formvaldate()
{
    var user=document.getElementById("username").value;
    var email =document.getElementById("email_login").value;
    var phone=document.getElementById("phone_login").value;
     if(user.length<3)
    {
        alert("invalid user")
        username.focus();
        return false;
    }
    else if(!email.includes('@')||!isNaN(email))
    {
        alert("invalid Email")
        email_login.focus();
        return false;
    }
   
    else if(phone.length<11){
        alert("invalid phone")
        phone_login.focus();
        return false;
    }
    else{
        return true;

    }
}