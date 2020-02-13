$(document).ready(function () {
  $('.sidenav').sidenav();

  $(".btn-floating").click(function () {
    $('.sidenav').sidenav('open');
  })
});