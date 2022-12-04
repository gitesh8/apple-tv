//start of for all mankind
let forAllMankindfirstimg = [

    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/90/a7/b6/90a7b6a7-04f4-ba38-11cd-77978c92e2fc/6dd93a9c-8082-4079-abd0-245e4fd8192c.lsr/1478x832fe.webp",
        id: "fstman1"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/a5/dc/cd/a5dccd03-d89f-8dc7-d253-fa6876e7601f/a03790ea-bca4-4249-b9ad-d13f1a07d654.lsr/1478x832fe.webp",
        id: "fstman2"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/98/33/a3/9833a393-d405-b5bb-2812-9f944a1072e7/3a9fe1af-3db9-4aca-8851-5d3460a4d115.lsr/1478x832fe.webp",
        id: "fstman3"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/7e/57/a6/7e57a60f-9be2-54a1-03f4-62f859f5a649/2644edb0-fde9-4a43-b2c5-dc28c368a89e.lsr/1478x832fe.webp",
        id: "fstman4"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/27/ed/14/27ed1408-6bb2-46ac-2523-66bc508d0618/d6340feb-a8de-405e-9ffa-31622d797990.lsr/1478x832fe.webp",
        id: "fstman5"
    }
];

displayforAllMankindfirstimg(forAllMankindfirstimg)

function displayforAllMankindfirstimg(forAllMankindfirstimg) {
    forAllMankindfirstimg.forEach(function (elem) {

        let photosforAllMankindfirstimg = document.createElement("div");
        photosforAllMankindfirstimg.addEventListener("click", function () {
            mankindFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosforAllMankindfirstimg.append(movphoto)
        document.querySelector("#firstMankind").append(photosforAllMankindfirstimg);

    });
}

// janaki update
$(document).ready(function () {
    $(".block-1").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 1,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false,
            },
            600: {
                items: 2,
                nav: true,
                loop: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
            }
        }
    });
});

// console.log(forAllMankindfirstimg[0])

function mankindFunction(ele) {
    let image = "https://is2-ssl.mzstatic.com/image/thumb/fSaT2Cu_1kdkgO4179kCwg/999x562.webp";
    sessionStorage.setItem("mankindFunction", image);
    window.open('insidePages/watch.html', '_blank');
}

//end of for all mankind


//start of most popular now
let mostPopularNowimg = [
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
        id: "mstpop1"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp",
        id: "mstpop2"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
        id: "mstpop3"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
        id: "mstpop4"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
        id: "mstpop5"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/lN-bUPh0Botn7U7jKgbnFg/738x416.webp",
        id: "mstpop6"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/2hSgeI8AyyKcpu_6Rhwg1w/738x416.webp",
        id: "mstpop6"
    },

];

displaymostPopularNowimg(mostPopularNowimg)

function displaymostPopularNowimg(mostPopularNowimg) {
    mostPopularNowimg.forEach(function (elem, i) {

        let photosmostPopularNow = document.createElement("div");
        photosmostPopularNow.setAttribute("class", "row");
        photosmostPopularNow.addEventListener("click", function () {
            mostPopularFunction(elem.imgurl, i);
        });
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosmostPopularNow.append(movphoto)
        document.querySelector("#mostPopularNow").append(photosmostPopularNow);

    });
}

