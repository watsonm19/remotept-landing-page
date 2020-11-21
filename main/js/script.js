//scroll to top on page refresh (PART1)
$(document).ready(function(){
    $(this).scrollTop(0);
});
//for arrow click part (PART2)
$(document).ready(function () {
    $('#down').click(function () {
        $("html").scrollTop(750);
        $('html, body').animate({
            scrollTop: $('.container').offset().top
        }, 1000);
    });
});