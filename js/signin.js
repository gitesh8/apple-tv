let username=sessionStorage.getItem("userName");
console.log(username)

if(username == null || username == undefined || username == 0 || username == ""){

    // let li=document.createElement("li");
    // li.setAttribute("class","signIn");
    let a=document.createElement("a");
    let p=document.createElement("p");
    p.innerText="Sign In";
    a.addEventListener("click",function(){
        signinFunction();
    });
    
    let i=document.createElement("i");
    i.setAttribute("class","fa fa-user");
    
    a.append(i,p);
    // li.append(a)
    document.querySelector(".signIn").append(a);
    
    function signinFunction(){
        location.href="singinpage/login.html";
    }

}else{

    let para=document.createElement("p");
    para.innerText=username;

    let i=document.createElement("i");
    i.setAttribute("class","fa fa-user");

    let p=document.createElement("p");
    p.append(i,para);

    let button=document.createElement("button");
    button.innerText="Logout";
    button.addEventListener("click",function(){
        logout();
    })

    let div=document.createElement("div");

    div.append(p,button);
    document.querySelector(".name").append(div);
}

function logout(){
    sessionStorage.setItem("userName","");
    location.href="index.html"
}

function appletvFun(){
    window.open("./footer/appletv.html","_blank");
}

function iphone(){
    window.open("./footer/iphone.html","_blank");
}

function ipad(){
    window.open("./footer/ipad.html","_blank");
}

function mac(){
    window.open("./devicepg/mac.html","_blank");
}

function airplay(){
    window.open("./devicepg/Airplay.html","_blank");
}

