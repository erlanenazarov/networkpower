/**
 * Created by erlan on 6/8/17.
 */
var charts = $('p.charts-number');
$('.animated').each(function () {
    $(this).attr('data-played', 'false');
});
$(document).on('scroll', function () {
    var scroll = $(document).scrollTop();
    if (scroll >= $('.charts').offset().top - 150 && $('.charts').attr('data-played') == 'false') {
        $(charts).each(function (i, obj) {
            $(this).prop('Counter', 0).animate({
                Counter: parseInt($(obj).attr('data-value'))
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    var result = '';
                    var stringNow = Math.ceil(now).toString();
                    switch (stringNow.length) {
                        case 4:
                            result = stringNow.splice(1, 0, ' ');
                            break;
                        case 5:
                            result = stringNow.splice(2, 0, ' ');
                            break;
                        case 6:
                            result = stringNow.splice(3, 0, ' ');
                            break;
                    }
                    if (result != '') $(this).text(result); else $('.charts').attr('data-played', 'true');
                }
            });
        });
    }
});