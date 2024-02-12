import Alpine from "alpinejs";
import PineconeRouter from 'pinecone-router';
import { router } from '@/js/router';

import {
  getImageUrl,
  portableTextToHTML,
  fetchHomePage
} from "./sanity";

window.Alpine = Alpine;

const data = await fetchHomePage();

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
  skills: data?.skillsGroups || [],
  profile: data?.profile || {},
  image: data?.profile.image,
  projectsIntro: portableTextToHTML(data?.projects.description) || "",
  projects: data?.projects.projects || [],
  getThumbnailUrl,
});

Alpine.plugin(PineconeRouter)
Alpine.start();
