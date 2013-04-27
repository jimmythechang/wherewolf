/**
 * A textbox that appears when hovering over a Citizen.
 */

function Textbox(citizen) {
    // Retain a reference to the Citizen to which this
    // textbox belongs.
    this.citizen = citizen;
    this.text = citizen.statement;

    this.x = citizen.x + 50;
    this.y = citizen.y - 50;

    this.draw = draw;
    function draw() {
        var ctx = window.globalManager.ctx;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, 500, 100);
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(this.x, this.y, 500, 100);

        ctx.font = '24pt Arial';
        ctx.fillStyle = "#000000";
        ctx.fillText(this.text, this.x + 10, this.y + 40);
    }
}


