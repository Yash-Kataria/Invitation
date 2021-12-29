$(window).on("load", function () {
  $(window)
    .on("scroll resize", function () {
      var window_height = $(window).height();
      var window_top_position = $(window).scrollTop();
      var window_bottom_position = window_top_position + window_height;

      $(".FadeInAnimation").each(function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = element_top_position + element_height;

        if (
          element_bottom_position >= window_top_position &&
          element_top_position <= window_bottom_position
        ) {
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(1500, 1);
          }
        }
        // else { //object goes out of view (scrolling up)
        //   if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        // }
      });
    })
    .scroll();
});
