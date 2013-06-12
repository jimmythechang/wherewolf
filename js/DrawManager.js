/**
 * Responsible for managing the location of various items in the canvas, and drawing
 * them when appropriate. The MouseHandler talks to the DrawManager when it needs
 * to figure out if it's clicked a Citizen.
 */

function DrawManager() {
    this.citizenArray = [];
    this.targetedCitizen = null;

    this.draw = draw;
    function draw() {
        this.clearScreen();
        this.drawCitizens();
    }

    this.clearScreen = clearScreen;
    function clearScreen() {
        var ctx = window.globalManager.ctx;
        ctx.clearRect(0, 0, 800, 600);
    }


    this.registerCitizen = registerCitizen;
    function registerCitizen(citizen) {
        this.citizenArray.push(citizen);
    }

    this.drawCitizens = drawCitizens;
    function drawCitizens() {
        for (var i = 0; i < this.citizenArray.length; i++) {
            this.citizenArray[i].draw();
        }

        
        for (i = 0; i < this.citizenArray.length; i++) {
            if (this.citizenArray[i].isTalking) {
                window.globalManager.textbox.draw();
            }
        }
        
    }

    this.determinesCitizenIsInRange = determinesCitizenIsInRange;
    function determinesCitizenIsInRange(mouseX, mouseY) {
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
    }

    /**
     * Determine if the player is hovering over/clicking a solid pixel.
     */
    this.solidPixelTargeted = solidPixelTargeted;
    function solidPixelTargeted(mouseX, mouseY, citizen) {
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
    }

    this.shootCitizen = shootCitizen;
    function shootCitizen() {
        
    }
}


