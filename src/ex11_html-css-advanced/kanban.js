let mark = true;
const userMenu = document.createElement('div');

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

module.exports = userList;
