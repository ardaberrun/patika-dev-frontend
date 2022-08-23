const list = document.getElementById('list');
const addButton = document.getElementById('liveToastBtn');
const taskInput = document.getElementById('task');

const todos = JSON.parse(localStorage.getItem('todos')) || [];

document.addEventListener('DOMContentLoaded', () => {
  if (!todos.length) return;

  todos.forEach(({todo, id}) => appendList(todo, id));
});

const appendList = (todo, todoId) => {
  const listItemButton = createListItemButton(todoId);
  const listItem = createListItem(todo, todoId, listItemButton);

  list.appendChild(listItem);
}

const addTodo = () => {
  const todo = taskInput.value.trim();

  if (!todo.length) {
    $('.error').toast('show');
    return;
  };

  let todoId = Date.now();
  todos.push({ id: todoId, todo });

  appendList(todo, todoId);
  localStorage.setItem('todos', JSON.stringify(todos));
  $('.success').toast('show');

  if (taskInput.value) taskInput.value = '';
};

const createListItemButton = (todoId) => {
  const button = document.createElement('button');
  button.classList.add('float-right');
  button.setAttribute('style', 'outline:0; border:0; background: transparent');
  button.setAttribute('id', `btn_${todoId}`);
  button.innerHTML = '<i class="fas fa-times"></i>';
  button.addEventListener('click', (e) => {
    const listItemId = (e.target.id || e.target.parentElement.id).split('_')[1];

    document.querySelector(`#todo_${listItemId}`).remove();
    localStorage.setItem('todos', JSON.stringify(todos.filter(todo => todo.id !== +listItemId)))
  });

  return button;
};

const createListItem = (todo, todoId, button) => {
  const liElement = document.createElement('li');

  liElement.textContent = todo;
  liElement.setAttribute('id', `todo_${todoId}`);
  liElement.appendChild(button);
  liElement.addEventListener('click', (e) =>
    e.target.classList.toggle('checked')
  );

  return liElement;
};

const pressEnter = (e) => {
  if (e.code == 'Enter') {
    addTodo();
  }
};

addButton.addEventListener('click', addTodo);
taskInput.addEventListener('keypress', pressEnter);
