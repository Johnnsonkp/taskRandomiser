
const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
const randomBtn = document.getElementById('random')
const resetBtn = document.getElementById('reset')
const addBtn = document.getElementById('add')
const completeBtn = document.getElementById('complete')
const hideSpans = document.querySelectorAll('.new-tag')
let completeArr = []

let arr = []
let i = 0;

textarea.addEventListener('keyup', (e) => {

    hideSpans.forEach((span) => {
        span.remove();
    })
})

addBtn.addEventListener('click', () => {
    createTags(textarea.value)
})


randomBtn.addEventListener('click',() =>{
    setTimeout(() => {
        randomSelect()
    }, 10)
})

resetBtn.addEventListener('click', () => {
    window.location.reload()
})


function createTags(input) {
    allTaskComplete(input)

    console.log(input)
    // input = input.split('.').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    const tags = input
    const tagEl = document.createElement('div')
    tagEl.classList.add('tag')
    // tagEl.classList.add('new-tag')
    arr.push(tags)
    tagEl.innerHTML = `

        <span class="todos">${i + 1}. ${arr[i]}</span>
    
    `
    tagsEl.appendChild(tagEl)
    i++

    textarea.value = ''
    
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)
        
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
            completedTask(randomTag)
            
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    
    // const tagsArr = []
    const tags = document.querySelectorAll('.tag')
    let random = tags[Math.floor(Math.random() * tags.length)];

    if(!completeArr.includes(random)) return random
    while (completeArr.includes(random)) return pickRandomTag()
   
}


function indexCheck(input){
    const tags = document.querySelectorAll('.tag');

    if(tags.includes(input)){
        console.log('yes');
    }
}

let start = Date.now();
let end = start + 5000;

function completedTask(input) {
    completeBtn.addEventListener('click', () => {
        input.innerHTML=`<del>${input.innerHTML}</del>`;
        input.classList.add('disabled');

        completeArr.push(input)
        
        start = Date.now();
        end = start + 5000;

        function confettiFunc() {
            start = Date.now(); // Get the date currently
            /* Your code here */
            const confetti = document.querySelector('.confetti').classList.remove('display-none')
            if(start > end) {
                const confetti = document.querySelector('.confetti').classList.add('display-none')
                clearInterval(timer); // If we are 5 seconds later clear interval
            }
        }
        const timer = setInterval(confettiFunc, 100);
        allTaskComplete(input)
    })
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}

let taskArr = []
let counter = []

function allTaskComplete(input) {
    taskArr.push(input)

    taskArr.forEach((tag) => {
        if(tag.className === "tag highlight disabled"){
            counter.push(tag)
        }
        if(counter.length === taskArr.length){
            return alert("All task are completed!! congrats!")
        }
    })
    
}
///////////////////////////////////////////////////////
function randomFunction(){
    let scope = document.getElementById('next')

    scope.addEventListener('click', (e) => {
        textarea.value = ''
        createTags(e.target.value)

        randomiseTags()
    })


    tags.forEach(tag,(e) => {
        let arr = []

        arr.push(tag)
        tagsEl.appendChild(arr)
    })
}


function anotherRandomFunction(){
    let scope = document.getElementById('next')

    scope.addEventListener('click', (e) => {
        textarea.value = ''
        createTags(e.target.value)

        randomiseTags()
    })


    tags.forEach(tag,(e) => {
        let arr = []

        arr.push(tag)
        tagsEl.appendChild(arr)
    })
}

function anotherRandomFunction(){
    let scope = document.getElementById('next')

    scope.addEventListener('click', (e) => {
        textarea.value = ''
        createTags(e.target.value)

        randomiseTags()
    })


    tags.forEach(tag,(e) => {
        let arr = []

        arr.push(tag)
        tagsEl.appendChild(arr)
    })
}