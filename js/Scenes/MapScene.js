/* 
 * The map for choosing a puzzle. Keeps track of which puzzles have been solved.
 */

function MapScene(drawManager) {
    var scene = new Scene(drawManager, null);
    var mapScene = this.extend(scene);

    mapScene.solvedPuzzles = new Array();
    mapScene.show = function() {
        for (var i = 0; i < puzzleArray.length; i++) {
            puzzleArray[i].draw();
        }
    };

    mapScene.determineCityInRange = function() {
        
    }

    return mapScene;
}




