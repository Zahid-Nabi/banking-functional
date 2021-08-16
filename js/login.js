document.getElementById('login-button').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if(userEmail == "mybank@money.com" && userPassword == "money"){
        window.location.href = "banking.html";
    }
})