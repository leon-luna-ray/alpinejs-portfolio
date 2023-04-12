import Alpine from 'alpinejs';
import { getImageUrl, fetchFeaturedProjects } from './sanity';

window.Alpine = Alpine;

const projects = await fetchFeaturedProjects();

console.log(projects);

Alpine.store('projects', {
  projects: projects || [],
  getImageUrl,
});

Alpine.start();