/**
 * Scene for when the player is actually solving a puzzle.
 * Parasitically inherits from Scene.
 */

function ParlorScene(drawManager, puzzle) {

    var scene = new Scene(drawManager);
    var parlorScene = this.extend(scene);

    parlorScene.textbox = new Textbox();
    parlorScene.puzzle = puzzle;

    // Keeps track of the Citizens present.

    parlorScene.citizenArray = [];

    // And the Citizen the player is hovering over.

    parlorScene.targetedCitizen = null;

    parlorScene.init = function() {
        var citizen = new Citizen(400, 80, '/wherewolf/img/chap.png', parlorScene.puzzle.statements[0], parlorScene.textbox);
        parlorScene.registerCitizen(citizen);

        var citizen2 = new Citizen(200, 100, '/wherewolf/img/chap2.png', parlorScene.puzzle.statements[1], parlorScene.textbox);
        parlorScene.registerCitizen(citizen2);

        var citizen3 = new Citizen(100, 100, '/wherewolf/img/lady.png', parlorScene.puzzle.statements[2], parlorScene.textbox);
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
            parlorScene.textbox.draw();
        }
    };

   parlorScene.determineCitizenIsInRange = function(mouseX, mouseY) {
       
        // Iterate through the citizen array, and determine if the
        // mouse is hovering within the boundaries of a citizen.

        for (var i = 0; i < parlorScene.citizenArray.length; i++) {
           var citizen = parlorScene.citizenArray[i];

           if (citizen.isWithinRange(mouseX, mouseY) && citizen.solidPixelTargeted(mouseX, mouseY, parlorScene)) {
                parlorScene.targetedCitizen = citizen;
                parlorScene.textbox.setCitizen(parlorScene.targetedCitizen);
                parlorScene.targetedCitizen.talk();
                break;
           }
           else if (parlorScene.targetedCitizen != null) {
               parlorScene.targetedCitizen.shutUp();
               parlorScene.targetedCitizen = null;
           }
        }
    };

    parlorScene.mouseMove = function(mouseX, mouseY) {
        parlorScene.determineCitizenIsInRange(mouseX, mouseY);
    }

    parlorScene.click = function() {
        if (parlorScene.targetedCitizen != null) {
            var mapScene = window.globalManager.mapScene;

            if (parlorScene.targetedCitizen.isWherewolf) {
                $('#clickDebug').text('Wherewolf found!');

                // TODO: Animate the death of the Wherewolf...


                // ...and transition back to the MapScene.

                var remainingPuzzles = mapScene.removePuzzle(parlorScene.puzzle.town);

                if (remainingPuzzles > 0) {
                    parlorScene.setNextScene(mapScene);
                }
                
            }
            else {
                $('#clickDebug').text('You shot a citizen in the face');

                var text = "You shot a citizen in the face.";
                var scene = new Scene(window.globalManager.drawManager, text);
                scene.setNextScene(mapScene);
                parlorScene.setNextScene(scene);
            }

            parlorScene.showNextScene();
        }
        else {
            $('#clickDebug').text("Nothing but air!");
        }
    };

    return parlorScene;
}


