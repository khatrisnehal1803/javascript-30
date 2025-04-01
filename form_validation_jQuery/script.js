$(btn).on("click", function () 
{
    let email = $("#email").val();
    let password = $("#password").val();
    let conPassword = $("#conPassword").val();
    let isValid = true;

    let emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; 

    if (email == "" ||! emailValidator.test(email)) 
    {
        $("#err").text("Email is invalid!");
        isValid = false;
    }

    if (password == "" || conPassword == "" || !passwordValidator.test(password)) 
    {
        console.log("Entered!");
        isValid = false;
        $("#err2").text("It is not a strong password!");
    }

    if (password !== conPassword) {
        isValid = false;
        $("#err2").text("Passwords can not match!");
    }

    if (isValid) {
        $("#status").text("Sign up successfully!");
    }
});