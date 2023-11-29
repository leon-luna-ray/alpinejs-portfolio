import Alpine from "alpinejs";

import {
  getImageUrl,
  fetchProfile,
  fetchHobbies,
  fetchFeaturedProjects,
} from "./sanity";

window.Alpine = Alpine;

const profile = await fetchProfile();
const hobbies = await fetchHobbies();
const projects = await fetchFeaturedProjects();
// const darkmode = new Darkmode();

function getThumbnailUrl(image) {
  return getImageUrl(image).width(600).url();
}

Alpine.store("darkMode", {
  init() {
    this.on = window.matchMedia("(prefers-color-scheme: dark)").matches;
  },

  on: false,

  toggle() {
    this.on = !this.on;
  },
});

Alpine.store("data", {
  hobbies: hobbies.hobbies || [],
  profile: profile,
  image: profile.image ? getThumbnailUrl(profile.image) : "#",
  projects: projects || [],
  getThumbnailUrl,
});

Alpine.start();

console.log(profile)