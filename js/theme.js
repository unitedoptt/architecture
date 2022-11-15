
"use strict";



// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });
                
        });
  }
}

// Search Option
function searchbox () {
  if($("#searchDropdown").length) {
    $("#searchDropdown").on('click', function() {
      $(".search-form").toggleClass('show')
    })
    $(".close-search").on('click', function() {
      $(".search-form").removeClass('show')
    })
  }
}


// Theme-banner slider 
function BannerSlider () {
  if ($("#main-banner-slider").length) {
    $("#main-banner-slider").revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:false,
      delay:9000,
      navigation: {
          keyboardNavigation: "on",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          onHoverStop: "off",
          touch: {
              touchenabled: "on",
              swipe_threshold: 75,
              swipe_min_touches: 1,
              swipe_direction: "horizontal",
              drag_block_vertical: false
          },
          thumbnails: {
              style: "hesperiden",
              enable: true,
              min_width: 112,
              wrapper_color: "transparent",
              wrapper_opacity: "1",
              tmp: '<span class="tp-thumb-title">{{title}}</span>',
              visibleAmount: 3,
              hide_onmobile: false,
              hide_onleave: false,
              direction: "vertical",
              span: false,
              position: "inner",
              space: 25,
              h_align: "left",
              v_align: "center",
              h_offset: 0,
              v_offset: 0
          },
          bullets: {
                  enable: true,
                  hide_onmobile: false,
                  style: "uranus",
                  hide_onleave: false,
                  direction: "horizontal",
                  h_align: "center",
                  v_align: "bottom",
                  h_offset: -15,
                  v_offset: 50,
                  space: 13,
                  tmp: '<span class="tp-bullet-inner"></span>'
              }
      },
      responsiveLevels:[2220,1183,975,751],
                gridwidth:[1170,970,770,400],
                gridheight:[1000,1000,950,800],
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                }   
    });
  };
}


// Theme-banner Video slider 
function BannerVideoSlider () {
  if ($(".video-slider").length) {
    $(".video-slider").revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:false,
      delay:15000,
      navigation: {
          keyboardNavigation: "on",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          onHoverStop: "off",
          touch: {
              touchenabled: "on",
              swipe_threshold: 75,
              swipe_min_touches: 1,
              swipe_direction: "horizontal",
              drag_block_vertical: false
          },
          thumbnails: {
              style: "hesperiden",
              enable: true,
              min_width: 112,
              wrapper_color: "transparent",
              wrapper_opacity: "1",
              tmp: '<span class="tp-thumb-title">{{title}}</span>',
              visibleAmount: 3,
              hide_onmobile: false,
              hide_onleave: false,
              direction: "vertical",
              span: false,
              position: "inner",
              space: 25,
              h_align: "left",
              v_align: "center",
              h_offset: 0,
              v_offset: 0
          },
          bullets: {
                  enable: true,
                  hide_onmobile: false,
                  style: "uranus",
                  hide_onleave: false,
                  direction: "horizontal",
                  h_align: "center",
                  v_align: "bottom",
                  h_offset: -15,
                  v_offset: 50,
                  space: 13,
                  tmp: '<span class="tp-bullet-inner"></span>'
              }
      },
      responsiveLevels:[2220,1183,975,751],
                gridwidth:[1170,970,770,400],
                gridheight:[1000,1000,950,800],
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                }   
    });
  };
}

// Fancybox 
function FancypopUp () {
  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      openEffect  : 'elastic',
        closeEffect : 'elastic',
         helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.8)'
                }
            }
        }
    });
  };
}


// Counter function
function CounterNumberChanger () {
  var timer = $('.timer');
  if(timer.length) {
    timer.appear(function () {
      timer.countTo();
    })
  }
}

// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}



//Contact Form Validation
function contactFormValidation () {
  if($('.form-validation').length){
    $('.form-validation').validate({ // initialize the plugin
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        website: {
          required: true
        },
        message: {
          required: true
        }
      },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert_success').fadeIn();
                        });
                    },
                    error: function() {
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $('#alert_error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  if($('.closeAlert').length) {
    $(".closeAlert").on('click', function(){
      $(".alert_wrapper").fadeOut();
    });
    $(".closeAlert").on('click', function(){
      $(".alert_wrapper").fadeOut();
    })
  }
}


// Event Area Map 
function eventMap () {
  if($("#event-area-map").length) {
    var settingsItemsMap = {
          zoom: 12,
          center: new google.maps.LatLng(23.810332, 90.412518),
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE
          },
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById('event-area-map'), settingsItemsMap );
      var image = 'images/logo/map.png';
      var myMarker = new google.maps.Marker({
          position: new google.maps.LatLng(23.810332, 90.412518),
          draggable: true,
          icon: image
      });

      map.setCenter(myMarker.position);
      myMarker.setMap(map);
      // Google map 
  };
}

