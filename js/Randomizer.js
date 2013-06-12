/* 
 * Randomly selects a puzzle, but also keeps track of solved puzzles in that
 * session.
 */

function Randomizer() {
    this.solvedPuzzles = [];
    this.puzzleCount = puzzleArray.length;

    this.getPuzzle = getPuzzle;
    function getPuzzle() {
        var puzzleNumber = Math.round(Math.random() * this.puzzleCount) - 1;
        return this.shuffleStatements(puzzleArray[puzzleNumber]);
    }

    this.shuffleStatements = shuffleStatements;
    function shuffleStatements(puzzle) {
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
    }
    
}


