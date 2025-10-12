const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'Jhon',
        lastName: 'Doe',
        age: 20,
    },
    items: [
        {
            producto: 'keyboard',
            price: 399,
            quantity: 3,
        },
        {
            producto: 'mouse',
            price: 120,
            quantity: 4,
        },
        {
            producto: 'paper',
            price: 100,
            quantity: 10,
        }
    ],
    total: function() {
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price * item.quantity;
        });
        return total;
    },
    greeting: function() {
        return `Hola ${this.client.name}`;
    }
};

const invoice2 = invoice;

const result = invoice == invoice2;

console.log(result);