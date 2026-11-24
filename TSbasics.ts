

function calculateArea(length: number, width: number): number {
return length * width;
}

let item:{name: string, price: number, inStock: boolean} = {
name: "Book",
price: 25,
inStock: true,
};

console.log("Area:", calculateArea(10, 5));
console.log("Item:", item);

interface Products {
    name: string;
    price: number;  
    inStock: boolean;
}

let ProductTest: Products = {
name: "Laptop",
price: 1000,
inStock: false,
}

console.log("ProductTest:", ProductTest);


//experimented and observed: 
// 1.1 ProductTest.price ="thousand"; // This line will cause a TypeScript error because 'price' is defined as a number in the Products interface.

// 1.2 What happens when you try to compile? 
// the compiler ignores the error and makes a JS file (with potential issues/bugs) anyway.
// It also provides a warning in the js file in a comment.

// 1.3 How does TypeScript's static typing help catch errors early?
// the type script shouws the error early in the development process to prevent potential runtime errors, even if the code compiles in the end.

// 2.1 Remove the type annotation from the length parameter in calculateArea and see if
// TypeScript still infers its type correctly when you hover over it in your editor.

// 2.2 the VS Code's built-in TypeScript compiler check shows red line under the length parameter with this message: "Parameter 'length' implicitly has an 'any' type."
//  this means the complier will asign the type 'any' to the length parameter, which can lead to potential issues if the function is called with unexpected or incorrect types.
