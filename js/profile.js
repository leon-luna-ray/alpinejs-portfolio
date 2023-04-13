import Alpine from 'alpinejs';
import { getImageUrl, fetchProfile, fetchHobbies, fetchSkills } from './sanity';

window.Alpine = Alpine;

const profile = await fetchProfile();
const hobbies = await fetchHobbies();
// const skills = await fetchSkills();


function getThumbnailUrl (image) {
  return getImageUrl(image).size(300, 300).url();
}

function renderListItems () {
  const list = items.map(item =>{
    return `<li>${item.title}</li>`
  })
  console.log('hello')
  // return list;
}

Alpine.store('profile', {
  hobbies: hobbies.hobbies || [],
  profile: profile,
  image: profile.image ? getThumbnailUrl(profile.image) : '#',
  // skills: skills || [],
  renderListItems,
});

Alpine.start();
