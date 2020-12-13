import './main.css';


function createContainer() {
    let container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = '<p>Hello, there</p>';
    document.body.appendChild(container);
}

createContainer();