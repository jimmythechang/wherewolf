// The data for a Puzzle; is represented by a city on the Map.

function Puzzle(town, x, y, statementArr) {

    var clickable = new Clickable(x, y);
    var puzzle = this.extend(clickable);

    puzzle.town = town;
    puzzle.radius = 20;

    puzzle.boundingWidth = puzzle.radius * 2;
    puzzle.boundingHeight = puzzle.radius * 2;

    puzzle.statements = statementArr;
    puzzle.completed = false;

    puzzle.draw = function() {
        var ctx = window.globalManager.ctx;
        ctx.beginPath();
        ctx.arc(puzzle.x + puzzle.radius, puzzle.y + puzzle.radius, puzzle.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'blue';
        ctx.fill();
    }

    return puzzle;
}
