//SELECTORS
const moviesView = document.querySelector('.moviesView');
const addMoviesView = document.querySelector('.add-movies-view');
const editMoviesView = document.querySelector('.edit-movies-view');


//INPUTS
const imageInput = document.querySelector('input[name="image"]');
const titleInput = document.querySelector('input[name="title"]');
const yearInput = document.querySelector('input[name="year"]');
const categoryInput = document.querySelector('input[name="category"]');
const rateInput = document.querySelector('input[name="rate"]');
const searchInput = document.querySelector('#search');

//EDIT INPUTS
const eTitleInput = document.querySelector('input[name="etitle"]');
const eYearInput = document.querySelector('input[name="eyear"]');
const eCategoryInput = document.querySelector('input[name="ecategory"]');
const eRateInput = document.querySelector('input[name="erate"]');


//Buttons
const addViewBtn = document.querySelector('#addViewBtn');
const addButton = document.querySelector('#addBtn');
const editButton = document.querySelector('#editBtn');


//Events
addViewBtn.addEventListener('click', () => {
    moviesView.style.display = "none";
    addMoviesView.style.display = "block";
})
addButton.addEventListener('click', addMovie);
editButton.addEventListener('click', editMovie);
searchInput.addEventListener('keyup', searchMovie);



function displayEditForm() {
    let indexOfMovie = this.getAttribute('data-index');
    let selectedMovie = db[indexOfMovie]

    eTitleInput.value = selectedMovie.title;
    eCategoryInput.value = selectedMovie.category;
    eYearInput.value = selectedMovie.year;
    eRateInput.value = selectedMovie.rate;

    editButton.setAttribute('data-index', indexOfMovie);
    moviesView.style.display="none"
    editMoviesView.style.display="block"
}
function displayList(filtered) {
    let currentMovies = filtered || db;
    let html = ``;
    currentMovies.forEach((movie,index) => {
        html += `
            <div class="card col-sm-2" style="width: 18rem;">
                <img class="card-img-top" src="${movie.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.year}</p>
                    <p class="card-text">${movie.category}</p>
                    <p class="card-text">${movie.rate}</p>
                    <a class="btn btn-warning editBtn" data-index="${index}">Edit</a>
                    <a class="btn btn-danger deleteBtn" data-index="${index}">Delete</a>
                </div>
           </div>   
        `.trim()


    })

    moviesView.innerHTML = html;

    
}



