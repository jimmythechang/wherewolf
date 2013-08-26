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

    mapScene.mouseMove = function(mouseX, mouseY) {
        mapScene.determineCityIsInRange(mouseX, mouseY);
    }

    mapScene.click = function() {
        if (mapScene.targetedPuzzle != null) {
           $('#clickDebug').text(mapScene.targetedPuzzle.town + " clicked!");

           var parlorScene = new ParlorScene(this.drawManager, mapScene.targetedPuzzle);
           parlorScene.init();
           this.drawManager.loadScene(parlorScene);
        }
        else {
            $('#clickDebug').text("Nothing but air!");
        }
    }

    mapScene.determineCityIsInRange = function(mouseX, mouseY) {
        // Iterate through the puzzle array, and determine if the
        // mouse is hovering within the boundaries of a city.

        for (var i = 0; i < puzzleArray.length; i++) {
           var puzzle = puzzleArray[i];

           if (puzzle.isWithinRange(mouseX, mouseY)) {
                mapScene.targetedPuzzle = puzzle;
                break;
           }
           else if (mapScene.targetedPuzzle != null) {
               mapScene.targetedPuzzle = null;
           }
        }
    }

    return mapScene;
}




