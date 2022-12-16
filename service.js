

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

// navbar colour---------------------
$(document).ready(function(){
    $(".navlist").on({
        mouseenter: function(){
            $(this).css("color", "red");
            
        },
        mouseleave: function(){
            $(this).css("color", "black");
        },
       
    }); 
    //--------------validation----------------------------
    $('#sub').click(function(){  
        // name validation
        var n=$("#text").val()
        var regName = /^[a-zA-Z]+$/;
        if(!regName.test(n)){
            alert('Invalid name given.');
         }else{
            alert('Valid name given.');
            var ctr1=1;
        }
        //email validation
        var mail=$("#email").val()
        var chtr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(chtr.test(mail)){
            alert("valid emailId")
            var ctr=1;
        }
        else{
            alert("invalid emailid")
            // return false
        }

        if (ctr==1 && ctr1==1)
        {
            $("#submit-form").submit((e)=>{
                e.preventDefault()
                $.ajax({
                    url:"https://script.google.com/macros/s/AKfycbzylP30YttgON35bYzIpBmWQvCYvsb6mi01p7aTn_9SzDbKe61TfhVo778yqxF00IAO4A/exec",
                    data:$("#submit-form").serialize(),
                    method:"post",
                    success:function (response){
                        alert("Form submitted successfully")
                        window.location.reload()
                        //window.location.href="https://google.com"
                    },
                    error:function (err){
                        alert("Something Error")
        
                    }
                })
            })
        }
        else {alert("Something Error")}


    })
})
//clr btn----------------------------------------------------

let btnClear=document.querySelector('#clr')
let inputs=document.querySelectorAll('input')

btnClear.addEventListener('click',()=>{
    inputs.forEach(input => input.value = '')
})


// Get the scroll to top button-----------------------------------

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 700px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



