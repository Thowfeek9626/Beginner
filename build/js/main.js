"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log("🚀 ~ isObj ~ isObj:", isObj(true));
console.log("🚀 ~ isObj ~ isObj:", isObj('John'));
console.log("🚀 ~ isObj ~ isObj:", isObj([1, 2, 3]));
console.log("🚀 ~ isObj ~ isObj:", isObj({ name: 'John' }));
console.log("🚀 ~ isObj ~ isObj:", isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log("🚀 ~ isObj ~ isObj:", isTrue(false));
console.log("🚀 ~ isObj ~ isObj:", isTrue(0));
console.log("🚀 ~ isObj ~ isObj:", isTrue(true));
console.log("🚀 ~ isObj ~ isObj:", isTrue(1));
console.log("🚀 ~ isObj ~ isObj:", isTrue('Dave'));
console.log("🚀 ~ isObj ~ isObj:", isTrue(''));
console.log("🚀 ~ isObj ~ isObj:", isTrue(null));
console.log("🚀 ~ isObj ~ isObj:", isTrue(undefined));
console.log("🚀 ~ isObj ~ isObj:", isTrue({}));
console.log("🚀 ~ isObj ~ isObj:", isTrue({ name: 'Dave' }));
console.log("🚀 ~ isObj ~ isObj:", isTrue([]));
console.log("🚀 ~ isObj ~ isObj:", isTrue([1, 2, 3]));
console.log("🚀 ~ isObj ~ isObj:", isTrue(NaN));
console.log("🚀 ~ isObj ~ isObj:", isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
// console.log(processUser({ name:'Dave'}))
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
];
console.log("🚀 ~ usersArray:", getUsersProperty(usersArray, 'email'));
console.log("🚀 ~ usersArray:", getUsersProperty(usersArray, "username"));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
// store.state = 12
const myState = new StateObject(15);
console.log("🚀 ~ myState.state:", myState.state);
myState.state = 'Consistency';
console.log("🚀 ~ myState.state:", myState.state);
