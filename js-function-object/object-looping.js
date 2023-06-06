let phone = {
    brand: 'poco',
    storage: '128gb',
    ram: '6gb',
    frontCamera: '20px',
    rearCamera: '12px',
    processor: 'sd845'
}

let keys = Object.keys(phone);
let values = Object.values(phone);
for(let i = 0; i < keys.length; i++){
    let keyNames = keys[i];
    console.log(keyNames);
}
for(let i = 0; i < values.length; i++){
    let valueNames = values[i];
    // console.log(valueNames);
}

for(let valueNames in phone){
    console.log(valueNames);
}