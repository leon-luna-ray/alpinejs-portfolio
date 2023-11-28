import Alpine from "alpinejs";

import {
  getImageUrl,
  fetchProfile,
  fetchHobbies,
  fetchFeaturedProjects,
} from "./lib/sanity";

window.Alpine = Alpine;

const profile = await fetchProfile();
const hobbies = await fetchHobbies();
const projects = await fetchFeaturedProjects();


function getThumbnailUrl(image) {
  return getImageUrl(image).size(300, 300).url();
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

Alpine.store("profile", {
  hobbies: hobbies.hobbies || [],
  profile: profile,
  image: profile.image ? getThumbnailUrl(profile.image) : "#",
  projects: projects || [],
  getThumbnailUrl,
});

Alpine.start();
