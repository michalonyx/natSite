const bio = [
        {
            text: '(b.1989) is a multimedia artist living and working in Krakow, Poland. She was a student at the Faculty of Graphic Arts at the Jan Matejko Academy of Fine Arts in Krakow (ASP) between 2008 - 2013. Wiernik pursued her doctoral studies at the Department of Animation, Photography and Digital Media at ASP and in 2017 she was awarded a PhD in Fine Arts. She also works at ASP as a lecturer.',
            specialText: '',
            textContinuation: ''
        }, {
            text: 'In her artistic practice, she analyzed issues related to the broadly defined concept of identity, its formation in the process of remembering, site-specific activities, and in the perspective of interpersonal relations at the level of family and society, e.g. in cultivated traditions. In this context, the institution of museum, its role in creating collections and its potential to shape social consciousness has become an area of interest for her.',
            specialText: '',
            textContinuation: ''
        }, {
            text: 'In 2017, Natalia and photographer Omar Marques prepared an exhibition ',
            specialText: ' R E F U G E E S ',
            textContinuation: ', in which they focused on the topic of migration and the plight of refugees\' in contemporary Europe. They are currently working on a book, where together with specialists in various fields they focus on the problem of exclusion in the context of the migration crisis, undertaking a critical analysis of press photography dealing with this area and its impact on public awareness. '
        }
    ]

bio.map((value) => {
    createBioNodes(value)
});

function createBioNodes(data) {
    const container = document.querySelector('#bio'),
    p = document.createElement('p')

    p.setAttribute('class', data.specialText ? 'info-bio-separated' : 'info-bio')
    p.innerText = data.text
    container.appendChild(p)

    if (data.specialText) {
        s = document.createElement('s')
        s.innerText = data.specialText
        p.appendChild(s)

        p.innerText += data.textContinuation
        container.appendChild(p)
    }
}