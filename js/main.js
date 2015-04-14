/**
 * Created by MacBookAir on 13/04/15.
 */

$(document).keydown(function(e){
    var maxWidth = $('.main').width();
    var maxHeight = $('.main').height();
    var key = e.keyCode ? e.keyCode : e.which;

    switch (key){
        case 37:
            if($('.tyyp').css('margin-left') < 0){
                $('.tyyp').animate({ 'marginLeft': '0px' });
            }else
            $('.tyyp').animate({ 'marginLeft': '-=50px' }, 0);
            break;
        case 38:
            $('.tyyp').animate({ 'marginTop': '-=50px' }, 0);
            break;
        case 39:
            if($('.tyyp').css('margin-left') == maxWidth){
                $('.tyyp').animate({ 'marginLeft': '0px' });
            }
            $('.tyyp').animate({ 'marginLeft': '+=50px' }, 0);
            break;
        case 40:
            $('.tyyp').animate({ 'marginTop': '+=50px' }, 0);
            break;
    }
});

