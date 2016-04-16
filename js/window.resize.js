$(window).resize(function(event) {
  var width = $('.navbar').width();
  if(width < 960){
    $('header').css('padding-right','0px');
    $('header').css('padding-left','0px');
    // $('.column.sm').css('width','100%');
    // $('page').css('flex-direction','column');
  }else{
    $('header').css('padding-right','10px');
    $('header').css('padding-left','10px');
    // $('.column.sm').css('width','25%');
    // $('page').css('flex-direction','row');
  }
});
console.log('window resize');
