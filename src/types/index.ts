export type PlanetNames =
  | "Mercury"
  | "Venus"
  | "Earth"
  | "Mars"
  | "Jupiter"
  | "Saturn"
  | "Uranus"
  | "Neptune"
  | "None";

export type Planet = {
  name: PlanetNames;
  description: string;
  day: string;
  year: string;
  radius: string;
  planet_type: "Terrestrial" | "Gas Giant" | "Ice Giant";
  moons: number;
  next?: string;
  back?: string;
};

export type Planets = {
  mercury: Planet;
  venus: Planet;
  earth: Planet;
  mars: Planet;
  jupiter: Planet;
  saturn: Planet;
  uranus: Planet;
  neptune: Planet;
};
