/**
 * Handles the various screens, and keeps track of which
 * state we're in. 
 */

function SceneManager() {

    this.stateArray = ["title", "explanation", "map", "parlor", "shotWherewolf", "shotInnocent", "outOfTime"];

    this.showTitleScreen = function() {
        var ctx = window.globalManager.ctx;
        ctx.font = '24pt Arial';
        ctx.fillStyle = "#000000";
        ctx.fillText("WHEREWOLF", 200, 300);

        ctx.fillText("Click to Continue");
    }

}
