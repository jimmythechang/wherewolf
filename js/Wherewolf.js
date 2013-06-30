var requireArr = ["jquery", "Managers/GlobalManager", "Randomizer", "Managers/MouseHandler", 
                  "Managers/DrawManager", "Actors/Clickable", "Actors/Citizen", "Actors/Textbox", "Actors/Puzzle", "Scenes/Scene",
                  "Scenes/ParlorScene", "Scenes/MapScene", "Puzzles"];

require(requireArr, function($) {
    $(document).ready( function() {

        // A helper function to prototypically
        // extend from other objects.
        
        Object.prototype.extend = function(o) {
            function F() {}
            F.prototype = o;
            return new F();
        }

        var gm = new GlobalManager();
        gm.init();
        gm.setUpScenes();
        gm.drawManager.loadScene(gm.titleScreen);

        window.setInterval(function() { gm.gameLoop(); }, 1000 / 30);
        
    });

});
