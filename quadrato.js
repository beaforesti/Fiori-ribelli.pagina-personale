function quando_clicki() {
  if($("#quadrato").hasClass("top_left")) {
    $("#quadrato").removeClass("top_left")
    $("#quadrato").addClass("top_right");
  } else if($("#quadrato").hasClass("top_right")) {
    $("#quadrato").removeClass("top_right")
  $("#quadrato").addClass("bottom_right");
  } else if($("#quadrato").hasClass("bottom_right")) {
    $("#quadrato").removeClass("bottom_right")
    $("#quadrato").addClass("bottom_left");
  } else if($("#quadrato").hasClass("bottom_left")) {
    $("#quadrato").removeClass("bottom_left")
    $("#quadrato").addClass("top_left");
}
}

$("#quadrato").on("click", quando_clicki)
