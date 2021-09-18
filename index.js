$(document).ready(function () {

    $('header div.menu-button').click(function () {
        $('header nav').slideToggle('slow', function () {
            $('header nav').toggleClass('showMenu');
        });
    });

});