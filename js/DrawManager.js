/**
 * Responsible for managing the location of various items in the canvas, and drawing
 * them when appropriate. The MouseHandler talks to the DrawManager when it needs
 * to figure out if it's clicked a Citizen.
 */

function DrawManager() {
    this.citizenArray = [];

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

    this.determinesCitizenIsClicked = determinesCitizenIsClicked;
    function determinesCitizenIsClicked(mouseX, mouseY) {
        // Iterate through the citizen array, and determine if the
        // mouse has clicked within the boundaries of a citizen.

        for (var i = 0; i < this.citizenArray.length; i++) {
            var citizen = this.citizenArray[i];

            var leftBound = citizen.x;
            var rightBound = citizen.x + citizen.w;
            var upperBound = citizen.y;
            var lowerBound = citizen.y + citizen.h;

            if (mouseX > leftBound &&
                mouseX <= rightBound &&
                mouseY > upperBound &&
                mouseY <= lowerBound) {
                    return true;
            }
        }

        return false;
    }

    this.shootCitizen = shootCitizen;
    function shootCitizen() {
        
    }
}


