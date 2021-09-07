/*Owl Carousels */

var owlWelcome = $('.owl-welcome');
owlWelcome.owlCarousel({
    animateOut: 'animate__fadeOut animate__zoomOut ',
    animateIn: 'animate__fadeIn animate__zoomIn animate__slow',
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true
});
var owlTeam = $('.owl-team');
owlTeam.owlCarousel({
    animateOut: 'animate__fadeOut animate__zoomOut ',
    animateIn: 'animate__fadeIn animate__zoomIn animate__slow',
    items: 2,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
});
var owlTestimonials = $('.owl-testimonials');
owlTestimonials.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

var owlArticles = $('.owl-articles');
owlArticles.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
})
/*End Owl Carousels*/

/*Start Search Popup*/
if ($(".search-popup").length) {
    //Show Popup
    $(".search-toggler").on("click", function () {
        $(".search-popup").addClass("active");
    });
    //Hide Popup
    $(".search-popup__overlay").on("click", function (e) {
        $(".search-popup").removeClass("active");
        e.preventDefault();
    });
    //Hide Popup
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $(".search-popup").addClass("active");
        }
    });
}

//Custom Cursor
if ($(".custom-cursor__overlay").length) {
    // / cursor /
    var cursor = $(".custom-cursor__overlay .cursor"),
      follower = $(".custom-cursor__overlay .cursor-follower");

    var posX = 0,
      posY = 0;

    var mouseX = 0,
      mouseY = 0;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
          css: {
            left: posX - 22,
            top: posY - 22
          }
        });

        TweenMax.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY
          }
        });
      }
    });

    $(document).on("mousemove", function (e) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      mouseX = e.pageX;
      mouseY = e.pageY - scrollTop;
    });
    $("button, a").on("mouseenter", function () {
      cursor.addClass("active");
      follower.addClass("active");
    });
    $("button, a").on("mouseleave", function () {
      cursor.removeClass("active");
      follower.removeClass("active");
    });
    $(".custom-cursor__overlay").on("mouseenter", function () {
      cursor.addClass("close-cursor");
      follower.addClass("close-cursor");
    });
    $(".custom-cursor__overlay").on("mouseleave", function () {
      cursor.removeClass("close-cursor");
      follower.removeClass("close-cursor");
    });
  }
/*End Search Popup*/
/*Start Navigation Bar*/
$(document).ready(function () {
    $('.dropdown-toggle').addClass('without-after');
});

var navbarDropdownUl = $("#navbar-dropdown-ul");
var navbarDropDown = $("#navbar-dropdown");
//TODO Check the lag here
$(document).on('mouseenter', '#navbar-dropdown', function () {
    navbarDropDown.addClass('show');
    navbarDropDown.attr('aria-expanded', 'true');
    navbarDropdownUl.addClass('show');
    navbarDropdownUl.animate({
        'top': '50px',
        'opacity': 1
    }, 400, 'linear');
});
$(document).on('mouseleave', '#navbar-dropdown', function () {

    setTimeout(function () {
        navbarDropDown.removeClass('show');
        navbarDropDown.attr('aria-expanded', 'false');
        navbarDropdownUl.removeClass('show');
    }, 200);
    navbarDropdownUl.animate({
        'top': '120px',
        'opacity': 0
    }, 400, 'linear');

});
$(document).on('click', '#navbar-dropdown', function () {
    navbarDropDown.addClass('show');
    navbarDropDown.attr('aria-expanded', 'true');
    navbarDropdownUl.addClass('show');
});
/*End Navigation Bar*/

/*Start Second Section*/

var discoverMoreBtn = $(".discover-more-btn");
var discoverMoreBtnText = $(".discover-more-btn-text");

