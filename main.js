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
cardContainer.addEventListener('click', detectButton)
//Functions
function createCard() {
  event.preventDefault();
  var newCard = new Idea(titleInput.value, bodyInput.value);
  ideas.push(newCard);
  disableSaveButton();
  renderCard(newCard);
  clearInput();
};

function renderCard(newCard) {
  // console.log(newCard);
  // cardContainer.innerHTML = '';
  //   for (var i = 0; i < ideas.length; i++) {
      cardContainer.innerHTML += `
      <article class="card" id="${newCard.id}">
        <figure class="star-box">
          <img class="star-image" src="./assets/star.svg" alt="star">
          <img class="delete-image" src="./assets/delete.svg" alt="delete-image">
        </figure>
          <div class="idea-container">
            <h2 class="idea-title">${newCard.title}</h2>
            <p class="idea">${newCard.body}</p>
          </div>
        <figure class="comment-box">
          <img class="comment-image" src="./assets/comment.svg" alt="comment-image">
          <p class="comment">Comment</p>
        </figure>
      </article>`


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

function deleteCard() {
  var target = event.target.parentNode.parentNode;
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].id === parseInt(target.id)) {
      ideas.splice(i, 1)
    }
  }
  target.remove();
};

function favoriteCard() {
  var targetId = parseInt(event.target.parentNode.parentNode.id)
  var target = event.target
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].id === targetId) {
      checkIfStarred(ideas[i], target)
    }
  }
};

function checkIfStarred(idea, target) {
  if (idea.isStar) {
    idea.isStar = false;
    target.src = "./assets/star.svg";
    target.alt = "white-star"
  } else {
    idea.isStar = true;
    target.src = "./assets/star-active.svg"
    target.alt = "red-star"
  }
};


function detectButton() {
  if (event.target.classList.contains('star-image')) {
    favoriteCard();
  } else if (event.target.classList.contains('delete-image')) {
    deleteCard();
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
