/**
 * A generic scene meant to display an image or information.
 * Only transitions to one other scene. 
 */

function Scene(drawManager, text) {
    // The scene to show after this one.
    this.nextScene = null;
    this.drawManager = drawManager;

    this.show = function() {
        var ctx = window.globalManager.ctx;
        ctx.font = '24pt Arial';
        ctx.fillStyle = "#000000";
        ctx.fillText(text, 200, 200);
    };

    this.setNextScene = function(scene) {
        this.nextScene = scene;
    };

    this.click = function() {
        this.drawManager.loadScene(this.nextScene);
    };
}