const tagsEl = document.getElementById('tags')
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
            // e.target.value = ''
        }, 10)

        randomSelect()
    }
})

randomBtn.addEventListener('click',() =>{
    setTimeout(() => {
        randomSelect()
    }, 10)
})

resetBtn.addEventListener('click', (e) => {
    createTags(e.target.value)

    e.target.value = '';
    textarea.innerHTML = '';
    tagsEl.innerHTML = '';
})

function createTags(input) {
    
    // addBtn.addEventListener('click', () => {
    //     const space = " ";
    //     const tags = input.split(space).filter(tag => tag.trim() !== '').map(tag => tag.trim())

    //     tagsEl.innerHTML = ''

    //     tags.forEach(tag => {
    //     const tagEl = document.createElement('span')
    //     tagEl.classList.add('tag')
    //     tagEl.innerText = tag
    //     tagsEl.appendChild(tagEl)
    //     })
    // })

    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
       const tagEl = document.createElement('span')
       tagEl.classList.add('tag')
       tagEl.innerText = tag
       tagsEl.appendChild(tagEl)
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
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    const randomTag = tags[Math.floor(Math.random() * tags.length)]

    // console.log(randomTag);

    // const index = tags.indexOf(randomTag);
    // tags.splice(index, 1)

    indexCheck(randomTag)

    return randomTag

    // completedTask(randomTag);

}

function indexCheck(input){
    const tags = document.querySelectorAll('.tag');

    if(tags.includes(input)){
        console.log('yes');
    }
}

function completedTask(input) {
    completeBtn.addEventListener('click', () => {
        input.style.textDecoration = "underline overline";
    })
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}