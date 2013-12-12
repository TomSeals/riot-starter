var itemStore = $('#templates .item').html();
$(".new-item").on('submit', function (e) {
  var name = $('.name').val();
  var price = $('.price').val();
  e.preventDefault();
  var newStore = $.render(itemStore, {
    name: name,
    price: price
  });
  $('#store').append(newStore);
  this.reset();
});