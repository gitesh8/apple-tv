let userDetail = JSON.parse(localStorage.getItem("setdata"));

document.getElementById("a").addEventListener("click", function () {

  let ram = document.getElementById("UserName").value;
  if (ram == "") {
    // alert("enter email id")
    swal({
      title: "Opps!",
      text: "Enter your email",
      icon: "error",
      button: "Ok",
    });
  }
  else {

    let ram = document.getElementById("UserName").value;
    let pass;
    let id = document.getElementById("arrowIcon")
    id.addEventListener("click", function () {
      pass = ash.value;
      console.log(pass);
      loginFun(pass, ram);
    })

    id.style.marginLeft = "360px", marginTop = "-10px"

    let ash = document.getElementById("pas")
    ash.setAttribute("placeholder", "XXXXXXXXXXX");
    ash.style.border = "2px solid grey"
    // console.log(ash.value);
    document.getElementById("pass").append(ash, id)

    document.getElementById("create").style.marginTop = "146px"

  }

});


function loginFun(password, name) {
  if (name == "" || password == "") {
    // alert("Enter password!!");
    swal({
      title: "Opps!",
      text: "Enter Password",
      icon: "error",
      button: "Ok",
    });
  } else {
    let res=false;
    let count=0;
    let fullname;
    userDetail.forEach(element => {
      // console.log(password,name,element.password,element.email)
      if (password == element.password && name == element.email) {
        res=true;
        count++;
      fullname = element.username + " " + element.lastname;
      } else {
        // alert("Email or password is wrong!!!! , Please recheck once again ....");
        swal({
          title: "Opps!",
          text: "Email or password is wrong!!!! , Please recheck once again ....",
          icon: "error",
          button: "Ok",
        }).then(function(){
          window.location.reload();
        });
      }
    });
    if(res==true && count>0){
        sessionStorage.setItem("userName", fullname);
        // alert("Login successfull...");
        swal({
          title: "Congratulations!",
          text: "Login successfully Done",
          icon: "success",
          button: "Continue",
        }).then(function () {
          location.href = "../index.html";
        });
    }
  }
  // console.log(password, name)
}
