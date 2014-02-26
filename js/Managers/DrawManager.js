/**
 * Responsible for managing the location of various items in the canvas, and drawing
 * them when appropriate. The MouseHandler talks to the DrawManager when it needs
 * to figure out if it's clicked a Citizen.
 */

function DrawManager() {
    this.currentScene = null;
    
    this.imgArray = new Array();

    this.draw = function() {
        this.clearScreen();
        this.currentScene.show();
    };

    this.clearScreen = function() {
        var ctx = window.globalManager.ctx;
        ctx.clearRect(0, 0, 800, 600);
    };

    this.loadScene = function(scene) {
        this.currentScene = scene;
    };
}


