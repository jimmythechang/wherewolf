/**
 * A class for handling mouse input. Takes a reference to a GlobalManager.
 */

function MouseHandler() {
    this.x = 0;
    this.y = 0;

    this.canvasXOffset = 8;
    this.canvasYOffset = 8;

    this.init = function() {
        this._trackMousePosition();
        this._bindClick();
    };

    // Defers mouse move events to the particular scene in which
    // they take place.

    this._trackMousePosition = function() {
        var thisMouseHandler = this;

        var drawManager = window.globalManager.drawManager;

        $('#canvas').mousemove(function (e) {
           // For debugging.

           thisMouseHandler.x = e.pageX - thisMouseHandler.canvasXOffset;
           thisMouseHandler.y = e.pageY - thisMouseHandler.canvasYOffset;
           thisMouseHandler._displayMousePosition();

           var scene = drawManager.currentScene;

           drawManager.currentScene.mouseMove(thisMouseHandler.x, thisMouseHandler.y);
        });
    };

    this._displayMousePosition = function() {
        var xPos = "x: " + this.x;
        var yPos = "y: " + this.y;

        $('#positionDebug').text(xPos + " " + yPos);
    };

    /**
     * Defers click events to the particular scene in which
     * they take place.
     */

    this._bindClick = function() {
        $('#canvas').click(function() {
            var drawManager = window.globalManager.drawManager;
            drawManager.currentScene.click();
        });

        // Prevent highlighting from occurring when the canvas is clicked. 
        $('#canvas')[0].onselectstart = function() {
           return false;
        };
    };

}

