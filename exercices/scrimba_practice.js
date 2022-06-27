let name = "Linda"
let greeting = "Hi there"

////////////////////////////////////////////////////////////////////////////
// Create a function that logs out "Hi there, Linda!" when called

function greetLinda() {
    console.log(greeting + ", " + name);
}

greetLinda();

////////////////////////////////////////////////////////////////////////////
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points(){
    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}
add3Points();
remove1Point();

// Call the functions to that the line below logs out 10
console.log(myPoints)

//////////////////////////////////////////////////////////////////////////////
//Spread Operator
let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,          //By putting the ... we are copying the person object
    salary: 50000,
    position: "Software Developer"
}

console.log(employee); //prints person + salary and position

//////////////////////////////////////////////////////////////////////////////
/*
    **** Challenge ****
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];

const shoppingBasket = [...shoppingList, "bread", "pasta"] //Im copying the array and adding new values
console.log(shoppingBasket);

//////////////////////////////////////////////////////////////////////////////
//Rest Operator

function add(...nums) { //This way i transform the add into an array
    console.log(nums);

}

add(4, 5, 6, 7, 8, 9)

//////////////////////////////////////////////////////////////////////////////
// Different ways of doing functions
//Arrow Functions
const dinnerMenu = food => `I'm going to eat a ${food} for dinner`;
console.log(dinnerMenu("chicken salad"));

//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

//////////////////////////////////////////////////////////////////////////////
// Default Params
// If i dont pass any value to the artist, it will display someone by default
const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of ColdPlay`);
}
leadSinger();
leadSinger("Justin");
// If I do pass something  to the artist, it will display the one i choose.

//Challenge

const challenge = (food = "something") => `I'm going to buy ${food} from the grocery shop`
console.log(challenge()); 

//Another way to do it
function foodShopping( food = "something") {
    console.log(`I'm going to buy ${food} from the grocery shop`);
}

foodShopping();

//////////////////////////////////////////////////////////////////////////////
//includes()
let numArray = [1,2,3,4,5];
console.log(numArray.includes(2)) //validates with a boolean if there is something there [true]

/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/
const listIngredients =  [ "flour", "sugar", "eggs", "butter", "chocolate"];

if (listIngredients.includes("chocolate")) {  //if true, then
    console.log("We are going to make a chocolate cake");
} else {  //if false, then
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate");
}

//////////////////////////////////////////////////////////////////////////////
//Let & Const
