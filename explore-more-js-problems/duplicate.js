const names = ['abul', 'babul', 'cabul', 'ebul', 'redbul', 'dabul', 'abul', 'babul', 'kabul', 'gabul', 'cabul', 'babul', 'redbul', 'abul', 'abul'];

function removeDuplicate(params){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const element = params[i];
        // console.log(element);
        if(unique.includes(element) === false){
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);

let arr = [2020, 2021, 2022, 2023, 2025, 2024, 2028, 2030, 2032];

function learYear(params){
    let year = [];
    for(let i = 0; i < params.length; i++){
        const element = params[i];
        if((element % 4 === 0)){
            year.push(element);
        }
        // console.log(year);
    }
    return year;
}
console.log(learYear(arr));