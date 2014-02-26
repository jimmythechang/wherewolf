/**
 * A generic scene meant to display an image or information.
 * Only transitions to one other scene. 
 */

function Scene(text) {
    // The scene to show after this one.
    this.nextScene = null;
    this.drawManager = window.globalManager.drawManager;

    this.show = function() {
        var ctx = window.globalManager.ctx;
        ctx.font = '24pt Arial';
        ctx.fillStyle = "#000000";
        ctx.fillText(text, 200, 200);
    };

    this.setNextScene = function(scene) {
        this.nextScene = scene;
    };

    this.mouseMove = function() {
        
    }

    this.click = function() {
        this.showNextScene();
    };

    this.showNextScene = function() {
        this.drawManager.loadScene(this.nextScene);
    }
    
    // Retrieves an image from the DrawManager's loaded imgArray.
    this.getImage = function(name) {
        return this.drawManager.imgArray[name];
    }
}