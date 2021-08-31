
//--Start Navigation Bar--
$(document).ready(function () {
    $('.dropdown-toggle').addClass('without-after');
});

var navbarDropdownUl= $("#navbar-dropdown-ul");
var navbarDropDown= $("navbar-dropdown");

$(document).on('mouseenter', '#navbar-dropdown', function () {
    navbarDropDown.addClass('show');
    navbarDropDown.attr('aria-expanded','true');
    navbarDropdownUl.addClass('show');
});
$(document).on('mouseleave','#navbar-dropdown', function () {
    navbarDropDown.removeClass('show');
    navbarDropDown.attr('aria-expanded','false');
    navbarDropdownUl.removeClass('show');
});
$(document).on('click','#navbar-dropdown', function () {
    navbarDropDown.addClass('show');
    navbarDropDown.attr('aria-expanded','true');
    navbarDropdownUl.addClass('show');
});

//--End Navigation Bar--