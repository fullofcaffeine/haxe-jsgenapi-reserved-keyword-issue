default:
	haxe build-hxgenjs.hxml
	haxe build-haxejs.hxml

run-haxejs:
	node out/haxejs/main-haxejs.js

run-hxgenjs:
	node out/hxgenjs/main-hxgenjs.js
