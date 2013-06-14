/**
 * Scene for when the player is actually solving a puzzle.
 * Prototypically inherits from Scene.
 */

function ParlorScene(drawManager) {

    this.prototype = new Scene(drawManager, null);
    this.prototype.constructor = ParlorScene;

    // Keeps track of the Citizens present.
    this.citizenArray = [];

    // And the Citizen the player is hovering over.
    this.targetedCitizen = null;

    this.init = function() {
        var puzzle = window.globalManager.randomizer.getPuzzle();

        var citizen = new Citizen(400, 80, '/wherewolf/img/chap.png', puzzle[0]);
        this.registerCitizen(citizen);

        var citizen2 = new Citizen(200, 100, '/wherewolf/img/chap2.png', puzzle[1]);
        this.registerCitizen(citizen2);

        var citizen3 = new Citizen(100, 100, '/wherewolf/img/lady.png', puzzle[2]);
        this.registerCitizen(citizen3);
    }

    // Add a new Citizen to the Citizen Array.
    this.registerCitizen = function(citizen) {
        this.citizenArray.push(citizen);
    };

    this.show = function() {
        this.drawCitizens();
    }

    // Draw all the registered Citizens.
    this.drawCitizens = function() {
        var someoneIsTalking = false;
        for (var i = 0; i < this.citizenArray.length; i++) {
            this.citizenArray[i].draw();
            if (this.citizenArray[i].isTalking) {
                someoneIsTalking = true;
            }
        }

        if (someoneIsTalking) {
            window.globalManager.textbox.draw();
        }
    }

   this.determinesCitizenIsInRange = function(mouseX, mouseY) {
        // Iterate through the citizen array, and determine if the
        // mouse has clicked within the boundaries of a citizen.

        for (var i = 0; i < this.citizenArray.length; i++) {
            var citizen = this.citizenArray[i];

            var leftBound = citizen.x;
            var rightBound = citizen.x + citizen.image.width;
            var upperBound = citizen.y;
            var lowerBound = citizen.y + citizen.image.height;

            if (mouseX > leftBound &&
                mouseX <= rightBound &&
                mouseY > upperBound &&
                mouseY <= lowerBound) {
                    return this.solidPixelTargeted(mouseX, mouseY, citizen);
                    //this.targetedCitizen = citizen;
                    //return true;
            }
        }

        return false;
    };

    /**
     * Determine if the player is hovering over/clicking a solid pixel.
     */


    this.solidPixelTargeted = function(mouseX, mouseY, citizen) {
        var imageWidth = citizen.image.width;
        var imageData = citizen.imageData;

        // Subtract the offset of where the Citizen's been placed
        // on the canvas.
        mouseX -= citizen.x;
        mouseY -= citizen.y;

        var alpha = imageData.data[(mouseY*imageWidth+mouseX)*4+3];
        $('#alphaDebug').text("Pixel alpha: " + alpha);

        if (alpha > 0) {
            this.targetedCitizen = citizen;
            return true;
        }

        return false;
    };

    this.click = function() {
        if (this.determinesCitizenIsInRange(window.globalManager.mouseHandler.x, window.globalManager.mouseHandler.y)) {
            if (this.targetedCitizen.isWherewolf) {
                $('#clickDebug').text('Wherewolf found!');
            }
            else {
                $('#clickDebug').text('You shot a citizen in the face');
            }
        }
        else {
            $('#clickDebug').text("Nothing but air!");
        }
    }
    
}


