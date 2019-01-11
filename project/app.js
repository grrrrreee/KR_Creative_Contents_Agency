const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const taskInput2 = document.querySelector('#task2');

loadEventListners();

function loadEventListners() {
    form.addEventListener('submit', login);
}

function login(e) {
    if(taskInput.value === '') {
        alert('아이디를 입력해주세요');
    }

    if(taskInput2.value === '') {
        alert('비밀번호를 입력해주세요');
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className ='delete-item secondary-content';
    link.innerHTML ='<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskInput.value='';
    e.prevenetDefault();
}