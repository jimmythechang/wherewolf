/**
 * A class for handling the display and logic for a Citizen.
 */

function Citizen(x, y, color, context) {
    
    // We'll start with colored rectangles for now.
    this.x = x;
    this.y = y;
    this.w = 150;
    this.h = 75;
    this.color = color;

    this.ctx = context;

    this.draw = draw;
    function draw() {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    
}