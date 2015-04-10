var isChromeBrowser = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var app = new Framework7();
var $$ = Dom7;


document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(){

	var toast = app.toast('Marked star', '<div>☆</div>', {})

	$$('#btnshow').click(function () {
      toast.show(true);
    });

	var appViewMain = app.addView('.view-main', {
	    dynamicNavbar: true,
	    init: false,
	    cache: false, // TODO disable for production
	    cacheDuration: 2592000000,
	    // Hide and show indicator during ajax requests
	    onAjaxStart: function (xhr) {
	        appFramework.showIndicator();
	    },
	    onAjaxComplete: function (xhr) {
	        appFramework.hideIndicator();
	    }
	});

}

if( isChromeBrowser ){
	var eventDeviceready = new Event('deviceready');
	document.dispatchEvent(eventDeviceready);
}