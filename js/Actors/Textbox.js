/**
 * The textbox that appears when hovering over a Citizen. Is a singleton.
 */

function Textbox() {
    this.x = 0;
    this.y = 500;

    this.text = null;
    this.portrait = null;

    this.draw = function() {
        var ctx = window.globalManager.ctx;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, 800, 100);
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(this.x, this.y, 800, 100);

        ctx.font = '24pt Arial';
        ctx.fillStyle = "#000000";
        ctx.fillText(this.text, this.x + 10, this.y + 40);
    };

    this.setCitizen = function(citizen) {
        this.text = citizen.statement;
    };
}


