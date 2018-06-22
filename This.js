console.log('***************** Common function **************************');

var name = "The Window";
var object = {
    name: "The Object",
    callMe: function () {
        var self = this;
        console.log(`<Outter function> this.name: ${this.name}`); // object
        return function () {
            console.log(`<Inner function> this.name: ${this.name}`); // window
            console.log(`<Inner function> self.name: ${self.name}`); // object
        };
    }
};
object.callMe()();

console.log('***************** Arrow function **************************');

var arrowFunc = {
    name: "The Object",
    callMe: function () {
        console.log(`<Outter function> this.name ${this.name}`); // object
        return () => {
            console.log(`<Inner function> this.name ${this.name}`); // window
        };
    }
};
arrowFunc.callMe()();
