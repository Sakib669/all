const shop = {
    owner: 'Allu',
    address: {
        street: 'murgi potti',
        city: 'Hydrabaad',
        country: 'kutta chor'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};

const stringified = JSON.stringify(shop);
const parsed = JSON.parse(shop);
console.log(shop);
console.log(stringified);
console.log(parsed);