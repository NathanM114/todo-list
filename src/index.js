import loadPage from "./loadPage.js"
import loadPlaceholder from './newTask.js'

loadPage();

document.addEventListener('DOMContentLoaded', loadPlaceholder(5));