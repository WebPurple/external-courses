const userButton = document.querySelector('.header__user-wrapper');
const userList = document.querySelector('.header__user-list');

userButton.addEventListener('click', expandList = () => {
    const userContainer = document.querySelector('.header__user-container');
    const userArrow = document.querySelector('.header__user-arrow');
    const newContainer = document.createElement('div');

    if (userContainer === null) {
        const ulElement = document.createElement('ul');
        const links = [{ title: 'My account', link: '#' }, { title: 'My project', link: '#' },
         { title: 'My tasks', link: '#' }, { title: 'Help', link: '#' }, 
         { title: 'Sign in', link: '#' }, { title: 'Sign out', link: '#' }];

        ulElement.classList.add("header__user-items");

        userList.appendChild(newContainer);

        newContainer.appendChild(ulElement)

        newContainer.classList.add("header__user-container");

        links.forEach(elem => {
            const liElement = document.createElement('li');

            liElement.classList.add("header__user-item");

            ulElement.append(liElement);

            liElement.innerHTML = elem.title;

            liElement.setAttribute('href', `${elem.link}`);
        });
    }

    if (userContainer !== null) {
        userContainer.remove();

        userArrow.setAttribute('src', 'images/arrow-down.png');
    }
});
