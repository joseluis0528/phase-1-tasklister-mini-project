document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newId = document.querySelector('input');
    newId.id = 'new_task_description';
    ToDo(e.target.new_task_description.value);
    form.reset();
  })
});

function ToDo(toDo) {
  let li = document.createElement('li');
  li.textContent = `${toDo} `;
  document.querySelector('#tasks').appendChild(li);

  let button = document.createElement('button');
  button.textContent = "❌";
  li.appendChild(button);
  button.addEventListener('click', handleDelete);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}