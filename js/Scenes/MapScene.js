/* 
 * The map for choosing a puzzle. Keeps track of which puzzles have been solved.
 * Parasitically inherits from Scene.
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

    mapScene.click = function() {
        return false;
    }

    mapScene.determineCityInRange = function() {
        
    }

    return mapScene;
}




