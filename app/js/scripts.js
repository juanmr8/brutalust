

const headerTags = document.querySelectorAll("h1, h2")

const runRandom = etiqueta => {

    const originalContent = etiqueta.dataset.original
    let newContent = ""
    let num = 0
    const randomList = "abcdefghijlmnopqrstuvwxyz._$∂∫œå∫ƒ©√ß™†".split("")

    const addInterval = setInterval(() => {
        num = num + 1
        //the substring runs every 100ms adding "num" or a number or character
        //to the sentence using the let num statement
        newContent = originalContent.substring(0, num)
        if (originalContent == etiqueta.innerHTML) {
            clearInterval(addInterval)
            clearInterval(randomInterval)
        }
    }, 100)
    const randomInterval = setInterval(() => {
        etiqueta.innerHTML = newContent

        for (let i = newContent.length; i < originalContent.length; i = i + 1) {
            etiqueta.innerHTML = etiqueta.innerHTML + randomList[Math.floor(Math.random() * randomList.length)]
        }

    }, 50)

}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.5) {
            runRandom(entry.target)
        }
    })
}, {
    threshold: [0, 0.5, 1]
})


headerTags.forEach(etiqueta => {
    etiqueta.dataset.original = etiqueta.innerHTML
    observer.observe(etiqueta)
})