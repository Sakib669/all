// problem 1
const arr = [ 1, 3, 5, 7, 9 ];
for(let i = 0; i < arr.length; i++){
    const outputz = [ ]
    const element = arr[i] + 1;
    outputz.unshift(element);
    // console.log(outputz);
}
const output = arr.map(x => x + 1);
// console.log(output);

// problem 2
const arr2 = [33, 50, 79, 78, 90, 101, 30 ];
const res = arr2.filter(x => x % 10 === 0)
// console.log(res);

// problem 3
const res2 = arr2.find(x => x % 10 === 0);
// console.log(res2);

const arr3 = [ 1, 9, 17, 22 ];
let output3 = 0;
for(let i = 0; i < arr3.length; i++){
    output3 += arr3[i];
    // console.log(output3);
}
const total = arr3.reduce((previous, current) => {
    // console.log(previous, current);
   return previous + current
}, 0)
// console.log(total);

// problem 4
const student = {
    name: 'Fredie',
    age: 26
}
// console.log(student.age)

// problem 5
const data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India'
        }
    ]
}
// console.log(data.location[0].city)


// problem 6
const data2 = {
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
  }
  console.log(data2.email);
  console.log(data2.address);
  console.log(data2.address.city);
  console.log(data2.address.geo.lat);
  console.log(data2.company.name);