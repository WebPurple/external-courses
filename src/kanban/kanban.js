let mark = true;
const userMenu = document.createElement('div');
const main = document.querySelector('#main');

const boards = [
  {
    title: 'backlog',
    issues: [ // массив задач
      {
        id: 'task1',
        name: 'Login page &mdash; performance issues',
      },
      {
        id: 'task2',
        name: 'Sprint bugfix',
      },
    ],
  },
  {
    title: 'ready',
    issues: [ // массив задач
      {
        id: 'task1',
        name: 'Shop page &mdash; performance issues',
      },
      {
        id: 'task2',
        name: 'Sprint bugfix',
      },
      {
        id: 'task3',
        name: 'Shop bug1',
      },
      {
        id: 'task4',
        name: 'Shop bug2',
      },
    ],
  },
  {
    title: 'inprogress',
    issues: [ // массив задач
      {
        id: 'task1',
        name: 'User page &mdash; performance issues',
      },
      {
        id: 'task2',
        name: 'Auth bugfix',
      },
    ],
  },
  {
    title: 'finished',
    issues: [ // массив задач
      {
        id: 'task1',
        name: 'Main page &mdash; performance issues',
      },
      {
        id: 'task2',
        name: 'Main page bugfix',
      },
    ],
  },
  // code
];

if (localStorage.getItem('boards') === null) {
  localStorage.setItem('boards', JSON.stringify(boards));
}

const boardsMocks = JSON.parse(localStorage.getItem('boards'));

function createTaskBacklog(item, newBoard, span3Board) {
  localStorage.setItem('boards', JSON.stringify(boardsMocks));
  const inputTask = document.createElement('input');
  newBoard.insertBefore(inputTask, span3Board);
  inputTask.classList.add('inputTask');

  inputTask.addEventListener('focusout', () => {
    const newTask = document.createElement('div');
    newTask.innerHTML = `${inputTask.value}`;
    item.issues.push({ id: `task${item.issues.length + 1}`, name: `${inputTask.value}` });
    localStorage.setItem('boards', JSON.stringify(boardsMocks));
    newBoard.insertBefore(newTask, span3Board);
    newTask.classList.add('task');
    newTask.id = `task${item.issues.length + 1}`;
    inputTask.remove();
  });
}

function createTaskAnother(item, newBoard, span3Board, i) {
  localStorage.setItem('boards', JSON.stringify(boardsMocks));
  const selectTask = document.createElement('select');
  newBoard.insertBefore(selectTask, span3Board);
  selectTask.classList.add('selectTask');
  for (let k = 0; k < boardsMocks[i - 1].issues.length; k += 1) {
    const optionTask = document.createElement('option');
    optionTask.textContent = `${boardsMocks[i - 1].issues[k].name}`;
    selectTask.appendChild(optionTask);
  }

  selectTask.addEventListener('focusout', () => {
    const newTask = document.createElement('div');
    newTask.innerHTML = `${selectTask.value}`;
    newBoard.insertBefore(newTask, span3Board);
    newTask.classList.add('task');
    newTask.id = `task${item.issues.length + 1}`;
    item.issues.push({ id: `task${item.issues.length + 1}`, name: `${selectTask.value}` });
    localStorage.setItem('boards', JSON.stringify(boardsMocks));

    selectTask.remove();

    for (let k = 0; k < boardsMocks[i - 1].issues.length; k += 1) {
      if (`${selectTask.value}` === `${boardsMocks[i - 1].issues[k].name}`) {
        boardsMocks[i - 1].issues.splice(k, 1);
        localStorage.setItem('boards', JSON.stringify(boardsMocks));
        const previous = newBoard.previousElementSibling;
        previous.childNodes[k + 2].remove();
      }
    }
  });
}

function createBoard() {
  for (let i = 0; i < boardsMocks.length; i += 1) {
    const item = boardsMocks[i];
    const newBoard = document.createElement('div');
    main.appendChild(newBoard);
    newBoard.id = item.title;
    newBoard.classList.add('container');

    const span1Board = document.createElement('span');
    span1Board.innerHTML = `${item.title.charAt(0).toUpperCase() + item.title.slice(1)}`;
    span1Board.classList.add('span1');
    newBoard.appendChild(span1Board);

    const span2Board = document.createElement('span');
    span2Board.innerHTML = '&middot;&middot;&middot;';
    span2Board.classList.add('span2');
    newBoard.appendChild(span2Board);

    for (let j = 0; j < item.issues.length; j += 1) {
      const newTask = document.createElement('div');
      newTask.innerHTML = `${item.issues[j].name}`;
      newBoard.appendChild(newTask);
      newTask.classList.add('task');
      newTask.id = item.issues[j].id;
    }

    const span3Board = document.createElement('span');
    span3Board.innerHTML = '+ Add card';
    span3Board.classList.add('span3');
    newBoard.appendChild(span3Board);
    span3Board.addEventListener('click', () => {
      if (newBoard.id === 'backlog') {
        createTaskBacklog(item, newBoard, span3Board);
      } else if (boardsMocks[i - 1].issues.length > 0) {
        span3Board.classList.add('span3');
        createTaskAnother(item, newBoard, span3Board, i);
      } else {
        span3Board.classList.add('span3-disable');
        span3Board.classList.remove('span3');
      }
    });
  }
}

function userList() {
  if (mark) {
    userMenu.classList.add('dropdown-menu');
    userMenu.id = 'dropdown-menu';
    document.body.append(userMenu);

    let container = '<div class="dropdown-item">My account</div>';
    container += '<div class="dropdown-item">My tasks</div>';
    container += '<div class="dropdown-item">Log out</div>';
    document.getElementById('dropdown-menu').innerHTML = container;
    document.getElementById('arow-down').innerHTML = '&lsaquo;';
    mark = false;
  } else {
    document.getElementById('arow-down').innerHTML = '&rsaquo;';
    userMenu.remove();
    mark = true;
  }
}

createBoard();

module.exports = userList;
