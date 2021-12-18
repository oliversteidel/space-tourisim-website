import { createStore } from "vuex";

export default createStore({
  state: {
    moons: [
      {
        name: "moon",
        descText:
          "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites",
        distance: "384,400 km",
        travelTime: "3 days",
        imgURL: "../assets/destination/image-moon.webp",
        isSelected: true,
      },
      {
        name: "mars",
        descText:
          "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        distance: "225 mil. km",
        travelTime: "9 month",
        imgURL: "../assets/destination/image-mars.webp",
        isSelected: false,
      },
      {
        name: "europa",
        descText:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin",
        distance: "628 mil. km",
        travelTime: "3 years",
        imgURL: "../assets/destination/image-europa.webp",
        isSelected: false,
      },
      {
        name: "titan",
        descText:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundret degrees colder!). As a bonus, you get striking views of the rings of Saturn.",
        distance: "1.6 bil km",
        travelTime: "7 years",
        imgURL: "../assets/destination/image-titan.webp",
        isSelected: false,
      },
    ],
  },
  mutations: {
    toggleSelectedMoon(state, payload) {
      state.moons.forEach((moon) => {
        if (moon.name == payload) {
          moon.isSelected = true;
        } else {
          moon.isSelected = false;
        }
      });
    },
  },
  actions: {},
  modules: {},
});
