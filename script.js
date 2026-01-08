const emailInput = document.getElementById('email');
const emailCheck = document.getElementById('emailcheck');

emailInput.addEventListener("input", function () {
    const email = emailInput.value;

    if (email.endsWith("@gmail.com")) 
    {
         emailCheck.textContent = "Valid Gmail ID ✅";
        
        emailCheck.style.color = "green";
    } 
    else
    {
        emailCheck.textContent = "Invalid Email ❌";
        emailCheck.style.color = "red";
    }
});

clearall=()=>
{
    document.getElementById("name").value="";
    document.getElementById("regno").value="";
    document.getElementById("branch").value="";
    document.getElementById("mob").value="";
    document.getElementById("email").value="";
    document.getElementById("Religion").value="";
    document.getElementById("Gender").value="";
    document.getElementById("skills").value="";
    document.getElementById("course").value="";
    document.getElementById("sign").value="";
    document.getElementById("name").value="";
    document.getElementById("name").value="";
    document.getElementById("name").value="";
}


