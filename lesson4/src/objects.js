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
    hobbies: ['reading', 'crocheting', 'cats']
};

console.log(obj);
console.log(JSON.stringify(obj));

//Part for training purposes only
//obj.profile.skills.forEach(skill => {
//    console.log('Skill:', skill);
//});
//obj.profile.hobbies.forEach(hobby => {
//    console.log('Hobby:', hobby);
//});
