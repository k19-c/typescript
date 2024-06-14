type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;


function getLength(obj: string | string[]) {
    return obj.length;
}


// We can make a function return different values depending on it whether it is passed as a string or an Array.


function Example(obj: string | string[]) {

    if(typeof obj === 'string') {
        return [obj];
    } else {
        return obj;
    }
}

const res = Example('kalal'[3]);
console.log('RESULT', res);

