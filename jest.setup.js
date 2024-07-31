if (typeof setImmediate === 'undefined') {
    global.setImmediate = function(fn) {
        setTimeout(fn, 0);
    };
}