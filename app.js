$("img.menu").click(function(){
     $("div.items").toggle("show");
     $("div.closing").toggle("show");
});
$("img.closing").click(function(){
  $("div.items").toggle("show");
});
