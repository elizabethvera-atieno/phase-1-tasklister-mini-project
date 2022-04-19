document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  let listTasks = document.getElementById('tasks')
  form.addEventListener('submit', e => {
    e.preventDefault()
    const task = document.getElementById('new-task-description').value
    let items = document.createElement('li')
    let btn = document.createElement('button')
    btn.innerText = 'X'
    items.innerText = task
    items.appendChild(btn)
    listTasks.append(items)
    btn.addEventListener('click',(e)=>{
      items.remove()
    })
    form.reset()
  })
});
