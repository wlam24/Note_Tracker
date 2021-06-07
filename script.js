const form = document.querySelector('form');
const noteContainer = document.querySelector('.note-container');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
let count = 0;

function addNote(event) {
  event.preventDefault();
  if (count < 100) 
  count += 1
  const noteBlock = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const noteCount = document.createTextNode('Note ' + count);
  const [input] = [event.target[0].value];
  const note = document.createTextNode(input);
  const viewButton = document.createElement('button');
  const buttonText = document.createTextNode('View details');
  p1.appendChild(noteCount);
  noteBlock.appendChild(p1);
  p2.appendChild(note);
  noteBlock.appendChild(p2);
  viewButton.appendChild(buttonText);
  noteBlock.appendChild(viewButton);
  noteContainer.appendChild(noteBlock);
  viewButton.classList.add('style-button');
  noteBlock.classList.add('style-notes');
  form.reset();
}

function popUp(event) {
  const p = document.querySelector('.modal-note');
  const note = event.target.parentElement.firstChild.nextElementSibling.textContent;
  if(event.target.outerText === 'View details'){
  p.textContent = note;
  modal.style.display = 'block';
  }
}

function close(event) {
  if(event.target.outerText === 'x'){
    modal.style.display = 'none';
  }
}

form.addEventListener('submit', addNote);
noteContainer.addEventListener('click', popUp);
modalContent.addEventListener('click', close);