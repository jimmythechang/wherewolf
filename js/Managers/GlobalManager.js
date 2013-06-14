/**
 * All the globals, defined in one place. Initializes the necessary handlers 
 * and managers as well.
 */

function GlobalManager() {
    this.init = function() {
        window.globalManager = this;

        this.ctx = $('#canvas')[0].getContext('2d');
        this.drawManager = new DrawManager();

        this.mouseHandler = new MouseHandler(this);
        this.mouseHandler.init();

        this.textbox = new Textbox();

        this.randomizer = new Randomizer();
    };

    this.setUpScenes = function() {
        this.titleScreen = new Scene(this.drawManager, "WHEREWOLF - Click to Continue");
        this.explanationScreen1 = new Scene(this.drawManager, "There is an EPIDEMIC");
        this.explanationScreen2 = new Scene(this.drawManager, "And the only way to cure it is BULLET");

        this.parlorScene = new ParlorScene(this.drawManager);

        this.titleScreen.setNextScene(this.explanationScreen1);
        this.explanationScreen1.setNextScene(this.explanationScreen2);
        this.explanationScreen2.setNextScene(this.parlorScene);
    };


    this.gameLoop = function() {
        this.drawManager.draw();
    };
}
