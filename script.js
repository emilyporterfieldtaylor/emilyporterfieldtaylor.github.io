$(document).ready(function () {
  $('.sidenav').sidenav();

  $(".pulse").click(function () {
    $('.sidenav').sidenav('open');
  })

  $("#submit").click(function (){
    alert("This feature is not currently available.");
  })
});