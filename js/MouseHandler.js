/**
 * A class for handling mouse input. Takes a reference to a GlobalManager.
 */

function MouseHandler() {

    this.x = 0;
    this.y = 0;

    this.init = init;
    function init() {
        this._trackMousePosition();
        this._bindClick();
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

        $('#positionDebug').text(xPos + " " + yPos);
    }

    /**
     * Determine if the player has clicked on a Citizen. Makes a call
     * to the DrawManager for that information.
     */

    this._bindClick = _bindClick;
    function _bindClick() {
        $('#canvas').click(function(e) {
            var drawManager = window.globalManager.drawManager;
            if (drawManager.determinesCitizenIsClicked(e.pageX, e.pageY)) {
                $('#clickDebug').text("Citizen clicked!");
            }
            else {
                $('#clickDebug').text("Nothing but air!");
            }
        })
    }

}

