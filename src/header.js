function loadHeader() {
    const header = document.createElement('div');
    header.setAttribute('class', 'header');

    const logo = document.createElement('div');
    logo.setAttribute('class', 'logo');
    const logoText = document.createElement('div');
    const logoImg = document.createElement('img');
    logoText.textContent = 'To Do List';
    logoImg.setAttribute('src', './images/logo.png');
    logo.appendChild(logoImg);
    logo.appendChild(logoText);
    header.appendChild(logo);

    const addItem = document.createElement('button');
    const addIcon = document.createElement('img');
    addIcon.setAttribute('src', './images/plus-box.png');
    addItem.textContent = 'Add New Task';
    addItem.appendChild(addIcon);
    header.appendChild(addItem);

    return header;
}

export default loadHeader