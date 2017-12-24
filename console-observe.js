// Object observer with ES-6 Proxy

(function (root, factory) {
    
    root.observe = factory();

}(console, function () {
    
    /**
     * 
     * @param {Object} obj - Object to observe
     * @param {Function} callback - Observing callback
     */
    function _observe(obj, callback) {
        
        //handler for proxy
        var handler = {
            get: function (target, prop) {
                console.log(`accessed: ${prop}`);
                callback(prop);
                //default behaviour
                return Reflect.get(target, prop);
            },
            set: function (target, prop, value) {
                console.log(`set ${prop}: ${value}`);
                callback(prop, value);
                //default behaviour
                return Reflect.set(target, prop, value);
            }
        }
    
        return new Proxy(obj, handler);
    };

    return _observe;

}));





