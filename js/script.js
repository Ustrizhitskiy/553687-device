/* Для загрузки и закрытия окна Напишите нам */
var link = document.querySelector(".wirte2");       /* Находим элемент с классом .wirte2 */
var popup = document.querySelector(".form-write-us");   
var closePopup = document.querySelector(".exit-write-us");

link.addEventListener("click", function (evt) {     /* При клике на link */
  evt.preventDefault();
  popup.classList.add("modal-show");                /*подгружается класс .modal-show */
});
closePopup.addEventListener("click", function (evt) {   /* При клике на closePopup */
  evt.preventDefault();
  popup.classList.remove("modal-show");                 /*удаляется класс .modal-show */
});



/* Для подсветки розовым фоном пустой строки с вводом имени */
var send = document.querySelector(".send");     
var yourName = document.querySelector("[name=your-name]");
var yourNameRight = document.querySelector("[name=your-name]");

send.addEventListener("click", function (evt) {
  if (!yourName.value) {
    evt.preventDefault();
    yourName.classList.add("invalid-background");
  }
});
yourNameRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  yourName.classList.remove("invalid-background");
})



/* Для Google-maps */
var mapImage = document.querySelector(".href-big-foto");
var windowMap = document.querySelector(".google-map");
var closeMap = document.querySelector(".exit-google-map");

mapImage.addEventListener("click", function (evt) {
  evt.preventDefault();
  windowMap.classList.add("map-show");
});
closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  windowMap.classList.remove("map-show");
});



/* Для слайдов с доставкой-гарантией-кредитом */
var services = document.querySelector(".services");
var delivery = services.querySelector(".service-button-delivery");
var warranty = services.querySelector(".service-button-warranty");
var credit = services.querySelector(".service-button-credit");
var servicesSlides = document.querySelector(".delivery-and-warranty-slides");
var slideDelivery = servicesSlides.querySelector(".slide-delivery");
var slideWarranty = servicesSlides.querySelector(".slide-warranty");
var slideCredit = servicesSlides.querySelector(".slide-credit");

delivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  delivery.classList.add("default-checked");
  warranty.classList.remove("default-checked");
  credit.classList.remove("default-checked");

  slideDelivery.classList.add("services-slide-show");
  slideDelivery.classList.remove("services-slide-hidden");
  slideWarranty.classList.remove("services-slide-show");
  slideWarranty.classList.add("services-slide-hidden");
  slideCredit.classList.remove("services-slide-show");
  slideCredit.classList.add("services-slide-hidden");

});

warranty.addEventListener("click", function (evt) {
  evt.preventDefault();
  warranty.classList.add("default-checked");
  delivery.classList.remove("default-checked");
  credit.classList.remove("default-checked");

  slideWarranty.classList.add("services-slide-show");
  slideWarranty.classList.remove("services-slide-hidden");
  slideDelivery.classList.remove("services-slide-show");
  slideDelivery.classList.add("services-slide-hidden");
  slideCredit.classList.remove("services-slide-show");
  slideCredit.classList.add("services-slide-hidden");

});

credit.addEventListener("click", function (evt) {
  evt.preventDefault();
  credit.classList.add("default-checked");
  delivery.classList.remove("default-checked");
  warranty.classList.remove("default-checked");

  slideCredit.classList.add("services-slide-show");
  slideCredit.classList.remove("services-slide-hidden");
  slideDelivery.classList.remove("services-slide-show");
  slideDelivery.classList.add("services-slide-hidden");
  slideWarranty.classList.remove("services-slide-show");
  slideWarranty.classList.add("services-slide-hidden");
});

