$(document).ready(function(){
    $(".dor").click(function(){
        $("#im").toggle();
        $("#pa").toggle();
    });
    $(".doru").click(function(){
        $("#am").toggle();
        $("#par").toggle();
    });
    $(".koe").click(function(){
        $("#las").toggle();
        $("#the").toggle();
    });
    $("#im1").hover(function() {
        $("#firt").css("opacity","0.5");
        $("#va").show();
    },
    function(){
            $("#firt").css("opacity","1");
            $("#va").hide();  }  
 )
    $("#im3").hover(function() {
        $("#thr").css("opacity","0.5");
        $("#ve").show();
    },
    function(){
            $("#thr").css("opacity","1");
            $("#ve").hide();  }  
)

$("#im2").hover(function() {
    $("#secn").css("opacity","0.5");
    $("#vi").show();
},
function(){
        $("#secn").css("opacity","1");
        $("#vi").hide();  }  
)

$("#im4").hover(function() {
    $("#fort").css("opacity","0.5");
    $("#vu").show();
},
function(){
        $("#fort").css("opacity","1");
        $("#vu").hide();  }  
)

$("#im5").hover(function() {
    $("#fith").css("opacity","0.5");
    $("#hi").show();
},
function(){
        $("#fith").css("opacity","1");
        $("#hi").hide();  }  
)

$("#im6").hover(function() {
    $("#sixh").css("opacity","0.5");
    $("#TE").show();
},
function(){
        $("#sixh").css("opacity","1");
        $("#TE").hide();  }  
)

$("#im7").hover(function() {
    $("#sevh").css("opacity","0.5");
    $("#hu").show();
},
function(){
        $("#sevh").css("opacity","1");
        $("#hu").hide();  }  
)

$("#im8").hover(function() {
    $("#eigh").css("opacity","0.5");
    $("#ha").show();
},
function(){
        $("#eigh").css("opacity","1");
        $("#ha").hide();  }  
)


});

