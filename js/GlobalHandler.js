/**
 * All the globals, defined in one place.
 */

function GlobalHandler() {
    this.init = init;
    function init() {
        // The canvas.
        window.canvas = $('#canvas')[0];
    }
}
