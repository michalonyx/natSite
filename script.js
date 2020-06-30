window.onload = () => alert("This website is under construction, more updates and content will appear soon.")

function showAll() {
    document.querySelector('.menu-button--close').style.display = 'none'
    document.querySelector('.menu-button--about').style.display = 'block'
    document.querySelector('.natSite-about').style.display = 'none'
}

function showAbout() {
    document.querySelector('.menu-button--about').style.display = 'none'
    document.querySelector('.menu-button--close').style.display = 'block'
    document.querySelector('.natSite-about').style.display = 'flex'
}