const obj = {};

obj.profile = {
    name: {
        first: 'Olena',
        last: 'Zhogol'
    },
    contacts: {
        email: 'lenazhogol@gmail.com',
        phone: '+3806343913**'
    },
    skills: ['Chaos management', 'Testing', 'Test automation'],
    hobbies: ['reading', 'crocheting', 'cats'],
    summary: function() {
        const fullName = `${this.name.first} ${this.name.last}`;
        console.log(`Name: ${fullName}`);
        console.log(`Email: ${this.contacts.email}`);
        console.log(`Skills: ${this.skills.join(', ')}`);
        console.log(`Hobbies: ${this.hobbies.join(', ')}`);
    }
};

obj.profile.summary();
console.log(obj);


obj.profile.skills.forEach(skill => {
    console.log('Skill:', skill);
});
obj.profile.hobbies.forEach(hobby => {
    console.log('Hobby:', hobby);
});
