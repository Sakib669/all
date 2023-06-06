const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}


const displayUser = user => {
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');
    const location = document.getElementById('location');
    const profilePhoto = document.getElementById('profile-photo');
    gender.innerText = user.results[0].gender;
    name.innerText = ` ${user.results[0].name.first} '${user.results[0].name.title}' ${user.results[0].last}
    `;
    location.innerText = `(Street:) ${user.results[0].location.street.name}, (State:) ${user.results[0].location.state}, (City:) ${user.results[0].location.city}, (Country:) ${user.results[0].location.country}`;
    profilePhoto.src = user.results[0].picture.large

    console.log(user.results[0])
}



