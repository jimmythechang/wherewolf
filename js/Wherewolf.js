require(["jquery", "GlobalHandler", "MouseHandler", "Citizen"], function($) {
    $(document).ready( function() {
        var globalHandler = new GlobalHandler();
        globalHandler.init();

        var mouseHandler = new MouseHandler();
        mouseHandler.init();

        var citizen = new Citizen(100, 200, '#FF1234');
        var citizen2 = new Citizen(300, 450, '#ABCD33');
        citizen.draw();
        citizen2.draw();
    });

});
