// Class: Main

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;

// Constructor

var Main = function(){}

// Meta

Main.__name__ = ["Main"];
Main.prototype = {
	
};
Main.prototype.__class__ = Main.prototype.constructor = $hxClasses["Main"] = Main;

// Init



// Statics

Main.main = function() {
	var finally = "Hello World";
	console.log("Main.hx:4:",finally);
}


// Export

exports.default = Main;