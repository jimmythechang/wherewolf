/**
 * A class for handling mouse input.
 */

function MouseHandler() {

    this.x = 0;
    this.y = 0;

    this.init = init;
    function init() {
        this._trackMousePosition();
    }

    this._trackMousePosition = _trackMousePosition;
    function _trackMousePosition() {
        var mouseHandler = this;

        $('#canvas').mousemove(function (e) {
           mouseHandler.x = e.pageX;
           mouseHandler.y = e.pageY;

           mouseHandler._displayMousePosition();
        });
    }

    this._displayMousePosition = _displayMousePosition;
    function _displayMousePosition() {
        var xPos = "x: " + this.x;
        var yPos = "y: " + this.y;

        $('#debug').text(xPos + " " + yPos);
    }

    this._trackClick = _trackClick;
    function _trackClick() {
        
    }

}

