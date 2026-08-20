$(document).ready(function () {
    sunnySide.init({
        select2: $(".selectpicker").map(function () {
            if ($(this).data("no-search")) {
                return $(this).select2({
                    minimumResultsForSearch: Infinity,
                });
            } else {
                return $(this).select2();
            }
        }),
    });
});

var self1;
var advisoryBoard;
var members;

var sunnySide = {
    init: function (options) {
        this.settings = options;

        self1 = this;

        this.utilities();
        this.sliderFunction();
        this.stickyHeader();
        this.configureModal();
    },

    stickyHeader: function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                $(".header").addClass("sticky");
            } else {
                $(".header").removeClass("sticky");
            }
        });
    },

    utilities: function () {
        $(".header__menuIcon").on("click", function () {
            $("html").toggleClass("overflow-hidden");
            $("body").toggleClass("menu-active");
        });
         $(".stickColumn").stick_in_parent({ container: $(".stickWrapper"), offset_top: 120 }); 
    },

    sliderFunction: function () {

        var steps = new Swiper(".guidance-steps .swiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            speed: 1000,
            navigation: {
                nextEl: ".guidance-steps .swiper-button-next",
                prevEl: ".guidance-steps .swiper-button-prev",
            },
            breakpoints: {
                992: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    spaceBetween: 29,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                },
                501: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                },
            },
        });

        // =========================
        // ADVISORY BOARD (GSAP CONTROLLED)
        // =========================
        advisoryBoard = new Swiper(".board-members .swiper", {
            slidesPerView: 1.2,
            spaceBetween: 10,
            speed: 1000,
            allowTouchMove: true, 
            grabCursor: true,
            freeMode: true,
              navigation: {
                nextEl: ".board-members .swiper-button-next",
                prevEl: ".board-members .swiper-button-prev",
            },
            breakpoints: {
                1201: {
                    slidesPerView: 4,
                    spaceBetween: 29,
                    allowTouchMove: true, 
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 29,
                    allowTouchMove: true, 
                },
                768: {
                    slidesPerView: 3.3,
                    spaceBetween: 29,
                    allowTouchMove: true, 
                },
                667: {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                    allowTouchMove: true, 
                },
            },
        });

        // =========================
        // MEMBERS (GSAP CONTROLLED)
        // =========================
        members = new Swiper(".sunnyside-members .swiper", {
            slidesPerView: 1.2,
            spaceBetween: 10,
            speed: 1000,
            allowTouchMove: true, 
            grabCursor: true,
            freeMode: true, 
            navigation: {
                nextEl: ".sunnyside-members .swiper-button-next",
                prevEl: ".sunnyside-members .swiper-button-prev",
            },
            breakpoints: {
                1451: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    spaceBetween: 50,
                    // allowTouchMove: false, 
                },
                1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                    // allowTouchMove: false, 
                },
                992: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                    // allowTouchMove: false, 
                },
                768: {
                    slidesPerView: 3.3,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                    // allowTouchMove: true, 
                },
                667: {
                    slidesPerView: 2.3,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                    // allowTouchMove: true, 
                },
            },
        });

        // =========================
        // SAFE GSAP INIT
        // =========================
        // setTimeout(function () {
        //     initAdvisoryScroll();
        //     initMembersScroll();
        // }, 150);
    },
    configureModal: function () {

    // Open modal
    $("body").on("click", "*[data-toggle='custom-modal']", function (e) {
        e.preventDefault();

        $(".custom-modal").removeClass("large medium small");

        var url = $(this).attr("data-path");
        var size = $(this).attr("data-size");
        var class_name = $(this).attr("data-class");

        $.get(url, function (data) {

            $(".custom-modal .modal-body").html(data);

            if (size) {
                $(".custom-modal").addClass(size);
            }

            if (class_name) {
                $(".custom-modal").attr("id", class_name);
            }

            // Open
            $(".custom-modal").addClass("is-open");

            setTimeout(function () {
                $(".custom-modal .modal-body").addClass("show");
            }, 200);

            $("body").addClass("remove-scroll");
        });
    });


    // Overlay click → close modal
    $("body").on("click", ".custom-modal__overlay", function () {
        closeCustomModal();
    });


    // Close button → close modal
    $("body").on("click", ".popup-cross-icon", function () {
        closeCustomModal();
    });


    // Close function
    function closeCustomModal() {

        $(".custom-modal").removeClass("is-open");

        $(".custom-modal .modal-body").removeClass("show");

        setTimeout(function () {
            $(".custom-modal .modal-body").empty();

            $(".custom-modal").removeClass("large medium small");
            $(".custom-modal").removeAttr("id");

            $("body").removeClass("remove-scroll");
        }, 300);
    }
},

};


// =========================
// GSAP SETUP
// =========================
// document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//     ScrollSmoother.create({
//         wrapper: "#smooth-wrapper",
//         content: "#smooth-content",
//         smooth: 1.6,
//         effects: true,
//     });
// });


// =========================
// ADVISORY SCROLL CONTROL
// =========================
// function initAdvisoryScroll() {

//     if (!advisoryBoard) return;

//     if (window.innerWidth <= 992) return;

//     let total = advisoryBoard.slides.length;
//     let perView = advisoryBoard.params.slidesPerView;

//     if (total <= perView) return;

//     let steps = total - 1;

//     ScrollTrigger.create({
//         trigger: ".board-members",
//         start: "top top",
//         end: () => "+=" + (steps * 250),
//         pin: true,
//         scrub: 0.8,
//         anticipatePin: 1,

//         onUpdate: (self) => {
//             let index = Math.round(self.progress * steps);
//             advisoryBoard.slideTo(index);
//         }
//     });
// }


// =========================
// MEMBERS SCROLL CONTROL
// =========================
// function initMembersScroll() {

//     if (!members) return;

//     if (window.innerWidth <= 992) return;

//     let total = members.slides.length;
//     let perView = members.params.slidesPerView;

//     if (total <= perView) return;

//     let steps = total - 1;

//     ScrollTrigger.create({
//         trigger: ".sunnyside-members",
//         start: "top top",
//         end: () => "+=" + (steps * 250),
//         pin: true,
//         scrub: 0.8,
//         anticipatePin: 1,

//         onUpdate: (self) => {
//             let index = Math.round(self.progress * steps);
//             members.slideTo(index);
//         }
//     });
// }
