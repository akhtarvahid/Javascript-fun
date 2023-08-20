const user = {
    name: "John",
    company: "XYZ.com",
    address: {
        country: 'USA',
        zip: 44243
    }
}

/** 
 * 1. Object.assign 
 */ 

const copied = Object.assign({}, user);
console.log(copied);

/**
 * 2. Spread operator(...)
 */

const copiedBySpread = {...user};
console.log(copiedBySpread)
