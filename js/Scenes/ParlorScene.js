/**
 * Scene for when the player is actually solving a puzzle.
 * Parasitically inherits from Scene.
 */

function ParlorScene(puzzle) {

    var scene = new Scene(null);
    var parlorScene = this.extend(scene);

    parlorScene.textbox = new Textbox();
    parlorScene.puzzle = puzzle;
    
    parlorScene.clickEnabled = true;
    
    // The scene is updated 30 times a second, so
    // multiply seconds by 30 in order to determine your
    // desired maxTime.
    parlorScene.maxTime = 3600;
    
    // The currentTime ticks from the maxTime down to zero.
    parlorScene.currentTime = parlorScene.maxTime;
    
    // Background.
    parlorScene.background = parlorScene.getImage('background');
    
    // Sky.
    parlorScene.sky = new Sky(100, 48, 635, 260, parlorScene.maxTime);

    // Keeps track of the Citizens present.

    parlorScene.citizenArray = [];

    // And the Citizen the player is hovering over.

    parlorScene.targetedCitizen = null;

    parlorScene.init = function() {
        var citizen2 = new Citizen(266, 109, this.getImage('guest_b_idle'), this.getImage('guest_b_shocked'), this.getImage('guest_b_wherewolf'),
                                  266, 134, this.getImage('guest_b_dead'), this.getImage('guest_b_dead_wherewolf'), parlorScene.puzzle.statements[1], parlorScene.textbox);
        parlorScene.registerCitizen(citizen2);
        
        var citizen = new Citizen(50, 178, this.getImage('guest_a_idle'), this.getImage('guest_a_shocked'), this.getImage('guest_a_wherewolf'),
                                  50, 293, this.getImage('guest_a_dead'), this.getImage('guest_a_dead_wherewolf'), parlorScene.puzzle.statements[0], parlorScene.textbox);
        parlorScene.registerCitizen(citizen);
        
        var citizen3 = new Citizen(480, 133, this.getImage('guest_c_idle'), this.getImage('guest_c_shocked'), this.getImage('guest_c_wherewolf'),
                                  480, 126, this.getImage('guest_c_dead'), this.getImage('guest_c_dead_wherewolf'), parlorScene.puzzle.statements[2], parlorScene.textbox);
        parlorScene.registerCitizen(citizen3);
        
        var citizen4 = new Citizen(650, 105, this.getImage('guest_d_idle'), this.getImage('guest_d_shocked'), this.getImage('guest_d_wherewolf'),
                                  580, 158, this.getImage('guest_d_dead'), this.getImage('guest_d_dead_wherewolf'), parlorScene.puzzle.statements[3], parlorScene.textbox);
        parlorScene.registerCitizen(citizen4);
    };

    // Add a new Citizen to the Citizen Array.
    
    parlorScene.registerCitizen = function(citizen) {
        parlorScene.citizenArray.push(citizen);
    };

    parlorScene.show = function() {
        parlorScene.currentTime--;
        parlorScene.sky.setCurrentTime(parlorScene.currentTime);
        
        // Set down the sky first.
        parlorScene.sky.draw();
        
        // Draw the background.
        window.globalManager.ctx.drawImage(parlorScene.background, 0, 0);
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
        if (parlorScene.clickEnabled) {
            parlorScene.determineCitizenIsInRange(mouseX, mouseY);
        }
    };

    parlorScene.click = function() {
        if (parlorScene.clickEnabled && parlorScene.targetedCitizen != null) {
            var mapScene = window.globalManager.mapScene;
            parlorScene.reveal();

            //parlorScene.showNextScene();
        }
    };
    
    parlorScene.reveal = function() {
            
           for (var i = 0; i < parlorScene.citizenArray.length; i++) {
               var citizen = parlorScene.citizenArray[i];
            
               if (citizen == parlorScene.targetedCitizen) {
                   if (citizen.isWherewolf) {
                       citizen.shootDead(true);
                   }
                   else {
                       citizen.shootDead(false);
                   }
               }
               else {
                   if (citizen.isWherewolf) {
                       citizen.currentImg = citizen.wherewolfImg;
                   }
                   else {
                       citizen.currentImg = citizen.shockedImg;
                   }
               }
               
               parlorScene.clickEnabled = false;
           }
        
        /*
           if (parlorScene.targetedCitizen.isWherewolf) {
                //parlorScene.targetedCitizen.

                // TODO: Animate the death of the Wherewolf...


                // ...and transition back to the MapScene.

                var remainingPuzzles = mapScene.removePuzzle(parlorScene.puzzle.town);

                if (remainingPuzzles > 0) {
                    parlorScene.setNextScene(mapScene);
                }
                
            }
            else {
                parlorScene.targetedCitizen.shootDead();

                var text = "You shot a citizen in the face.";
                var scene = new Scene(text);
                //scene.setNextScene(mapScene);
                //parlorScene.setNextScene(scene);
            }
            */
    };

    return parlorScene;
}