$(document).on('mouseenter', ".discover-more-btn", function () {

    if ($(this).parent().hasClass('invite-button')) {
        discoverMoreBtn.animate({
            'background-color': 'white'
        }, 600, 'linear');
        discoverMoreBtnText.animate({
            'color': '#222429'
        }, 600, 'linear');
    } else {
        discoverMoreBtn.animate({
            'background-color': 'black'
        }, 600, 'linear');
        discoverMoreBtnText.animate({
            'color': 'white'
        }, 600, 'linear');
    }
});
$(document).on('mouseleave', ".discover-more-btn", function () {
    if ($(this).parent().hasClass('invite-button')) {
        discoverMoreBtn.animate({
            'background-color': '#222429'
        }, 600, 'linear');
        discoverMoreBtnText.animate({
            'color': 'white'
        }, 600, 'linear')
    }
    else {
        discoverMoreBtn.animate({
            'background-color': '#536DFE'
        }, 600, 'linear');
        discoverMoreBtnText.animate({
            'color': 'black'
        }, 600, 'linear');
    }
});
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

/*Start Services Section*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip({ trigger: 'manual' }).tooltip('hide');
});

$(window).on('scroll', function () {
    // if($( window ).scrollTop() > 10){   scroll down abit and get the action   
    $(".progress-bar").each(function () {
        each_bar_width = $(this).attr('aria-valuenow');
        $(this).width(each_bar_width + '%');
    });

    //  }  
});
var portfolioItem = $('.portfolio-item');
portfolioItem.on('mouseover', function () {
    var toast = $(this).find('.portfolio-item-toast');
    toast.removeClass('hide');
    toast.addClass('animate__fadeInUp');
    toast.addClass('show');
});
portfolioItem.on('mouseleave', function () {
    var toast = $(this).find('.portfolio-item-toast');
    toast.removeClass('animate__fadeInUp show');
    toast.addClass('hide');
})
/*End Services Section*/
/*Start Clients Section*/
var counterItemsH2 = $('counter-item').find('h2');
var counterItemsH2Title = ['PROJECTS COMPLETED', 'ACTIVE CLIENTS', 'CUPS OF COFFEE', 'HAPPY CLIENTS'];
var counterItemsList = $("#counter-items-list").children();
$(document).ready(function () {

    //removing border of last element
    let lastCounterItem = counterItemsList.last();
    lastCounterItem.removeClass('border-end');
    if (window.matchMedia('(max-width: 1199px)').matches) {
        counterItemsList.eq(1).removeClass('border-end');
    }
    //Adding text-center and margin top to each counter item
    $('.counter-item').each(function () {
        $(this).addClass('text-center mt-5')
    })

});


$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$('.feature-card-text').on('mouseenter', function () {
    $(this).parent().find('.feature-card-rounded').animate({
        'background-color': '#212529'
    }, 400, 'linear')
    $(this).parent().find('.feature-card-rounded')
        .find('.feature-card-rounded-text')
        .animate({
            'color': 'white'
        }, 400, 'linear')
});
$('.feature-card-text').on('mouseleave', function () {
    $(this).parent().find('.feature-card-rounded').animate({
        'background-color': '#9e99ff'
    }, 400, 'linear')
    $(this).parent().find('.feature-card-rounded')
        .find('.feature-card-rounded-text')
        .animate({
            'color': '#212529'
        }, 400, 'linear')
});
/*End Clients Section*/
/*Start Team Section*/
/*End Team Section*/
/*Start Customer Section*/
var customerCard = $('.owl-testimonials').find('.item');
customerCard.on('mouseenter', function () {
    $(this).find('.customer-feedback').animate({
        'background-color': '#536DFE'
    }, 400, 'linear');
    $(this).find('span').animate({
        'color': '#222429'
    });
    $(this).find('h6').animate({
        'color': '#222429'
    }, 400, 'linear');
    $(this).find('img').css({
        'filter': 'grayscale(0)'
    }, 400, 'linear');
});
customerCard.on('mouseleave', function () {
    $(this).find('.customer-feedback').animate({
        'background-color': 'white'
    }, 400, 'linear');
    $(this).find('span').animate({
        'color': '#536DFE'
    });
    $(this).find('h6').animate({
        'color': '#536DFE'
    }, 400, 'linear');
    $(this).find('img').css({
        'filter': 'grayscale(1)'
    }, 400, 'linear');
});
/*End Customer Section*/
