class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.isStarred = false;
  }

  saveToStorage() {
    var stringifyIdea = JSON.stringify(this);
    localStorage.setItem(`${this.id}`, stringifyIdea);
  }
};
