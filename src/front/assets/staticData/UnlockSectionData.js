import eye from '../images/fi-rr-eye.svg'
import dart from '../images/fi-rr-dart.svg'
import mountain from '../images/mountain.png'

export const UnlockSectionData = {
  text:{
    sectionId: "unlock-section",
    title: "unlock_section.title",
    description: "unlock_section.description",
    team: "unlock_section.team",
    dotsColor: '#293039'
  },
  slides: {
    vision: {
      position: 0,
      image: eye,
      title: "carousel.vision",
      text: "carousel.vision_text",
      cssClass: "carousel-item",
    },
    mission: {
      position: 1,
      image: dart,
      title: "carousel.mission",
      text: "carousel.mission_text",
      cssClass: "carousel-item",
    },
    goal: {
      position: 2,
      image: mountain,
      title: "carousel.goal",
      text: "carousel.goal_text",
      cssClass: "carousel-item",
    }
  }
};