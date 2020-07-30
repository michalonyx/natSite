const publications = [
    {
        title: 'British Journal of Photography',
        beginItalic: 'http://www.bjp-online.com/2016/08/understanding-the-value-of-places-with-natalia-wiernik/',
        description: '',
        endItalic: ''
    }, {
        title: 'NEOmag',
        beginItalic: 'http://neomag.it/?portfolio=un-talento-emergente-in-cerca-didentita-natalia-wiernik',
        description: '',
        endItalic: ''
    }, {
        title: 'FIGARO',
        beginItalic: '',
        description: 'special photo-session dedicated for Figaro, one of the most important magazine in France',
        endItalic: ''
    }, {
        title: 'L\'OBS',
        beginItalic: '',
        description: 'portfolio presented in edition 2652 du 3 au 9 september 2015',
        endItalic: ''
    }, {
        title: 'The Guardian ',
        beginItalic: '',
        description: 'publication of ',
        endItalic: 'The Protagonists'
    }, {
        title: 'BBC',
        beginItalic: '',
        description: 'publication on the website',
        endItalic: ''
    }, {
        title: 'PHOTOGRAPHIE ',
        beginItalic: '',
        description: 'Germany interview with 10/2015',
        endItalic: ''
    }, {
        title: 'SLATE MAG',
        beginItalic: '',
        description: 'New York, interview David Rosenberg',
        endItalic: ''
    }, {
        title: 'BOOK DEBUTS 2014',
        beginItalic: '',
        description: '',
        endItalic: ''
    }, {
        title: 'HUMBLE ARTS FOUNDATION',
        beginItalic: 'New Cats in Art Photography ',
        description: 'group show nr 41, 2014',
        endItalic: ''
    }, {
        title: 'FEATURE SHOOT',
        beginItalic: '',
        description: 'New York 2014 , article Jenna Garrota',
        endItalic: ''
    }, {
        title: 'FOTOHITS',
        beginItalic: '',
        description: 'Gemany, 2013, interview Dirk Hartmann',
        endItalic: ''
    }, {
        title: 'Taxidesign',
        beginItalic: '',
        description: 'New York 2014, article Jillian Wong',
        endItalic: ''
    }
]

function publicationsFunc() {
    const container = document.querySelector('#publications'),
    span = document.createElement("span")
    
    span.setAttribute('class', 'about-info--italic')
    span.innerText = 'Selected Publications'
    
    container.appendChild(span)
    
    publications.map((value) => {
        createPubNodes(value, container)
    });
    
    span.setAttribute('class', 'about-info--italic')
    span.innerText = '(And many others)'
    container.appendChild(span)
}

function createPubNodes(data, container) {
    const p = document.createElement('p'),
    span = document.createElement('span')

    p.setAttribute('class', 'about-info--header')
    p.innerText = data.title
    container.appendChild(p)

    if (data.beginItalic) {
        span.setAttribute('class', 'about-info--italic')
        span.innerText = data.beginItalic
        container.appendChild(span)
    }

    if (data.description) {
        container.appendChild(document.createTextNode(data.description))
    }

    if (data.endItalic) {
        span.setAttribute('class', 'about-info--italic')
        span.innerText = data.beginItalic
        container.appendChild(span)
    }
}

publicationsFunc()
