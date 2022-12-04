let arr = JSON.parse(localStorage.getItem("setdata")) || [];

let email = sessionStorage.getItem("emailForForgetPassword");

if (email == "" || email == null || email == undefined) {
    location.href="forgetpassword.html";
} else {

    var sum = document.querySelector("form");
    sum.addEventListener("submit", function (event) {
        event.preventDefault();
        let pass1 = sum.inpu.value,
            pass2 = sum.password.value;
        // let password;  
        let index;

        // console.log(pass1,pass2);
        if (pass1.length <= 8 && pass2.length <= 8) {
            swal({
                title: "Opps!",
                text: "Your Password should contain minimum 8 digits...",
                icon: "error",
                button: "Ok",
            });
        }
        else if (pass1 == "" || pass2 == "") {
            // alert("suggest you minimum 8 digit password");
            swal({
                title: "Opps!",
                text: "Your Passwords should not be empty!!",
                icon: "error",
                button: "Ok",
            });
        }
        else if (pass1 !== pass2) {
            // alert("enter confirm password")
            swal({
                title: "Opps!",
                text: "Check your both passwords",
                icon: "error",
                button: "Ok",
            });
        }
        else {
            // alert("successe")
            let res = false;
            let count = 0;
            arr.forEach((element, i) => {
                console.log(element.email, email, element.email === email)
                if (element.email === email) {
                    // password = element.password;
                    index = i;
                    res = true;
                    count++;
                }
            });
            if (res === true && count > 0) {
                newpass = pass2;
                arr[index].password = pass1
                localStorage.setItem("setdata", JSON.stringify(arr))
                sessionStorage.setItem("emailForForgetPassword", "");
                swal({
                    title: "Congratulations!",
                    text: "Password changed successfully...",
                    icon: "success",
                    button: "Continue",
                }).then(function () {
                    window.location.href = "login.html";
                });
            }
        }
    });
}