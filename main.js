

// As a user,
// When I click “Save”,
  //create querySelector and eventListener for .save-button.

// If I entered information in both the “Title” and “Body” input fields,
    // create querySelector for the title input and body input
    // create conditional


// I should see a new Idea instance with the provided title and body appear in the ideas array
    // instantiate a new Class of idea with title and inputs.
    // create functionality to push title and body inputs (value) into array
        // create conditional

// I should see a new idea card with the provided title and body appear on the DOM
    // create functionality to display new instantiated idea.


// When I click “Save”,
  // If I entered information in both the “Title” and “Body” input fields,
  // I should see the “Title” and “Body” input fields clear out
      // value = ''

//QuerySelectors
var saveButton = document.querySelector('.save-button');
var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body');

var ideas = [];

//EventListeners
saveButton.addEventListener('click', createCard);

//Functions

function createCard() {
  event.preventDefault();
  var newCard = new Idea(titleInput.value, bodyInput.value);
  ideas.push(newCard);
  renderCard();
  clearInput();
};

function renderCard() {
  cardContainer.innerHTML = '';
    for (var i = 0; i < ideas.length; i++) {
      cardContainer.innerHTML += `
      <article class="card">
        <figure class="star-box">
          <img class="star-image" src="./assets/star.svg" alt="star">
          <img class="delete-image"src="./assets/delete.svg" alt="delete-image">
        </figure>
          <div class="idea-container">
            <h2 class="idea-title">${ideas[i].title}</h2>
            <p class="idea">${ideas[i].body}</p>
          </div>
        <figure class="comment-box">
          <img class="comment-image" src="./assets/comment.svg" alt="comment-image">
          <p class="comment">Comment</p>
        </figure>
      </article>`
  }
};

function clearInput() {
  titleInput.value = null;
  bodyInput.value = null;
};
