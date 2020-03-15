$(document).ready(function(){
    $("#Registerform").submit((event)=>{ 
        event.preventDefault();
        let firstName= $("#firstName").val();
        let secondName= $("#secondName").val();
        let mail=$("#mail").val();
        let password=$("#password").val();
        let formdata={
            firstName,
            secondName,
            mail,
            password
        }
        $.ajax({
            url : "http://localhost:3000/register",
            data : formdata,
            method: "POST",
            success : function(res){
                console.log(res);
            },
            error : function(error){
               console.log(error);
            }
        });
    })
})
