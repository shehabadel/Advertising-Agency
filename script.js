
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
    }, 2000);


});
$(document).on('click', '#navbar-dropdown', function () {
    navbarDropDown.addClass('show');
    navbarDropDown.attr('aria-expanded', 'true');
    navbarDropdownUl.addClass('show');
});
/*End Navigation Bar*/
/*Start Welcome Section*/

//TODO ASK KARAM HWA MESH SHA3'AL LEEEEH
var owlNext= $(".owl-next");
var owlPrev= $(".owl-prev");
owlNext.on('mouseenter',function () {
   owlNext.animate({
       'background-color':'#536DFE'
   },400,'linear'); 
});
owlPrev.on('mouseenter',function () {
    owlPrev.animate({
        'background-color':'#536DFE'
    },400,'linear'); 
 });

 owlNext.on('mouseleave',function () {
    owlNext.animate({
        'background-color':'#7777773b'
    },400,'linear'); 
 });
 owlPrev.on('mouseleave',function () {
     owlPrev.animate({
         'background-color':'#7777773b'
     },400,'linear'); 
  });
/*End Welcome Section*/

/*Start Second Section*/

var discoverMoreBtn= $("#discover-more-btn");
var discoverMoreBtnText=$("#discover-more-btn-text");

$(document).on('mouseenter',"#discover-more-btn", function () {
    discoverMoreBtn.animate({
        'background-color':'black'
    },600,'linear');
    discoverMoreBtnText.animate({
        'color':'white'
    },600,'linear')
})
$(document).on('mouseleave',"#discover-more-btn", function () {
    discoverMoreBtn.animate({
        'background-color':'#536DFE'
    },600,'linear');
    discoverMoreBtnText.animate({
        'color':'black'
    },600,'linear')
})
/*End Second Section*/
//TODO Ask Karam about owl-buttons animations
