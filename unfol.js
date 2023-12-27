function unfol() {
    console.log(Math.random())
    document.querySelectorAll(`._acan._acap._acat._aj1-._ap30`)[0].click()
    setTimeout(() => {
        document.querySelector(`[class="_a9-- _ap36 _a9-_"]`).click()
        setTimeout(unfol, Math.floor(Math.random() * 3000) + 2500)
    }, Math.floor(Math.random() * 750) + 500)
}
unfol()