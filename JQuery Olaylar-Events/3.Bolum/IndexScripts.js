$(function () {
    $("body").one("click", "#butonUret", function () {
        $(this).after("<button>Üretilmiş Buton</button>")
    })
})

$(function () {
    $("body").one("click", "#inputUret", function () {
        $(this).after("<br><br><input type=file>")
    })
})