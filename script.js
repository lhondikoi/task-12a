advHolder = document.querySelector('#advice')
app = document.querySelector('#app')
btn = document.querySelector('.btn')

function getNewAdvice(initial) {
    if (!initial) {
        btn.style.opacity = 0
        advHolder.style.opacity = 0
        setTimeout(()=> {
            btn.style.opacity = 1
            advHolder.style.opacity = 1
        }, 1000)
    }
    fetch('https://api.adviceslip.com/advice')
    .then(r => r.json())
    .then(d => {
        advHolder.innerText = d.slip.advice;
    })
    .catch((e)=> {
        alert('There was an fetching the advice!')
    })
}

window.addEventListener('load', () => {
    getNewAdvice(true);
})