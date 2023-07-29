var addButton = document.querySelector('#add-btn');
const container = document.querySelector('.list');


addButton.addEventListener('click', (event) => {

    const input = document.querySelector('#input-todo');

    if (input.value != '') {
        const newLi = document.createElement('li');
        const newSpan = document.createElement('span');
        newSpan.innerHTML = input.value;
        newLi.append(newSpan)

        const span = document.createElement('button');
        span.innerHTML = '\u00d7';
        newLi.append(span);
        container.append(newLi);
    } else {
        alert('Please enter something to add!')
    }
    input.value = '';
    persistData();
})

container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
        persistData();
    }
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        persistData();
    }
    if (event.target.tagName === 'SPAN') {
        event.target.parentElement.classList.toggle('checked');
        persistData();
    }
})

function persistData() {
    localStorage.setItem('todo', container.innerHTML);
}