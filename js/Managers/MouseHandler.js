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

    this._trackMousePosition = function() {
        var thisMouseHandler = this;

        var drawManager = window.globalManager.drawManager;

        $('#canvas').mousemove(function (e) {
           // For debugging.

           
           thisMouseHandler.x = e.pageX - thisMouseHandler.canvasXOffset;
           thisMouseHandler.y = e.pageY - thisMouseHandler.canvasYOffset;
           thisMouseHandler._displayMousePosition();

           var scene = drawManager.currentScene;
           if (scene instanceof ParlorScene) {
               var parlorScene = scene;

               if (parlorScene.determinesCitizenIsInRange(thisMouseHandler.x, thisMouseHandler.y)) {
                   window.globalManager.textbox.setCitizen(parlorScene.targetedCitizen);
                   parlorScene.targetedCitizen.talk();
               }
               else if (parlorScene.targetedCitizen != null) {
                    drawManager.targetedCitizen.shutUp();
                   }
           }
           

           /*
           if (drawManager.determinesCitizenIsInRange(thisMouseHandler.x, thisMouseHandler.y)) {
               window.globalManager.textbox.setCitizen(drawManager.targetedCitizen);
               drawManager.targetedCitizen.talk();
           }
           else {
               if (drawManager.targetedCitizen != null) {
                   drawManager.targetedCitizen.shutUp();
               }
           }
            */
        });
    };

    this._displayMousePosition = function() {
        var xPos = "x: " + this.x;
        var yPos = "y: " + this.y;

        $('#positionDebug').text(xPos + " " + yPos);
    };

    /**
     * Determine if the player has clicked on a Citizen. Makes a call
     * to the DrawManager for that information.
     */

    this._bindClick = function() {
        var thisMouseHandler = this;

        // TODO: check the scene, and handle things accordingly.

        $('#canvas').click(function(e) {
            var drawManager = window.globalManager.drawManager;
            drawManager.currentScene.click();

            /*
            if (drawManager.determinesCitizenIsInRange(thisMouseHandler.x, thisMouseHandler.y)) {
                if (drawManager.targetedCitizen.isWherewolf) {
                    $('#clickDebug').text('Wherewolf found!');
                }
                else {
                    $('#clickDebug').text('You shot a citizen in the face');
                }
            }
            else {
                $('#clickDebug').text("Nothing but air!");
            }
            */
        })
    };

}

