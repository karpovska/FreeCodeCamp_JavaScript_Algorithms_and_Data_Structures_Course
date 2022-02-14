const myFunc = (params) => {

}

const square = (a, b)  => {
    const total  = a + b;
    return total;
}

const summ = (x, y) => x + y;

//a function with with an anonymous function
const anunymFunc = () => { };

//anounymous function with parameters
const add = (a, b) => a + b;

//anonymous function as a callback to another function 
setTimeout(function() {
    console.log("Executed after 3 seconds");
}, 3000);

setTimeout(() => console.log("Executed after 3 seconds"), 3000);

const donated = [{name: "Xavier", age: 19, city:"LA", donation: 20},
{name: "David", age: 16, city: "georgia", donation: 20},
{name: "Amanda", age: 18, city: "washington DC", donation: 20},
{name: "Amy", age: 20, city: "chicago", donation: 20},
{name: "Jessica", age: 28, city: "LA", donation: 20},
{name: "Alex", age: 15, city: "LA", donation: 20}]

const donate = donated.filter(donated => donated.age >= 18);
console.log("Donors above 18", donate);

const sum = donated.reduce((total, amount) => total + amount.donation, 0);
console.log("Total donations", sum);

const parent = {
    //add property
    mom_name: "Smantha Quinn",

    //add method to return parent
    mother: () => {
        return `${this.mom_name} is my mother`;
    }
}
console.log(parent.mother());

function User() {
    (this.name = "John Doe"),
    (this.score = 20),
    (this.sayUser = function () {
        //when `this` is accessible
        console.log(this.name);

        //a variable that doesn't shadow `innerFunction`
        //let self = this;
        let innerFunction = () => {
            //when `this` refers to the global scope
            console.log(this.name);
        }

        innerFunction();
    })
}
let name = new User();
name.sayUser();

let animals = {
    //add property
    domesticAnimals: ["cat", "dog", "cow", "goat", "sheep", "donkey", "pig", "horse"],
    //add method
    printDomesticAnimals: function () {
        console.log("inside printDomesticAnimals", this);
        //print after 3 second
        setTimeout(() => {
            console.log(this.domesticAnimals.join(" - "));
            //console.log("inside setTimeout", this);
        }, 3000);
    }
}
animals.printDomesticAnimals();