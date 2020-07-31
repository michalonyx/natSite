const awards = [
    {
        year: '2016',
        description: 'Laureate - Sejsmograf Bunkier Sztuki Gallery of Contemporary Art, Cracow, Poland'
    }, {
        year: '2016',
        description: 'Finalist - Voies-off, Photography Festival in Arles, France'
    }, {
        year: '2015',
        description: 'Finalist - Photography Festival in Braga ENCONTROS DA IMAGEM'
    }, {
        year: '2015',
        description: 'Shotlisted - Villa Noailles, France, International Festival of Fashion and Photography in Hyeres'
    }, {
        year: '2015',
        description: 'Winner - Celest Prize, Visible White, Florence'
    }, {
        year: '2014',
        description: 'Winner - PDN Photo Annual, New York'
    }, {
        year: '2014',
        description: 'Honourable Mention - International Photography Awards (IPA), Los Angeles'
    }, {
        year: '2013',
        description: 'Winner - One Eyeland Awards, Silver Medal for the series The Protagonists'
    }, {
        year: '2013 ',
        description: 'Finalist - New York Photography Awards'
    }, {
        year: '2013 ',
        description: 'Winner - Sony World Photography Awards, Student Focus, London'
    }, {
        year: '2013',
        description: 'Finalist - Sony World Photography Awards Open Competition – People Category'
    }, {
        year: '2013 ',
        description: 'Semifinalist - Adobe Design Achievments Awards'
    }, {
        year: '2012 ',
        description: 'Laureate - International Photography Confrontation, Just One Photo, prize from the Foundation Photography for the future, Poland'
    }, {
        year: '2012 ',
        description: 'Semifinalist - international contest Adobe Design Achievments Awards'
    }, {
        year: '2011',
        description: 'Chosen to represent the country at an international contest in Munich, Münchner Künstlerhaus Goldener Kentaur Sein und Schein'
    }
]

function awardsFunc() {
    const container = document.querySelector('#awards'),
    span = document.createElement("span")
    
    span.setAttribute('class', 'about-info--italic')
    span.innerText = 'Awards, selected achievements'
    
    container.appendChild(span)
    
    awards.map((value) => {
        createAwaNodes(value, container)
    });
}

function createAwaNodes(data, container) {
    const p = document.createElement('p'),
    span = document.createElement('span')

    p.setAttribute('class', 'about-info--header')
    p.innerText = data.year
    container.appendChild(p)

    container.appendChild(document.createTextNode(data.description))
}

awardsFunc()
