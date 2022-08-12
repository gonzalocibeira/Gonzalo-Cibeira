const body = document.querySelector("body");
const loadingScreen = document.querySelector("#loadingScreen");
let contents;
const btns = [document.querySelector("#enBtn"), document.querySelector("#esBtn")];
const langBtn = document.querySelector("#langSwitch");
const workExpCont = document.querySelector("#workExp");
const portfolioCont = document.querySelector("#portfolio");
const diplomaCont = document.querySelector("#diplomas");
let defaultLang = JSON.parse(localStorage.getItem("defaultLang")) == null ? firstLoadLang() : JSON.parse(localStorage.getItem("defaultLang"));

console.log(loadingScreen.style.display);

function firstLoadLang(){
    localStorage.setItem("defaultLang", JSON.stringify("en"));
    return "en";
};

/* Importing JSON data */
const data = fetch("../json/data.json")
    .then(response => response.json())
    .then(function(data) {
        createWorkExp(data["data"]["workexp"]["items"]);
        createDiploma(data["data"]["diplomas"]["items"]);
        createPortfolio(data["data"]["portfolio"]["items"]);
        contents = [document.querySelectorAll('.esText'), document.querySelectorAll('.enText')];
        /* Check Default Language */
        if (defaultLang == "es"){
            changeLang(true);
        };
        /* Remove Loading Screen */
        setTimeout(endLoadScreen, 1500);
            });

/* Function to show body after loading screen */
function endLoadScreen(){
    loadingScreen.classList.add("loadingOff");
    loadingScreen.classList.remove("loadingOn");
    body.classList.remove("hiddenOnLoad");
};

/* Function to toggle display state */
function toggleDisp(cont){
    window.getComputedStyle(cont[0]).display === "none" ? cont.forEach(el => el.style.display = "block" ) : cont.forEach(el => el.style.display = "none");
};

/* Function to toggle lang button state */
function toggleBtn(btn){
    window.getComputedStyle(btn).fontWeight === "700" ? btn.style.fontWeight = "100" : btn.style.fontWeight = "700";
};

/* Function to change language */
function changeLang(isDefault){
    if (!isDefault){
        defaultLang == "en" ? defaultLang = "es" : defaultLang = "en";
        localStorage.setItem("defaultLang", JSON.stringify(defaultLang));
    };
    contents.forEach(cont => toggleDisp(cont));
    btns.forEach(btn => toggleBtn(btn));
};

/* Function to create Work Experience Cards */
function createWorkExp (data){
    let fadeSide = "left";
    let cardClass = "card0";

    for (card of data){

        let enHighlights = "";
        let esHighlights = "";

        for (el of card["enHigh"]){
            enHighlights += `<li class="list-group-item enText">${el["high"]}</li>`;
        }

        for (el of card["esHigh"]){
            esHighlights += `<li class="list-group-item esText">${el["high"]}</li>`;
        }

        let content = `<div class="card mt-3 ${cardClass}" data-aos="fade-${fadeSide}">
                    <div class="card-body">
                    <div class="d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <div>
                            <h5 class="card-title">${card["enTitle"]}</h5>
                            <h6 class="card-subtitle mb-2 text-muted enText">${card["enSub"]}</h6>
                            <h6 class="card-subtitle mb-2 text-muted esText">${card["esSub"]}</h6>
                        </div>
                        <img class="work_img me-md-5" src="./images/${card["image"]}" alt="${card["imageAlt"]}">
                    </div>
                    <p class="card-text mt-3 enText">${card["enCont"]}
                    <p class="card-text mt-3 esText">${card["esCont"]}
                    <div class="d-flex">
                        <img src="./images/star.png" alt="Star icon" class="icon_min">
                        <p class="card-text ms-1"><strong>Highlights:</strong></p>
                    </div>
                    <ul class="list-group list-group-flush">
                        ${enHighlights}
                        ${esHighlights}
                    </ul>
                    </div>
                </div>`;

        workExpCont.innerHTML += content;
        fadeSide == "left" ? (fadeSide="right", cardClass="card1") : (fadeSide="left", cardClass="card0");
    };
};

/* Function to create Diploma Cards */
function createDiploma(data){
    for (card of data){

        let content = `<div class="d-flex flex-column align-items-center justify-content-center my-2 diploma">
                        <p class="text-muted mt-2 enText">${card["titleEn"]}</p>
                        <p class="text-muted mt-2 esText">${card["titleEs"]}</p>
                        <img src="./images/${card["image"]}" alt="${card["imageAlt"]}">
                    </div>`;

        diplomaCont.innerHTML += content;
    };
};

/* Function to create Portfolio Cards */
function createPortfolio(data){
    for (card of data){

        let content = `<div class="card mb-3" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300">
                        <img src="./images/${card["image"]}" class="card-img-top" alt="${card["imageAlt"]}">
                        <div class="card-body">
                            <h5 class="card-title">${card["title"]}</h5>
                            <p class="card-text enText">${card["enText"]}
                            <p class="card-text esText">${card["esText"]}<br>Link: <a href="${card["link"]}" target="_blank">${card["title"]}</a>
                            <p class="card-text"><small class="text-muted">${card["year"]}</small></p>
                        </div>
                    </div>`;
        
        portfolioCont.innerHTML += content;
    };
};

/* changeLang button event listener */
langBtn.addEventListener("click", function (){changeLang(false)});

