var ctn = $(".container");
var like = $("i");

ctn.dblclick(function(){
    like.css("opacity","0.5");
    setTimeout(function(){
        like.css("opacity","0");
    },400)
})