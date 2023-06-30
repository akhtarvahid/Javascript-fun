/**
 *! Using flat()
 */
const hearts = ["💜",["💙"],["❤️‍🩹"]];
const flattened = heart.flat();
console.log(flattened);   // ['💜', '💙', '❤️‍🩹']

/** 
 **Flattening nested arrays by passing parameter depth
*/
const hearts1 = ["❤️‍🩹",["💛"],["💜",["💙", ["💚"]]]];
console.log(hearts1.flat(1)); // ['❤️‍🩹', '💛', '💜', ['💙', ['💚']]]
console.log(hearts1.flat(2))  // ['❤️‍🩹', '💛', '💜', '💙', ['💚']]
console.log(hearts1.flat(3))  // ['❤️‍🩹', '💛', '💜', '💙', '💚']

/**
** Infinitely Nested Arrays(Infinity)
 */
const hearts2 = ["❤️‍🩹",["💛"],["💜",["💙", ["💚",["💖",["🩵",["🤍"]]]], "💝"]]];
const flattened2 = hearts2.flat(Infinity);
console.log(flattened);

/** 
** Flattening sparse(empty spaces) arrays using flat()
** heart31 -> heart3.1, heart32 -> heart3.2
*/
const hearts3 = ["💜", "💛", , "💙", "💖"];
console.log(hearts3.flat()); // ['💜', '💛', '💙', '💖']

const hearts31 = ["🤍", , "🩵", ["💖", , "💛"]];
console.log(hearts31.flat()); // ['🤍', '🩵', '💖', '💛']

const heart32 = ["💚", , "💙", ["❤️‍🩹", , ["🤎", , "💟"]]];
console.log(heart32.flat()); // ['💚', '💙', '❤️‍🩹', ['🤎', <1 empty item>, '💟']]
console.log(heart32.flat(2)); // ['💚', '💙', '❤️‍🩹', '🤎', '💟']


/**
 *! Using Recursion
 *
 ** 1. Using Array.prototype.concat() and Array.prototype.reduce()  function
 ** Iterative way
 */

function flatten(hearts) {
    let output = [];
    for(let heart of hearts) {
      if(Array.isArray(heart))
        output.push(...flatten(heart))
      else
        output.push(heart)
      }
    return output;
}
const hearts4 = ["💖",["💚", "💙"], ["❤️‍🩹", ["🤎", ["💟"]]]];
console.log(flatten(hearts4));


/**
 ** 2. Using concat() and reduce() 
 */
function flattenArray(array) {
    return array.reduce((acc, next) => 
       acc.concat(Array.isArray(next) ? flattenArray(next) : next), 
    []);
};
const hearts5 = ["💖",["💚", "💙"], ["❤️‍🩹", ["🤎", ["💟"]]]];
console.log(flattenArray(hearts5)); // [ '💖', '💚', '💙', '❤️‍🩹', '🤎', '💟' ]

/**
 ** 3. Using generator function
 */
function* flatten(hearts) {
    for (const heart of hearts) {
        Array.isArray(heart) ? yield* flatten(heart) : yield heart;
    }
}

const hearts6 = ["💖",["💚", "💙"], ["❤️‍🩹", ["🤎", ["💟"]]]];
console.log([...flatten(hearts6)]); // [ '💖', '💚', '💙', '❤️‍🩹', '🤎', '💟' ]
