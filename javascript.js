
window.onload = function(){
  $("#ends").click(function(){
    $("#ofcourse").toggle();
  });

  $(".statement").click(function(){
    $(".wholestatement").toggle();
  });

  $('.statement').css('cursor', 'pointer');

  $('.whatisart').css('cursor','default');
  $('.supplement').css('cursor','default');

  $('#ends').css('cursor', 'pointer');



  $("#deinstrumentalization").click(function(){
    $("#ifart").toggle();
  });
  $('#deinstrumentalization').css('cursor', 'pointer');


  $("#perspectivism").click(function(){
    $("#notthe").toggle();
  });
    $('#perspectivism').css('cursor', 'pointer');


  $(".planners").click(function(){
    $("#ripples").toggle();
  });
  $('.planners').css('cursor', 'pointer');


  $("#definition").click(function(){
    $("#socialsystems").toggle();
  });
    $('#definition').css('cursor', 'pointer');


  $(".experimental").click(function(){
    $("#selfconsistent").toggle();
  });
    $('.experimental').css('cursor', 'pointer');

  $("#makers").click(function(){
    $("#selfish").toggle();
  });
    $('#makers').css('cursor', 'pointer');
}
