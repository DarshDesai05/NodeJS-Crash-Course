const name = "Darshit"
console.log(name);

//Arrow Functions:-
const greet = () => 'Hello World';
console.log(greet());

const bill = (products,tax)=> {
    let total = 0;
    for(let i = 0; i<products.length;i++){
        total+= products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10,15,20],0.2));