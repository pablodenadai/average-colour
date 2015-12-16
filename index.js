'use strict';

module.exports = function (colorArray) {
	var red = 0;
	var green = 0;
	var blue = 0;

	for (var i = 0; i < colorArray.length; i++) {
		var hex = colorArray[i];

		red += hexToR(hex);
		green += hexToG(hex);
		blue += hexToB(hex);
	}

	// Average RGB
	red = Math.round(red / colorArray.length);
	green = Math.round(green / colorArray.length);
	blue = Math.round(blue / colorArray.length);

	return rgbToHex(red, green, blue);
};

// Get the red of RGB from a hex value
function hexToR(h) {
	return parseInt((cutHex(h)).substring(0, 2), 16);
}

// Get the green of RGB from a hex value
function hexToG(h) {
	return parseInt((cutHex(h)).substring(2, 4), 16);
}

// Get the blue of RGB from a hex value
function hexToB(h) {
	return parseInt((cutHex(h)).substring(4, 6), 16);
}

// Cut the hex into pieces
function cutHex(h) {
	if (h.charAt(1) === 'x') {
		return h.substring(2, 8);
	}

	return h.substring(1, 7);
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
	return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
