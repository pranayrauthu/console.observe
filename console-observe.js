// Object observer with ES-6 Proxy

(function (root, factory) {
    
    root.observe = factory();

}(console, function () {
    
    /**
     * 
     * @param {String} objName - Name of the Object
     * @param {Object} context - Observing context
     * @param {Object} callback - Observing callback
     */
    function _observe(objName, context, callback) {
        
        //handler for proxy
        var handler = {
            get: function (target, prop) {
                callback.call(context, prop)
                //default behaviour
                return Reflect.get(target, prop);
            },
            set: function (target, prop, value) {
                callback(context, prop, value);
                //default behaviour
                return Reflect.set(target, prop, value);
            }
        }
    
        context[objName] = new Proxy(context[objName], handler);
    };

    return _observe;

}));





