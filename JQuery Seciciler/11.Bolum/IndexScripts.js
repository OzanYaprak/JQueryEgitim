$(document).ready(function () {

  //SADECE ILK DIV SECILECEK
  $("div").first().css({ "background-color": "yellow" });

  //SADECE SON DIV SECILECEK
  $("div").last().css({ "background-color": "yellow" });

  //NOT FONKSIYONU ICERISINE YAZILMIS OLANIN SECILMEMESINI SAGLAR
  $("div").not('#ortaDiv').css({ "background-color": "yellow" });

  //FILTER FONKSIYONU ICERISINE YAZILMIS OLANIN SECILMESINI SAGLAR
  $("div").filter('#ortaDiv').css({ "background-color": "orange" });
});
