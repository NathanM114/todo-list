//Create page template
import loadHeader from './header.js'
import loadSidebar from './sidebar.js'

function loadPage() {
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    main.appendChild(loadHeader());
    main.appendChild(loadSidebar());
    main.appendChild(loadContentContainer());
    document.body.appendChild(main);    
}

function loadContentContainer() {
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('class', 'content');

    return contentContainer;
}

export default loadPage;