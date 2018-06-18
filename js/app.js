function hover(){

$(".icons").hide()

$(".item").on("mouseenter", function(){
  $(this).find(".person").css("opacity", 0.5)
  $(this).find(".icons").show();
  $(this).find(".name").css("background", "#3a454d")

});

$(".item").on("mouseleave", function(){
  $(this).find(".person").css("opacity", 1)
  $(this).find(".icons").hide();
  $(this).find(".name").css("background", "#e1e6ea")
});
}

$(function (){
hover()


});
