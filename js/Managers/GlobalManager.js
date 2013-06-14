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
    }


    this.gameLoop = function() {
        this.drawManager.draw();
    }
}
