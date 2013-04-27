/**
 * A textbox that appears when hovering over a Citizen.
 */

function Textbox(citizen) {
    // Retain a reference to the Citizen to which this
    // textbox belongs.
    this.citizen = citizen;

    this.x = citizen.x + 50;
    this.y = citizen.y - 50;

    this.draw = draw;
    function draw() {
        var ctx = window.globalManager.ctx;
        ctx.strokeRect(this.x, this.y, 500, 100);
    }
}


