let notes = [];
let editIndex = null;

const noteText = document.getElementById('noteText');
const addBtn = document.getElementById('addBtn');
const cancelBtn = document.getElementById('cancelBtn');
const notesList = document.getElementById('notesList');
const searchInput = document.getElementById('searchInput');

addBtn.onclick = function () 
{
  const content = noteText.value.trim();
  if (!content) return;

  if (editIndex !== null) {
    notes[editIndex] = content;
    editIndex = null;
  } else {
    notes.push(content);
  }

  noteText.value = '';
  renderNotes();
};

cancelBtn.onclick = function () 
{
  noteText.value = '';
  editIndex = null;
};

function renderNotes(filter = '') 
{
  notesList.innerHTML = '';

  notes.forEach((note, index) => {
    if (note.toLowerCase().includes(filter.toLowerCase())) {
      const noteCard = document.createElement('div');
      noteCard.className = 'note-card';

      noteCard.innerHTML = `
        <h3>Note ${index + 1}</h3>
        <p>${note}</p>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
      `;

      noteCard.querySelector('.editBtn').onclick = () => {
        noteText.value = note;
        editIndex = index;
      };

      noteCard.querySelector('.deleteBtn').onclick = () => {
        notes.splice(index, 1);
        renderNotes(searchInput.value);
      };

      notesList.appendChild(noteCard);
    }
  });
}

searchInput.addEventListener('input', () => {
  renderNotes(searchInput.value);
});
