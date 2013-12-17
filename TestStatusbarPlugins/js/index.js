document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state on devices
document.addEventListener("touchstart", function() {
}, false);

function onDeviceReady() {
	navigator.splashscreen.hide();
	var connectionInfo = new ConnectionApp();
	connectionInfo.run();
}

function ConnectionApp() {
}
 
ConnectionApp.prototype = {
	run: function() {
		var that = this;
		
		document.getElementById("show").addEventListener("click",
											   function() {
												   StatusBar.show();
											   },
											   false);
        document.getElementById("hide").addEventListener("click",
											   function() {
												   StatusBar.hide();
											   },
											   false);
        document.getElementById("overlaysWebView").addEventListener("click",
											   function() {
												   StatusBar.overlaysWebView(true);
											   },
											   false);
        document.getElementById("notOverlaysWebView").addEventListener("click",
											   function() {
												   StatusBar.overlaysWebView(false);
											   },
											   false);
        document.getElementById("styleDefault").addEventListener("click",
											   function() {
												   StatusBar.styleDefault();
											   },
											   false);
        document.getElementById("styleLightContent").addEventListener("click",
											   function() {
												   StatusBar.styleLightContent();
											   },
											   false);
        document.getElementById("styleBlackTranslucent").addEventListener("click",
											   function() {
												   StatusBar.styleBlackTranslucent();
											   },
											   false);
        document.getElementById("styleBlackOpaque").addEventListener("click",
											   function() {
												   StatusBar.styleBlackOpaque();
											   },
											   false);
         document.getElementById("backgroundColorByName").addEventListener("click",
											   function() {
												   StatusBar.backgroundColorByName("red");
											   },
											   false);
         document.getElementById("backgroundColorByHexString").addEventListener("click",
											   function() {
												   StatusBar.backgroundColorByHexString("#2837FF");
											   },
											   false);
	}    
}