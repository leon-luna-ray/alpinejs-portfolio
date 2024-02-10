import Alpine from "alpinejs";
import PineconeRouter from 'pinecone-router';
import { router } from '@/js/router';

import {
  getImageUrl,
  fetchProfile,
  fetchSkills,
  fetchProjectGroup,
  portableTextToHTML,
} from "./sanity";

window.Alpine = Alpine;

const profile = await fetchProfile();
const skills = await fetchSkills();
const projects = await fetchProjectGroup('backend-projects');

function getThumbnailUrl(image) {
  return getImageUrl(image).width(600).url();
}
Alpine.store("router", {
  router() {
    return router();
  }
})
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
  skills: skills || [],
  profile: profile,
  image: profile.image ? getThumbnailUrl(profile.image) : "#",
  projectsIntro: portableTextToHTML(projects.description) || "",
  projects: projects.projects || [],
  getThumbnailUrl,
});

Alpine.plugin(PineconeRouter)
Alpine.start();
