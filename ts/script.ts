const hello = "Hello";
//hello = "23"; TS gives error when compiling because its constant

const world = "World";

let hasSubscription = true;
//hasSubscription = "false"; TS error - Can't assign string to Boolean

let myAge;
myAge = "Twenty Four";
// No error in above case because we've declared let variable but without type.
// So TS assigns it special type called AnyType

let realAge: number; // Explicit definition of type as number
//realAge = "24"; Can be type number only

let hobbies = ["Cricket", "PS"];
//hobbies = [4, 2]; Array of strings cannot be array of number types

let address: [number, string] = [54100, "Lahore"]; // Called Tuple is TS
// address = ["Karachi", 44000]; Limited allocations with specific types on specific allocations

// Enums
enum Color {
  Gray,
  Green = 100,
  Blue
}
let myColor: Color = Color.Green;
console.log(myColor);
