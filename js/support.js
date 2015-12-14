$('.button').on('click', function() {
  $(this).siblings('.selected').removeClass('selected');
  $(this).addClass('selected');
})

$('.other').on('click', function() {
  $('.hidden').css('display', 'block');
})

$('.set-amount').on('click', function() {
  $('.other').text('Custom: $' + $('#amount').val());
  $('.hidden').css('display', 'none');
})
