var initPenyes = function () {
	
	function getMaxScrollForTransition() { return 65536; } ;
	
	function updateOrientation() {
		
		this.orientation = window.orientation;

		if(this.orientation === undefined) {
			// No JavaScript orientation support. Work it out.
			if(document.documentElement.clientWidth > document.documentElement.clientHeight) this.orientation = 'landscape';
			else this.orientation = 'portrait';

		}
		else if(this.orientation === 0 || this.orientation === 180) this.orientation = 'portrait';
		else this.orientation = 'landscape'; // Assumed default, most laptop and PC screens.

	};

	function getScale() {
		this.viewportScale = undefined;

		// Get viewport width
		var viewportWidth = document.documentElement.clientWidth;

		// Abort. Screen width is greater than the viewport width (not fullscreen).
		if(screen.width > viewportWidth) {
			console.log('Aborted viewport scale measurement. Screen width > viewport width');
			return;

		}

		// Get the orientation corrected screen width
		this.updateOrientation();
		this.screenWidth = screen.width;

		if(this.orientation === 'portrait') {
			// Take smaller of the two dimensions
			if(screen.width > screen.height) this.screenWidth = screen.height;

		}
		else {
			// Take larger of the two dimensions
			if(screen.width < screen.height) this.screenWidth = screen.height;

		}

		// Calculate viewport scale
		this.viewportScale = this.screenWidth / window.innerWidth;
		return this.viewportScale;

	};
	
	function update(callback) {
		// Clear timeout if already set
		if(this.timeout !== undefined) {
			clearTimeout(this.timeout);
			this.timeout = undefined;

		}

		if(this.delay > 0) {
			// Delay compensates for viewport bounce
			var viewScale = this;

			this.timeout = setTimeout(function() {
				viewScale.getScale();
				if(callback !== undefined) callback();

			}, this.delay);

		}
		else {
			// Immediate scale update
			this.getScale();
			if(callback !== undefined) callback();

		}

	};
	  return {  
		  "updateOrientation" : function () {
			  updateOrientation();
		    },
		    "getMaxScrollForTransition" : function () {
		    	getMaxScrollForTransition();
			},
		    "getScale" : function () {
		    	getScale();
		    },
		    "update" : function (callback) {
		    	update(callback);
			}
		  }; // end of the return
}();


$.mobile.getMaxScrollForTransition  = initPenyes.getMaxScrollForTransition;
$.mobile.defaultHomeScroll = 0;
this.updateOrientation 				= initPenyes.updateOrientation;
this.getScale 						= initPenyes.getScale;
this.update 						= initPenyes.update;

//Events

$(document).bind("mobileinit", function(){
    $.mobile.defaultDialogTransition = "none";
    $.mobile.defaultPageTransition = "none";
});
