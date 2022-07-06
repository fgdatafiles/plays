var colourBackground = "#2a2a2a";
var colourLoadingBack = "#cb1500";
var colourLoadingFront = "#f8f8f8";

var loadingBarImage = new Image();
loadingBarImage.src = 'html5game/load.png';
loadingBarImage.width = 300;
loadingBarImage.height = 300;
loadingBarImage.x_offset = -(loadingBarImage.width / 2);
loadingBarImage.y_offset = -(loadingBarImage.height / 2);

if (typeof loading_bar_smoother === 'undefined') {
    var loading_bar_smoother = 0;
}

function dj_loading(_graphics, _width, _height, _total, _current, _loadingscreen) {
	_width = window.innerWidth;
	_height = window.innerHeight;
	_canvas = document.getElementById("canvas");

	if (_canvas.width !== _width || _canvas.height !== _height)	{
		_canvas.width = _width;
		_canvas.height = _height;

		_graphics.fillStyle = colourBackground;
		_graphics.fillRect(0, 0, _width, _height);
	}

	_graphics = _canvas.getContext("2d");

	_graphics.fillStyle = colourBackground;
	_graphics.fillRect(0, 0, _width, _height);

	var barW = Math.round(_width / 4);
	var barH = Math.max(Math.round(_height / 40), 4);
	var barX = Math.round((_width - barW) / 2);
	var barY = Math.round((_height - barH) / 1.5);

	_graphics.fillStyle = colourLoadingBack;
	_graphics.fillRect(barX, barY, barW, barH);

	var fillW = Math.round((barW / _total) * _current);

	if (loading_bar_smoother < fillW) {
		loading_bar_smoother += 1;
	}

	if (_current !== 0) {
		_graphics.fillStyle = colourLoadingFront;
		_graphics.fillRect(barX, barY, loading_bar_smoother, barH);
	}
	
	_graphics.drawImage(loadingBarImage,_width/2+loadingBarImage.x_offset,_height/2.5+loadingBarImage.y_offset);
}