// The data for a Puzzle; is represented by a city on the Map.

function Puzzle(town, x, y, statementArr) {
    this.town = town;
    this.x = x;
    this.y = y;

    this.statements = statementArr;
    this.completed = false;

    this.draw = function() {
        var ctx = window.globalManager.ctx;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'blue';
        ctx.fill();
    }
}
