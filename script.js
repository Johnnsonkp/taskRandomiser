const tagsEl = document.getElementById('tags')
// const tagsEl = document.getElementById('tag')
const textarea = document.getElementById('textarea')
const randomBtn = document.getElementById('random')
const resetBtn = document.getElementById('reset')
const addBtn = document.getElementById('add')
const completeBtn = document.getElementById('complete')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
    // addBtn.addEventListener('click', () => {
    //     e.target.value = ''
    // })
})

randomBtn.addEventListener('click',() =>{
    setTimeout(() => {
        randomSelect()
    }, 10)
})

resetBtn.addEventListener('click', () => {
    // createTags(e.target.value)

    // // e.target.value = '';
    // // textarea.innerHTML = '';
    // // tagsEl.innerHTML = '';

    // // textarea.value='';

    window.location.reload()
})

// addBtn.addEventListener('click', () => {
    
// })
function createTags(input) {

    addBtn.addEventListener('click', () => {

        // textarea.value='';

        const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
        tagsEl.innerHTML = '';

        // input = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
        // let tagArr = [];
        // tagArr.push(input.replace(/\n/g, ""));

        tagsEl.innerHTML = '';
        // textarea.value='';

        
        tags.forEach(tag => {
            const tagEl = document.createElement('span')
            tagEl.classList.add('tag')
            tagEl.innerText = tag
            tagsEl.appendChild(tagEl)
        })
    })
    
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