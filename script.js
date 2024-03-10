function login() {
   
    document.querySelector('.note-form').style.display = 'block';
}

function submitNote() {
    const noteText = document.getElementById('note').value;
    console.log('Submitting note:', noteText);
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.textContent = noteText;
    document.getElementById('notes').appendChild(noteDiv);
    document.getElementById('note').value = ''; // Clear the textarea
}