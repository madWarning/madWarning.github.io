//se ejecuta al estar el docuemnto/DOM cargado 
$(document).ready(function(){
    
    //cambio estilo barra nav
    
    //on: detector de eventos
    $(window).on("scroll", function(){
        var posicionParrafo = $("#primera").offset();
        var posicionVentana = $(window).scrollTop();
        var logoNegro = document.getElementById("logoNegro");
        var logoBlanco = document.getElementById("logoBlanco");
        //console.log(position.top);
        if(posicionVentana > posicionParrafo.top - 90){
            $("nav").removeClass("white");
            $(".burger").removeClass("white");
            console.log("mostramos barra");
            logoNegro.style.display="block";
            logoBlanco.style.display="none";
            // $("#logoNegro").style.display("block");
            // $("#logoBlanco").style.display="none";
            
        } else {
            $("nav").addClass("white");
            $(".burger").addClass("white");
            console.log("ocultamos");
            logoBlanco.style.display="block";
            logoNegro.style.display="none";
            // $("#logoNegro").style.display="none";
            // $("#logoBlanco").style.display="block";
        }
    });

    
    /*** menú lateral */
    // punto identifica la clase
    $(".burger").click(function(){
        $(".burger").toggleClass("open");
        $("aside").toggleClass("open");
    });

    /*** Resize para cambio de tamaño */
    $(window).on("resize", function(){
        $(".burger").removeClass("open");
        $("aside").removeClass("open");
    });

    
});
