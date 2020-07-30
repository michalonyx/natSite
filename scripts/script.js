//window.onload = () => alert("This website is under construction, more updates and content will appear soon.")

const toggleSelectors = {
    showAll: [
        {selector: '.menu-button--close', parameter: 'display', value: 'none'},
        {selector: '.menu-button--about', parameter: 'display', value: 'block'},
        {selector: '.natSite-about', parameter: 'opacity', value: '0'},
        {selector: '.natSite-body', parameter: 'opacity', value: '1', nextValue: 'block'},
        {selector: '.natSite-menu', parameter: 'background-color', value: 'transparent'},
        {selector: '.natSite-menu', parameter: 'border-bottom', value: 'none'},
        {selector: '.footer-menu', parameter: 'opacity', value: '1', nextValue: 'flex'}
    ],
    showAbout: [
        {selector: '.menu-button--close', parameter: 'display', value: 'block'},
        {selector: '.menu-button--about', parameter: 'display', value: 'none'},
        {selector: '.natSite-about', parameter: 'opacity', value: '1', nextValue: 'flex'},
        {selector: '.natSite-body', parameter: 'opacity', value: '0'},
        {selector: '.natSite-menu', parameter: 'background-color', value: 'white'},
        {selector: '.natSite-menu', parameter: 'border-bottom', value: '1px solid #000000'},
        {selector: '.footer-menu', parameter: 'opacity', value: '0'}
    ]
}

function showAll() {
    toggleSelectors.showAll.map((data) => toggle(data.selector, data.value, data.parameter, data.nextValue))
}

function showAbout() {
    toggleSelectors.showAbout.map((data) => toggle(data.selector, data.value, data.parameter, data.nextValue))
}

function toggle(selector, value, parameter, nextValue) {
    
    if (parameter === 'opacity' && value === '0') {
        document.querySelector(selector).style[parameter] = value;
        setTimeout(() => document.querySelector(selector).style.display = 'none', 1000)
    } else if (parameter === 'opacity' && value === '1') {
        setTimeout(() => {
            document.querySelector(selector).style.display = nextValue
            document.querySelector(selector).style[parameter] = value;
        }, 1000)
    } else {
        document.querySelector(selector).style[parameter] = value;
    }
    
}

const mainMinisterstwoSelector = document.querySelector('.natSite-ministerstwo-label')

mainMinisterstwoSelector.addEventListener('mouseover', () => {
    document.querySelector('.natSite-ministerstwo-img').style.opacity = 1
})

mainMinisterstwoSelector.addEventListener('mouseout', () => {
    document.querySelector('.natSite-ministerstwo-img').style.opacity = 0
})