import users from './users.js';

const getSortedUniqueSkills = users =>
  users
    .reduse()
  // .sort((a, b) => a.skills.length - b.skills.length)

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]