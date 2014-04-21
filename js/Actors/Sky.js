/* 
 * Just a square patch outside the window that darkens as time progresses.
 */

function Sky(x, y, width, height, maxTime) {
    this.width = width;
    this.height = height;
    
    // Determines how light or dark the Sky should be.
    this.currentTime = maxTime;
    this.maxTime = maxTime;
    
    this.draw = function() {
        var ctx = window.globalManager.ctx;
        var colorLevel = this.getColorLevel();
        ctx.fillStyle = "rgb(" + colorLevel + ", " + colorLevel + ", " + colorLevel + ")";
        ctx.fillRect(x, y, this.width, this.height);
    };
    
    this.setCurrentTime = function(currentTime) {
        this.currentTime = currentTime;
    };
    
    // Determines the value for the R, G, or B channels as a function of time. 
    this.getColorLevel = function() {
        //return Math.floor(255 - (255 * (this.maxTime - this.currentTime) / this.maxTime));
        var x = ((this.maxTime - this.currentTime) / this.maxTime) * (Math.PI / 2);
        return Math.floor(255 * Math.cos(x));
    };
}


