const first = {a: 5, b: 2, c: 5}
const second = {a: 5, c: 5, b: 2}

function compareObjects(a, b) {
    const firstKeys = Object.keys(a);
    const secondKeys = Object.keys(b);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== b[key]){
                return false;
            }
        }
        return true;
    }
}

const isSame = compareObjects(first, second);
console.log(isSame);