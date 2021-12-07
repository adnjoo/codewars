// better
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

//another way
const isSquare = n => Number.isInteger(Math.sqrt(n));

//attempt
const isSquare = (n) => n === 0 ? true : n < 0 ? false : Number.isInteger(Math.sqrt(n))