// Object observer with ES-6 Proxy
//accepts object name and context as parameter
console.observe = function (objName, context, options) {

    function logInfo(info) {
        if (options.trace && console.trace) {
            console.trace(info);
        }
        else {
            console.log(info);
        }
    }
    //handler for proxy
    var handler = {
        get: function (target, prop) {
            logInfo(`getting ${prop} from ${objName}`);
            //default behaviour
            return Reflect.get(target, prop);
        },
        set: function (target, prop, value) {
            logInfo(`setting ${prop}'s value of ${objName} to ${value}`);
            //default behaviour
            return Reflect.set(target, prop, value);
        }
    }

    context[objName] = new Proxy(context[objName], handler);
}