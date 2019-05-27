(function($){
 
  $.fn.shuffle = function() {

      var allElems = this.get(),
          getRandom = function(max) {
              return Math.floor(Math.random() * max);
          },
          shuffled = $.map(allElems, function(){
              var random = getRandom(allElems.length),
                  randEl = $(allElems[random]).clone(true)[0];
              allElems.splice(random, 1);
              return randEl;
         });

      this.each(function(i){
          $(this).replaceWith($(shuffled[i]));
      });

      return $(shuffled);

  };

})(jQuery);

$(document).on('ready', function() {
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  });
  $(".multiple-items .review-item").shuffle();
  $('.multiple-items').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 7000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  var url = window.location.href;
  var activePage = url;
  $('.nav-link').each(function () {
    var linkPage = this.href;
    if (activePage == linkPage) {
        $(this).addClass("active");
    }
  });


});