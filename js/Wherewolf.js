var requireArr = ["jquery", "GlobalManager", "MouseHandler", "DrawManager", "Citizen", "Textbox"];

require(requireArr, function($) {
    $(document).ready( function() {
        var gm = new GlobalManager();
        gm.init();

        var citizen = new Citizen(400, 80, '/wherewolf/img/chap.png', "I am no werewolf");
        gm.drawManager.registerCitizen(citizen);

        var citizen2 = new Citizen(200, 100, '/wherewolf/img/chap2.png', "Trust not that man");
        gm.drawManager.registerCitizen(citizen2);

        window.setInterval(function() { gm.gameLoop(); }, 1000 / 30);
    });

});
