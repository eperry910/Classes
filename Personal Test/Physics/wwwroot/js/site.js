// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('.dropdown').mouseover(function () {
        $(this).next('.dropdown-menu').show();
    });

    $('.dropdown-menu li').mouseover(function () {
        $(this).find('.sub-dropdown-menu').show();
    });

    var timeout;
    $('.dropdown, .dropdown-menu, .sub-dropdown-menu').mouseleave(function () {
        timeout = setTimeout(function () {
            $('.dropdown-menu, .sub-dropdown-menu').hide();
        }, 100);
    });

    $('.dropdown, .dropdown-menu, .sub-dropdown-menu').mouseenter(function () {
        clearTimeout(timeout);
    });
});