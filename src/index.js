document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    ToDo(e.target.new_task_description.value)
    form.reset()
  })
});

function ToDo(toDo) {
  let li = document.createElement('li')
  let button = document.createElement('button')
  button.textContent = "❌"
  li.textContent = `${toDo} `
  li.appendChild(button)
  document.querySelector('#tasks').appendChild(li)
  button.addEventListener('click', handleDelete)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}
