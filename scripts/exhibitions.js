const exhibitions = [
    {
        year: '2019',
        additionalInfo: '',
        title: 'All tommorows',
        description: 'TIFF Photography Festival, BWA Wroclaw, curator: Beata Bartecka, group exhibition, Wroclaw, Poland'
    }, {
        year: '2019',
        additionalInfo: '',
        title: 'The Situation Has Changed. 20th and 21st- Century Polish Art',
        description: 'group exhibition, National Museum in Krakow'
    }, {
        year: '2018',
        additionalInfo: '',
        title: 'Artsite Residenze',
        description: 'Reali Phanes, group exhibition, Tourin, Italy'
    }, {
        year: '2018',
        additionalInfo: '',
        title: 'Humble Cats',
        description: 'Photoville, group exhibition, Brooklyn, New York'
    }, {
        year: '2018',
        additionalInfo: '',
        title: 'In Control',
        description: 'group exhibition, Anya Tish Gallery, Houston, Texas'
    }, {
        year: '2017',
        additionalInfo: '',
        title: '#Heritage',
        description: 'National Museum in Krakow, group Exhibition, Natalia Wiernik Wota, Poland'
    }, {
        year: '2017',
        additionalInfo: '',
        title: 'Common field',
        description: 'group exhibition, Forum Przestrzenie, Krakow, Poland'
    }, {
        year: '2017',
        additionalInfo: '',
        title: 'Refugees. Images of the unseen',
        description: 'cooperation with Omar Marques, Tytano, Dolnych Młynów 10, Krakow, Poland'
    }, {
        year: '2017',
        additionalInfo: '',
        title: 'La Quatrieme image',
        description: 'Photography Festival, Paris, France'
    }, {
        year: '2017',
        additionalInfo: '',
        title: 'Cracow in the box',
        description: 'Historical Museum Of The City of Cracow, Cracow, Poland'
    }, {
        year: '2016',
        additionalInfo: 'Solo show: ',
        title: 'Salty bread',
        description: 'The Cracow Salt Works Museum at Wieliczka, Poland'
    }, {
        year: '2016',
        additionalInfo: '',
        title: 'Anomalies/Cognition-recognition',
        description: 'Gallery ASP Cracow, Poland'
    }, {
        year: '2016',
        additionalInfo: 'Manifessta 11, Performance',
        title: 'What people do for money',
        description: 'with Eleonora Stassi in Cabaret Voltaire, Zürich, Switzerland'
    }, {
        year: '2016',
        additionalInfo: 'Solo show: ',
        title: 'Owned',
        description: 'Migrations Museum, Zürich, Switzerland'
    }, {
        year: '2016',
        additionalInfo: '',
        title: 'Nuits de projections',
        description: 'Voies off Photography Festival, Arles, France'
    }, {
        year: '2016',
        additionalInfo: 'Solo show: ',
        title: 'Wellfare',
        description: 'Biennale, International FOTO FEST Houston (Texas), USA'
    }, {
        year: '2016',
        additionalInfo: 'Solo show: ',
        title: 'Display',
        description: ' Gallery Academy of Fine Arts in Cracow, Poland'
    }, {
        year: '2015',
        additionalInfo: '',
        title: 'Less',
        description: 'Museum of History of Photography, Cracow'
    }, {
        year: '2015',
        additionalInfo: '',
        title: 'Nord Art Festival',
        description: 'Büdelsdorf, Germany'
    }, {
        year: '2015',
        additionalInfo: '',
        title: 'FAMILYDOM',
        description: 'fsm Gallery, Florance, Italy'
    }, {
        year: '2015',
        additionalInfo: '',
        title: 'Break',
        description: 'Garden of Arts in Lesser Poland, Cracow'
    }, {
        year: '2015',
        additionalInfo: 'Solo show: ',
        title: 'Thanksgiving',
        description: 'Pusta Gallery, Katowice, Poland'
    }, {
        year: '2014',
        additionalInfo: '',
        title: '',
        description: 'Powerhouse Arena, Brooklyn, New York, USA'
    }, {
        year: '2014',
        additionalInfo: '',
        title: '',
        description: 'New York Photography Festival, New York, USA'
    }, {
        year: '2013',
        additionalInfo: '',
        title: 'The Protagonists',
        description: 'General German Consulate in Cracow'
    }, {
        year: '2013',
        additionalInfo: 'Solo show: ',
        title: 'Thanksgiving',
        description: 'Pauza Gallery, Cracow, Poland'
    }, {
        year: '2013',
        additionalInfo: '',
        title: '',
        description: 'International Festival Art&Fashion in Poznań, Poland'
    }, {
        year: '2013',
        additionalInfo: '',
        title: '',
        description: 'Palace of Art in Cracow, Poland'
    }, {
        year: '2013',
        additionalInfo: '',
        title: '',
        description: 'Somerset House, London, UK'
    }, {
        year: '2012',
        additionalInfo: '',
        title: 'Place',
        description: 'General German Consulate, Poland'
    }, {
        year: '2011',
        additionalInfo: '',
        title: 'Sein und Schein',
        description: 'Münich, Germany'
    }
]

function exhibitionsFunc() {
    const container = document.querySelector('#exhibitions'),
    span = document.createElement("span")
    
    span.setAttribute('class', 'about-info--italic')
    span.innerText = 'Selected exhibitions'
    
    container.appendChild(span)
    
    
    exhibitions.map((value) => {
        createExhNodes(value, container)
    });
}

function createExhNodes(data, container) {
    const p = document.createElement('p'),
    span = document.createElement('span')

    p.setAttribute('class', 'about-info--header')
    p.innerText = data.year
    container.appendChild(p)

    if (data.additionalInfo) {
        let text = document.createTextNode(data.additionalnfo + ' ')
        container.appendChild(text)
    }

    if (data.title) {
        span.setAttribute('class', 'about-info--italic')
        span.innerText = data.title + ', '
        container.appendChild(span)
    }

    container.appendChild(document.createTextNode(data.description))
}

exhibitionsFunc();