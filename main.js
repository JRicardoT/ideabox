//QuerySelectors
var saveButton = document.getElementById('save-button');
var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body');
var cardContainer = document.querySelector('.card-container');
var form = document.querySelector('.user-input');
var ideas = [];

//EventListeners
saveButton.addEventListener('click', createCard);
form.addEventListener('keyup', checkInputFields);

//Functions
function createCard() {
  event.preventDefault();
  var newCard = new Idea(titleInput.value, bodyInput.value);
  ideas.push(newCard);
  disableSaveButton();
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
  titleInput.value = '';
  bodyInput.value = '';
};

function checkInputFields() {
  if (titleInput.value && bodyInput.value) {
    enableSaveButton();
  } else {
    disableSaveButton();
  }
};

function disableSaveButton() {
  saveButton.disabled = true;
  saveButton.classList.add('disabled');
};

function enableSaveButton() {
  saveButton.disabled = false;
    saveButton.classList.remove('disabled');
};
