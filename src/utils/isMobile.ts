export const isMobile = () => {
    const screenWidth  = window.innerWidth;
    console.log(screenWidth)
    return screenWidth <= 768;
}