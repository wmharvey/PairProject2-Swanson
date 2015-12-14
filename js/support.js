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

var creditInfo = {};

if (localStorage.getItem('credit')) {
  console.log('hit');
  creditInfo = JSON.parse(localStorage.getItem('credit'));
  $('#credit-card').val(creditInfo.cardNum);
  $('#cvv').val(creditInfo.cvv);
  $('#first-name').val(creditInfo.first);
  $('#last-name').val(creditInfo.last);
  $('#phone').val(creditInfo.phone);
  $('#email').val(creditInfo.email);
  $('#address').val(creditInfo.address);
  $('#city').val(creditInfo.city);
  $('#state').val(creditInfo.state);
  $('#zip').val(creditInfo.zip);
}

function render() {
  console.log('render');
  creditInfo.cardNum = $('#credit-card').val();
  creditInfo.cvv = $('#cvv').val();
  creditInfo.first = $('#first-name').val();
  creditInfo.last = $('#last-name').val();
  creditInfo.phone = $('#phone').val();
  creditInfo.email = $('#email').val();
  creditInfo.address = $('#address').val();
  creditInfo.city = $('#city').val();
  creditInfo.state = $('#state').val();
  creditInfo.zip = $('#zip').val();

  localStorage.setItem('credit', JSON.stringify(creditInfo));
}

render();
$('#paymentInfo').find('input').on('input', render);

$('#sub').on('click', function(e) {
  e.preventDefault();

  if (!$('#credit-card').val() ||
      !$('#cvv').val() ||
      !$('#first-name').val() ||
      !$('#last-name').val() ||
      !$('#phone').val() ||
      !$('#email').val() ||
      !$('#address').val() ||
      !$('#city').val() ||
      !$('#state').val() ||
      !$('#zip').val()
      ) {
      return alert("Please Fill All Fields");
    };


    if ($('#donation-amount').children('.selected').length === 0) {
      return alert("Please Enter Donation Amount");
    };

    $('.thankyou-message').text('Thank you ' + creditInfo.first + ' for your donation. Your gift of equal value will arrive in 6-8 weeks. Remember to vote for me on November fourth. Or don\'t. I don\'t care. ~ Ron');
    $('#giftForms').css('display', 'none');
    $('#gifts').css('display', 'none');
    $('#empty').css('display', 'block');

})
