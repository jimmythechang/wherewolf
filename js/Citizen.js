/**
 * A class for handling the display and logic for a Citizen.
 */

require(["Textbox"]);

function Citizen(x, y, imageSrc, statement) {

    this.x = x;
    this.y = y;

    // Contains the pixel data in the image used
    // for the citizen.
    this.imageData = null;

    this.image = new Image();
    this.imageLoaded = false;
    var thisCitizen = this;
    this.image.onload = function() {
        thisCitizen.imageLoaded = true;
        thisCitizen.imageData = getImageData(this);
    }
    this.image.src = imageSrc;

    this.statement = statement;

    // Indicates if the Citizen has a Textbox open.
    this.isTalking = false;
    this.textbox = new Textbox(this);

    this.draw = draw;
    function draw() {
        if (this.imageLoaded) {
            window.globalManager.ctx.drawImage(this.image, this.x, this.y);
        }
        else {
            return;
        }

        /*
        if (this.isTalking) {
            this.textbox.draw();
        }
        */
    }

    this.talk = talk;
    function talk() {
        if (!this.isTalking) {
            this.isTalking = true;
        }
    }

    this.shutUp = shutUp;
    function shutUp() {
        this.isTalking = false;
    }

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
