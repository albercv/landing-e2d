import alber from '../images/team/alberto.png'
import mary from '../images/team/mary2.png'
import otto from '../images/team/otto.png'

export const TeamSectionData = {
    text: {
        sectionId: "team-section",
        title: "team.title",
        description: "team.description",
        dotsColor: "#FFFFFF"
    },
    slides: {
        alberto: {
            position: 0,
            image: alber,
            title: "Alberto Carrasco",
            text: "CEO",
            cssClass: "carousel-item",
        },
        mary: {
            position: 1,
            image: mary,
            title: "Mary Lagus",
            text: "Customer Manager",
            cssClass: "carousel-item",
        },
        fran: {
            position: 2,
            image: otto,
            title: "Otto Von Friedrich",
            text: "CTO",
            cssClass: "carousel-item",
        }
    }
};