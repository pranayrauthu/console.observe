# console.observe
console utility function to observe changes in objects
# How to use?
```javascript
    var obj = {};
    var observableObj = console.observe(obj, function(prop, value){
        //observe set/get calls
    });
```


Now, try setting & getting values from <code>obj</code>
```javascript
    observableObj.name = "test name";//obj modified

    observableObj.name;//property accessed
```


