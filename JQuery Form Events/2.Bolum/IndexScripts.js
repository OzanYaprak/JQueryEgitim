$(function () {


    // if (cevap == true) {
    //     $("#islem").blur(function () {
    //         $("b").text("Doğru Bilgi mi ?");
    //     });
    // }



    $("button").on("click", function () {
        var cevap = $("input").val();
        if (cevap == ozan) {
            $("#islem").blur(function () {
                $("b").text("Doğru Bilgi mi ?");
            });
        }
    });

    //YAPAMADIM

});
