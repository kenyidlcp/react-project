function sayHello(name, lastname = 'De la', age = 0) {
    const greeting = `Hola Mundo function! ${name} ${lastname} ${age}`;
    //console.log('Hola Mundo function');
    return greeting;
}

const result = sayHello('Andres', undefined, 10);

console.log(result);

const sayHello2 = (name, lastname = 'De la2', age = 0) => {
    return `2Hola Mundo function! ${name} ${lastname} ${age}`;
}

const sayHello3 = (name, lastname = 'De la2', age = 0) => `2Hola Mundo function! ${name} ${lastname} ${age}`;

const result2 = sayHello2('Andres2', undefined, 10);

console.log(result2);
;

const add = (a = 0, b = 0) => a + b;

console.log(add(2, 3));