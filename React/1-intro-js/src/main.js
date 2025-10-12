const products = ['Mesa', 'Silla', 'Notebook', 'Teclado'];

products.push('Pantalla LCD', 'Sony TV');

console.log(products);

products.forEach(function(el) {
    console.log(el);
});

products.forEach(el => console.log(el));

products.forEach( console.log );

for(const prod of products) {
    console.log(prod);
}

for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log(element);
    
}

console.log(products[4]);