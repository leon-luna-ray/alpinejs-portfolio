import Alpine from "alpinejs";
import { fetchProfile, fetchHobbies } from './sanity';

window.Alpine = Alpine

const profile = await fetchProfile();
const hobbies = await fetchHobbies();

console.log(hobbies)
console.log(profile)

Alpine.store('profile', {
  hobbies: hobbies.hobbies || [],
  profile: profile,
})


Alpine.start();