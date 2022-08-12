let products = ["Toys for 5-16 Year Old Boys Kids Fitness Tracker", "Kids Smart Watch for Gir", "FITVII Slim Fitness Tracker with Blood Oxygen SpO2"];
products.push("New product");

let productObj = products.reduce((product, key) => Object.assign(product, {[key]: product, [key]: key.length}), {});
console.log(productObj);