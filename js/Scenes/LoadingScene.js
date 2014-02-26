/* 
 * Loads all the assets for the game.
 */

function LoadingScene() {
    var scene = new Scene(null);
    var loadingScene = this.extend(scene);
    
    loadingScene.loadingText = "Now loading...";
    
    loadingScene.assetsLoaded = 0;
    
    loadingScene.show = function() {
        var ctx = window.globalManager.ctx;
        ctx.font = '24pt Arial';
        ctx.fillStyle = "#000000";
        ctx.fillText(loadingScene.loadingText, 200, 200);
    };
    
    loadingScene.init = function() {        
       // the images array is loaded from the Images.js script. 
       loadingScene.loadImages(images); 
    }
    
    loadingScene.loadImages = function(images) {
        
        for (var i = 0; i < images.length; i++) {
            loadingScene.loadImage(images[i]);
        }
        
    };
    
    loadingScene.loadImage = function(imageJson) {
        var image = new Image();
        image.src = imageJson.src;
        
        loadingScene.loadingText = imageJson.name;
        
        image.onload = function() {
            loadingScene.drawManager.imgArray[imageJson.name] = image;
            loadingScene.loadingText = imageJson.name;
            
            loadingScene.assetsLoaded++;
            
            if (loadingScene.assetsLoaded == images.length) {
                // All our images have been loaded; continue!
                loadingScene.loadingText = "Loaded!";
            }
        };
    
            
    };
    
    loadingScene.click = function() {
        if (loadingScene.assetsLoaded == images.length) {
            loadingScene.showNextScene();
        }
    }
    
    return loadingScene;
    
}


