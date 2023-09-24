import alber from '../images/team/alberto.png'
import mary from '../images/team/mary_v2.png'
import mavi from '../images/team/mavi.jpeg'

export const TeamSectionData = {
    text: {
        sectionId: "team-section",
        title: "team.title",
        description: "team.description",
        dotsColor: "#FFFFFF"
    },
    slides: {
        mary: {
            position: 0,
            image: mary,
            title: "Mary Lagus",
            text: "Customer Manager",
            cssClass: "carousel-item",
        },
        fran: {
            position: 2,
            image: mavi,
            title: "Mavi",
            text: "Graphic Designer",
            cssClass: "carousel-item",
        },
        alberto: {
            position: 2,
            image: alber,
            title: "Alberto Carrasco",
            text: "CEO",
            cssClass: "carousel-item",
        }
    }
};