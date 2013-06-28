/* 
 * Randomly selects a puzzle, but also keeps track of solved puzzles in that
 * session.
 */

function Randomizer() {
    this.solvedPuzzles = [];
    this.puzzleCount = puzzleArray.length;

    /**
     * Gets a random puzzle.
     * TODO: since there's a map screen, we won't need to
     * retrieve a random puzzle any longer. But we'll still need shuffleStatements().
     */
    this.getPuzzle = function() {
        var puzzleNumber = Math.round(Math.random() * this.puzzleCount - 1);
        if (puzzleNumber < 0) {
            puzzleNumber = 0;
        }

        var puzzle = puzzleArray[puzzleNumber];
        return this.shuffleStatements(puzzle.statements);
    };

    this.shuffleStatements = function(puzzle) {
      var i = puzzle.length;
      if ( i == 0 ) return false;
      while ( --i ) {
         var j = Math.floor( Math.random() * ( i + 1 ) );
         var tempi = puzzle[i];
         var tempj = puzzle[j];
         puzzle[i] = tempj;
         puzzle[j] = tempi;
      }

      return puzzle;
    };
    
}


