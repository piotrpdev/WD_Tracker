$(document).ready(function() {

	$('#gallery img').css('opacity', 0.6)

    $('#gallery img').on({
      mouseenter:(evt) => {
        $(evt.currentTarget).stop().fadeTo(4000, 1)
      },
      mouseleave:(evt) => {
        $(evt.currentTarget).stop().fadeTo(4000, 0.6)
      }
    })

})