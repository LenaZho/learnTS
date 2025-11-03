const user = {
    _firstName: 'Olena',
    _lastName: 'Zhogol',
    _age: 33,
    address: {
        city: 'Kyiv',
        zip: '10010'
    },
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    },
    set fullName(value) {
        const [first, last] = value.split(' ');
        this._firstName = first;
        this._lastName = last;
    },
    get age() {
        return this._age;
    },
    set age(value) {
        if (value > 0) {
            this._age = value;
        }
    },

    updateCity(newCity) {
        this.address.city = newCity;
        return 'City updated to ' + newCity;
    }
};

console.log('Full Name:', user.fullName);
user.fullName = 'Olena Tykhonova';
console.log('New Full Name:', user.fullName);
user.age = 34;
console.log('Age:', user.age);
console.log(user.updateCity('Kharkiv'));
console.log('Address:', user.address);
