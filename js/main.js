let contents;
setTimeout(function(){contents = [document.querySelectorAll('.esText'), document.querySelectorAll('.enText')];}, 300);
const btns = [document.querySelector("#enBtn"), document.querySelector("#esBtn")];
const langBtn = document.querySelector("#langSwitch");
const workExpCont = document.querySelector("#workExp");

/* Importing JSON data*/
const data = fetch("../json/data.json")
    .then(response => response.json())
    .then(data => createWorkExp(data["data"]["workexp"]["items"]));

/* Function to toggle display state */
function toggleDisp(cont){
    window.getComputedStyle(cont[0]).display === "none" ? cont.forEach(el => el.style.display = "block" ) : cont.forEach(el => el.style.display = "none");
};

/* Function to toggle lang button state */
function toggleBtn(btn){
    window.getComputedStyle(btn).fontWeight === "700" ? btn.style.fontWeight = "100" : btn.style.fontWeight = "700";
};

/* Function to change language */
function changeLang(){
    contents.forEach(cont => toggleDisp(cont));
    btns.forEach(btn => toggleBtn(btn));
};

/* Function to create Work Experience Cards */
function createWorkExp (data){
    for (card of data){

        let enHighlights = "";
        let esHighlights = "";

        for (el of card["enHigh"]){
            enHighlights += `<li class="list-group-item enText">${el["high"]}</li>`;
        }

        for (el of card["esHigh"]){
            esHighlights += `<li class="list-group-item esText">${el["high"]}</li>`;
        }

        let content = `<div class="card mt-3 ${card["class"]}" data-aos="${card["fade"]}">
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
    }
};

/* changeLang button event listener */
langBtn.addEventListener("click", changeLang);

