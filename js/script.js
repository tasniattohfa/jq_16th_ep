$(document).ready(function () {
    $("#1").click(function () {
        $("#p1 , #p2").hide();
    })
});

$(document).ready(function () {
    $("#2").click(function () {
        $("#demo").hide();
    })
});

$("#p1").dblclick(function () {
    $(this).hide();
});

$("#p2").mouseenter(function () {
    alert("You clicked p2!");
});

$("#p1").hover(function () {
    alert("You entered p1!");
},
    function () {
        alert("Bye! You now leave p1!");
    });


$(document).ready(function () {
    $("input").focus(function () {
        $(this).css("background-color", "coral");
    });
    $("input").blur(function () {
        $(this).css("background-color", "white");
    });
});

$(document).ready(function () {
    $("#11, #12, #13").on("click", function () {
        $(this).hide();
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("#14,#15").toggle();
    });
});

$(document).ready(function () {
    $("#bd").click(function () {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});

$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip2").click(function(){
      $("#panel2").slideDown(5000);
    });
    $("#stop").click(function(){
      $("#panel2").stop();
    });
  });