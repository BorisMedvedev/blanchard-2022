let swiper = new Swiper(".Swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




$(".product-list__btn").on("click", function () {
  $('.product-list__menu').toggleClass("product-list__menu--active");


});

$('.quantity-inner .bt-minus').click(function () {
  let $input = $(this).parent().find('.quantity');
  let count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
});

$('.quantity-inner .bt-plus').click(function () {
  let $input = $(this).parent().find('.quantity');
  let count = parseInt($input.val()) + 1;
  count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
  $input.val(parseInt(count));
});

$('.quantity-nner .quantity').bind("change keyup input click", function () {
  if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
  }
  if (this.value == "") {
    this.value = 1;
  }
  if (this.value > parseInt($(this).data('max-count'))) {
    this.value = parseInt($(this).data('max-count'));
  }
});

