/**
 * A class for handling the display and logic for a Citizen.
 * 
 * x - x-position of Citizen
 * y - y-position of Citizen
 * 
 * TODO: do not pass in paths, but loaded Image objects.
 * 
 * idleImg - idle Image
 * shockedImg - shocked Image
 * wherewolfImg - Wherewolf Image
 * 
 * deadImg - dead Image
 * deadWherewolfImg - dead Wherewolf Image
 * 
 * puzzleStatement - a JSON object containing the Citizen's statement and Wherewolf-ness (whether (s)he is or is not the Wherewolf)
 * textbox - a reference to the global Textbox used to display all statements 
 * 
 */


function Citizen(x, y, idleImg, shockedImg, wherewolfImg, deadImg, deadWherewolfImg, puzzleStatement, textbox) {

    var clickable = new Clickable(x, y);
    var citizen = this.extend(clickable);

    citizen.textbox = textbox;

    // Contains the pixel data in the image used
    // for the citizen.

    citizen.idleImgData = null;
    citizen.idleImg = idleImg;
    
    citizen.idleImgData = getImageData(citizen.idleImg);
    citizen.boundingWidth = citizen.idleImg.width;
    citizen.boundingHeight = citizen.idleImg.height;
    
    // citizen.imageLoaded = false;
    
    /*
    citizen.image.onload = function() {
        citizen.imageLoaded = true;
        citizen.idleImgData = getImageData(this);

        citizen.boundingWidth = citizen.image.width;
        citizen.boundingHeight = citizen.image.height;
    }
    citizen.image.src = imageSrc;
    */

    citizen.statement = puzzleStatement.statement;
    citizen.isWherewolf = puzzleStatement.isWherewolf;

    // Indicates if the Citizen has a Textbox open.
    citizen.isTalking = false;

    citizen.draw = function() {
        window.globalManager.ctx.drawImage(citizen.idleImg, citizen.x, citizen.y);
        
        if (citizen.isTalking) {
            citizen.textbox.draw();
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

    citizen.solidPixelTargeted = function(mouseX, mouseY) {
        var imageWidth = citizen.boundingWidth;
        var imageData = citizen.idleImgData;

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
