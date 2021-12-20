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

        isSelected: true,
      },
      {
        name: "mars",
        descText:
          "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        distance: "225 mil. km",
        travelTime: "9 month",

        isSelected: false,
      },
      {
        name: "europa",
        descText:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin",
        distance: "628 mil. km",
        travelTime: "3 years",

        isSelected: false,
      },
      {
        name: "titan",
        descText:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundret degrees colder!). As a bonus, you get striking views of the rings of Saturn.",
        distance: "1.6 bil km",
        travelTime: "7 years",

        isSelected: false,
      },
    ],
    crew: [
      {
        name: "douglas hurley",
        title: "commander",
        descText:
          "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        isSelected: true,
      },
      {
        name: "mark shuttleworth",
        title: "mission specialist",
        descText:
          "Mark Richard Shuttleworth is the fouder and CEO of Canonical, the company behind the Linux-Based Ubuntu operating system. Shuttleworth became the first South African to travel to space and a space tourist.",
        isSelected: false,
      },
      {
        name: "victor glover",
        title: "pilot",
        descText:
          "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        isSelected: false,
      },
      {
        name: "anousheh ansari",
        title: "flight engineer",
        descText:
          "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        isSelected: false,
      },
    ],
    techs: [
      {
        name: "launch vehicle",
        descText:
          "A launch vehicle or carrier rocket is a rocket-poopelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch.",
        imgStringLandscape: "launch-vehicle-landscape",
        imgStringPortrait: "launch-vehicle-portrait",
        isSelected: true,
      },
      {
        name: "spaceport",
        descText:
          "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch",
        imgStringLandscape: "spaceport-landscape",
        imgStringPortrait: "spaceport-portrait",
        isSelected: false,
      },
      {
        name: "space capsule",
        descText:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spand your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained",
        imgStringLandscape: "space-capsule-landscape",
        imgStringPortrait: "space-capsule-portrait",
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
    toggleSelectedCrewMember(state, payload) {
      state.crew.forEach((member) => {
        if (member.name == payload) {
          member.isSelected = true;
        } else {
          member.isSelected = false;
        }
      });
    },
    toggleSelectedTech(state, payload) {
      state.techs.forEach((tech) => {
        if (tech.name == payload) {
          tech.isSelected = true;
        } else {
          tech.isSelected = false;
        }
      });
    },
  },
  actions: {},
  modules: {},
});
