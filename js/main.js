const contents = [document.querySelectorAll('.esText'), document.querySelectorAll('.enText')]
const btns = [document.querySelector("#enBtn"), document.querySelector("#esBtn")]
const langBtn = document.querySelector("#langSwitch")
const cookieBtn = document.querySelector("#cookieSettings")

/* Function to toggle display state */
function toggleDisp(cont){
    window.getComputedStyle(cont[0]).display === "none" ? cont.forEach(el => el.style.display = "block" ) : cont.forEach(el => el.style.display = "none");
}

/* Function to toggle lang button state */
function toggleBtn(btn){
    window.getComputedStyle(btn).fontWeight === "700" ? btn.style.fontWeight = "100" : btn.style.fontWeight = "700";
}

function changeLang(){
    contents.forEach(cont => toggleDisp(cont));
    btns.forEach(btn => toggleBtn(btn));
}

/* changeLang button event listener */
langBtn.addEventListener("click", changeLang);

