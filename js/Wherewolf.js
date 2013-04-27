var requireArr = ["jquery", "GlobalManager", "MouseHandler", "DrawManager", "Textbox", "Citizen"];

require(requireArr, function($) {
    $(document).ready( function() {
        var gm = new GlobalManager();
        gm.init();

        var citizen = new Citizen(100, 200, '/wherewolf/img/chap.png', "I am no warewolf");

        gm.drawManager.registerCitizen(citizen);

        window.setInterval(function() { gm.gameLoop(); }, 1000 / 30);
    });

});
