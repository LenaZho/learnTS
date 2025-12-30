let counter = 0;

export function generateRandomEmail() {
    const timestamp = Date.now();
    counter++;
    return `test${timestamp}_${counter}@testmail.com`;
}

export function generateRandomUser() {
    const timestamp = Date.now();
    counter++;
    
    return {
        name: `TestUser${timestamp}_${counter}`,
        email: `test${timestamp}_${counter}@testmail.com`,
        password: `Pass${counter}`,
        birth_date: '15',
        birth_month: 'June',
        birth_year: '1990',
        firstname: 'Test',
        lastname: 'User',
        company: 'Test Company',
        address1: '123 Test Street',
        address2: 'Apt 1',
        country: 'United States',
        zipcode: '12345',
        state: 'California',
        city: 'Los Angeles',
        mobile_number: '1234567890'
    };
}
