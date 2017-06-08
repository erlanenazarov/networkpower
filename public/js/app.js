String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

$(document).foundation();


$(document).ready(function () {
    new WOW().init();

});

$('#up-button').on('click', function (event) {
    event.preventDefault();
    $('body').animate({
        scrollTop: 0
    }, 800);
});
