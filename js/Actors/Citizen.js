/**
 * A class for handling the display and logic for a Citizen.
 */


function Citizen(x, y, imageSrc, puzzleStatement) {

    var clickable = new Clickable(x, y);
    var citizen = this.extend(clickable);

    // Contains the pixel data in the image used
    // for the citizen.

    citizen.imageData = null;
    citizen.image = new Image();
    citizen.imageLoaded = false;
    citizen.image.onload = function() {
        citizen.imageLoaded = true;
        citizen.imageData = getImageData(this);

        citizen.boundingWidth = citizen.image.width;
        citizen.boundingHeight = citizen.image.height;
    }
    citizen.image.src = imageSrc;

    citizen.statement = puzzleStatement.statement;
    citizen.isWherewolf = puzzleStatement.isWherewolf;

    // Indicates if the Citizen has a Textbox open.
    citizen.isTalking = false;


    citizen.draw = function() {
        if (citizen.imageLoaded) {
            window.globalManager.ctx.drawImage(citizen.image, citizen.x, citizen.y);
        }
        else {
            return;
        }

        
        if (citizen.isTalking) {
            window.globalManager.textbox.draw();
        }
        
    };

    citizen.talk = function() {
        if (!citizen.isTalking) {
            citizen.isTalking = true;
        }
    };

    citizen.shutUp = function() {
        citizen.isTalking = false;
    };

  /**
     * Determine if the player is hovering over/clicking a solid pixel.
     */

    citizen.solidPixelTargeted = function(mouseX, mouseY, parlorScene) {
        var imageWidth = citizen.image.width;
        var imageData = citizen.imageData;

        // Subtract the offset of where the Citizen's been placed
        // on the canvas.

        mouseX -= citizen.x;
        mouseY -= citizen.y;

        var alpha = imageData.data[(mouseY*imageWidth+mouseX)*4+3];
        $('#alphaDebug').text("Pixel alpha: " + alpha);

        return (alpha > 0);
    };

    return citizen;

}

// A helper function that returns the pixel data for a given image.

function getImageData(image) {
    var personalCanvas = document.createElement("canvas");
    personalCanvas.width = image.width;
    personalCanvas.height = image.height;

    var ctx = personalCanvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    var data = ctx.getImageData(0, 0 , image.width, image.height);

    return data;
}
