import loadTakes from "./api.js";

//Defining the Elements 
const hotTakesList = document.querySelector(".hot-takes")
const allCategoriesBtn = document.querySelector(".btn-all-categories")
const basketballBtn = document.querySelector(".basketball")
const combatBtn = document.querySelector(".combat")
const footballBtn = document.querySelector(".football")
const soccerBtn = document.querySelector(".soccer")
const baseballBtn = document.querySelector(".baseball")


// Defining the Functions
function createHotTakesList(dataArray) {
    const takesArr = dataArray.map(
        (take) => `
        <div class="hot-takes">
            <div class="hot-take">
                <p class="hot-take-content">
                    ${take.hot_take}
                    <span class="tag">${take.category}</span>
                </p>
                <p>${take.username}</p>
            </div>`
    );
    const html = takesArr.join("");
    hotTakesList.insertAdjacentHTML("afterbegin", html);
}

// Actual Script Starts Here

hotTakesList.innerHTML = "";

// ----- Renders All facts -----

const data = await loadTakes()
createHotTakesList(data)

// ----- Render Chosen Category -----

// All
allCategoriesBtn.addEventListener("click", async function () {
    hotTakesList.innerHTML = "";
    const allCategoriesData = await loadTakes()
    createHotTakesList(allCategoriesData)
})

// Basketball
basketballBtn.addEventListener("click", async function () {
    hotTakesList.innerHTML = "";
    const basketballData = await loadTakes("basketball")
    createHotTakesList(basketballData)
})

// Combat
combatBtn.addEventListener("click", async function () {
    hotTakesList.innerHTML = "";
    const combatData = await loadTakes("combat")
    createHotTakesList(combatData)
})

// Football
footballBtn.addEventListener("click", async function () {
    hotTakesList.innerHTML = "";
    const footballData = await loadTakes("football")
    createHotTakesList(footballData)
})

// Soccer
soccerBtn.addEventListener("click", async function () {
    hotTakesList.innerHTML = "";
    const soccerData = await loadTakes("soccer")
    createHotTakesList(soccerData)
})

// Baseball
baseballBtn.addEventListener("click", async function () {
    hotTakesList.innerHTML = "";
    const baseballData = await loadTakes("baseball")
    createHotTakesList(baseballData)
})

