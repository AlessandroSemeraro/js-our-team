//creare un array di oggetti per rappresentare i membri del team//

const teamListMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        picture: './img/wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        picture: './img/angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        picture: './img/walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        picture: './img/angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        picture: './img/scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        picture: './img/barbara-ramos-graphic-designer.jpg'
    }
]
//Ciclo in + stampo in console//
for (let key in teamListMembers) {
    console.log(teamListMembers[key])
}

//prendo section da html//
    const containerMemberCards = document.querySelector('main section.user-list')
    console.log(containerMemberCards)


//ciclo for per ogni membro//
for(let index=0 ; index < teamListMembers.length ; index++){

    //scorro lista//
    const teamList = teamListMembers[index];

    //creo article//
    const memberCardElement = document.createElement('article');

    //vado a inserire nell html//
    memberCardElement.innerHTML=` 
    <h2> ${teamList.nome} </h2>
    <h2> ${teamList.ruolo} </h2>
    <div class="image">
    <img src= " ${teamList.picture} " alt=" ${teamList.name} picture">
    </div>
    `;
    containerMemberCards.appendChild(memberCardElement);
}
