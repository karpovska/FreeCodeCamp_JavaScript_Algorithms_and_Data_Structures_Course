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