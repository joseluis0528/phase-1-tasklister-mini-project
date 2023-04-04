document.addEventListener('DOMContentLoaded', () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    toDoList(e.target['new-task-description'].value);
    form.reset();
  })
  priority();
});

function toDoList(toDo) {
  let li = document.createElement('li');
  li.textContent = `${toDo} `;
  document.querySelector('#tasks').appendChild(li);

  let button = document.createElement('button');
  button.textContent = '❌';
  
  li.appendChild(button);
  button.addEventListener('click', handleDelete);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

function priority() {
  let form = document.querySelector('form');
  let select = document.createElement('select');
  select.id = 'Priority';
  
  let option1 = document.createElement('option');
  option1.innerText = 'High Priority';
  option1.value = 'high';
  
  let option2 = document.createElement('option');
  option2.innerText = 'Medium Priority';
  option2.value = 'medium';
  
  let option3 = document.createElement('option');
  option3.innerText = 'Low Priority';
  option3.value = 'low';
  
  form.appendChild(select);
  select.append(option1, option2, option3);
}