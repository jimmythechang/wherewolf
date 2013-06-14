var requireArr = ["jquery", "Managers/GlobalManager", "Randomizer", "Managers/MouseHandler", 
                  "Managers/DrawManager", "Actors/Citizen", "Actors/Textbox", "Scenes/Scene",
                  "Scenes/ParlorScene", "Puzzles"];

require(requireArr, function($) {
    $(document).ready( function() {
        var gm = new GlobalManager();
        gm.init();
        gm.setUpScenes();
        gm.drawManager.loadScene(gm.titleScreen);

        /*
        var puzzle = gm.randomizer.getPuzzle();

        var citizen = new Citizen(400, 80, '/wherewolf/img/chap.png', puzzle[0]);
        gm.drawManager.registerCitizen(citizen);

        var citizen2 = new Citizen(200, 100, '/wherewolf/img/chap2.png', puzzle[1]);
        gm.drawManager.registerCitizen(citizen2);

        var citizen3 = new Citizen(100, 100, '/wherewolf/img/lady.png', puzzle[2]);
        gm.drawManager.registerCitizen(citizen3);
        */

        window.setInterval(function() { gm.gameLoop(); }, 1000 / 30);
        
    });

});
