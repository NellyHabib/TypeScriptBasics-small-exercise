"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateArea(length, width) {
    return length * width;
}
let item = {
    name: "Book",
    price: 25,
    inStock: true,
};
console.log("Area:", calculateArea(10, 5));
console.log("Item:", item);
let ProductTest = {
    name: "Laptop",
    price: 1000,
    inStock: false,
};
console.log("ProductTest:", ProductTest);
// ProductTest.price ="thousand"; // This line will cause a TypeScript error because 'price' is defined as a number in the Products interface.
//# sourceMappingURL=TSbasics.js.map