$(document).ready(() => {
    $('#gallery img').css('opacity', 0.6)

    $('#gallery img').on({
        mouseenter:(evt) => {
          $(evt.currentTarget).stop().fadeTo(4000, 1)
        },
        mouseleave:(evt) => {
          $(evt.currentTarget).stop().fadeTo(4000, 0.6)
        }
     })

     $('#gallery a').on('click', (evt) => {
        evt.preventDefault()
        let imgPath = $(evt.currentTarget).attr('href')
        let newImage = $(`<img src=${imgPath} alt = "" >`)
        let oldImage = $('#photo img')
        $('#photo').prepend(newImage)
        oldImage.fadeOut(4500,(evt) =>{
             oldImage.remove()
        })
   })
   
   $('#gallery a:first').click()

})