// Get form element value
let leftColumnEL = document.querySelector("#left-column")

// Get all the elements of cities list for event handler
let citiesListContainerBtnEl = document.querySelector(".list-group-item");
// Daily forecast Container
let dailyWeatherContainerEl = document.querySelector("#forecast-output-container"); 

// Create a form container and containing elements
let dynFormContainer = document.createElement("form");
dynFormContainer.setAttribute("id", "dymCityForm");
dynFormContainer.classList = "city-search-forecast-container";
leftColumnEL.appendChild(dynFormContainer)