$(document).ready(function() {
  var width = $('.navbar').width();
  if(width < 960){
    $('header').css('padding-right','0px');
    $('header').css('padding-left','0px');
    // $('.column.md').css('width','100%');
    // $('.column.sm').css('width','100%');
    // $('page').css('flex-direction','column');
  }else{
    $('header').css('padding-right','10px');
    $('header').css('padding-left','10px');
    // $('.column.md').css('width','75%');
    // $('.column.sm').css('width','25%');
    // $('page').css('flex-direction','row');
  }
  console.log('loaded');
  $.ajax({
    url: 'code-test.json',
    type: 'GET',
    dataType: 'json'
  })
  .done(function(data) {
    // for (let i = 0; i < data.length; i++) {
    //   console.log("success"+data[i].name);
    // }
    $.each(data, function(i, bank) {
      // $("#" + i).append(document.createTextNode(" - " + val));
      if(bank.name == 'URBank'){
        $('.entries').prepend('<div class="entry"><div class="cell left">'+bank.name+'</div><div class="cell right">'+bank.apy+' %</div><div class="cell right">$'+bank.earnings+'</div></div>');
      }else{
        $('.entries').append('<div class="entry"><div class="cell left">'+bank.name+'</div><div class="cell right">'+bank.apy+' %</div><div class="cell right">$'+bank.earnings+'</div></div>');
      }
      console.log("success "+i+" "+bank.name);
    });
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

});

console.log('document ready');
