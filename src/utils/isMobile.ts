export const isMobile = () => {
    const screenWidth  = window.innerWidth < window.screen.width ? window.innerWidth : window.screen.width;
    return screenWidth <= 768;
}