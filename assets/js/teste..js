// export const loadTranslation = async function (text, successCallback) {
//     const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=en|pt-BR`;
//     const response = await fetch(url);

//     if (response.ok) {
//         const data = await response.json();
//         successCallback(data.responseData.translatedText);
//     }
// }

// fetchData([['mealType', $currentTabBtn.textContent.trim().toLowerCase()], ...cardQueries], function (data) {
//     $currentTabPanel.innerHTML = "";

//     for (let i = 0; i < 12; i++) {
//         const { 
//             recipe: {
//                 image,
//                 label: title,
//                 totalTime: cookingTime,
//                 uri
//             } 
//         } = data.hits[i];

//         const recipeId = uri.slice(uri.lastIndexOf("_") + 1);
//         const isSaved = window.localStorage.getItem(`cookio-recipe${recipeId}`);

//         const $card = document.createElement("div");
//         $card.classList.add("card");
//         $card.style.animationDelay = `${100 * i}ms`;

//         loadTranslation(title, function (translatedTitle) {
//             console.log(translatedTitle);

//             $card.innerHTML = `
//                 <figure class="card-media img-holder">
//                     <img src="${image}" alt="${translatedTitle}"
//                         class="img-cover" width="195" height="195" loading="lazy">
//                 </figure>

//                 <div class="card-body">
//                     <h3 class="title-small">
//                         <a href="./detail.html?recipe=${recipeId}" class="card-link">${translatedTitle ?? "Untitled"}</a>
//                     </h3>

//                     <div class="meta-wrapper">
//                         <div class="meta-item">
//                             <span class="material-symbols-outlined" aria-hidden="true">schedule</span>
//                             <span class="label-medium">${getTime(cookingTime).time || "<1"} ${getTime(cookingTime).timeUnit}</span>
//                         </div>

//                         <button class="icon-btn has-state ${isSaved ? "saved" : "removed"}" aria-label="Add to saved recipes" onClick="saveRecipe(this, '${recipeId}')">
//                             <span class="material-symbols-outlined bookmark-add" aria-hidden="true">bookmark_add</span>
//                             <span class="material-symbols-outlined bookmark" aria-hidden="true">bookmark</span>
//                         </button>
//                     </div>
//                 </div>`;
//         });
        
//         $currentTabPanel.appendChild($card);
//     }
// });

// loadTranslation = async function (text) {
    
//     const /** {String} */ url = `https://api.mymemory.translated.net/get?q=${text}&langpair=en|pt-BR`;
//     const response = await fetch(url);

//     if(response.ok) {
//         const data = await response.json();
//         return data.responseData.translatedText;
//     }
// }   

// const teste = "";

// loadTranslation("car")
// .then (data => {
//     teste = data;
// });

// console.log(teste);

// export const fetchData = async function (queries, successCallback) {
//     const query = queries?.join("&")
//         .replace(/,/g, "=")
//         .replace(/ /g, "%20")
//         .replace(/\+/g, "%2B");

//     const url = `${ACCESS_POINT}?type=${TYPE}&app_id=${APP_ID}&app_key=${API_KEY}${query ? `&${query}` : ""}`;

//     const response = await fetch(url);

//     if (response.ok) {
//         const data = await response.json();

//         // Use Promise.all to wait for all translations to be completed
//         const translatedData = await Promise.all(
//             data.hits.map(async (item) => {
//                 item.recipe.label = await loadTranslation(item.recipe.label);
//                 return item;
//             })
//         );

//         successCallback({ ...data, hits: translatedData });
//         console.log(data)
//     } else {
//         throw new Error(`Fetch error! Status: ${response.status}`);
//     }
// };