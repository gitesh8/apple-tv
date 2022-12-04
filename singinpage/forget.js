let arr = JSON.parse(localStorage.getItem("setdata")) || [];
var inform = document.querySelector("form");
inform.addEventListener("submit", forgetpassFun);
function forgetpassFun(event) {
    event.preventDefault();
    var num =inform.info.value
    // console.log("email"+ num);
    if (num.nam == "") {
        //  alert("enter your email");
        swal({
            title: "Opps!",
            text: "Enter your email",
            icon: "error",
            button: "Ok",
        });
    }
    else {
        //  alert("successfully");
        let res = false;
        let count = 0;
        arr.forEach(element => {
            if (num == element.email) {
                res = true;
                count++;
            } else {
                swal({
                    title: "Opps!",
                    text: "Email or password is wrong!!!! , Please recheck once again ....",
                    icon: "error",
                    button: "Ok",
                }).then(function () {
                    location.href="forgetpassword.html";
                });
            }

            if (res == true && count > 0) {
                sessionStorage.setItem("emailForForgetPassword",num)
                swal({
                    title: "Congratulations!",
                    text: "Successfully Done",
                    icon: "success",
                    button: "Continue",
                }).then(function () {
                    location.href = "newpassword.html";
                });
            }
        });
    }
}