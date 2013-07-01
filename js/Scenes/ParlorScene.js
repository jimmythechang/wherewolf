/**
 * Scene for when the player is actually solving a puzzle.
 * Parasitically inherits from Scene.
 */

function ParlorScene(drawManager) {

    var scene = new Scene(drawManager);
    var parlorScene = this.extend(scene);

    // Keeps track of the Citizens present.

    parlorScene.citizenArray = [];

    // And the Citizen the player is hovering over.

    parlorScene.targetedCitizen = null;

    parlorScene.init = function() {
        var puzzle = window.globalManager.randomizer.getPuzzle();

        var citizen = new Citizen(400, 80, '/wherewolf/img/chap.png', puzzle[0]);
        parlorScene.registerCitizen(citizen);

        var citizen2 = new Citizen(200, 100, '/wherewolf/img/chap2.png', puzzle[1]);
        parlorScene.registerCitizen(citizen2);

        var citizen3 = new Citizen(100, 100, '/wherewolf/img/lady.png', puzzle[2]);
        parlorScene.registerCitizen(citizen3);

        
    };

    // Add a new Citizen to the Citizen Array.
    
    parlorScene.registerCitizen = function(citizen) {
        parlorScene.citizenArray.push(citizen);
    };

    parlorScene.show = function() {
        parlorScene.drawCitizens();
    };

    // Draw all the registered Citizens.

    parlorScene.drawCitizens = function() {
        var someoneIsTalking = false;
        for (var i = 0; i < parlorScene.citizenArray.length; i++) {
            parlorScene.citizenArray[i].draw();
            if (parlorScene.citizenArray[i].isTalking) {
                someoneIsTalking = true;
            }
        }

        if (someoneIsTalking) {
            window.globalManager.textbox.draw();
        }
    };

   parlorScene.determineCitizenIsInRange = function(mouseX, mouseY) {
       
        // Iterate through the citizen array, and determine if the
        // mouse has clicked within the boundaries of a citizen.

        for (var i = 0; i < parlorScene.citizenArray.length; i++) {
           var citizen = parlorScene.citizenArray[i];

           if (citizen.isWithinRange(mouseX, mouseY) && citizen.solidPixelTargeted(mouseX, mouseY, parlorScene)) {
                parlorScene.targetedCitizen = citizen;
                window.globalManager.textbox.setCitizen(parlorScene.targetedCitizen);
                parlorScene.targetedCitizen.talk();
                return true;
           }
           else if (parlorScene.targetedCitizen != null) {
               parlorScene.targetedCitizen.shutUp();
               parlorScene.targetedCitizen = null;
           }
        }

        return false;
    };

    parlorScene.click = function() {
        if (parlorScene.targetedCitizen != null) {
            if (parlorScene.targetedCitizen.isWherewolf) {
                $('#clickDebug').text('Wherewolf found!');
            }
            else {
                $('#clickDebug').text('You shot a citizen in the face');
            }
        }
        else {
            $('#clickDebug').text("Nothing but air!");
        }
    };

    return parlorScene;
}


