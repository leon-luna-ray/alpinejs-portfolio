import Alpine from 'alpinejs';
import { getImageUrl, fetchFeaturedProjects } from './sanity';

window.Alpine = Alpine;

const projects = await fetchFeaturedProjects();

function getThumbnailUrl (image) {
  return getImageUrl(image).size(300, 300).url();
}

Alpine.store('projects', {
  projects: projects || [],
  getThumbnailUrl,
});

Alpine.start();