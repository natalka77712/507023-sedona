  var search = document.querySelector(".button-hotels");
  var popup = document.querySelector(".search-form");
  var arrival_date = document.querySelector("[name=arrival-date]");
  var departure_date = document.querySelector("[name=departure-date]");
  var adults = document.querySelector("[name=adults]");
  var children = document.querySelector("[name=children]");
  
    popup.classList.add("search-form-show");
  
  search.addEventListener("click", function () {
  console.log("Клик по кнопке поиска гостиниц");
       evt.preventDefault();
    popup.classList.toggle("search-form-show");
});

  popup.addEventListener("submit", function () {
  if (!arrival_date.value || !departure_date.value || !adults.value
   || !children.value ) {
  evt.preventDefault();
}
});

