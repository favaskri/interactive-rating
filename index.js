$(".star").click(function () {
  var buttonInnerHTML = this.innerHTML;
  $(".point").text(buttonInnerHTML);
  buttonAnimator(buttonInnerHTML);
});

function buttonAnimator(key) {
  var activeKey = $("." + key);
  activeKey.css("background-color", "red");
}
$(".result").hide();
$(".btn").click(function () {
  $(".main").hide();
  $(".result").show();
});
