$('.list').on('click', function(){
    var t = $(this);
    if(t.hasClass('selected')) {
        t.removeClass('selected');
    } else {
        t.closest('.component').find('.list').removeClass('selected');
        t.addClass('selected');
    }
});