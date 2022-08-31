/**
* *How to Use the Call Function in JavaScript?

* !Call syntax => func.call(thisObj, args1, args2, ...)

* ? calling a function with different contexts in JS
 */

function Bike(model, engine) {
    this.model = model;
    this.engine = engine;
}

function setBrand(brand) {
    Bike.call(this, "FZ", "150cc");
    this.brand = brand;
    console.log(`Bike details = `, this); //? Bike details =  setBrand { model: 'FZ', engine: '150cc', brand: 'Yamaha' }
}

function definePrice(price) {
    Bike.call(this, "FZ", "250cc");
    this.price = price;
    console.log(`Bike details = `, this); //? Bike details =  definePrice { model: 'FZ', engine: '250cc', price: 190000 }
}

const newBrand = new setBrand('Yamaha'); //? because of new keyword function behaves as a construtor
const newBikePrice = new definePrice(190000);
/**
 * *How to Use the Apply Function in JavaScript?

* !Apply syntax => func.apply(thisObj, argumentsArray)
* func.apply(thisObj, [args1, args2, ...]);  || func.apply(thisObj, new Array(args1, args2)); || func.apply(thisObj, arguments); //?arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

* ?The Apply function is very similar to the apply function.
* ?The only difference between apply and apply is the difference in how arguments are passed.
* ?In apply, arguments we can pass an argument as an array literal or a new array object.

* The best part about apply is we don’t need to take care of the number of arguments that are passed to the invoking function.
* Because of its dynamic and versatile nature, we can use it in complicated situations.
*/

function Bike(model, engine) {
    this.model = model;
    this.engine = engine;
}

function setBrand(brand) {
    Bike.apply(this, ["FZ", "150cc"]);
    this.brand = brand;
    console.log(`Bike details = `, this);
}

function definePrice(price) {
    Bike.apply(this, new Array("FZ", "250cc"));
    this.price = price;
    console.log(`Bike details = `, this);
}

const newBrand1 = new setBrand('Yamaha');
const newBikePrice1 = new definePrice(190000);

// Ex: using the arguments keyword:

function addUp() {
    //Using arguments to capture the arbitrary number of inputs
    const args = Array.from(arguments);
    this.x = args.reduce((prev, curr) => prev + curr, 0);
    console.log("this.x = ", this.x); //? 21
}

function driverFunc() {
    const obj = {
        inps: [1, 2, 3, 4, 5, 6]
    }
    addUp.apply(obj, obj.inps);
}

driverFunc();

/**
 * *How to Use the Bind Function in JavaScript?
 * ?The `bind` function creates a copy of a function with a new value to the `this` present inside the calling function.
 * !Bind syntax => func.bind(thisObj, arg1, arg2, ..., argN);
 */

 var vehicle = { 
    registrationNumber: "MH121729",
    brand: "Yamaha",
    model: "FZ",

    displayDetails: function(){
        console.log(`${this.brand} ${this.model} reg. no. ${this.registrationNumber}`);
    }
}

// *above will work perfectly fine as long as we use it this way:

vehicle.displayDetails(); //? Yamaha FZ reg. no. MH121729

// *But what if we want to borrow a method?

var myvehicleDetails =  vehicle.displayDetails;
myvehicleDetails(); //? undefined undefined reg. no. undefined

//?this won’t work as the “this” will be now assigned to the global context
//?which doesn’t have neither the registrationNumber nor the brand, model properties.

var myvehicleDetails = vehicle.displayDetails.bind(vehicle);
myvehicleDetails(); //? Yamaha FZ reg. no. MH121729 