// janaki updates
$(document).ready(function () {
    $(".block-2").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function mostPopularFunction(el, i) {
    switch (i) {
        case 0:
            mostPopular1 = {
                image: "https://is1-ssl.mzstatic.com/image/thumb/0QNze4UdarsNMgqK230KnQ/999x562sr.webp",
                logo: "https://is3-ssl.mzstatic.com/image/thumb/Bti23Ucycf0qdlSVEgBIyA/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 1:
            mostPopular1 = {
                image: "https://is1-ssl.mzstatic.com/image/thumb/817vv94spd-lZj8XcROCBw/999x562sr.webp",
                logo: "https://is2-ssl.mzstatic.com/image/thumb/lkfL5Yr2dJPdwg4healhjA/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 2:
            mostPopular1 = {
                image: "https://is3-ssl.mzstatic.com/image/thumb/ZiTyM73hqlnnRWPDPXxydw/999x562sr.webp",
                logo: "https://is5-ssl.mzstatic.com/image/thumb/ppDkYyI0vRmLKXootk7IBw/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 3:
            mostPopular1 = {
                image: "https://is4-ssl.mzstatic.com/image/thumb/cC8yOeECd9XOS00VpA3DYg/999x562sr.webp",
                logo: "https://is3-ssl.mzstatic.com/image/thumb/PQg_f7tjfoPNrV389DnMOw/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 4:
            mostPopular1 = {
                image: "https://is3-ssl.mzstatic.com/image/thumb/4x8-s5gM0I4HxxAjAQfVfA/999x562sr.webp",
                logo: "https://is4-ssl.mzstatic.com/image/thumb/TzRR7fuaGMrMZo5jTid-Dg/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 5:
            mostPopular1 = {
                image: "https://is1-ssl.mzstatic.com/image/thumb/GRr31gLt6l3sDVJ3lslpjg/999x562sr.webp",
                logo: "https://is1-ssl.mzstatic.com/image/thumb/0lcgiIk8QlhnglLCsb2RSQ/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 6:
            mostPopular1 = {
                image: "https://is2-ssl.mzstatic.com/image/thumb/1_ESW4BqNF8IsFMfAjWX6A/999x562sr.webp",
                logo: "https://is1-ssl.mzstatic.com/image/thumb/bADpuDvDgShdIe3vA-W4aw/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 7:
            mostPopular1 = {
                image: "https://is1-ssl.mzstatic.com/image/thumb/teZHXHXnb2oCpibFW0V1rw/999x562sr.webp",
                logo: "https://is3-ssl.mzstatic.com/image/thumb/hdvBRgl2BXqEcbRUG8VD2A/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 8:
            mostPopular1 = {
                image: "https://is3-ssl.mzstatic.com/image/thumb/LoTOVzvUhbAhM1d9zfkcnQ/999x562sr.webp",
                logo: "https://is5-ssl.mzstatic.com/image/thumb/yhEFnVeUlSG6Y19ooMUh9g/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;

    }
    window.open('insidePages/watch2.html', '_blank');
}

//end of most popular now

//start of watch entire seasons

let watchEntireSeasonsimg = [
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/UPoQbHoPte_TFJXEvKIIsw/738x416.webp",
        id: "wes1"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/6tJakyTEtS0vrgdc9POZpg/738x416.webp",
        id: "wes2"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/kVTKGnVvCdFlB1sZeKa8YQ/738x416.webp",
        id: "wes3"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/SEsiWD2cTDShiJqUtRPAxg/738x416.webp",
        id: "wes4"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/L4WNJNV3nbmyAL6MQSeGuw/738x416.webp",
        id: "wes5"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
        id: "wes6"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/yXhlXOFkS9yJ1kMmOhfIbg/738x416.webp",
        id: "wes7"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/VXktJkcnADdcq8RjZVT_nw/738x416.webp",
        id: "wes8"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/NHLksWLSZpTcIw36-n7vWA/738x416.webp",
        id: "wes9"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/mqP1mK0HzuFhIBXsd_Q_SA/738x416.webp",
        id: "wes10"
    },

];

displaywatchEntireSeasonsimg(watchEntireSeasonsimg)

function displaywatchEntireSeasonsimg(watchEntireSeasonsimg) {
    watchEntireSeasonsimg.forEach(function (elem) {

        let photoswatchEntireSeasons = document.createElement("div");
        photoswatchEntireSeasons.addEventListener("click", function () {
            mostPopularFunction(elem.imgurl);
        });
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl);

        photoswatchEntireSeasons.append(movphoto)
        document.querySelector("#watchEntireSeasons").append(photoswatchEntireSeasons);
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-3").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function mostPopularFunction(el){
    sessionStorage.setItem("mostPopularFunction", el);
    window.open('insidePages/watch3.html', '_blank');
}
//end of watch entire seasons

//start of latest original
let latestOriginalimg = [

    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/1478x832.webp",
        id: "lo1",
        fstTxt: "DRAMA",
        secTxt: "For All Mankind",
        trdTxt: "A new competitor joins the global space race in Season 3 of the thrilling drama series",
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/_WDO4pxq_b43sYn1s-nJQg/1478x832.webp",
        id: "lo2",
        fstTxt: "KIDS & FAMILY",
        secTxt: "Lovely Little Farm",
        trdTxt: "Two young sisters start their very own special farm, where every day is an adventure.",
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/1478x832.webp",
        id: "lo3",
        fstTxt: "COMEDY",
        secTxt: "Physical",
        trdTxt: "Sheila hustles to turn her fitness empire dreams into reality in the second season.",
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/5SQrBAWXONSSRweUSmuRyg/1478x832.webp",
        id: "lo4",
        fstTxt: "DRAMA",
        secTxt: "Now and Then",
        trdTxt: "Five former friends reunite when a blackmailer threatens to expose their dark secret.",
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/BXmR2-KFYGt0UOGwMaocBg/1478x832.webp",
        id: "lo5",
        fstTxt: "KIDS & FAMILY",
        secTxt: "Harriest the Spy",
        trdTxt: "The animated adaptation of the beloved children’s book is back with all-new episodes.",
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/RMn-3IiFm6XMOJZT3tP8fA/1478x832.webp",
        id: "lo6",
        fstTxt: "DOCUMENTARY",
        secTxt: "Visible: Out on Television",
        trdTxt: "Explore the history of the LGBTQ+ movement through the lens of TV.",
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/uBU112xIP48X2tW5EbpGGQ/1478x832.webp",
        id: "lo7",
        fstTxt: "DOCUMENTARY",
        secTxt: "The Me You Can't See",
        trdTxt: "Orpha and Prince Harry guide honest discussion about mental health",
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/6MFkEmAhzwoAZfThq0xWHA/1478x832.webp",
        id: "lo8",
        fstTxt: "TALK SHOW",
        secTxt: "The Orpha Conversation",
        trdTxt: "Intimate discussion with newsmakers, thought leaders, and master of craft.",
    },

];

displaylatestOriginal(latestOriginalimg)

function displaylatestOriginal(latestOriginalimg) {
    latestOriginalimg.forEach(function (elem) {

        let photoslatestOriginalimg = document.createElement("div");
        photoslatestOriginalimg.addEventListener("click", function () {
            photoslatestOriginalimgFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)
        let firstText = document.createElement("p");
        firstText.innerText = elem.fstTxt;
        firstText.setAttribute("id", "lstP1")
        let secondText = document.createElement("p");
        secondText.innerText = elem.secTxt;
        secondText.setAttribute("id", "lstP2")
        let thirdText = document.createElement("p");
        thirdText.innerText = elem.trdTxt;
        thirdText.setAttribute("id", "lstP3")

        photoslatestOriginalimg.append(movphoto, firstText, secondText, thirdText)
        document.querySelector("#latestOriginal").append(photoslatestOriginalimg)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-4").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function photoslatestOriginalimgFunction(el){
    sessionStorage.setItem("photoslatestOriginalimgFunction", el);
    window.open('insidePages/watch4.html', '_blank');
}

//end of latest original
//start of coming soon
let comingSoonimg = [

    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/93/03/f9/9303f9f2-6ee7-c1ec-3800-f596df3b9efc/a8e96666-82df-4adb-b5c3-9d619f4a1003.lsr/1478x832fe.webp",
        id: "com1"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/2a/02/87/2a0287df-debe-7eac-1db9-78f3eb2cdb95/c71ff327-e42a-4833-9f36-514c85b3d181.lsr/1478x832fe.webp",
        id: "com2"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/4b/70/db/4b70dbe5-a278-90a8-55d8-dd1b12b64da9/68a3dc74-3669-4eff-a4bc-69f7e9bd5a58.lsr/1478x832fe.webp",
        id: "com3"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/Features126/v4/64/64/9a/64649a88-adb8-c15f-5dca-9e8a72410775/a60b4f94-872f-42b0-81e6-851452d0bee6.lsr/1478x832fe.webp",
        id: "com4"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/b1/42/5d/b1425dab-00f3-acad-7ec5-1a0b6d219a23/85c41100-4128-4739-840c-e4e625a60bce.lsr/1478x832fe.webp",
        id: "com5"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/3f/5c/8c/3f5c8cc0-1a6d-bfea-f5aa-6c8a209dcdef/879754b7-d036-4a3c-8f91-6d03eab36885.lsr/1478x832fe.webp",
        id: "com6"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/45/6e/b2/456eb26a-fd01-665d-ddaa-60558c888f40/U0YtVFZBLVdXLVJheW1vbmRfQW5kX1JheS1DU19Ccmlja19ub0J1Zy5sc3I.lsr/1478x832fe.webp",
        id: "com7"
    },
];

displaycomingSoonimg(comingSoonimg)

function displaycomingSoonimg(comingSoonimg) {
    comingSoonimg.forEach(function (elem) {

        let photoscomingSoonimg = document.createElement("div");
        photoscomingSoonimg.addEventListener("click", function () {
            photoscomingSoonimgFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photoscomingSoonimg.append(movphoto)
        document.querySelector("#comingSoon").append(photoscomingSoonimg)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-5").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false,
            },
            600: {
                items: 2,
                nav: true,
                loop: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
            }
        }
    });
});

function photoscomingSoonimgFunction(el){
    sessionStorage.setItem("photoscomingSoonimg", el);
    window.open('insidePages/watch5.html', '_blank');
}
//end of coming soon

//start of baseball
let baseballimg = [

    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/Features116/v4/fe/30/99/fe30991b-023f-65db-6c47-9bcaacab5977/90310982-ea94-40a5-81e4-9d8de34c261e.lsr/1478x832fe.webp",
        id: "bb1"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/Features126/v4/f4/0a/4a/f40a4ac5-1d02-811d-f16b-9f5516fb7156/e42ffec9-d624-47fc-8dba-674142619205.lsr/1478x832fe.webp",
        id: "bb2"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/43/bb/de/43bbde5e-e7df-6f87-47ff-7cdfc211dc21/b07c188b-e1a2-4020-a4fc-c3fa00aa22d8.lsr/1478x832fe.webp",
        id: "bb3"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/9a/31/b3/9a31b32d-49b2-883c-4980-d21c4a54ca61/99152498-54bf-4672-a902-6b6785530333.lsr/1478x832fe.webp",
        id: "bb4"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/Features126/v4/e2/3b/69/e23b6978-fc88-161d-ccbc-1d9cb58c7037/533471c3-b683-43aa-9392-f8aac00eef66.lsr/1478x832fe.webp",
        id: "bb5"
    },

];

displaybaseballimg(baseballimg)

function displaybaseballimg(baseballimg) {
    baseballimg.forEach(function (elem) {

        let photosbaseballimg = document.createElement("div");
        photosbaseballimg.addEventListener("click", function () {
            photosbaseballimg(elem.imgurl);
        });
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosbaseballimg.append(movphoto)
        document.querySelector("#baseball").append(photosbaseballimg)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-6").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false,
            },
            600: {
                items: 2,
                nav: true,
                loop: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
            }
        }
    });
});

function photosbaseballimg(el){
    sessionStorage.setItem("photosbaseballimg", el);
    window.open('insidePages/watch6.html', '_blank');
}

//end of baseball

//start of a feast for the eyes
let aFeastforEyesimg = [
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
        id: "affe1"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/6kPVBOcFxH5eWRVp9Vy9BA/738x416.webp",
        id: "affe2"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/xW-YFC38wO80XQewW5Mn7A/738x416.webp",
        id: "affe3"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/fwOVLEMoZhr-wkppMR12XA/738x416.webp",
        id: "affe4"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/3UIt7-edNvHDrXR_FkZd6A/738x416.webp",
        id: "affe5"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/XtNPMhEaBU1FKkk_QK-DeA/738x416.webp",
        id: "affe6"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/qYEYYvFXN2O4zEuCcBSbjw/738x416.webp",
        id: "affe7"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
        id: "affe8"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/kdFsyPb7mK7T8-k6YrXdYQ/738x416.webp",
        id: "affe9"
    }

];

displayimgfeast(aFeastforEyesimg)

function displayimgfeast(aFeastforEyesimg) {
    aFeastforEyesimg.forEach(function (elem) {

        let photos = document.createElement("div");
        photos.addEventListener("click", function () {
            photosFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photos.append(movphoto)
        document.querySelector("#feast_for_the_eyes").append(photos);
    });
}
// janaki updates
$(document).ready(function () {
    $(".block-7").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false,
            },
            600: {
                items: 2,
                nav: true,
                loop: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
            }
        }
    });
});

function photosFunction(el){
    sessionStorage.setItem("photosFunction", el);
    window.open('insidePages/watch7.html', '_blank');
}
//end of a feast for the eyes

//start of feel good comedies

let feelGoodcomediesimg = [
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp",
        id: "fgc1"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/rZ34KsuVSjdutVP-0HO95A/738x416.webp",
        id: "fgc2"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
        id: "fgc3"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/le6mxqLNaXH47MHIH7stzw/738x416.webp",
        id: "fgc4"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/RHDyosPjHXJc01IiulkQSg/738x416.webp",
        id: "fgc5"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/738x416.webp",
        id: "fgc6"
    }
]

displayimgcomedies(feelGoodcomediesimg)

function displayimgcomedies(feelGoodcomediesimg) {
    feelGoodcomediesimg.forEach(function (elem) {

        let photosComedies = document.createElement("div");
        photosComedies.addEventListener("click", function () {
            photosComediesFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosComedies.append(movphoto)
        document.querySelector("#comedy").append(photosComedies)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-8").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function photosComediesFunction(el){
    sessionStorage.setItem("photosComediesFunction", el);
    window.open('insidePages/watch8.html', '_blank');
}
//end of feel good comedies

//start of from page to screen

let fromPageToScreenimg = [
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/QiFf4rD5DY65HbtJUOjE7Q/738x416.webp",
        id: "frmPS1"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/2hSgeI8AyyKcpu_6Rhwg1w/738x416.webp",
        id: "frmPS2"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/Tb1jarRHaWN_SFiMjZcDHw/738x416.webp",
        id: "frmPS3"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/IryLNqf3vJszRupPX70Elg/738x416.webp",
        id: "frmPS4"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/Ro6cUnMcHLf3sEVL38YlRg/738x416.webp",
        id: "frmPS5"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/fiTyznFr4Rsvd25TNhffww/738x416.webp",
        id: "frmPS6"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/8593WFOGVTTA1ncIGrL37g/738x416.webp",
        id: "frmPS7"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/qYEYYvFXN2O4zEuCcBSbjw/738x416.webp",
        id: "frmPS8"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/Iz8wdsRXYRysnRRCY0yMrA/738x416.webp",
        id: "frmPS9"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/vB48H4eBprLJ-WdCBTA6cw/738x416.webp",
        id: "frmPS10"
    },

];

displayimgscreen(fromPageToScreenimg)

function displayimgscreen(fromPageToScreenimg) {
    fromPageToScreenimg.forEach(function (elem) {

        let photosScreen = document.createElement("div");
        photosScreen.addEventListener("click", function () {
            photosScreenFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosScreen.append(movphoto)
        document.querySelector("#screen").append(photosScreen)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-9").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function photosScreenFunction(el){
    sessionStorage.setItem("photosScreenFunction", el);
    window.open('insidePages/watch9.html', '_blank');
}
//end of from page to screen

//start of extraordinary people

let extraordinaryPeopledata = [

    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/q15eqXAa_XH-L0KIDkPBJA/1478x832.webp",
        id: "exp1",
        fstTxt: "DOCUMENTARY",
        secTxt: "They Call Me Magic",
        trdTxt: "An intimate look at the life and legacy of an icon-Earvin" + "Magic" + "Johnson",
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/MP-C7FdZjq2Clj0BSxDbXg/1478x832.webp",
        id: "exp2",
        fstTxt: "DOCUMENTARY",
        secTxt: "Greatness Code",
        trdTxt: "Seven iconic atheletes reveal the pivotal career moment they touched greatness.",
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/PzRfPYv8-A3pM1Uafiv1qQ/1478x832.webp",
        id: "exp3",
        fstTxt: "DOCUMENTARY",
        secTxt: "Make or Break",
        trdTxt: "Follow the best surfers on the planet as they vie for the World Championship title.",
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/D1SCGzM1ESBh-SIkHwcvUQ/1478x832.webp",
        id: "exp4",
        fstTxt: "DOCUMENTARY",
        secTxt: "Billie Eilish: The World's A Little...",
        trdTxt: "The most intimate and revelatory music film in years." + "-USA Today",
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/qAk-30MspnyIG9hVKJ1qKQ/1478x832.webp",
        id: "exp5",
        fstTxt: "DOCUMENTARY",
        secTxt: "Dear...",
        trdTxt: "Profiles of society's most figures and the lives of those they've inspired.",
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/RMn-3IiFm6XMOJZT3tP8fA/1478x832.webp",
        id: "exp6",
        fstTxt: "DOCUMENTARY",
        secTxt: "Visible: Out on Television",
        trdTxt: "Explore the history of the LGBTQ+ movement through the lens of TV.",
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/uBU112xIP48X2tW5EbpGGQ/1478x832.webp",
        id: "exp7",
        fstTxt: "DOCUMENTARY",
        secTxt: "The Me You Can't See",
        trdTxt: "Orpha and Prince Harry guide honest discussion about mental health",
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/6MFkEmAhzwoAZfThq0xWHA/1478x832.webp",
        id: "exp8",
        fstTxt: "TALK SHOW",
        secTxt: "The Orpha Conversation",
        trdTxt: "Intimate discussion with newsmakers, thought leaders, and master of craft.",
    },

];

displayExtraordinaryPeople(extraordinaryPeopledata)

function displayExtraordinaryPeople(extraordinaryPeopledata) {
    extraordinaryPeopledata.forEach(function (elem) {

        let photosExtraPep = document.createElement("div");
        photosExtraPep.addEventListener("click", function () {
            photosExtraPepFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)
        let firstText = document.createElement("p");
        firstText.innerText = elem.fstTxt;
        firstText.setAttribute("id", "fstP")
        let secondText = document.createElement("p");
        secondText.innerText = elem.secTxt;
        secondText.setAttribute("id", "secP")
        let thirdText = document.createElement("p");
        thirdText.innerText = elem.trdTxt;
        thirdText.setAttribute("id", "trdP")

        photosExtraPep.append(movphoto, firstText, secondText, thirdText)
        document.querySelector("#extraordinary_people").append(photosExtraPep)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-10").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function photosExtraPepFunction(el){
    sessionStorage.setItem("photosExtraPepFunction", el);
    window.open('insidePages/watch7.html', '_blank');
}

//end of extraordinary people

//start of creatures and critters

let creaturesAndCrittersimg = [
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/_WDO4pxq_b43sYn1s-nJQg/738x416.webp",
        id: "cc1"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/owNSUO3F109RC75YDPMY7A/738x416.webp",
        id: "cc2"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/_Kq-GgPdDxxqWtSZ9GbHug/738x416.webp",
        id: "cc3"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/StRHuSLsy2WhrdoPNZ07xQ/738x416.webp",
        id: "cc4"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/2lfdtvo9bvduvVLrbcASow/738x416.webp",
        id: "cc5"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/6f5y-DYx9UvvcJ-gpqAufw/738x416.webp",
        id: "cc6"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/HGw-QzsXlYUDp68NCOvxZQ/738x416.webp",
        id: "cc7"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/UtRuOihF2zNFPo4g5zUwdA/738x416.webp",
        id: "cc8"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/lQggjzswj8ZD1hym1_oVGQ/738x416.webp",
        id: "cc9"
    }

];

displaycreaturesAndCrittersimg(creaturesAndCrittersimg)

function displaycreaturesAndCrittersimg(aFeastforEyesimg) {
    creaturesAndCrittersimg.forEach(function (elem) {

        let photoscreaturesAndCrittersimg = document.createElement("div");
        photoscreaturesAndCrittersimg.addEventListener("click", function () {
            photoscreaturesAndCrittersimgFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photoscreaturesAndCrittersimg.append(movphoto)
        document.querySelector("#creaturesCritters").append(photoscreaturesAndCrittersimg);
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-11").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function photoscreaturesAndCrittersimgFunction(el){
    sessionStorage.setItem("photoscreaturesAndCrittersimgFunction", el);
    window.open('insidePages/watch8.html', '_blank');
}
//end of creatures and critters 


//start of all drama series

let allDramaSeries = [
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
        id: "allds1"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp",
        id: "allds2"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/fiTyznFr4Rsvd25TNhffww/738x416.webp",
        id: "allds3"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/lN-bUPh0Botn7U7jKgbnFg/738x416.webp",
        id: "allds4"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
        id: "allds5"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/6f5y-DYx9UvvcJ-gpqAufw/738x416.webp",
        id: "allds6"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/UtRuOihF2zNFPo4g5zUwdA/738x416.webp",
        id: "allds7"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/lQggjzswj8ZD1hym1_oVGQ/738x416.webp",
        id: "allds8"
    },

];

displayAllDramaSeries(allDramaSeries)

function displayAllDramaSeries(allDramaSeries) {
    allDramaSeries.forEach(function (elem) {

        let photosDrama = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosDrama.append(movphoto)
        document.querySelector(".drama").append(photosDrama)
    });
}
// janaki updates
$(document).ready(function () {
    $(".block-12").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});
//end of all drama series

//start of all comedy series

let allComedySeriesimg = [

    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp",
        id: "allCS1"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
        id: "allCS2"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/dbEKo7rp5RGNNDrCbA7AUQ/738x416.webp",
        id: "allCS3"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
        id: "allCS4"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/rZ34KsuVSjdutVP-0HO95A/738x416.webp",
        id: "allCS5"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/vWs6dt5xDhG_DjIoc-89tA/738x416.webp",
        id: "allCS6"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/eGnsZyr_h0ivXT0r4jbaew/738x416.webp",
        id: "allCS7"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/D8bOyY8jg5hymGMxt1LSZg/738x416.webp",
        id: "allCS1"
    },

];

displayComedySeries(allComedySeriesimg)

function displayComedySeries(allComedySeriesimg) {
    allComedySeriesimg.forEach(function (elem) {

        let photosComedy = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosComedy.append(movphoto)
        document.querySelector(".comedySec").append(photosComedy)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-13").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});
//end of all comedy series

//start of all feature films

let allFeatureFilmsimg = [

    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/zRCSBlp0LjwClRXsjyDNYQ/738x416.webp",
        id: "allff1"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/8593WFOGVTTA1ncIGrL37g/738x416.webp",
        id: "allff2"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/cyRvgYnPlaVn3rN2SDdW1Q/738x416.webp",
        id: "allff3"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/k-4X4dDwJrtXlsgr1VI_0w/738x416.webp",
        id: "allff4"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/xwiVfxV1l5Tfy6-1uQ25_Q/738x416.webp",
        id: "allff5"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/fS85BR5uGUlTFLXLAWAMsg/738x416.webp",
        id: "allff6"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/KdlcNbBUOtf7sUXH5z9N8A/738x416.webp",
        id: "allff7"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/iNMKAaCahjd4PPdXo0D5iA/738x416.webp",
        id: "allff8"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/CwpcQl754x9lwddZ9TXqmQ/738x416.webp",
        id: "allff9"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/jvpbfkNAZaLIN3DZJUDX8Q/738x416.webp",
        id: "allff10"
    },
];

displayFeatureFilms(allFeatureFilmsimg)

function displayFeatureFilms(allFeatureFilmsimg) {
    allFeatureFilmsimg.forEach(function (elem) {

        let photosFeature = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosFeature.append(movphoto)
        document.querySelector(".feature").append(photosFeature)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-14").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});
//end of all feature films

//start of coda oscar winner best picture

let codaOscarImg = [

    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/6f/b7/62/6fb7628d-679f-17db-dbf6-ac52a7debb06/d97eccb1-2dbf-45b5-a35d-452d9496715f.lsr/1478x832fe.webp",
        id: "codaOscar1"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/de/3a/28/de3a2812-29b3-1e25-7941-a99ecb0e327c/851040fe-d937-4c50-b7d2-1188d59a022e.lsr/1478x832fe.webp",
        id: "codaOscar2"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/Features116/v4/4d/5e/12/4d5e12e1-9063-1e07-62be-b209b75401ff/19aac7af-1170-4a01-9f9e-b281b54f78df.lsr/1478x832fe.webp",
        id: "codaOscar3"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/6e/6b/c5/6e6bc5c0-0329-5915-f402-3dd9e31b0ad1/0b0c78ef-1abb-44c5-af22-d7f46c5425f1.lsr/1478x832fe.webp",
        id: "codeOscar4"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/ec/04/37/ec04376f-cf86-af1b-c914-444ef8236722/fdd6d9eb-204a-4a18-b69c-1f44af47b952.lsr/1478x832fe.webp",
        id: "codaOscar5"
    }
];

displaycodaOscarImg(codaOscarImg)

function displaycodaOscarImg(codaOscarImg) {
    codaOscarImg.forEach(function (elem) {

        let photoscodaOscar = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photoscodaOscar.append(movphoto)
        document.querySelector(".codaOscar").append(photoscodaOscar)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-15").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

//end of coda oscar winner best pictire
//start of nonfiction films & series 

let nonficImg = [

    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/40/a5/6a/40a56a15-9da2-967c-d69b-a5052bb404c5/89d54294-ded9-4ccc-859b-d5c5442c7682.lsr/1478x832fe.webp",
        id: "nonfic1"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/f8/7b/74/f87b74f9-ef7d-66c7-de75-6f621b9b800a/8c24d846-b3ad-4283-8424-4c055824358b.lsr/1478x832fe.webp",
        id: "nonfic2"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/50/62/c0/5062c0ba-9947-951a-9746-c2a8a6bbcb1d/3f5b9e26-ff9a-417a-aa68-88b07170a907.lsr/1478x832fe.webp",
        id: "nonfic3"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/df/1f/ee/df1feed6-5421-226d-8f83-80b25917a79c/aa243d71-7f71-4e3a-8f1c-53fc8af38cd2.lsr/1478x832fe.webp",
        id: "nonfic4"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/Features112/v4/93/c5/d8/93c5d824-f8a0-52eb-9f5d-983b7b1519ce/6a22d48e-0f5a-4653-aa1e-e2df3d05c202.lsr/1478x832fe.webp",
        id: "nonfic5"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/02/1b/b6/021bb65f-da77-03fa-8c6b-4ecf34dc7a6e/5b7e7fb9-444e-48f1-8260-9f43db9494a6.lsr/1478x832fe.webp",
        id: "nonfic6"
    }

];

displaynonficImg(nonficImg)

function displaynonficImg(nonficImg) {
    nonficImg.forEach(function (elem) {

        let photononficImg = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photononficImg.append(movphoto)
        document.querySelector(".nonFic").append(photononficImg)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-16").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false,
            },
            600: {
                items: 2,
                nav: true,
                loop: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
            }
        }
    });
});
//end of nonfiction films & series 

//start of all nonfiction series

let allNonfictionSeriesimg = [

    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
        id: "allnfs1"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/q9_3U3s5W2xyotbNEgDWgA/738x416.webp",
        id: "allnfs2"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/q15eqXAa_XH-L0KIDkPBJA/738x416.webp",
        id: "allnfs3"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/MP-C7FdZjq2Clj0BSxDbXg/738x416.webp",
        id: "allnfs4"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/Ulms3rha_yDCvDVlZyYUoQ/738x416.webp",
        id: "allnfs5"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/PzRfPYv8-A3pM1Uafiv1qQ/738x416.webp",
        id: "allnfs6"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/a99v9iRDYcIGof0CvxUUoA/738x416.webp",
        id: "allnfs7"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/VlRkLTAvxgEml_ZmCcmP1Q/738x416.webp",
        id: "allnfs8"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/KS0pkmrVEdO4uYZA5CpRZA/738x416.webp",
        id: "allnfs9"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/6kPVBOcFxH5eWRVp9Vy9BA/738x416.webp",
        id: "allnfs10"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/izP6zMmzs-m3VCjcOvM-DQ/738x416.webp",
        id: "allnfs11"
    }


];

displayallNonfictionSeriesimg(allNonfictionSeriesimg)

function displayallNonfictionSeriesimg(allNonfictionSeriesimg) {
    allNonfictionSeriesimg.forEach(function (elem) {

        let photoallNonfictionSeriesimg = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photoallNonfictionSeriesimg.append(movphoto)
        document.querySelector(".allNonfictionSeries").append(photoallNonfictionSeriesimg)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-17").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false,
            },
            600: {
                items: 2,
                nav: true,
                loop: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
            }
        }
    });
});
//end of all nonfiction series

//start of kids and family 

let kidsAndfamilyimg = [

    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/19/b8/ae/19b8aec2-4c0f-e3c6-9638-dc78df9bb483/08fbf252-ddd8-47d0-8638-4ba157b702d1.lsr/1478x832fe.webp",
        id: "kids1"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/Features116/v4/40/e4/3a/40e43a6a-fa61-07b3-a77a-11c622f938fd/U0YtVFZBLVVTQS1BVFZQbHVzX0tpZHMtQnJpY2tfMi5sc3I.lsr/1478x832fe.webp",
        id: "kids2"
    },
    {
        imgurl: "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/e7/7f/6d/e77f6d2a-f6c5-8c95-0d06-89c7e6edb080/U0YtVFZBLVVTQS1BVFZQbHVzX0tpZHMtQnJpY2tfMy5sc3I.lsr/1478x832fe.webp",
        id: "kids3"
    },
    {
        imgurl: "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/f9/81/8f/f9818faf-8b61-a76a-3398-acf53238cacf/U0YtVFZBLVVTQS1BVFZQbHVzX0tpZHMtQnJpY2tfNC5sc3I.lsr/1478x832fe.webp",
        id: "kids4"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/Features126/v4/e2/14/9a/e2149a62-3520-2f41-c465-04790607811c/U0YtVFZBLVVTQS1BVFZQbHVzX0tpZHMtQnJpY2tfNS5sc3I.lsr/1478x832fe.webp",
        id: "kids5"
    }

];

displaykidsAndfamilyimg(kidsAndfamilyimg)

function displaykidsAndfamilyimg(kidsAndfamilyimg) {
    kidsAndfamilyimg.forEach(function (elem) {

        let photokidsAndfamilyimg = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photokidsAndfamilyimg.append(movphoto)
        document.querySelector(".kidsAndfamily").append(photokidsAndfamilyimg)
    });
}
// janaki updates
$(document).ready(function () {
    $(".block-18").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});
//end of kids and family

// start of sifi section

let sifiInnerImg = [
    {
      imgurl : "https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/50/24/40/502440c0-ecdd-81fb-a96e-40e0a7b65cd9/9b30a927-8c20-4e33-be59-055b77940c4f.lsr/670x377sr.webp",
      id : "sifi0",
      text : "For All Mankind"
    },
    {
      imgurl : "https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/f1/96/9a/f1969aee-667d-ac38-9de5-3dd1cac02737/0df74eae-f292-4dbd-93a5-33791299ef6b.lsr/670x377sr.webp",
      id : "sifi1",
      text : "Foundation"
    },
    {
      imgurl : "https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/57/09/29/570929df-d455-eb08-a0e5-4cdfc99bb6cf/4388f695-59aa-4eb8-a1f6-c13cc367463e.lsr/335x189sr.webp",
      id : "sifi2",
      text : "Severance"
    },
    {
      imgurl : "https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/f1/0f/1f/f10f1f57-f7aa-936d-cd14-3eb60b94e132/69916d62-39ea-4a61-86e7-f8976616d690.lsr/670x377sr.webp",
      id : "sifi3",
      text : "See"
    },
    {
      imgurl : "https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/89/fc/78/89fc78ac-722e-5f25-6bb3-7e8efadae6c8/ba96707a-fe96-4b37-aade-649dd43c22ed.lsr/670x377sr.webp",
      id : "sifi4",
      text : "Finch"
    },
    {
      imgurl : "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/00/16/b8/0016b890-4c98-3c78-de20-5b6b1bf29601/c1e069a8-798b-499c-b220-07d0b601dca4.lsr/335x189sr.webp",
      id : "sifi5",
      text : "Swan Song"
    },
    {
      imgurl : "https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/c4/09/6c/c4096c93-a8df-cbfe-4a09-346360621b7d/20d8745d-fac3-400e-ae82-47da1ac1472d.lsr/670x377sr.webp",
      id : "sifi6",
      text : "Dr. Brain"
    },
    {
      imgurl : "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/e3/08/0c/e3080c1f-78fb-e1bd-70dc-625e8f50a02d/2afaf32c-2766-4357-820e-ebd243775f1d.lsr/335x189sr.webp",
      id : "sifi7",
      text : "Invasion"
    },

  ]
  displayimagesifiInnerImg(sifiInnerImg)

  function displayimagesifiInnerImg(sifiInnerImg) {
    sifiInnerImg.forEach(function (elem) {

      let photossifiInnerImg = document.createElement("div");
      let movphoto = document.createElement("img");
      movphoto.setAttribute("src", elem.imgurl)
      let description = document.createElement("p");
      description.innerText=elem.text;
      description.setAttribute("id","sifiText")

      photossifiInnerImg.append(movphoto,description)
      console.log(photossifiInnerImg)
      document.querySelector("#sifiInnerImages").append(photossifiInnerImg)
  });
  }

    $(document).ready(function () {
    $(".block-19").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        // nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: true,
            },
            600: {
                items: 4,
                nav: true,
                loop: true,
            },
            1000: {
                items: 6,
                nav: true,
                loop: true,
            }
        }
    });
});

// end of sifi section







/* sticky footer */
myID = document.getElementById("myID");

let myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 100) {
        myID.className = "bottomMenu show"
    } else {
        myID.className = "bottomMenu hide"
    }
};

window.addEventListener("scroll", myScrollFunc);
