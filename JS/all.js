// Jquery
$(document).ready(function () {
    // add ham-window-menu
    $('.ham-window').click(function (event) {
        event.preventDefault();
        $('.page-flex-aside').toggleClass('open');
    });
    // add ham-mobile-menu
    $('.ham-mobile').click(function (event) {
        event.preventDefault();
        $('.page-flex-aside').toggleClass('mobile-ham-btn');
    });

    // branch-list
    $('.list-branch').click(function (event) {
        event.preventDefault();
        $('.branch-selection').slideToggle(200);
    });
    // 下方伸縮列暫時用不到
    // $('.AdministrationToggle').click(function (event) {
    //     event.preventDefault();
    //     $('.AdministrationBranch-selection').slideToggle(200);
    // });
    // $('.AccountToggle').click(function (event) {
    //     event.preventDefault();
    //     $('.AccountBranch-selection').slideToggle(200);
    // });
    // 
});


// hamburger-menu
(function () {

    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
        });
    }

})();
// end