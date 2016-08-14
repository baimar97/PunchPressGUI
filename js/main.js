// Makes sure we only run once jquery is loaded as well
// as ensuring we don't load javascript libraries multiple times
console.log("outside main script");

cprequire(["chilipeppr_ready"], function() {

	// Define standard ChiliPeppr objects
	console.log("running main script");
	var ws = {
		id: "com-chilipeppr-ws-tinyg",
		url: 'http://jsfiddle.net/baimar97/52wk5brt/show/light',
		fiddleurl: 'http://jsfiddle.net/baimar97/52wk5brt/',
		name: "Workspace / Punch Press",
		desc: "This is a workspace for ChiliPeppr's Hardware Fiddle. It is meant for controlling the punch press from a Raspberry Pi via a 10.1in display.",
		foreignSubscribe: {
			"/com-chilipeppr-elem-dragdrop/ondragover": "The Chilipeppr drag drop element will publish on channel /com-chilipeppr-elem-dragdrop/ondropped when a file is dropped so we subscribe to it so we can load a Gcode file when the user drags it onto the browser. It also adds a hover class to the bound DOM elem so we can add a CSS to hilite on hover",
			"/com-chilipeppr-elem-dragdrop/ondragleave": "We need to know when the drag is over to remove the CSS hilites.",
			"/com-chilipeppr-widget-gcode/resize": "We watch if the Gcode viewer resizes so that we can reposition or resize other elements in the workspace. Specifically we ask the Serial Port Console to resize. We also redraw the 3D Viewer so it fills the whole screen."
		},
		foreignPublish: {}
	};

	// // DRO Widget
	// console.log("loading xyzDRO");
	// $('#com-chilipeppr-xyz').load("dro-widget-full.html", "", function() {
	// 	cprequire(["inline:com-chilipeppr-widget-xyz"], function(xyz) {
	// 		xyz.init();
	// 		console.log("loaded xyzDRO");
	// 	});
	// });
	//
	// // TinyG Widget
	// chilipeppr.load("com-chilipeppr-tinyg", "tinyg-widget-full.html", function() {
	// 	cprequire(["inline:com-chilipeppr-widget-tinyg"], function(tinyg) {
	// 		tinyg.init();
	// 	});
	// });
	//
	// // Serial Port Selector Widget
	// chilipeppr.load("com-chilipeppr-serialport-spselector", "spselector-widget-full.html", function() {
	// 	cprequire(["inline:com-chilipeppr-widget-serialport"], function(sp) {
	// 		sp.setSingleSelectMode();
	// 		// We have a new TinyG buffer built into the serial
	// 		// port server. This asks the serial port widget to
	// 		// request the tinyg buffer. Make sure you ARE connected
	// 		// to a tinyg cuz it looks for a {"qr":""} response to release
	// 		// the flow
	// 		sp.init(null, "tinyg", 115200);
	// 	});
	// });
	//
	// // Serial Port Console Widget
	// chilipeppr.load("#com-chilipeppr-serialport-log", "serialport-widget-full.html", function() {
	// 	cprequire(["inline:com-chilipeppr-widget-spconsole"], function(spc) {
	// 		// pass in regular expression filter as 2nd parameter
	// 		// to enable filter button and clean up how much
	// 		// data is shown
	// 		spc.init(true, /^{/);
	//
	// 		// resize this console on a browser resize
	// 		$(window).on('resize', function(evt) {
	// 			//console.log("serial-port-console. resize evt:", evt);
	// 			if ($.isWindow(evt.target)) {
	// 				//console.log("resize was window. so resizing");
	// 				spc.resize();
	// 			} else {
	// 				//console.log("resize was not window, so ignoring");
	// 			}
	// 		});
	// 		// resize this console if we get a publish
	// 		// from the gcode viewer widget
	// 		chilipeppr.subscribe("/com-chilipeppr-widget-gcode/resize", spc, spc.resize);
	// 	});
	// });
});
