// A helper function for prototypically
// extending from other objects.

Object.prototype.extend = function(o) {
    function F() {}
    F.prototype = o;
    return new F();
}


var requireArr = ["jquery", "Managers/GlobalManager", "Randomizer", "Managers/MouseHandler", 
                  "Managers/DrawManager", "Actors/Clickable", "Actors/Puzzle", "Actors/Citizen", "Actors/Textbox", "Scenes/Scene",
                  "Scenes/ParlorScene", "Scenes/MapScene", "Scenes/LoadingScene", "Puzzles", "Images"];

require(requireArr, function($) {
    $(document).ready( function() {

        var gm = new GlobalManager();
        gm.init();
        gm.setUpScenes();
        gm.drawManager.loadScene(gm.loadingScreen);

        window.setInterval(function() { gm.gameLoop(); }, 1000 / 30);
        
    });

});
