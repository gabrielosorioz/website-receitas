

"use strict";

/**
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback function
 */


window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";

const /** {String} */ APP_ID = "3c5e4494";
const /** {String} */ API_KEY = "2d54d12fdae6ebded76996ff8f158826";
const /** {String} */ TYPE = "public";

export const fetchData = async function (queries, successCallback) {
    const /** {String} */ query = queries?.join("&")
        .replace(/,/g,"=")
        .replace(/ /g,"%20")
        .replace(/\+/g,"%2B");
    
    const /** {String} */ url = `${ACCESS_POINT}?type=${TYPE}&app_id=${APP_ID}&app_key=${API_KEY}
    ${query ? `&${query}` : ""}`;
                     
    const /** {Object} */ response = await fetch(url);

    if(response.ok){
        const data = await response.json();
        successCallback(data);
    } else {
        throw new Error(`Fetch error! Status: ${response.status}`);
    }
}