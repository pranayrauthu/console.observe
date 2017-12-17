# console.observe
console utility function to observe changes in objects
# How to use?
```javascript
    var obj = {};
    console.observe("obj", this, function(prop, value){
        if(value){
            console.log("obj modified");
        }
        else{
            console.log("property accessed");
        }
    });
```


Now, try setting & getting values from <code>obj</code>
```javascript
    obj.name = "pranay";//obj modified

    obj.name;//property accessed
```


