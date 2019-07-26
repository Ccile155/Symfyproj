export default function(truc) {
console.log("Oua, " + truc); 
}

jQuery(document).ready(function($) {
    $(".dropdown-item img").css({"height": "15px", "width": "15px"});
    $("nav li").css("padding-left", "10px");

    $(".dropdown-item").on("click", function(){
        let colorid = $(this).attr("id");
        if (colorid == "000000"){
            $(".navbar.navbar-expand-lg").removeClass().addClass("navbar navbar-expand-lg navbar-dark");  
        } else {
            $(".navbar.navbar-expand-lg").removeClass().addClass("navbar navbar-expand-lg navbar-light");}

        $(".navbar").css("background-color", "#"+colorid);
        // $("footer").css("background-color", "#"+colorid);
        $("footer").css("backgroundColor", $("nav").css("backgroundColor"));

    });
        let couleur = $("nav").css("backgroundColor");
        $("footer").css("backgroundColor", couleur);


        $("footer img").css({"height": "40px", "width": "auto","margin": "0px 10px 10px"});
        $("footer").css("padding", "10px 30px 10px 30px");
        $("footer").css("color","#666666");
        $("footer a").css("color","#666666");

});