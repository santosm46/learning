class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    hasAccess() {
        return this.name === 'Bob';
    }
}

const users = [
    new User(1, 'Bob'),
    new User(2, 'Mike')
];

function getUser(id) {
    return users.find(user => user.id === id);
}


function printUser(id) {
    const user = getUser(id);

    let userName = (user == null || user.name == null) ? 'Guest' : user.name;

    console.log(`Hello ${userName}!`);
}

printUser(3);
