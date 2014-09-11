
$(document).ready(function(){/* jQuery toggle layout */
    $('#btnToggle').click(function(){
      if ($(this).hasClass('on')) {
        $('#main .col-md-6').addClass('col-md-4').removeClass('col-md-6');
        $(this).removeClass('on');
      }
      else {
        $('#main .col-md-4').addClass('col-md-6').removeClass('col-md-4');
        $(this).addClass('on');
      }
    });
});

$(document).ready(function(){/* jQuery toggle layout */
    $('#docTab').click(function(){

        $('*[id*=docTab]:visible').each(function() {if ($(this).hasClass('active')) {$(this).removeClass('active')}})
        $(this).addClass('active');
    });
});
