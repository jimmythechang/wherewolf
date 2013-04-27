var requireArr = ["jquery", "GlobalManager", "MouseHandler", "DrawManager", "Textbox", "Citizen"];

require(requireArr, function($) {
    $(document).ready( function() {
        var gm = new GlobalManager();
        gm.init();

        var citizen = new Citizen(100, 200, '#FF1234', gm.ctx);
        var citizen2 = new Citizen(300, 450, '#ABCD33', gm.ctx);

        gm.drawManager.registerCitizen(citizen);
        gm.drawManager.registerCitizen(citizen2);

        window.setInterval(function() { gm.gameLoop(); }, 1000 / 30);
    });

});
