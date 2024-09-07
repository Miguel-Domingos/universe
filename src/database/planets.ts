import type { Planets } from "@/types";
const planets: Planets = {
  mercury: {
    name: "Mercury",
    description:
      "The smallest planet in our solar system and closest to the Sun, Mercury has a thin atmosphere and is scorching hot during the day and freezing at night.",
    day: "1,408 hours",
    year: "88 Earth days",
    radius: "1,516 miles | 2,440 kilometers",
    planet_type: "Terrestrial",
    moons: 0,
  },
  venus: {
    name: "Venus",
    description:
      "Venus is the hottest planet in our solar system with a thick, toxic atmosphere and temperatures hot enough to melt lead.",
    day: "5,832 hours",
    year: "225 Earth days",
    radius: "3,760 miles | 6,052 kilometers",
    planet_type: "Terrestrial",
    moons: 0,
  },
  earth: {
    name: "Earth",
    description:
      "Earth is the only planet known to support life, with vast oceans, a diverse atmosphere, and a magnetic field that protects the planet from solar radiation.",
    day: "24 hours",
    year: "365.25 days",
    radius: "3,959 miles | 6,371 kilometers",
    planet_type: "Terrestrial",
    moons: 1,
  },
  mars: {
    name: "Mars",
    description:
      "Mars is dry, rocky, and bitter cold. The fourth planet from the Sun, Mars is one of Earth's two closest planetary neighbors.",
    day: "24.6 hours",
    year: "669.6 sols | 687 Earth days",
    radius: "2,106 miles | 3,390 kilometers",
    planet_type: "Terrestrial",
    moons: 2,
  },
  jupiter: {
    name: "Jupiter",
    description:
      "Jupiter is the largest planet in our solar system with a strong magnetic field and at least 79 moons. Its iconic Great Red Spot is a giant storm larger than Earth.",
    day: "10 hours",
    year: "12 Earth years",
    radius: "43,441 miles | 69,911 kilometers",
    planet_type: "Gas Giant",
    moons: 79,
  },
  saturn: {
    name: "Saturn",
    description:
      "Famous for its beautiful rings, Saturn is a gas giant made mostly of hydrogen and helium. It has numerous moons, including the intriguing Titan.",
    day: "10.7 hours",
    year: "29 Earth years",
    radius: "36,184 miles | 58,232 kilometers",
    planet_type: "Gas Giant",
    moons: 83,
  },
  uranus: {
    name: "Uranus",
    description:
      "Uranus is unique in that it rotates on its side, making its seasons extreme. It's an ice giant with a cold atmosphere and faint rings.",
    day: "17 hours",
    year: "84 Earth years",
    radius: "15,759 miles | 25,362 kilometers",
    planet_type: "Ice Giant",
    moons: 27,
  },
  neptune: {
    name: "Neptune",
    description:
      "Neptune, the eighth and farthest planet from the Sun, is an ice giant with supersonic winds and a dark blue atmosphere.",
    day: "16 hours",
    year: "165 Earth years",
    radius: "15,299 miles | 24,622 kilometers",
    planet_type: "Ice Giant",
    moons: 14,
  },
};

export default planets;
