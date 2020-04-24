"use strict";
var hello = "Hello";
//hello = "23"; TS gives error when compiling because its constant
var world = "World";
var hasSubscription = true;
//hasSubscription = "false"; TS error - Can't assign string to Boolean
var myAge;
myAge = "Twenty Four";
// No error in above case because we've declared let variable but without type.
// So TS assigns it special type called AnyType
var realAge; // Explicit definition of type as number
//realAge = "24"; Can be type number only
var hobbies = ["Cricket", "PS"];
//hobbies = [4, 2]; Array of strings cannot be array of number types
var address = [54100, "Lahore"]; // Called Tuple is TS
// address = ["Karachi", 44000]; Limited allocations with specific types on specific allocations
// Enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
