/**
 * Created by MacBookAir on 13/04/15.
 */
$(document).keydown(function(e){
    var key = e.keyCode ? e.keyCode : e.which;

    switch (key){
        case 37:
            $('.tyyp').animate({ 'marginLeft': '-=50px' }, 0);
            break;
        case 38:
            $('.tyyp').animate({ 'marginTop': '-=50px' }, 0);
            break;
        case 39:
            $('.tyyp').animate({ 'marginLeft': '+=50px' }, 0);
            break;
        case 40:
            $('.tyyp').animate({ 'marginTop': '+=50px' }, 0);
            break;
    }
});
