document.addEventListener('DOMContentLoaded', fetchBooks);
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://www.anapioficeandfire.com/api/books')
  .then(resp => {
    if(!resp.ok) {
      throw new Error('error with response');
    }
    else {
    return resp.json();
    }
    
  })
  .then(books => {
    renderBooks(books);
  })
  .catch(error => {
    console.error('error fetching books:', error);
  })
}

function renderBooks() {}
