/**
 * Represents an item that can be hovered over and clicked.
 * Possesses information about the item's bounding box.
 */

function Clickable(x, y) {
    this.x = x;
    this.y = y;

    this.boundingWidth = null;
    this.boundingHeight = null;
    
    this.isWithinRange = function (mouseX, mouseY) {
        var leftBound = this.x;
        var rightBound = this.x + this.boundingWidth;
        var upperBound = this.y;
        var lowerBound = this.y + this.boundingHeight;

        return (mouseX > leftBound &&
                mouseX <= rightBound &&
                mouseY > upperBound &&
                mouseY <= lowerBound);
    }
}

