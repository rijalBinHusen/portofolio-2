export const isMobile = () => {
    const screenWidth  = window.innerWidth < window.screen.width ? window.innerWidth : window.screen.width;
    console.log(screenWidth)
    return screenWidth <= 768;
}