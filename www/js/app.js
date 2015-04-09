var appFramework = new Framework7();
var $$ = Dom7;

// Add view
// var mainView = appFramework.addView('.view-main', {
//     // Because we use fixed-through navbar we can enable dynamic navbar
//     dynamicNavbar: true
// });

var appMain = appFramework.addView('.view-main', {
    dynamicNavbar: true,
    init: false,
    cache: false,
    // Hide and show indicator during ajax requests
    onAjaxStart: function (xhr) {
        appFramework.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        appFramework.hideIndicator();
    }
});