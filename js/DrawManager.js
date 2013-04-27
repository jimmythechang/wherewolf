/**
 * Responsible for managing the location of various items in the canvas, and drawing
 * them when appropriate. The MouseHandler talks to the DrawManager when it needs
 * to figure out if it's clicked a Citizen.
 */

function DrawManager() {
    this.citizenArray = [];
    this.targetedCitizen = null;

    this.draw = draw;
    function draw() {
        this.clearScreen();
        this.drawCitizens();
    }

    this.clearScreen = clearScreen;
    function clearScreen() {
        var ctx = window.globalManager.ctx;
        ctx.clearRect(0, 0, 800, 600);
    }


    this.registerCitizen = registerCitizen;
    function registerCitizen(citizen) {
        this.citizenArray.push(citizen);
    }

    this.drawCitizens = drawCitizens;
    function drawCitizens() {
        for (var i = 0; i < this.citizenArray.length; i++) {
            this.citizenArray[i].draw();
        }
    }

    this.determinesCitizenIsInRange = determinesCitizenIsInRange;
    function determinesCitizenIsInRange(mouseX, mouseY) {
        // Iterate through the citizen array, and determine if the
        // mouse has clicked within the boundaries of a citizen.

        for (var i = 0; i < this.citizenArray.length; i++) {
            var citizen = this.citizenArray[i];

            var leftBound = citizen.x;
            var rightBound = citizen.x + citizen.image.width;
            var upperBound = citizen.y;
            var lowerBound = citizen.y + citizen.image.height;

            if (mouseX > leftBound &&
                mouseX <= rightBound &&
                mouseY > upperBound &&
                mouseY <= lowerBound) {
                    this.targetedCitizen = citizen;
                    return true;
            }
        }

        return false;
    }

    this.shootCitizen = shootCitizen;
    function shootCitizen() {
        
    }
}