// Mixitup gallery
function mixitupGallery () {
  if ($("#mixitUp-item").length) {
    $("#mixitUp-item").mixItUp()
  };
}


// Project details
function projectSlider () {
  if($('.project-details-slider').length) {
    $('.project-details-slider').owlCarousel({
        loop:true,
        nav:true,
        navText:false,
        dots:false,
        autoplay:false,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        lazyLoad:true,
        items:1,
    })
  }
}


// Blog details
function blogSlider () {
  if($('.blog-details-slider').length) {
    $('.blog-details-slider').owlCarousel({
        loop:true,
        nav:true,
        navText:false,
        dots:false,
        autoplay:false,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        lazyLoad:true,
        items:1,
    })
  }
}


// Team Profile details
function teamMemberSlider () {
  if($('.team-details-slider').length) {
    $('.team-details-slider').owlCarousel({
        loop:true,
        nav:true,
        navText:false,
        dots:false,
        autoplay:false,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        lazyLoad:true,
        items:1,
    })
  }
}

// Read Next Blog SLider 
function nextBlog () {
  if($('.read-next-sldierOne').length) {
    $('.read-next-sldierOne').owlCarousel({
        loop:true,
        nav:true,
        navText:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:900,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            530:{
                items:2
            }
        }
    })
  }
}


// Read Next Blog SLider 
function nextBlogTwo () {
  if($('.read-next-sldierTwo').length) {
    $('.read-next-sldierTwo').owlCarousel({
        loop:true,
        nav:true,
        navText:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:900,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// Sticky header
function stickyHeader () {
  if ($('.theme-main-menu').length) {
    var sticky = $('.theme-main-menu'),
        scroll = $(window).scrollTop();

    if (scroll >= 190) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    
  };
}


// toggle menu for mobile
function mobileDropdown () {
  if($('.theme-main-menu').length) {
    $('.theme-main-menu nav ul li.dropdown-holder').append(function () {
      return '<i class="fa fa-chevron-down" aria-hidden="true"></i>';
    });
    $('.theme-main-menu nav ul li.dropdown-holder>a,.theme-main-menu nav ul li.dropdown-holder .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    }); 
  }
}


// Accordion panel
function themeAccrodion () {
  if ($('.theme-accordion > .panel').length) {
    $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
          var heading = $(this).find('.panel-heading');
          heading.addClass("active-panel");
          
    });
    
    $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
        var heading = $(this).find('.panel-heading');
          heading.removeClass("active-panel");
          //setProgressBar(heading.get(0).id);
    });
  };
}


// hiddenBarToggler
function hiddenBarToggler () {
  if ($('.close-aside-menu').length) {
    $('.close-aside-menu').on('click', function () {
      $('#hidden-aside-menu').css({
        'opacity': '0',
        'visibility': 'hidden'
      });
    });
  };
  if ($('.toggle-show-menu-button').length) {
    $('.toggle-show-menu-button').on('click', function () {
      $('#hidden-aside-menu').css({
        'opacity': '1',
        'visibility': 'visible'
      });
    });
  };

  $('.aside-menu-wrapper ul li.dropdown-holder').append(function () {
      return '<button type="button" class="expander"><i class="fa fa-chevron-down" aria-hidden="true"></i></button>';
    });
    $('.aside-menu-wrapper ul li.dropdown-holder .expander,.aside-menu-wrapper ul li.dropdown-holder>a').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    });
}

// customScrollBarHiddenSidebar
function customScrollBar () {
  if ($('.aside-menu-wrapper').length) {
    $('.aside-menu-wrapper').mCustomScrollbar();
  };
}


// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder ();
     searchbox ();
     BannerSlider ();
     BannerVideoSlider ();
     FancypopUp ();
     CounterNumberChanger ();
     scrollToTop ();
     contactFormValidation ();
     closeSuccessAlert ();
     eventMap ();
     mixitupGallery ();
     projectSlider ();
     blogSlider ();
     teamMemberSlider ();
     nextBlog ();
     nextBlogTwo ();
     mobileDropdown ();
     themeAccrodion ();
     hiddenBarToggler ();
     customScrollBar ();
  })(jQuery);
});


// Window scroll function
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader ();
  })(jQuery);
});


(function($) {
  "use strict";
  
  $(document).ready(function(){
    window.addEventListener('DOMContentLoaded', function() {
        new QueryLoader2(document.querySelector("body"), {
            barColor: "#d7aa78",
            backgroundColor: "#f3f3f3",
            percentage: true,
            barHeight: 1,
            minimumTime: 400,
            fadeOutTime: 1000,
        })
    })
  })
})(jQuery)