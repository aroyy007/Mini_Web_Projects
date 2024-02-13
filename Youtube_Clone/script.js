// Add jQuery for smoother transitions

$(document).ready(function () {
    // Toggle sidebar width on hover
    $(".sidebar-link").hover(
        function () {
            $(this).css("background-color", "rgb(235, 235, 235)");
        },
        function () {
            $(this).css("background-color", "transparent");
        }
    );

    // Toggle sidebar width on click
    $(".humburger").click(function () {
        $(".sidebar").toggleClass("sidebar-expanded");
        $("body").toggleClass("body-expanded-sidebar");
    });

    // Toggle search bar width on focus
    $(".search-bar").focus(function () {
        $(".search-bar").css("width", "200px");
        $(".search-button").css("width", "90px");
        $(".voice-search-button").css("width", "50px");
    });

    // Toggle search bar width on blur
    $(".search-bar").blur(function () {
        $(".search-bar").css("width", "0");
        $(".search-button").
        $(".search-button").css("width", "66px");
        $(".voice-search-button").css("width", "40px");
    });
});
