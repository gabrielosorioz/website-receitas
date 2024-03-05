
"use strict";

import { fetchData } from "./api.js";

/**
 * Add Event on multiple elemnts
 * @param {NodeList} $elements NodeList
 * @param {String} eventType Event type String
 * @param {function} callback CallBack functiion
 */

window.addEventOnElements = ($elements, eventType, callback) => {
    for (const $element of $elements) {
        $element.addEventListener(eventType, callback);
    }
}

export const /** {Array} */ cardQueries = [
    ["field","uri"],
    ["field", "label"],
    ["field", "image"],
    ["field", "totalTime"]
];

export const /** {String} */ $skeletonCard = `

    <div class="card skeleton-card">

        <div class="skeleton card-banner">

        </div>

        <div class="card-body">
            <div class="skeleton card-title"></div>

            <div class="skeleton card-text"></div>
        </div>
    </div>

`;

const /** {String} */ ROOT = "https://api.edamam.com/api/recipes/v2";

window.saveRecipe = function (element, recipeId) {
    const /** {String} */ isSaved = window.localStorage.getItem(`cookio-recipe${recipeId}`);

    ACCESS_POINT = `${ROOT}/${recipeId}`; 
    console.log(recipeId)

    if(!isSaved) {
        fetchData(cardQueries, function (data) {
            window.localStorage.setItem(`cookio-recipe${recipeId}`,
             JSON.stringify(data));

             element.classList.toggle("saved");
             element.classList.toggle("removed");
             showNotification("Added to Recipe book");
        });

    ACCESS_POINT = ROOT;
    } else {
        console.log("entrou na função");
        window.localStorage.removeItem(`cookio-recipe${recipeId}`);
        element.classList.toggle("saved");
        element.classList.toggle("removed");
        showNotification("Removed from recipe book");
    }

}

const /** {NodeElement} */ $snackbarContainer = document.createElement("div");
$snackbarContainer.classList.add("snackbar-container");
document.body.appendChild($snackbarContainer);

function showNotification(message) {
    const /** {NodeElement} */ $snackbar = document.createElement("div");
    $snackbar.classList.add("snackbar");
    $snackbar.innerHTML = `<p class="body-medium">${message}</p>`;
    $snackbarContainer.appendChild($snackbar);
    $snackbar.addEventListener("animationend", e => $snackbarContainer.
    removeChild($snackbar));

}