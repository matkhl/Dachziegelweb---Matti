
function scrollToContent() {

  var hash = "#content";

  $('html, body').animate({
    scrollTop: $(hash).offset().top - 160
  }, 800, function(){
    window.location.hash = hash;
  });
}
