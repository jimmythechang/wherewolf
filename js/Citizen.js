/**
 * A class for handling the display and logic for a Citizen.
 */

require(["Textbox"]);

function Citizen(x, y, imageSrc, statement) {

    this.x = x;
    this.y = y;

    this.image = new Image();
    this.imageLoaded = false;

    var citizen = this;
    this.image.onload = function() {
        citizen.imageLoaded = true;
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

        if (this.isTalking) {
            this.textbox.draw();
        }
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
