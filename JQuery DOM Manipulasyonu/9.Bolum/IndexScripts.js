$(function () {
  $("li").after("<li>JQuery</li>"); // Secili nesnelerin hepsinin arkasina eklendi

  $("li:first").after("<li>JQuery</li>"); // Ilk nesnenin arkasina ekleme
  $("li:last").after("<li>JQuery</li>"); // Son nesnenin arkasina ekleme


  $("li").before("<li>JQuery</li>"); // Secili nesnelerin hepsinin onune eklendi
});
