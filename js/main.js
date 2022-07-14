const esCont = document.querySelectorAll('.esText');
const enCont = document.querySelectorAll('.enText');
const enBtn = document.getElementById("enBtn");
const esBtn = document.getElementById("esBtn");

const contents = [esCont, enCont]
const btns = [esBtn, enBtn]

function toggleDisp(cont){
    window.getComputedStyle(cont[0]).display === "none" ? cont.forEach(el => el.style.display = "block" ) : cont.forEach(el => el.style.display = "none");
}

function toggleBtn(btn){
    window.getComputedStyle(btn).fontWeight === "700" ? btn.style.fontWeight = "100" : btn.style.fontWeight = "700";
    console.log(window.getComputedStyle(btn).fontWeight);
}

function changeLang(){
    contents.forEach(cont => toggleDisp(cont));
    btns.forEach(btn => toggleBtn(btn));
}