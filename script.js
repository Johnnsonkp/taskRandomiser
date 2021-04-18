
const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
const randomBtn = document.getElementById('random')
const resetBtn = document.getElementById('reset')
const addBtn = document.getElementById('add')
const completeBtn = document.getElementById('complete')
const hideSpans = document.querySelectorAll('.new-tag')

// textarea.focus()
let arr = []
let i = 0;

textarea.addEventListener('keyup', (e) => {

    hideSpans.forEach((span) => {
        span.classList.add('display-none')
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
    // input = input.split('.').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    const tags = input
    const tagEl = document.createElement('div')
    tagEl.classList.add('tag')
    tagEl.classList.add('new-tag')
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
    const tags = document.querySelectorAll('.tag')
    // return tags[Math.floor(Math.random() * tags.length)];
    return tags[Math.floor(Math.random() * tags.length)];
    
}


function indexCheck(input){
    const tags = document.querySelectorAll('.tag');

    if(tags.includes(input)){
        console.log('yes');
    }
}

function completedTask(input) {
    completeBtn.addEventListener('click', () => {
        input.innerHTML=`<del>${input.innerHTML}</del>`;
        input.classList.add('disabled');

    })
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
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