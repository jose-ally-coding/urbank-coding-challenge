$(".toggle").on("click", function() {
  $(".toggle").parent().toggleClass('active');
});

$('.tab').click(function(){
  $('.tab').removeClass('active');
  $(this).addClass('active');
  $('[data-content]').attr('class','content');
  var this_tab = $(this).attr('data-tab');
  console.log(this_tab);
  $('[data-content="'+this_tab+'"]').addClass('active');
});

$('[data-modal="login"]').click(function(){
  $('.modal-backdrop').css('display','flex');
  $('.modal-backdrop').css('align-items','center');
  $('.modal-backdrop').css('justify-content','center');
  $('.modal-backdrop').show();
});

$('.modal-close').click(function(){
  $('.modal-backdrop').hide();
});
