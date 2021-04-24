const listTemplate = `
    <ul class="header__user-items">
        <li class="header__user-item"><a href="#" class="header__user-link">My account</a></li>
        <li class="header__user-item"><a href="#" class="header__user-link">My project</a></li>
        <li class="header__user-item"><a href="#" class="header__user-link">My tasks</a></li>
        <li class="header__user-item"><a href="#" class="header__user-link">Help</a></li>
        <li class="header__user-item"><a href="#" class="header__user-link">Sign in</a></li>
        <li class="header__user-item"><a href="#" class="header__user-link">Sign out</a></li>
    </ul>
`;

const userButton = document.querySelector('.header__user-wrapper');
const userList = document.querySelector('.header__user-list');

userButton.addEventListener('click', expandList = () => {
    const userContainer = document.querySelector('.header__user-container');
    const userArrow = document.querySelector('.header__user-arrow');
    const newContainer = document.createElement('div');

    if (userContainer === null) {
        newContainer.classList.add("header__user-container");
      
        newContainer.innerHTML = listTemplate;
      
        userList.appendChild(newContainer);

        userArrow.setAttribute('src', 'images/arrow-up.png');
    }

    if (userContainer !== null) {
        userContainer.remove();

        userArrow.setAttribute('src', 'images/arrow-down.png');
    }   
});
