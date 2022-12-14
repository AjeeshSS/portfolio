

// $(document).ready(function(){
//     $(".navlist").click(function(){
//         $(this).css("color", "red");
//     })
// })



hamburger=document.querySelector(".dots")
hamburger.onclick=function(){
    navbar = document.querySelector(".aside")
    navbar.classList.toggle("active");
}






$(document).ready(function(){
    $(".navlist").on({
        mouseenter: function(){
            $(this).css("color", "red");
            
        },
        mouseleave: function(){
            $(this).css("color", "black");
        },
       
    }); 
    $('.btn').click(function(){
        var mail=document.getElementById("#email").value
        var chtr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(chtr.text(mail)){
            alert("valid emailId")
            return true
        }
        else{
            alert("invalid emailid")
            return false
        }
    })
})


// function Validate(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }