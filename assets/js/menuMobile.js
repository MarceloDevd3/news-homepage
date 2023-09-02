function btnOpen() {
    let shadow = document.querySelectorAll('#shadow, #list, #none')
    for(let i = 0; i < shadow.length; i++) {
        shadow[i].classList.add('active')
    }
}


function closeOut() {
    let out =  document.querySelectorAll('#shadow, #list, #none')
    for(let i = 0; i < out.length; i++) {
        out[i].classList.remove('active')
    }
}
