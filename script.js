/*Start Navigation Bar*/
$(document).ready(function () {
    $('.dropdown-toggle').addClass('without-after');
});

var navbarDropdownUl = $("#navbar-dropdown-ul");
var navbarDropDown = $("#navbar-dropdown");

$(document).on('mouseenter', '#navbar-dropdown', function () {
    navbarDropDown.addClass('show');
    navbarDropDown.attr('aria-expanded', 'true');
    navbarDropdownUl.addClass('show');
    //TODO Ask Mina how can we make it animate over and over
    navbarDropdownUl.animate({
        'top': '50px',
        'opacity': 1
    }, 400, 'linear');
});
$(document).on('mouseleave', '#navbar-dropdown', function () {
    navbarDropdownUl.animate({
        'top': '120px',
        'opacity': 0
    }, 400, 'linear');
    setTimeout(function () {
        navbarDropDown.removeClass('show');
        navbarDropDown.attr('aria-expanded', 'false');
        navbarDropdownUl.removeClass('show');
    }, 200);


});
$(document).on('click', '#navbar-dropdown', function () {
    navbarDropDown.addClass('show');
    navbarDropDown.attr('aria-expanded', 'true');
    navbarDropdownUl.addClass('show');
});
/*End Navigation Bar*/
/*Start Welcome Section*/

//TODO ASK KARAM HWA MESH SHA3'AL LEEEEH
var owlNext = $(".owl-next");
var owlPrev = $(".owl-prev");
owlNext.on('mouseenter', function () {

    owlNext.animate({
        'background-color': '#536DFE'
    }, 400, 'linear');
});
owlPrev.on('mouseenter', function () {
    owlPrev.animate({
        'background-color': '#536DFE'
    }, 400, 'linear');
});

owlNext.on('mouseleave', function () {
    owlNext.animate({
        'background-color': '#7777773b'
    }, 400, 'linear');
});
owlPrev.on('mouseleave', function () {
    owlPrev.animate({
        'background-color': '#7777773b'
    }, 400, 'linear');
});
/*End Welcome Section*/

/*Start Second Section*/

var discoverMoreBtn = $("#discover-more-btn");
var discoverMoreBtnText = $("#discover-more-btn-text");

$(document).on('mouseenter', "#discover-more-btn", function () {

    discoverMoreBtn.animate({
        'background-color': 'black'
    }, 600, 'linear');
    discoverMoreBtnText.animate({
        'color': 'white'
    }, 600, 'linear')
})
$(document).on('mouseleave', "#discover-more-btn", function () {
    discoverMoreBtn.animate({
        'background-color': '#536DFE'
    }, 600, 'linear');
    discoverMoreBtnText.animate({
        'color': 'black'
    }, 600, 'linear')
})
/*End Second Section*/

/*Start What We Offering Section*/

var whatWeOfferfaIcons = [`fab fa-airbnb`, `fab fa-500px`, `fab fa-angrycreative`, `fab fa-battle-net`];
var whatWeOfferCards = $('.what-we-offering-cards');
var whatWeOfferBtn = $('a[name="card-footer-btn"]');
for (let i = 0; i < whatWeOfferCards.length; i++) {

    let cardIcon = $(whatWeOfferCards[i]).find('.card-img-top').find('i');
    cardIcon.addClass(`${whatWeOfferfaIcons[i]} fa-5x`);

}

whatWeOfferBtn.on('mouseenter', function () {
    let hoveredCard = $(this).parent().parent();
    let hoveredCardHeader = $(this).parent().parent().find('h1');
    hoveredCard.animate({
        'background-color': '#536DFE',
        'color': '#222429'
    }, 400, 'linear');
    hoveredCardHeader.animate({
        'color': '#222429'
    }, 400, 'linear');
});

whatWeOfferBtn.on('mouseleave', function () {
    let hoveredCard = $(this).parent().parent();
    let hoveredCardHeader = $(this).parent().parent().find('h1');
    hoveredCard.animate({
        'background-color': '#1C1E22',
        'color': 'white'
    }, 400, 'linear');
    hoveredCardHeader.animate({
        'color': '#white'
    }, 400, 'linear');
});

/* End What We Offering Section */
/* Start Experience Us Section */

var expUsOuter = $('#experience-us-outer');
expUsOuter.on('mouseenter', function () {
    let iconWrapper = $(this).find('.experience-us-icon-wrapper');
    iconWrapper.animate({
        'background-color': 'white',
        'color': '#536DFE'
    }, 200, 'linear')
})
expUsOuter.on('mouseleave', function () {
    let iconWrapper = $(this).find('.experience-us-icon-wrapper');
    iconWrapper.animate({
        'background-color': '#222429',
        'color': 'white'
    }, 200, 'linear')
})
/* End Experience Us Section */
//TODO Ask Karam about owl-buttons animations
/*Start Services Section*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip({ trigger: 'manual' }).tooltip('show');
});

$(window).on('scroll', function () {
    // if($( window ).scrollTop() > 10){   scroll down abit and get the action   
    $(".progress-bar").each(function () {
        each_bar_width = $(this).attr('aria-valuenow');
        $(this).width(each_bar_width + '%');
    });

    //  }  
});
var portfolioItem= $('.portfolio-item');
portfolioItem.on('mouseover', function () {
    var toast = $(this).find('#portfolio-item-toast');
    toast.removeClass('hide');
    toast.addClass('animate__fadeInUp');
    toast.addClass('show');
});
portfolioItem.on('mouseleave',function () {
    var toast = $(this).find('#portfolio-item-toast');
    toast.removeClass('animate__fadeInUp show');
    toast.addClass('hide');
})
/*End Services Section*/