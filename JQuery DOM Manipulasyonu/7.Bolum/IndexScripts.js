$(function () {
  //Duz yazi olarak tek satirda ekleme islemi
  $(".ozan").append("append ile ozanin onune eklendi"); //Satir sonuna ekleme yapar
  $(".ozan").prepend("prepend ile ozanin onune eklendi"); //Satir basina ekleme yapar

  //html kodlari ile ekleme
  $(".bootstrap").append("<p>append ile Bootstrap onune eklendi</p>");
  $(".udemy").prepend("<p><b>prepend ile Udemy onune eklendi</b></p>");

  //liste icerisindeki optionlara ekleme yapma
  $("#liste").append("<option>CSS</option>").prepend("<option>JQuery</option>");

});
