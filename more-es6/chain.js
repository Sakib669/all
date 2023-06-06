const users = [ {id:1, name: 'babul', job: 'bokaa'}];
// console.log(users[0].id);

const data = {
    count: 500, 
    data: [
        {id:1, name: 'yolo', job: 'neta'},
        {id:2, name: 'polo', job: 'neta'},
    ]
}

const firstJob = data.data[0].job;

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
        second: 'third floor',
        third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}

const userFloor = user.address?.stret?.first;
console.log(userFloor);