//Create new task to add to page

function loadPlaceholder(n){
    for (let i = 0; i < n; i++){
        const element = document.createElement('div');
        element.setAttribute('class', 'item-container');

        const title = document.createElement('div');
        title.setAttribute('class', 'task-label');
        title.textContent = 'Task Title';

        const desc = document.createElement('div');
        desc.setAttribute('class', 'task-desc');
        desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'; 

        element.appendChild(title);
        element.appendChild(desc);


        const container = document.querySelector('.content');
        container.appendChild(element);
    }
}

export default loadPlaceholder;