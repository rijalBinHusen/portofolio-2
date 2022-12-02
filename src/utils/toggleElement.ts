export const toggleElement = (elm: HTMLElement, isShow: boolean) => {
    if(isShow) {
        elm.classList.remove('hidden')
    } else {
        elm.classList.add('hidden')
    }
}