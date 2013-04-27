/**
 * A class for handling the display and logic for a Citizen.
 */

require(["Textbox"]);

function Citizen(x, y, color, context) {

    // We'll start with colored rectangles for now.
    this.x = x;
    this.y = y;
    this.w = 150;
    this.h = 75;
    this.color = color;

    // Indicates if the Citizen has a Textbox open.
    this.isTalking = false;
    this.textbox = new Textbox(this);

    this.ctx = context;

    this.draw = draw;
    function draw() {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

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
