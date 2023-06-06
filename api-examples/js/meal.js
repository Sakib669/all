const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    // console.log(meals);
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerText = '';
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h1 class="card-title">${meal.strMeal}</h1>
                  <h4>Category: ${meal.strCategory}</h4>
                  <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Details
                </button>
                </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value.toLowerCase();
    loadMeals(searchText)
}

const loadMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayMealDetails(data.meals[0]))
    .catch(error => {
        console.error(error)
    });
}

// async await
const loadMealDetail2 = async(idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data.meals[0]);
    }
    catch(error){
        console.log(error);
    }
}

const displayMealDetails = meal => {
    const mealTitle = document.getElementById('mealDetailsLabel');
    mealTitle.innerText = meal.strMeal;
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <img src="${meal.strMealThumb}" class="img-fluid">
    <br/>
    <br/>
     <p class="card-text">${meal.strInstructions}</p>
    `;
}

loadMeals('fish');
