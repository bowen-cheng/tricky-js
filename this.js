var name = "The Window";
var object = {
    name: "The Object",
    callMe: function () {
        console.log('Outter function: ' + this); // object
        var that = this;
        return function () {
            console.log('Inner function: ' + this); // window
            return that.name;
        };
    }
};
object.callMe()();