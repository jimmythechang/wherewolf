/**
 * A class for handling mouse input. Takes a reference to a GlobalManager.
 */

function MouseHandler() {
    this.x = 0;
    this.y = 0;

    this.canvasXOffset = 8;
    this.canvasYOffset = 8;

    this.init = init;
    function init() {
        this._trackMousePosition();
        this._bindClick();
    }

    this._trackMousePosition = _trackMousePosition;
    function _trackMousePosition() {
        var thisMouseHandler = this;

        var drawManager = window.globalManager.drawManager;

        $('#canvas').mousemove(function (e) {
           // For debugging.
           thisMouseHandler.x = e.pageX - thisMouseHandler.canvasXOffset;
           thisMouseHandler.y = e.pageY - thisMouseHandler.canvasYOffset;
           thisMouseHandler._displayMousePosition();

           if (drawManager.determinesCitizenIsInRange(thisMouseHandler.x, thisMouseHandler.y)) {
               window.globalManager.textbox.setCitizen(drawManager.targetedCitizen);
               drawManager.targetedCitizen.talk();
           }
           else {
               if (drawManager.targetedCitizen != null) {
                   drawManager.targetedCitizen.shutUp();
               }
           }
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
        var thisMouseHandler = this;

        $('#canvas').click(function(e) {
            var drawManager = window.globalManager.drawManager;
            if (drawManager.determinesCitizenIsInRange(thisMouseHandler.x, thisMouseHandler.y)) {
                $('#clickDebug').text("Citizen clicked!");
            }
            else {
                $('#clickDebug').text("Nothing but air!");
            }
        })
    }

}

