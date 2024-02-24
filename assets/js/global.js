
"use strict";

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