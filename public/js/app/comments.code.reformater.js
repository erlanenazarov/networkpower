/**
 * Created by erlan on 6/8/17.
 */


$(document).ready(function () {
    var codeSections = $('section.code');

    $(codeSections).each(function (i, obj) {
        var currentLanguage = $(obj).attr('data-language');
        var code = $(obj).html();
        switch (currentLanguage) {
            case 'python':
                var result = code.replace('list()', '<span style="color: #259ecc;">list()</span>')
                    .replace('dict()', '<span style="color: #259ecc;">dict()</span>')
                    .replace('for', '<span style="color: #CC7832;">for</span>')
                    .replace('in', '<span style="color: #CC7832;">in</span>')
                    .replace(/"(.+?)":/ig, '<span style="color: #3adb76;">"$1"</span>:')
                    .replace(/dict\((.+?)=(.+?)\)/ig, '<span style="color: #259ecc;">dict(</span><span style="color: #ff28e1;">$1=</span>$2<span style="color: #259ecc;">)</span>');
                $(obj).html(result);
                break;
        }

        //parse();
        //parsed()
        // var parsed = parse($(obj).html());
    });
});