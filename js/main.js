const esCont = document.querySelectorAll('.esText');
const enCont = document.querySelectorAll('.enText');
const enBtn = document.getElementById("enBtn");
const esBtn = document.getElementById("esBtn");


function changeLang(){
    if (esCont[0].style.display === "none") {
        esCont.forEach(el => el.style.display = "block");
        enCont.forEach(el => el.style.display = "none");
        esBtn.style.fontWeight = "bolder";
        enBtn.style.fontWeight = "lighter";
    }
    else {
        esCont.forEach(el => el.style.display = "none");
        enCont.forEach(el => el.style.display = "block");
        esBtn.style.fontWeight = "lighter";
        enBtn.style.fontWeight = "bolder";
    }

}

