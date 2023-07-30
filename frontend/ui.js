import loadTakes from "./api.js";

//Defining the Elements 
const hotTakesList = document.querySelector(".hot-takes")

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

//Renders facts

const data = await loadTakes()
createHotTakesList(data)
