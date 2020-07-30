const scholarships = [
    {
        year: '2015',
        description: 'Grant holder from Rector of Academy of Fine Arts in Cracow for prominent achievments'
    }, {
        year: '2015',
        description: 'Grant holder from the Ministry of Higher Education, Poland'
    }, {
        year: '2014 ',
        description: 'Grant holder from Rector of Academy of Fine Arts in Cracow for prominent achievments'
    }, {
        year: '2014',
        description: 'Grant holder from the National Culture Center and Ministry of Culture and National Heritage (Young Poland), Poland'
    }, {
        year: '2014',
        description: 'Creative Scholarship of the Head of the City of Cracow'
    }, {
        year: '2013 ',
        description: 'Grant holder from Rector of Academy of Fine Arts in Cracow for prominent achievments'
    }, {
        year: '2013 ',
        description: 'Grant holder from the Ministry of Higher Education, Poland'
    }
]

function scholarshipsFunc() {
    const container = document.querySelector('#scholarships'),
    span = document.createElement("span")
    
    span.setAttribute('class', 'about-info--italic')
    span.innerText = 'Scholarships'
    
    container.appendChild(span)
    
    scholarships.map((value) => {
        createSchoNodes(value, container)
    });
}

function createSchoNodes(data, container) {
    const p = document.createElement('p'),
    span = document.createElement('span')

    p.setAttribute('class', 'about-info--header')
    p.innerText = data.year
    container.appendChild(p)

    container.appendChild(document.createTextNode(data.description))
}

scholarshipsFunc()
